(ns bedug.components.control)

(defn control []
  [:div {:class "bedug-control"}
   [:i {:class "fa fa-2x fa-expand"
        :on-click #(-> js/document .-documentElement .requestFullscreen)}]])

