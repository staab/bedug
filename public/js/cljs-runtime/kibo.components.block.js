goog.provide('bedug.components.block');
goog.require('cljs.core');
goog.require('bedug.state');
if((typeof bedug !== 'undefined') && (typeof bedug.components !== 'undefined') && (typeof bedug.components.block !== 'undefined') && (typeof bedug.components.block.block_class !== 'undefined')){
} else {
bedug.components.block.block_class = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bedug.components.block","block-class"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
bedug.components.block.block_class.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"go-forward","go-forward",666578902),(function (_){
return "bedug-block bedug-block-blue";
}));
bedug.components.block.block_class.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"go-backward","go-backward",635488080),(function (_){
return "bedug-block bedug-block-blue";
}));
bedug.components.block.block_class.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rotate-left","rotate-left",1566345310),(function (_){
return "bedug-block bedug-block-blue";
}));
bedug.components.block.block_class.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rotate-right","rotate-right",1632589253),(function (_){
return "bedug-block bedug-block-blue";
}));
if((typeof bedug !== 'undefined') && (typeof bedug.components !== 'undefined') && (typeof bedug.components.block !== 'undefined') && (typeof bedug.components.block.icon_class !== 'undefined')){
} else {
bedug.components.block.icon_class = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bedug.components.block","icon-class"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
bedug.components.block.icon_class.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"go-forward","go-forward",666578902),(function (_){
return "fa fa-2x fa-angle-double-up";
}));
bedug.components.block.icon_class.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"go-backward","go-backward",635488080),(function (_){
return "fa fa-2x fa-angle-double-down";
}));
bedug.components.block.icon_class.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rotate-left","rotate-left",1566345310),(function (_){
return "fa fa-2x fa-undo";
}));
bedug.components.block.icon_class.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rotate-right","rotate-right",1632589253),(function (_){
return "fa fa-2x fa-redo";
}));
bedug.components.block.block = (function bedug$components$block$block(command,props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(bedug.components.block.block_class.cljs$core$IFn$_invoke$arity$1 ? bedug.components.block.block_class.cljs$core$IFn$_invoke$arity$1(command) : bedug.components.block.block_class.call(null,command))], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(bedug.components.block.icon_class.cljs$core$IFn$_invoke$arity$1 ? bedug.components.block.icon_class.cljs$core$IFn$_invoke$arity$1(command) : bedug.components.block.icon_class.call(null,command))], null)], null)], null);
});
bedug.components.block.adder_block = (function bedug$components$block$adder_block(command){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bedug.components.block.block,command,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(bedug.state.queue,cljs.core.conj,command);
})], null)], null);
});

//# sourceMappingURL=kibo.components.block.js.map
