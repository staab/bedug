(ns bedug.server
  (:require [org.httpkit.server :as http]))

(def state (atom {:players {}}))

(def channels (atom {}))

(defn msg [type payload]
  (pr-str {:type type :payload payload}))

(defn broadcast! [type payload]
  (run! #(http/send! % (msg type payload)) (keys @channels)))

(defmulti handle-message (fn [channel {:keys [type]}] type))

(defmethod handle-message :update-player [channel {:keys [payload]}]
  (let [{:keys [player-id player-state]} payload]
    (swap! channels assoc channel {:player-id player-id})
    (swap! state update :players assoc player-id player-state)
    (broadcast! :update-player payload)))

(defmethod handle-message :remove-player [channel _]
  (let [{:keys [player-id]} (get @channels channel)]
    (swap! channels dissoc channel)
    (swap! state update :players dissoc player-id)
    (broadcast! :remove-player {:player-id player-id})))

(defn on-message [channel data]
  (prn "Handling message" data)
  (handle-message channel (if (string? data) (read-string data) data)))

(defn handler [req]
  (http/with-channel req channel
    (http/on-close channel (fn [_] (on-message channel {:type :remove-player})))
    (http/on-receive channel (partial on-message channel))
    (http/send! channel (msg :init @state))))

(defn start-timer []
  (future
    (loop []
      (broadcast! :tick nil)
      (Thread/sleep 300)
      (recur))))

(defn -main []
  (http/run-server handler {:port 8080})
  (start-timer))
