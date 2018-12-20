(ns bedug.components.control
  (:require [bedug.state :refer [path]]))

(defn control []
  [:div {:class "bedug-control"}
   [:div
    [:a {:class "fa fa-2x fa-info-circle"
         :href "https://github.com/staab/bedug"
         :target "_blank"}]]
   (when (= path "/")
     [:div
       [:br]
       [:i {:class "fa fa-2x fa-columns"
            :on-click
            (fn [e]
              (.open js/window "/control" "controls" "height=400,width=200")
              (aset (.-location js/window) "href" "/canvas"))}]])
   [:br]
   [:div
    [:i {:class "fa fa-2x fa-expand"
         :on-click #(-> js/document .-documentElement .requestFullscreen)}]]])

