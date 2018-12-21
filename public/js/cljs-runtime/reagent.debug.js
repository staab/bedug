goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__19920__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__19920 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19924__i = 0, G__19924__a = new Array(arguments.length -  0);
while (G__19924__i < G__19924__a.length) {G__19924__a[G__19924__i] = arguments[G__19924__i + 0]; ++G__19924__i;}
  args = new cljs.core.IndexedSeq(G__19924__a,0,null);
} 
return G__19920__delegate.call(this,args);};
G__19920.cljs$lang$maxFixedArity = 0;
G__19920.cljs$lang$applyTo = (function (arglist__19925){
var args = cljs.core.seq(arglist__19925);
return G__19920__delegate(args);
});
G__19920.cljs$core$IFn$_invoke$arity$variadic = G__19920__delegate;
return G__19920;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__19927__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__19927 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19928__i = 0, G__19928__a = new Array(arguments.length -  0);
while (G__19928__i < G__19928__a.length) {G__19928__a[G__19928__i] = arguments[G__19928__i + 0]; ++G__19928__i;}
  args = new cljs.core.IndexedSeq(G__19928__a,0,null);
} 
return G__19927__delegate.call(this,args);};
G__19927.cljs$lang$maxFixedArity = 0;
G__19927.cljs$lang$applyTo = (function (arglist__19929){
var args = cljs.core.seq(arglist__19929);
return G__19927__delegate(args);
});
G__19927.cljs$core$IFn$_invoke$arity$variadic = G__19927__delegate;
return G__19927;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
