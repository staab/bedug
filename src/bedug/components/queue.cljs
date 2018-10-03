(ns bedug.components.queue
  (:require [bedug.utils :refer [vec-remove]]
            [bedug.state :as s]
            [bedug.components.block :refer [block]]))

(defn queue []
  [:div {:class "bedug-queue"}
   (doall
     (map-indexed
       (fn [idx command]
         [block
          command
          {:key (str command idx)
           :on-click #(swap! s/queue vec-remove idx)}])
       @s/queue))])
