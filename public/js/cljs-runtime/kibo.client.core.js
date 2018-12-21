goog.provide('kibo.client.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('kibo.client.app.components.app');
cljs.core.enable_console_print_BANG_();
kibo.client.core.start = (function kibo$client$core$start(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["start"], 0));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kibo.client.app.components.app.app], null),document.getElementById("app"));
});
kibo.client.core.init = (function kibo$client$core$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["init"], 0));

return kibo.client.core.start();
});
goog.exportSymbol('kibo.client.core.init', kibo.client.core.init);
kibo.client.core.stop = (function kibo$client$core$stop(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["stop"], 0));
});

//# sourceMappingURL=kibo.client.core.js.map
