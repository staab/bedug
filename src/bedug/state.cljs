(ns bedug.state
  (:require [reagent.core :as r]))

(defonce queue (r/atom []))
(defonce step (r/atom 0))
(defonce animate (r/atom :initialize))
