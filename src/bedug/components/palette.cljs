(ns bedug.components.palette
  (:require [bedug.state :as s]
            [bedug.components.block :refer [adder-block]]))

(defn palette []
  [:div {:class "bedug-palette"}
   [adder-block :go-forward]
   [adder-block :go-backward]
   [adder-block :rotate-left]
   [adder-block :rotate-right]
   [adder-block :shake]
   [adder-block :turn-blue]
   [adder-block :turn-red]
   [adder-block :turn-green]])
