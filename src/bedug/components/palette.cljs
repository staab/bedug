(ns bedug.components.palette
  (:require [bedug.components.block :refer [adder-block]]))

(defn palette []
  [:div {:class "bedug-palette"}
   [adder-block :turn-blue]
   [adder-block :turn-red]
   [adder-block :turn-green]
   [adder-block :go-forward]
   [adder-block :go-backward]
   [adder-block :rotate-left]
   [adder-block :rotate-right]
   [adder-block :shake]])
