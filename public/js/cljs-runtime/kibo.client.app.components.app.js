goog.provide('kibo.client.app.components.app');
goog.require('cljs.core');
goog.require('kibo.client.app.state');
goog.require('reagent.core');
kibo.client.app.components.app.button = (function kibo$client$app$components$app$button(n){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.inc);
})], null),"push ",cljs.core.deref(n)], null);
});
kibo.client.app.components.app.app = (function kibo$client$app$components$app$app(){
return (function (){
var times = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kibo.client.app.components.app.button,times], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kibo.client.app.components.app.button,kibo.client.app.state.click_count], null)], null);
});
});

//# sourceMappingURL=kibo.client.app.components.app.js.map
