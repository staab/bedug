(ns bedug.components.canvas
  (:require [clojure.string :as str]
            [bedug.state :as s]))

(defmulti command->transform (fn [command _] command))

(defmethod command->transform :go-forward [_] "translate(0, -30px)")
(defmethod command->transform :go-backward [_] "translate(0, 30px)")
(defmethod command->transform :rotate-left [_] "rotate(-45deg)")
(defmethod command->transform :rotate-right [_] "rotate(45deg)")

(defn commands->transform [commands]
  (str/join " " (map command->transform commands)))

(defn canvas []
  (let [style {:transform (commands->transform (take @s/step @s/queue))}]
    [:div {:class "bedug-canvas"}
     [:i {:class "bedug-bug fa fa-3x fa-bug" :style style}]]))
