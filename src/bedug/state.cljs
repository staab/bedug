(ns bedug.state
  (:require [reagent.core :as r]
            [cljs.reader :refer [read-string]]
            [bedug.utils :refer [map-v]]))

(declare ws)

(def path (-> js/window .-location .-pathname))

;; State atoms

(defonce player-id (r/atom nil))

(defonce full-state (r/atom {:players {}}))

(defonce player-state (r/atom {:queue [] :step 0}))

;; Outgoing messages

(defn send! [type payload]
  (.send ws (pr-str {:type type :payload payload})))

(defn update-player! [& args]
  (apply swap! player-state args)
  (swap! full-state assoc-in [:players @player-id] @player-state)
  (send! :update-player {:player-id @player-id :player-state @player-state}))

;; Incoming messages

(defmulti handle-message :type)

(defmethod handle-message :init [{:keys [payload]}]
  (when-not (get-in payload [:players @player-id])
    (reset! player-id (str (rand-int 99999)))
    (reset! full-state payload)
    (update-player! assoc :path path)))

(defmethod handle-message :update-player [{:keys [payload]}]
  (let [{id :player-id state :player-state} payload]
    (when (not= id @player-id)
      (swap! full-state assoc-in [:players id] state))))

(defmethod handle-message :remove-player [{:keys [payload]}]
  (let [{id :player-id} payload]
    (swap! full-state update :players dissoc id)))

(defmethod handle-message :tick [_]
  (let [swapper
        (fn [players]
          (map-v
            (fn [{:keys [queue step] :as player}]
              (assoc player :step (if (>= step (count queue)) 0 (inc step))))
            players))]
    (swap! full-state update :players swapper))
  (swap! player-state assoc :step (get-in @full-state [:players @player-id :step])))

(defn on-message [evt]
  (prn "Handling message" (.-data evt))
  (handle-message (cljs.reader/read-string (.-data evt))))

;; Websocket instantiation

;; (def ws (js/WebSocket. "ws://192.168.0.4:8080"))
(def ws (js/WebSocket. "wss://bedug.herokuapp.com"))

(.addEventListener ws "message" on-message)
