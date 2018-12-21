goog.provide('bedug.utils');
goog.require('cljs.core');
/**
 * remove elem in coll
 */
bedug.utils.vec_remove = (function bedug$utils$vec_remove(coll,pos){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),pos),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,(pos + (1)))));
});
bedug.utils.map_v = (function bedug$utils$map_v(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12329){
var vec__12330 = p__12329;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12330,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12330,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
}),m));
});

//# sourceMappingURL=bedug.utils.js.map
