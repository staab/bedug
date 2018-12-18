(ns bedug.components.block
  (:require [bedug.state :refer [player-state]]))

(defmulti block-class identity)
(defmethod block-class :go-forward [_] "bedug-block bedug-block-blue")
(defmethod block-class :go-backward [_] "bedug-block bedug-block-blue")
(defmethod block-class :rotate-left [_] "bedug-block bedug-block-blue")
(defmethod block-class :rotate-right [_] "bedug-block bedug-block-blue")
(defmethod block-class :shake [_] "bedug-block bedug-block-orange")
(defmethod block-class :turn-blue [_] "bedug-block bedug-block-orange")
(defmethod block-class :turn-red [_] "bedug-block bedug-block-orange")
(defmethod block-class :turn-green [_] "bedug-block bedug-block-orange")

(defmulti icon-class identity)
(defmethod icon-class :go-forward [_] "fa fa-2x fa-angle-double-up")
(defmethod icon-class :go-backward [_] "fa fa-2x fa-angle-double-down")
(defmethod icon-class :rotate-left [_] "fa fa-2x fa-undo")
(defmethod icon-class :rotate-right [_] "fa fa-2x fa-redo")
(defmethod icon-class :shake [_] "fa fa-2x fa-atom")
(defmethod icon-class :turn-blue [_] "fa fa-2x fa-fill-drip text-blue")
(defmethod icon-class :turn-red [_] "fa fa-2x fa-fill-drip text-red")
(defmethod icon-class :turn-green [_] "fa fa-2x fa-fill-drip text-green")

(defn block [command props]
  [:div (merge props {:class (block-class command)})
   [:i {:class (icon-class command)}]])

(defn adder-block [command]
  [block command {:on-click #(swap! player-state update :queue conj command)}])

