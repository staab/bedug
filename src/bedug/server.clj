(ns bedug.server
  (:require [org.httpkit.server :as http]
            [environ.core :refer [env]]))

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

(defn handle-websocket [req channel]
  (http/on-close channel (fn [_] (on-message channel {:type :remove-player})))
  (http/on-receive channel (partial on-message channel))
  (http/send! channel (msg :init @state)))

(defn handle-http [{:keys [uri]} channel]
  (http/send! channel
    (case uri
      "/" (slurp "public/index.html")
      "/control" (slurp "public/index.html")
      "/canvas" (slurp "public/index.html")
      "/css/main.css" {:headers {"Content-Type" "text/css"}
                       :body (slurp "public/css/main.css")}
      "/js/main.js" {:headers {"Content-Type" "application/javascript"}
                     :body (slurp "public/js/main.js")}
      {:status 404 :body (format "%s not found" uri)})))

(defn handler [req]
  (http/with-channel req channel
    (if (http/websocket? channel)
      (handle-websocket req channel)
      (handle-http req channel))))

(defn start-timer []
  (future
    (loop []
      (broadcast! :tick nil)
      (Thread/sleep 300)
      (recur))))

(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 5000))]
    (http/run-server handler {:port port})
    (start-timer)))
