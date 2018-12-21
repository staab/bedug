goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__18315){
var vec__18316 = p__18315;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18316,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18316,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__18338 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18338,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18338,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18338,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__18367 = arguments.length;
switch (G__18367) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4037__auto__ = cljs.core.count(a);
var y__4038__auto__ = cljs.core.count(b);
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4243__auto__ = (((x == null))?null:x);
var m__4244__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto__.call(null,x));
} else {
var m__4244__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4243__auto__ = (((a == null))?null:a);
var m__4244__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto__.call(null,a,b));
} else {
var m__4244__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__18401_18447 = clojure.data.equality_partition;
var G__18402_18448 = "null";
var G__18403_18449 = ((function (G__18401_18447,G__18402_18448){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__18401_18447,G__18402_18448))
;
goog.object.set(G__18401_18447,G__18402_18448,G__18403_18449);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__18404_18451 = clojure.data.equality_partition;
var G__18405_18452 = "string";
var G__18406_18453 = ((function (G__18404_18451,G__18405_18452){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__18404_18451,G__18405_18452))
;
goog.object.set(G__18404_18451,G__18405_18452,G__18406_18453);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__18410_18456 = clojure.data.equality_partition;
var G__18411_18457 = "number";
var G__18412_18458 = ((function (G__18410_18456,G__18411_18457){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__18410_18456,G__18411_18457))
;
goog.object.set(G__18410_18456,G__18411_18457,G__18412_18458);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__18413_18462 = clojure.data.equality_partition;
var G__18414_18463 = "array";
var G__18415_18464 = ((function (G__18413_18462,G__18414_18463){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__18413_18462,G__18414_18463))
;
goog.object.set(G__18413_18462,G__18414_18463,G__18415_18464);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__18422_18465 = clojure.data.equality_partition;
var G__18423_18466 = "function";
var G__18424_18467 = ((function (G__18422_18465,G__18423_18466){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__18422_18465,G__18423_18466))
;
goog.object.set(G__18422_18465,G__18423_18466,G__18424_18467);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__18425_18471 = clojure.data.equality_partition;
var G__18426_18472 = "boolean";
var G__18427_18473 = ((function (G__18425_18471,G__18426_18472){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__18425_18471,G__18426_18472))
;
goog.object.set(G__18425_18471,G__18426_18472,G__18427_18473);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__18428_18476 = clojure.data.equality_partition;
var G__18429_18477 = "_";
var G__18430_18478 = ((function (G__18428_18476,G__18429_18477){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__18428_18476,G__18429_18477))
;
goog.object.set(G__18428_18476,G__18429_18477,G__18430_18478);
goog.object.set(clojure.data.Diff,"null",true);

var G__18484_18529 = clojure.data.diff_similar;
var G__18485_18530 = "null";
var G__18486_18531 = ((function (G__18484_18529,G__18485_18530){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18484_18529,G__18485_18530))
;
goog.object.set(G__18484_18529,G__18485_18530,G__18486_18531);

goog.object.set(clojure.data.Diff,"string",true);

var G__18494_18567 = clojure.data.diff_similar;
var G__18495_18568 = "string";
var G__18496_18569 = ((function (G__18494_18567,G__18495_18568){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18494_18567,G__18495_18568))
;
goog.object.set(G__18494_18567,G__18495_18568,G__18496_18569);

goog.object.set(clojure.data.Diff,"number",true);

var G__18503_18577 = clojure.data.diff_similar;
var G__18504_18578 = "number";
var G__18505_18579 = ((function (G__18503_18577,G__18504_18578){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18503_18577,G__18504_18578))
;
goog.object.set(G__18503_18577,G__18504_18578,G__18505_18579);

goog.object.set(clojure.data.Diff,"array",true);

var G__18506_18584 = clojure.data.diff_similar;
var G__18507_18585 = "array";
var G__18508_18586 = ((function (G__18506_18584,G__18507_18585){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__18506_18584,G__18507_18585))
;
goog.object.set(G__18506_18584,G__18507_18585,G__18508_18586);

goog.object.set(clojure.data.Diff,"function",true);

var G__18510_18593 = clojure.data.diff_similar;
var G__18511_18594 = "function";
var G__18512_18595 = ((function (G__18510_18593,G__18511_18594){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18510_18593,G__18511_18594))
;
goog.object.set(G__18510_18593,G__18511_18594,G__18512_18595);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__18513_18607 = clojure.data.diff_similar;
var G__18514_18608 = "boolean";
var G__18515_18609 = ((function (G__18513_18607,G__18514_18608){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18513_18607,G__18514_18608))
;
goog.object.set(G__18513_18607,G__18514_18608,G__18515_18609);

goog.object.set(clojure.data.Diff,"_",true);

var G__18523_18616 = clojure.data.diff_similar;
var G__18524_18617 = "_";
var G__18525_18618 = ((function (G__18523_18616,G__18524_18617){
return (function (a,b){
var fexpr__18527 = (function (){var G__18528 = clojure.data.equality_partition(a);
var G__18528__$1 = (((G__18528 instanceof cljs.core.Keyword))?G__18528.fqn:null);
switch (G__18528__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18528__$1)].join('')));

}
})();
return (fexpr__18527.cljs$core$IFn$_invoke$arity$2 ? fexpr__18527.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__18527.call(null,a,b));
});})(G__18523_18616,G__18524_18617))
;
goog.object.set(G__18523_18616,G__18524_18617,G__18525_18618);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
