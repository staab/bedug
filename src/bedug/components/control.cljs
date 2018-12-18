(ns bedug.components.control
  (:require [bedug.state :refer [player-state animation-state]]))

(defn done? []
  (>= (:step @animation-state) (count (:queue @player-state))))

(defn tick []
  (if (done?)
    (swap! animation-state assoc :animate :done)
    (swap! animation-state update :step inc)))

(defn toggle-animate []
  (swap! animation-state assoc :step 0)
  (if (= (:animate @animation-state) :play)
    (swap! animation-state assoc :animate :pause)
    (swap! animation-state assoc :animate :play)))

(defn control []
  (let [playing (= (:animate @animation-state) :play)
        p-button (if playing "fa fa-2x fa-pause" "fa fa-2x fa-play")]
    (when playing
      (js/setTimeout tick 300))
    [:div {:class "bedug-control"}
     [:i {:class p-button :on-click toggle-animate}]
     [:br]
     [:br]
     [:i {:class "fa fa-2x fa-expand" :on-click #(-> js/document .-documentElement .requestFullscreen)}]]))

