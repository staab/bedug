(ns bedug.utils)

(defn vec-remove
  "remove elem in coll"
  [coll pos]
  (vec (concat (subvec coll 0 pos) (subvec coll (inc pos)))))

(defn map-v [f m]
  (into {} (map (fn [[k v]] [k (f v)]) m)))

