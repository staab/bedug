(ns bedug.components.control
  (:require [bedug.state :refer [state]]))

(defn done? []
  (>= (:step @state) (count (:queue @state))))

(defn tick []
  (if (done?)
    (swap! state assoc :animate :done)
    (swap! state update :step inc)))

(defn toggle-animate []
  (swap! state assoc :step 0)
  (if (= (:animate @state) :play)
    (swap! state assoc :animate :pause)
    (swap! state assoc :animate :play)))

(defn control []
  (let [playing (= (:animate @state) :play)
        p-button (if playing "fa fa-2x fa-pause" "fa fa-2x fa-play")]
    (when playing
      (js/setTimeout tick 300))
    [:div {:class "bedug-control"}
     [:i {:class p-button :on-click toggle-animate}]
     [:br]
     [:br]
     [:i {:class "fa fa-2x fa-expand" :on-click #(-> js/document .-documentElement .requestFullscreen)}]]))

