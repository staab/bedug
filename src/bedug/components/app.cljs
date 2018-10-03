(ns bedug.components.app
  (:require [bedug.components.canvas :refer [canvas]]
            [bedug.components.queue :refer [queue]]
            [bedug.components.palette :refer [palette]]
            [bedug.components.control :refer [control]]))

(defn app []
  [:div {:class "bedug-app"}
   [canvas]
   [queue]
   [palette]
   [control]])
