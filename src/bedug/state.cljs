(ns bedug.state
  (:require [reagent.core :as r]
            [cljs.reader :refer [read-string]]))

(defonce state (r/atom {:queue [] :step 0 :animate :initialize}))

(def stale? (atom false))

(def url "http://192.168.0.4:8080")

(defn tell-server []
  (js/fetch url #js {:method "PUT" :body (pr-str @state)}))

(defn ask-server []
  (->
    (js/fetch url)
    (.then #(.text %))
    (.then #(when-not @stale? (reset! state (read-string %))))))

(defn communicate []
  (->
    (if @stale? (tell-server) (ask-server))
    (.then #(reset! stale? false))
    (.then #(js/setTimeout communicate 300))))

(add-watch state :queue #(reset! stale? true))

(communicate)
