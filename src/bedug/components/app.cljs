(ns bedug.components.app
  (:require [bedug.components.canvas :refer [canvas]]
            [bedug.components.queue :refer [queue]]
            [bedug.components.palette :refer [palette]]
            [bedug.components.control :refer [control]]))

(defn app []
  (let [path (-> js/window .-location .-pathname)]
    (case path
      "/control" [:div {:class "bedug-control-app"} [queue] [palette]]
      "/canvas" [:div {:class "bedug-canvas-app"} [canvas] [control]]
      [:div {:class "bedug-app"} [canvas] [queue] [palette] [control]])))
