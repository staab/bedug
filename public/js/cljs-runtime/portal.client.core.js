goog.provide('portal.client.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('portal.client.app.components.app');
cljs.core.enable_console_print_BANG_();
portal.client.core.start = (function portal$client$core$start(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["start"], 0));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [portal.client.app.components.app.app], null),document.getElementById("app"));
});
portal.client.core.init = (function portal$client$core$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["init"], 0));

return portal.client.core.start();
});
goog.exportSymbol('portal.client.core.init', portal.client.core.init);
portal.client.core.stop = (function portal$client$core$stop(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["stop"], 0));
});

//# sourceMappingURL=portal.client.core.js.map
