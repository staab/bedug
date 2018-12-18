(ns bedug.state
  (:require [reagent.core :as r]
            [cljs.reader :refer [read-string]]))

(declare ws)

;; State atoms

(def player-id (r/atom nil))

(def full-state (r/atom {:players {}}))

(def animation-state (r/atom {:step 0 :animate :initialize}))

(def player-state (r/atom {:queue []}))

;; Outgoing messages

(defn send! [type payload]
  (.send ws (pr-str {:type type :payload payload})))

(defn update-player! []
  (swap! full-state assoc-in [:players @player-id] @player-state)
  (send! :update-player {:player-id @player-id :player-state @player-state}))

;; Incoming messages

(defmulti handle-message :type)

(defmethod handle-message :init [{:keys [payload]}]
  (reset! player-id (str (rand-int 99999)))
  (reset! full-state payload)
  (update-player!))

(defmethod handle-message :update-player [{:keys [payload]}]
  (let [{id :player-id state :player-state} payload]
    (when (not= id @player-id)
      (swap! full-state assoc-in [:players id] state))))

(defmethod handle-message :remove-player [{:keys [payload]}]
  (let [{id :player-id} payload]
    (swap! full-state update :players dissoc id)))

(defn on-message [evt]
  (prn "Handling message" (.-data evt))
  (handle-message (cljs.reader/read-string (.-data evt))))

;; Websocket instantiation

(def ws (js/WebSocket. "ws://192.168.0.4:8080"))

(.addEventListener ws "message" on-message)

;; Watches

(add-watch player-state :queue update-player!)
