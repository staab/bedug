(ns bedug.components.canvas
  (:require [clojure.string :as str]
            [bedug.state :refer [full-state]]))

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

(defmethod command->attrs :shake [_ attrs] attrs)
(defmethod command->attrs :turn-blue [_ attrs] (merge attrs {:c "text-blue"}))
(defmethod command->attrs :turn-red [_ attrs] (merge attrs {:c "text-red"}))
(defmethod command->attrs :turn-green [_ attrs] (merge attrs {:c "text-green"}))

(defn commands->attrs [commands]
  (loop [idx 0 attrs {:r 0 :x 0 :y 0 :c ""}]
    (let [c (nth commands idx nil)]
      (if c (recur (inc idx) (command->attrs c attrs)) attrs))))

(defn attrs->transform [{:keys [x y r]}]
  (str "translate(" x "px, " y "px) rotate(" r "deg)"))

(defn bug-class [{:keys [c]} shake]
  (let [base (str "bedug-bug fa fa-3x fa-bug " c)]
    (if shake (str base " shake") base)))

(defn canvas []
  [:div {:class "bedug-canvas"}
    (doall
      (for [[player-id {:keys [queue step path]}] (:players @full-state)
            :when (not= path :canvas)]
        (let [commands (take step queue)
              attrs (commands->attrs commands)
              transform (attrs->transform attrs)
              class (bug-class attrs (= (last commands) :shake))
              style {:transform transform}]
           [:i {:class class :key player-id :style style}])))])
