goog.provide('bedug.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('bedug.components.app');
cljs.core.enable_console_print_BANG_();
bedug.core.start = (function bedug$core$start(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["start"], 0));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bedug.components.app.app], null),document.getElementById("app"));
});
bedug.core.init = (function bedug$core$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["init"], 0));

return bedug.core.start();
});
goog.exportSymbol('bedug.core.init', bedug.core.init);
bedug.core.stop = (function bedug$core$stop(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["stop"], 0));
});

//# sourceMappingURL=kibo.core.js.map
