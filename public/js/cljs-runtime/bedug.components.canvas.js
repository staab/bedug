goog.provide('bedug.components.canvas');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('bedug.state');
if((typeof bedug !== 'undefined') && (typeof bedug.components !== 'undefined') && (typeof bedug.components.canvas !== 'undefined') && (typeof bedug.components.canvas.command__GT_attrs !== 'undefined')){
} else {
bedug.components.canvas.command__GT_attrs = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bedug.components.canvas","command->attrs"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (command,_){
return command;
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
bedug.components.canvas.command__GT_attrs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"go-forward","go-forward",666578902),(function (_,attrs){
var map__10953 = attrs;
var map__10953__$1 = ((((!((map__10953 == null)))?(((((map__10953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10953):map__10953);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10953__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10953__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10953__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var deg = cljs.core.mod(r,(360));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deg,(0))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(attrs,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,(30));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deg,(90))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(attrs,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,(30));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deg,(180))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(attrs,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,(30));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deg,(270))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(attrs,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._,(30));
} else {
return attrs;

}
}
}
}
}));
bedug.components.canvas.command__GT_attrs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"go-backward","go-backward",635488080),(function (_,attrs){
var map__10955 = attrs;
var map__10955__$1 = ((((!((map__10955 == null)))?(((((map__10955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10955):map__10955);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10955__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10955__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10955__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var deg = cljs.core.mod(r,(360));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deg,(0))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(attrs,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,(30));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deg,(90))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(attrs,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._,(30));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deg,(180))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(attrs,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,(30));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deg,(270))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(attrs,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,(30));
} else {
return attrs;

}
}
}
}
}));
bedug.components.canvas.command__GT_attrs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rotate-left","rotate-left",1566345310),(function (_,attrs){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(attrs,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core._,(90));
}));
bedug.components.canvas.command__GT_attrs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rotate-right","rotate-right",1632589253),(function (_,attrs){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(attrs,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core._PLUS_,(90));
}));
bedug.components.canvas.command__GT_attrs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"shake","shake",1292044195),(function (_,attrs){
return attrs;
}));
bedug.components.canvas.command__GT_attrs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"turn-blue","turn-blue",-1281000077),(function (_,attrs){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"c","c",-1763192079),"text-blue"], null)], 0));
}));
bedug.components.canvas.command__GT_attrs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"turn-red","turn-red",68429672),(function (_,attrs){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"c","c",-1763192079),"text-red"], null)], 0));
}));
bedug.components.canvas.command__GT_attrs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"turn-green","turn-green",879269205),(function (_,attrs){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"c","c",-1763192079),"text-green"], null)], 0));
}));
bedug.components.canvas.commands__GT_attrs = (function bedug$components$canvas$commands__GT_attrs(commands){
var idx = (0);
var attrs = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),(0),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"c","c",-1763192079),""], null);
while(true){
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(commands,idx,null);
if(cljs.core.truth_(c)){
var G__10957 = (idx + (1));
var G__10958 = (bedug.components.canvas.command__GT_attrs.cljs$core$IFn$_invoke$arity$2 ? bedug.components.canvas.command__GT_attrs.cljs$core$IFn$_invoke$arity$2(c,attrs) : bedug.components.canvas.command__GT_attrs.call(null,c,attrs));
idx = G__10957;
attrs = G__10958;
continue;
} else {
return attrs;
}
break;
}
});
bedug.components.canvas.attrs__GT_transform = (function bedug$components$canvas$attrs__GT_transform(p__10959){
var map__10960 = p__10959;
var map__10960__$1 = ((((!((map__10960 == null)))?(((((map__10960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10960):map__10960);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10960__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10960__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10960__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px) rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),"deg)"].join('');
});
bedug.components.canvas.bug_class = (function bedug$components$canvas$bug_class(p__10962,shake){
var map__10963 = p__10962;
var map__10963__$1 = ((((!((map__10963 == null)))?(((((map__10963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10963):map__10963);
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10963__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var base = ["bedug-bug fa fa-3x fa-bug ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
if(cljs.core.truth_(shake)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base)," shake"].join('');
} else {
return base;
}
});
bedug.components.canvas.canvas = (function bedug$components$canvas$canvas(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bedug-canvas"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function bedug$components$canvas$canvas_$_iter__10965(s__10966){
return (new cljs.core.LazySeq(null,(function (){
var s__10966__$1 = s__10966;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10966__$1);
if(temp__5457__auto__){
var s__10966__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10966__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10966__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10968 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10967 = (0);
while(true){
if((i__10967 < size__4323__auto__)){
var vec__10969 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10967);
var player_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10969,(0),null);
var map__10972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10969,(1),null);
var map__10972__$1 = ((((!((map__10972 == null)))?(((((map__10972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10972):map__10972);
var queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10972__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10972__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10972__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path,"/canvas")){
cljs.core.chunk_append(b__10968,(function (){var commands = cljs.core.take.cljs$core$IFn$_invoke$arity$2(step,queue);
var attrs = bedug.components.canvas.commands__GT_attrs(commands);
var transform = bedug.components.canvas.attrs__GT_transform(attrs);
var class$ = bedug.components.canvas.bug_class(attrs,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(commands),new cljs.core.Keyword(null,"shake","shake",1292044195)));
var opacity = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player_id,cljs.core.deref(bedug.state.player_id)))?(1):0.2);
var style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),transform,new cljs.core.Keyword(null,"opacity","opacity",397153780),opacity], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"key","key",-1516042587),player_id,new cljs.core.Keyword(null,"style","style",-496642736),style], null)], null);
})());

var G__10979 = (i__10967 + (1));
i__10967 = G__10979;
continue;
} else {
var G__10980 = (i__10967 + (1));
i__10967 = G__10980;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10968),bedug$components$canvas$canvas_$_iter__10965(cljs.core.chunk_rest(s__10966__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10968),null);
}
} else {
var vec__10974 = cljs.core.first(s__10966__$2);
var player_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10974,(0),null);
var map__10977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10974,(1),null);
var map__10977__$1 = ((((!((map__10977 == null)))?(((((map__10977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10977):map__10977);
var queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10977__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10977__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10977__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path,"/canvas")){
return cljs.core.cons((function (){var commands = cljs.core.take.cljs$core$IFn$_invoke$arity$2(step,queue);
var attrs = bedug.components.canvas.commands__GT_attrs(commands);
var transform = bedug.components.canvas.attrs__GT_transform(attrs);
var class$ = bedug.components.canvas.bug_class(attrs,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(commands),new cljs.core.Keyword(null,"shake","shake",1292044195)));
var opacity = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player_id,cljs.core.deref(bedug.state.player_id)))?(1):0.2);
var style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),transform,new cljs.core.Keyword(null,"opacity","opacity",397153780),opacity], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"key","key",-1516042587),player_id,new cljs.core.Keyword(null,"style","style",-496642736),style], null)], null);
})(),bedug$components$canvas$canvas_$_iter__10965(cljs.core.rest(s__10966__$2)));
} else {
var G__10981 = cljs.core.rest(s__10966__$2);
s__10966__$1 = G__10981;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bedug.state.full_state)));
})())], null);
});

//# sourceMappingURL=bedug.components.canvas.js.map
