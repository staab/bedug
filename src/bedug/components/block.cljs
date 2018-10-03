(ns bedug.components.block
  (:require [bedug.state :as s]))

(defmulti block-class identity)
(defmethod block-class :go-forward [_] "bedug-block bedug-block-blue")
(defmethod block-class :go-backward [_] "bedug-block bedug-block-blue")
(defmethod block-class :rotate-left [_] "bedug-block bedug-block-blue")
(defmethod block-class :rotate-right [_] "bedug-block bedug-block-blue")

(defmulti icon-class identity)
(defmethod icon-class :go-forward [_] "fa fa-2x fa-angle-double-up")
(defmethod icon-class :go-backward [_] "fa fa-2x fa-angle-double-down")
(defmethod icon-class :rotate-left [_] "fa fa-2x fa-undo")
(defmethod icon-class :rotate-right [_] "fa fa-2x fa-redo")

(defn block [command props]
  [:div (merge props {:class (block-class command)})
   [:i {:class (icon-class command)}]])

(defn adder-block [command]
  [block command {:on-click #(swap! s/queue conj command)}])

