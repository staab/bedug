(ns bedug.components.queue
  (:require [bedug.utils :refer [vec-remove]]
            [bedug.state :refer [player-state]]
            [bedug.components.block :refer [block]]))

(defn queue []
  [:div {:class "bedug-queue"}
   (doall
     (map-indexed
       (fn [idx command]
         ^{:key (str command idx)}
         [block
          command
          {:on-click #(swap! player-state update :queue vec-remove idx)}])
       (:queue @player-state)))])
