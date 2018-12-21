goog.provide('bedug.components.queue');
goog.require('cljs.core');
goog.require('bedug.utils');
goog.require('bedug.state');
goog.require('bedug.components.block');
bedug.components.queue.queue = (function bedug$components$queue$queue(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bedug-queue"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,command){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bedug.components.block.block,command,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bedug.state.update_player_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update,new cljs.core.Keyword(null,"queue","queue",1455835879),bedug.utils.vec_remove,idx], 0));
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(command),cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null));
}),new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bedug.state.player_state))))], null);
});

//# sourceMappingURL=bedug.components.queue.js.map
