goog.provide('bedug.components.canvas');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('bedug.state');
if((typeof bedug !== 'undefined') && (typeof bedug.components !== 'undefined') && (typeof bedug.components.canvas !== 'undefined') && (typeof bedug.components.canvas.command__GT_transform !== 'undefined')){
} else {
bedug.components.canvas.command__GT_transform = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bedug.components.canvas","command->transform"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (command,_){
return command;
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
bedug.components.canvas.command__GT_transform.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"go-forward","go-forward",666578902),(function (_){
return "translate(0, -30px)";
}));
bedug.components.canvas.command__GT_transform.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"go-backward","go-backward",635488080),(function (_){
return "translate(0, 30px)";
}));
bedug.components.canvas.command__GT_transform.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rotate-left","rotate-left",1566345310),(function (_){
return "rotate(-45deg)";
}));
bedug.components.canvas.command__GT_transform.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rotate-right","rotate-right",1632589253),(function (_){
return "rotate(45deg)";
}));
bedug.components.canvas.commands__GT_transform = (function bedug$components$canvas$commands__GT_transform(commands){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(bedug.components.canvas.command__GT_transform,commands));
});
bedug.components.canvas.canvas = (function bedug$components$canvas$canvas(){
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),bedug.components.canvas.commands__GT_transform(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bedug.state.step),cljs.core.deref(bedug.state.queue)))], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bedug-canvas"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"bedug-bug fa fa-3x fa-bug",new cljs.core.Keyword(null,"style","style",-496642736),style], null)], null)], null);
});

//# sourceMappingURL=kibo.components.canvas.js.map
