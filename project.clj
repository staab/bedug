(defproject bedug "1.0.0-SNAPSHOT"
  :description "A programming game for kids"
  :url "http://bedug.herokuapp.com"
  :license {:name "MIT"}
  :dependencies [[http-kit "2.3.0"]
                 [environ "1.0.0"]]
  :min-lein-version "2.0.0"
  :plugins [[environ/environ.lein "0.3.1"]]
  :hooks [environ.leiningen.hooks]
  :uberjar-name "bedug-1.0.0-SNAPSHOT.jar"
  :profiles {:production {:env {:production true}}})
