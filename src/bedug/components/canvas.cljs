(ns bedug.components.canvas
  (:require [clojure.string :as str]
            [bedug.state :as s]))

(defmulti command->attrs (fn [command _] command))

(defmethod command->attrs :go-forward
  [_ attrs]
  (let [{:keys [x y r]} attrs
        deg (mod r 360)]
    (cond
      (= deg 0) (update attrs :y - 30)
      (= deg 90) (update attrs :x + 30)
      (= deg 180) (update attrs :y + 30)
      (= deg 270) (update attrs :x - 30)
      :else attrs)))

(defmethod command->attrs :go-backward
  [_ attrs]
  (let [{:keys [x y r]} attrs
        deg (mod r 360)]
    (cond
      (= deg 0) (update attrs :y + 30)
      (= deg 90) (update attrs :x - 30)
      (= deg 180) (update attrs :y - 30)
      (= deg 270) (update attrs :x + 30)
      :else attrs)))

(defmethod command->attrs :rotate-left [_ attrs] (update attrs :r - 90))
(defmethod command->attrs :rotate-right [_ attrs] (update attrs :r + 90))

(defn commands->transform [commands]
  (loop [idx 0 attrs {:r 0 :x 0 :y 0}]
    (let [c (nth commands idx nil)
          {:keys [r x y]} attrs]
      (if c
        (recur (inc idx) (command->attrs c attrs))
        (str "translate(" x "px, " y "px) rotate(" r "deg)")))))

(defn canvas []
  (let [style {:transform (commands->transform (take @s/step @s/queue))}]
    [:div {:class "bedug-canvas"}
     [:i {:class "bedug-bug fa fa-3x fa-bug" :style style}]]))
