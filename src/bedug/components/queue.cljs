(ns bedug.components.queue
  (:require [bedug.utils :refer [vec-remove]]
            [bedug.state :refer [state]]
            [bedug.components.block :refer [block]]))

(defn queue []
  [:div {:class "bedug-queue"}
   (doall
     (map-indexed
       (fn [idx command]
         ^{:key (str command idx)}
         [block
          command
          {:on-click #(swap! state update :queue vec-remove idx)}])
       (:queue @state)))])
