(ns bedug.core
  (:require [reagent.core :as r]
            [bedug.components.app :refer [app]]))

(enable-console-print!)

;; start is called by init and after code reloading finishes
(defn ^:dev/after-load start []
  (println "start")
  (r/render [app] (.getElementById js/document "app")))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (println "init")
  (start))

;; this is called before any code is reloaded
(defn ^:dev/before-load stop []
  (println "stop"))
