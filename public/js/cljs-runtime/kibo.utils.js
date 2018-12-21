goog.provide('bedug.utils');
goog.require('cljs.core');
/**
 * remove elem in coll
 */
bedug.utils.vec_remove = (function bedug$utils$vec_remove(coll,pos){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),pos),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,(pos + (1)))));
});

//# sourceMappingURL=kibo.utils.js.map
