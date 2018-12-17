(ns bedug.server
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [ring.util.request :refer [body-string]]))

(def state (atom "{:queue [] :step 0 :animate :initialize}"))

(defn handler [{:keys [request-method body] :as req}]
  (when (= request-method :put)
    (reset! state (body-string req)))
  {:status 200
   :headers {"Content-Type" "text/plain"
             "Access-Control-Allow-Origin" "*"
             "Access-Control-Allow-Methods" "OPTIONS, GET, PUT"}
   :body @state})

(defn -main []
  (run-jetty handler {:port 8080}))
