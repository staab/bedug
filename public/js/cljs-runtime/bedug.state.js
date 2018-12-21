goog.provide('bedug.state');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.reader');
goog.require('bedug.utils');
bedug.state.path = window.location.pathname;
if((typeof bedug !== 'undefined') && (typeof bedug.state !== 'undefined') && (typeof bedug.state.player_id !== 'undefined')){
} else {
bedug.state.player_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof bedug !== 'undefined') && (typeof bedug.state !== 'undefined') && (typeof bedug.state.full_state !== 'undefined')){
} else {
bedug.state.full_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.PersistentArrayMap.EMPTY], null));
}
if((typeof bedug !== 'undefined') && (typeof bedug.state !== 'undefined') && (typeof bedug.state.player_state !== 'undefined')){
} else {
bedug.state.player_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"step","step",1288888124),(0)], null));
}
bedug.state.send_BANG_ = (function bedug$state$send_BANG_(type,payload){
return bedug.state.ws.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null)], 0)));
});
bedug.state.update_player_BANG_ = (function bedug$state$update_player_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___16796 = arguments.length;
var i__4532__auto___16797 = (0);
while(true){
if((i__4532__auto___16797 < len__4531__auto___16796)){
args__4534__auto__.push((arguments[i__4532__auto___16797]));

var G__16798 = (i__4532__auto___16797 + (1));
i__4532__auto___16797 = G__16798;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return bedug.state.update_player_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

bedug.state.update_player_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,bedug.state.player_state,args);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bedug.state.full_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.deref(bedug.state.player_id)], null),cljs.core.deref(bedug.state.player_state));

return bedug.state.send_BANG_(new cljs.core.Keyword(null,"update-player","update-player",122998163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player-id","player-id",1003896428),cljs.core.deref(bedug.state.player_id),new cljs.core.Keyword(null,"player-state","player-state",-337228580),cljs.core.deref(bedug.state.player_state)], null));
});

bedug.state.update_player_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
bedug.state.update_player_BANG_.cljs$lang$applyTo = (function (seq16795){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16795));
});

if((typeof bedug !== 'undefined') && (typeof bedug.state !== 'undefined') && (typeof bedug.state.handle_message !== 'undefined')){
} else {
bedug.state.handle_message = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bedug.state","handle-message"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
bedug.state.handle_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"init","init",-1875481434),(function (p__16799){
var map__16800 = p__16799;
var map__16800__$1 = ((((!((map__16800 == null)))?(((((map__16800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16800):map__16800);
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16800__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(payload,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.deref(bedug.state.player_id)], null)))){
return null;
} else {
cljs.core.reset_BANG_(bedug.state.player_id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((99999)))].join(''));

cljs.core.reset_BANG_(bedug.state.full_state,payload);

return bedug.state.update_player_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc,new cljs.core.Keyword(null,"path","path",-188191168),bedug.state.path], 0));
}
}));
bedug.state.handle_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"update-player","update-player",122998163),(function (p__16802){
var map__16803 = p__16802;
var map__16803__$1 = ((((!((map__16803 == null)))?(((((map__16803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16803):map__16803);
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16803__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var map__16805 = payload;
var map__16805__$1 = ((((!((map__16805 == null)))?(((((map__16805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16805):map__16805);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16805__$1,new cljs.core.Keyword(null,"player-id","player-id",1003896428));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16805__$1,new cljs.core.Keyword(null,"player-state","player-state",-337228580));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.deref(bedug.state.player_id))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bedug.state.full_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),id], null),state);
} else {
return null;
}
}));
bedug.state.handle_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"remove-player","remove-player",996005119),(function (p__16807){
var map__16808 = p__16807;
var map__16808__$1 = ((((!((map__16808 == null)))?(((((map__16808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16808):map__16808);
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16808__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var map__16810 = payload;
var map__16810__$1 = ((((!((map__16810 == null)))?(((((map__16810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16810):map__16810);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16810__$1,new cljs.core.Keyword(null,"player-id","player-id",1003896428));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(bedug.state.full_state,cljs.core.update,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
}));
bedug.state.handle_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"tick","tick",-835886976),(function (_){
var swapper_16815 = (function (players){
return bedug.utils.map_v((function (p__16812){
var map__16813 = p__16812;
var map__16813__$1 = ((((!((map__16813 == null)))?(((((map__16813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16813):map__16813);
var player = map__16813__$1;
var queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16813__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16813__$1,new cljs.core.Keyword(null,"step","step",1288888124));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(player,new cljs.core.Keyword(null,"step","step",1288888124),(((step >= cljs.core.count(queue)))?(0):(step + (1))));
}),players);
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bedug.state.full_state,cljs.core.update,new cljs.core.Keyword(null,"players","players",-1361554569),swapper_16815);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bedug.state.player_state,cljs.core.assoc,new cljs.core.Keyword(null,"step","step",1288888124),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bedug.state.full_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.deref(bedug.state.player_id),new cljs.core.Keyword(null,"step","step",1288888124)], null)));
}));
bedug.state.on_message = (function bedug$state$on_message(evt){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Handling message",evt.data], 0));

var G__16816 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(evt.data);
return (bedug.state.handle_message.cljs$core$IFn$_invoke$arity$1 ? bedug.state.handle_message.cljs$core$IFn$_invoke$arity$1(G__16816) : bedug.state.handle_message.call(null,G__16816));
});
bedug.state.ws = (new WebSocket("ws://192.168.0.4:8080"));
bedug.state.ws.addEventListener("message",bedug.state.on_message);

//# sourceMappingURL=bedug.state.js.map
