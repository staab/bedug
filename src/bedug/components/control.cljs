(ns bedug.components.control
  (:require [bedug.state :as s]))

(defn done? [] (>= @s/step (count @s/queue)))

(defn tick []
  (if
    (done?)
    (reset! s/animate :done)
    (swap! s/step inc)))

(defn toggle-animate []
  (when
    (done?)
    (reset! s/step 0))
  (if
    (= @s/animate :play)
    (reset! s/animate :pause)
    (reset! s/animate :play)))

(defn control []
  (let [p-button (if (= @s/animate :play) "fa fa-2x fa-pause" "fa fa-2x fa-play")]
    (when (= @s/animate :play) (js/setTimeout tick 300))
    ; Gotta deref step to trigger re-render
    (deref s/step)
    [:div {:class "bedug-control"}
     [:i {:class p-button :on-click toggle-animate}]]))

