goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return cljs.core._vreset_BANG_(shadow.cljs.devtools.client.browser.active_modules_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(shadow.cljs.devtools.client.browser.active_modules_ref),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20220 = arguments.length;
var i__4532__auto___20221 = (0);
while(true){
if((i__4532__auto___20221 < len__4531__auto___20220)){
args__4534__auto__.push((arguments[i__4532__auto___20221]));

var G__20222 = (i__4532__auto___20221 + (1));
i__4532__auto___20221 = G__20222;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20217){
var G__20218 = cljs.core.first(seq20217);
var seq20217__$1 = cljs.core.next(seq20217);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20218,seq20217__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__20229){
var map__20231 = p__20229;
var map__20231__$1 = ((((!((map__20231 == null)))?(((((map__20231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20231):map__20231);
var src = map__20231__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20231__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20231__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__3949__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20233 = cljs.core.seq(sources);
var chunk__20234 = null;
var count__20235 = (0);
var i__20236 = (0);
while(true){
if((i__20236 < count__20235)){
var map__20237 = chunk__20234.cljs$core$IIndexed$_nth$arity$2(null,i__20236);
var map__20237__$1 = ((((!((map__20237 == null)))?(((((map__20237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20237):map__20237);
var src = map__20237__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20237__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20237__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20237__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20237__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__20241 = seq__20233;
var G__20242 = chunk__20234;
var G__20243 = count__20235;
var G__20244 = (i__20236 + (1));
seq__20233 = G__20241;
chunk__20234 = G__20242;
count__20235 = G__20243;
i__20236 = G__20244;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20233);
if(temp__5457__auto__){
var seq__20233__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20233__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20233__$1);
var G__20245 = cljs.core.chunk_rest(seq__20233__$1);
var G__20246 = c__4351__auto__;
var G__20247 = cljs.core.count(c__4351__auto__);
var G__20248 = (0);
seq__20233 = G__20245;
chunk__20234 = G__20246;
count__20235 = G__20247;
i__20236 = G__20248;
continue;
} else {
var map__20239 = cljs.core.first(seq__20233__$1);
var map__20239__$1 = ((((!((map__20239 == null)))?(((((map__20239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20239):map__20239);
var src = map__20239__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20239__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20239__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20239__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20239__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__20249 = cljs.core.next(seq__20233__$1);
var G__20250 = null;
var G__20251 = (0);
var G__20252 = (0);
seq__20233 = G__20249;
chunk__20234 = G__20250;
count__20235 = G__20251;
i__20236 = G__20252;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20255 = cljs.core.seq(js_requires);
var chunk__20256 = null;
var count__20257 = (0);
var i__20258 = (0);
while(true){
if((i__20258 < count__20257)){
var js_ns = chunk__20256.cljs$core$IIndexed$_nth$arity$2(null,i__20258);
var require_str_20259 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20259);


var G__20260 = seq__20255;
var G__20261 = chunk__20256;
var G__20262 = count__20257;
var G__20263 = (i__20258 + (1));
seq__20255 = G__20260;
chunk__20256 = G__20261;
count__20257 = G__20262;
i__20258 = G__20263;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20255);
if(temp__5457__auto__){
var seq__20255__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20255__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20255__$1);
var G__20264 = cljs.core.chunk_rest(seq__20255__$1);
var G__20265 = c__4351__auto__;
var G__20266 = cljs.core.count(c__4351__auto__);
var G__20267 = (0);
seq__20255 = G__20264;
chunk__20256 = G__20265;
count__20257 = G__20266;
i__20258 = G__20267;
continue;
} else {
var js_ns = cljs.core.first(seq__20255__$1);
var require_str_20268 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20268);


var G__20269 = cljs.core.next(seq__20255__$1);
var G__20270 = null;
var G__20271 = (0);
var G__20272 = (0);
seq__20255 = G__20269;
chunk__20256 = G__20270;
count__20257 = G__20271;
i__20258 = G__20272;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__20273 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__20273) : callback.call(null,G__20273));
} else {
var G__20274 = shadow.cljs.devtools.client.env.files_url();
var G__20275 = ((function (G__20274){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__20274))
;
var G__20276 = "POST";
var G__20277 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__20278 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__20274,G__20275,G__20276,G__20277,G__20278);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__20280){
var map__20281 = p__20280;
var map__20281__$1 = ((((!((map__20281 == null)))?(((((map__20281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20281):map__20281);
var msg = map__20281__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20281__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20281__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__20283 = info;
var map__20283__$1 = ((((!((map__20283 == null)))?(((((map__20283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20283):map__20283);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20283__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20283__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (map__20283,map__20283__$1,sources,compiled,map__20281,map__20281__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20285(s__20286){
return (new cljs.core.LazySeq(null,((function (map__20283,map__20283__$1,sources,compiled,map__20281,map__20281__$1,msg,info,reload_info){
return (function (){
var s__20286__$1 = s__20286;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__20286__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__20291 = cljs.core.first(xs__6012__auto__);
var map__20291__$1 = ((((!((map__20291 == null)))?(((((map__20291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20291):map__20291);
var src = map__20291__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20291__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20291__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4320__auto__ = ((function (s__20286__$1,map__20291,map__20291__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__20283,map__20283__$1,sources,compiled,map__20281,map__20281__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20285_$_iter__20287(s__20288){
return (new cljs.core.LazySeq(null,((function (s__20286__$1,map__20291,map__20291__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__20283,map__20283__$1,sources,compiled,map__20281,map__20281__$1,msg,info,reload_info){
return (function (){
var s__20288__$1 = s__20288;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__20288__$1);
if(temp__5457__auto____$1){
var s__20288__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20288__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__20288__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__20290 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__20289 = (0);
while(true){
if((i__20289 < size__4323__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__20289);
cljs.core.chunk_append(b__20290,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__20327 = (i__20289 + (1));
i__20289 = G__20327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20290),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20285_$_iter__20287(cljs.core.chunk_rest(s__20288__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20290),null);
}
} else {
var warning = cljs.core.first(s__20288__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20285_$_iter__20287(cljs.core.rest(s__20288__$2)));
}
} else {
return null;
}
break;
}
});})(s__20286__$1,map__20291,map__20291__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__20283,map__20283__$1,sources,compiled,map__20281,map__20281__$1,msg,info,reload_info))
,null,null));
});})(s__20286__$1,map__20291,map__20291__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__20283,map__20283__$1,sources,compiled,map__20281,map__20281__$1,msg,info,reload_info))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(warnings));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20285(cljs.core.rest(s__20286__$1)));
} else {
var G__20329 = cljs.core.rest(s__20286__$1);
s__20286__$1 = G__20329;
continue;
}
} else {
var G__20330 = cljs.core.rest(s__20286__$1);
s__20286__$1 = G__20330;
continue;
}
} else {
return null;
}
break;
}
});})(map__20283,map__20283__$1,sources,compiled,map__20281,map__20281__$1,msg,info,reload_info))
,null,null));
});})(map__20283,map__20283__$1,sources,compiled,map__20281,map__20281__$1,msg,info,reload_info))
;
return iter__4324__auto__(sources);
})()));
var seq__20293_20331 = cljs.core.seq(warnings);
var chunk__20294_20332 = null;
var count__20295_20333 = (0);
var i__20296_20334 = (0);
while(true){
if((i__20296_20334 < count__20295_20333)){
var map__20297_20336 = chunk__20294_20332.cljs$core$IIndexed$_nth$arity$2(null,i__20296_20334);
var map__20297_20337__$1 = ((((!((map__20297_20336 == null)))?(((((map__20297_20336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20297_20336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20297_20336):map__20297_20336);
var w_20338 = map__20297_20337__$1;
var msg_20339__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20297_20337__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_20340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20297_20337__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20297_20337__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_20342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20297_20337__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_20342)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20340),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20341),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_20339__$1)].join(''));


var G__20345 = seq__20293_20331;
var G__20346 = chunk__20294_20332;
var G__20347 = count__20295_20333;
var G__20348 = (i__20296_20334 + (1));
seq__20293_20331 = G__20345;
chunk__20294_20332 = G__20346;
count__20295_20333 = G__20347;
i__20296_20334 = G__20348;
continue;
} else {
var temp__5457__auto___20349 = cljs.core.seq(seq__20293_20331);
if(temp__5457__auto___20349){
var seq__20293_20350__$1 = temp__5457__auto___20349;
if(cljs.core.chunked_seq_QMARK_(seq__20293_20350__$1)){
var c__4351__auto___20351 = cljs.core.chunk_first(seq__20293_20350__$1);
var G__20352 = cljs.core.chunk_rest(seq__20293_20350__$1);
var G__20353 = c__4351__auto___20351;
var G__20354 = cljs.core.count(c__4351__auto___20351);
var G__20355 = (0);
seq__20293_20331 = G__20352;
chunk__20294_20332 = G__20353;
count__20295_20333 = G__20354;
i__20296_20334 = G__20355;
continue;
} else {
var map__20299_20356 = cljs.core.first(seq__20293_20350__$1);
var map__20299_20357__$1 = ((((!((map__20299_20356 == null)))?(((((map__20299_20356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20299_20356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20299_20356):map__20299_20356);
var w_20358 = map__20299_20357__$1;
var msg_20359__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20299_20357__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_20360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20299_20357__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20299_20357__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_20362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20299_20357__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_20362)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20360),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20361),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_20359__$1)].join(''));


var G__20363 = cljs.core.next(seq__20293_20350__$1);
var G__20364 = null;
var G__20365 = (0);
var G__20366 = (0);
seq__20293_20331 = G__20363;
chunk__20294_20332 = G__20364;
count__20295_20333 = G__20365;
i__20296_20334 = G__20366;
continue;
}
} else {
}
}
break;
}

if(!(shadow.cljs.devtools.client.env.autoload)){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__20283,map__20283__$1,sources,compiled,warnings,map__20281,map__20281__$1,msg,info,reload_info){
return (function (p__20302){
var map__20303 = p__20302;
var map__20303__$1 = ((((!((map__20303 == null)))?(((((map__20303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20303):map__20303);
var src = map__20303__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20303__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20303__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__20283,map__20283__$1,sources,compiled,warnings,map__20281,map__20281__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__20283,map__20283__$1,sources,compiled,warnings,map__20281,map__20281__$1,msg,info,reload_info){
return (function (p__20309){
var map__20310 = p__20309;
var map__20310__$1 = ((((!((map__20310 == null)))?(((((map__20310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20310):map__20310);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20310__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__20283,map__20283__$1,sources,compiled,warnings,map__20281,map__20281__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__20283,map__20283__$1,sources,compiled,warnings,map__20281,map__20281__$1,msg,info,reload_info){
return (function (p__20316){
var map__20317 = p__20316;
var map__20317__$1 = ((((!((map__20317 == null)))?(((((map__20317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20317):map__20317);
var rc = map__20317__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20317__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var or__3949__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module);
}
});})(map__20283,map__20283__$1,sources,compiled,warnings,map__20281,map__20281__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__20283,map__20283__$1,sources,compiled,warnings,map__20281,map__20281__$1,msg,info,reload_info){
return (function (p1__20279_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20279_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__20283,map__20283__$1,sources,compiled,warnings,map__20281,map__20281__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
var and__3938__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new);
if(and__3938__auto__){
return rel_new;
} else {
return and__3938__auto__;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__3938__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__3938__auto____$1){
return new$;
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__20370){
var map__20371 = p__20370;
var map__20371__$1 = ((((!((map__20371 == null)))?(((((map__20371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20371):map__20371);
var msg = map__20371__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20371__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__20373 = cljs.core.seq(updates);
var chunk__20375 = null;
var count__20376 = (0);
var i__20377 = (0);
while(true){
if((i__20377 < count__20376)){
var path = chunk__20375.cljs$core$IIndexed$_nth$arity$2(null,i__20377);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20379_20399 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20382_20400 = null;
var count__20383_20401 = (0);
var i__20384_20402 = (0);
while(true){
if((i__20384_20402 < count__20383_20401)){
var node_20403 = chunk__20382_20400.cljs$core$IIndexed$_nth$arity$2(null,i__20384_20402);
var path_match_20404 = shadow.cljs.devtools.client.browser.match_paths(node_20403.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20404)){
var new_link_20405 = (function (){var G__20387 = node_20403.cloneNode(true);
G__20387.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20404),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20387;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20404], 0));

goog.dom.insertSiblingAfter(new_link_20405,node_20403);

goog.dom.removeNode(node_20403);


var G__20406 = seq__20379_20399;
var G__20407 = chunk__20382_20400;
var G__20408 = count__20383_20401;
var G__20409 = (i__20384_20402 + (1));
seq__20379_20399 = G__20406;
chunk__20382_20400 = G__20407;
count__20383_20401 = G__20408;
i__20384_20402 = G__20409;
continue;
} else {
var G__20410 = seq__20379_20399;
var G__20411 = chunk__20382_20400;
var G__20412 = count__20383_20401;
var G__20413 = (i__20384_20402 + (1));
seq__20379_20399 = G__20410;
chunk__20382_20400 = G__20411;
count__20383_20401 = G__20412;
i__20384_20402 = G__20413;
continue;
}
} else {
var temp__5457__auto___20414 = cljs.core.seq(seq__20379_20399);
if(temp__5457__auto___20414){
var seq__20379_20415__$1 = temp__5457__auto___20414;
if(cljs.core.chunked_seq_QMARK_(seq__20379_20415__$1)){
var c__4351__auto___20416 = cljs.core.chunk_first(seq__20379_20415__$1);
var G__20417 = cljs.core.chunk_rest(seq__20379_20415__$1);
var G__20418 = c__4351__auto___20416;
var G__20419 = cljs.core.count(c__4351__auto___20416);
var G__20420 = (0);
seq__20379_20399 = G__20417;
chunk__20382_20400 = G__20418;
count__20383_20401 = G__20419;
i__20384_20402 = G__20420;
continue;
} else {
var node_20421 = cljs.core.first(seq__20379_20415__$1);
var path_match_20422 = shadow.cljs.devtools.client.browser.match_paths(node_20421.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20422)){
var new_link_20423 = (function (){var G__20388 = node_20421.cloneNode(true);
G__20388.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20422),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20388;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20422], 0));

goog.dom.insertSiblingAfter(new_link_20423,node_20421);

goog.dom.removeNode(node_20421);


var G__20428 = cljs.core.next(seq__20379_20415__$1);
var G__20429 = null;
var G__20430 = (0);
var G__20431 = (0);
seq__20379_20399 = G__20428;
chunk__20382_20400 = G__20429;
count__20383_20401 = G__20430;
i__20384_20402 = G__20431;
continue;
} else {
var G__20433 = cljs.core.next(seq__20379_20415__$1);
var G__20434 = null;
var G__20435 = (0);
var G__20436 = (0);
seq__20379_20399 = G__20433;
chunk__20382_20400 = G__20434;
count__20383_20401 = G__20435;
i__20384_20402 = G__20436;
continue;
}
}
} else {
}
}
break;
}


var G__20441 = seq__20373;
var G__20442 = chunk__20375;
var G__20443 = count__20376;
var G__20444 = (i__20377 + (1));
seq__20373 = G__20441;
chunk__20375 = G__20442;
count__20376 = G__20443;
i__20377 = G__20444;
continue;
} else {
var G__20446 = seq__20373;
var G__20447 = chunk__20375;
var G__20448 = count__20376;
var G__20449 = (i__20377 + (1));
seq__20373 = G__20446;
chunk__20375 = G__20447;
count__20376 = G__20448;
i__20377 = G__20449;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20373);
if(temp__5457__auto__){
var seq__20373__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20373__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20373__$1);
var G__20457 = cljs.core.chunk_rest(seq__20373__$1);
var G__20458 = c__4351__auto__;
var G__20459 = cljs.core.count(c__4351__auto__);
var G__20460 = (0);
seq__20373 = G__20457;
chunk__20375 = G__20458;
count__20376 = G__20459;
i__20377 = G__20460;
continue;
} else {
var path = cljs.core.first(seq__20373__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20389_20465 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20392_20466 = null;
var count__20393_20467 = (0);
var i__20394_20468 = (0);
while(true){
if((i__20394_20468 < count__20393_20467)){
var node_20469 = chunk__20392_20466.cljs$core$IIndexed$_nth$arity$2(null,i__20394_20468);
var path_match_20474 = shadow.cljs.devtools.client.browser.match_paths(node_20469.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20474)){
var new_link_20475 = (function (){var G__20397 = node_20469.cloneNode(true);
G__20397.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20474),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20397;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20474], 0));

goog.dom.insertSiblingAfter(new_link_20475,node_20469);

goog.dom.removeNode(node_20469);


var G__20480 = seq__20389_20465;
var G__20481 = chunk__20392_20466;
var G__20482 = count__20393_20467;
var G__20483 = (i__20394_20468 + (1));
seq__20389_20465 = G__20480;
chunk__20392_20466 = G__20481;
count__20393_20467 = G__20482;
i__20394_20468 = G__20483;
continue;
} else {
var G__20484 = seq__20389_20465;
var G__20485 = chunk__20392_20466;
var G__20486 = count__20393_20467;
var G__20487 = (i__20394_20468 + (1));
seq__20389_20465 = G__20484;
chunk__20392_20466 = G__20485;
count__20393_20467 = G__20486;
i__20394_20468 = G__20487;
continue;
}
} else {
var temp__5457__auto___20492__$1 = cljs.core.seq(seq__20389_20465);
if(temp__5457__auto___20492__$1){
var seq__20389_20493__$1 = temp__5457__auto___20492__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20389_20493__$1)){
var c__4351__auto___20494 = cljs.core.chunk_first(seq__20389_20493__$1);
var G__20495 = cljs.core.chunk_rest(seq__20389_20493__$1);
var G__20496 = c__4351__auto___20494;
var G__20497 = cljs.core.count(c__4351__auto___20494);
var G__20498 = (0);
seq__20389_20465 = G__20495;
chunk__20392_20466 = G__20496;
count__20393_20467 = G__20497;
i__20394_20468 = G__20498;
continue;
} else {
var node_20499 = cljs.core.first(seq__20389_20493__$1);
var path_match_20500 = shadow.cljs.devtools.client.browser.match_paths(node_20499.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20500)){
var new_link_20501 = (function (){var G__20398 = node_20499.cloneNode(true);
G__20398.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20500),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20398;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20500], 0));

goog.dom.insertSiblingAfter(new_link_20501,node_20499);

goog.dom.removeNode(node_20499);


var G__20502 = cljs.core.next(seq__20389_20493__$1);
var G__20503 = null;
var G__20504 = (0);
var G__20505 = (0);
seq__20389_20465 = G__20502;
chunk__20392_20466 = G__20503;
count__20393_20467 = G__20504;
i__20394_20468 = G__20505;
continue;
} else {
var G__20506 = cljs.core.next(seq__20389_20493__$1);
var G__20507 = null;
var G__20508 = (0);
var G__20509 = (0);
seq__20389_20465 = G__20506;
chunk__20392_20466 = G__20507;
count__20393_20467 = G__20508;
i__20394_20468 = G__20509;
continue;
}
}
} else {
}
}
break;
}


var G__20510 = cljs.core.next(seq__20373__$1);
var G__20511 = null;
var G__20512 = (0);
var G__20513 = (0);
seq__20373 = G__20510;
chunk__20375 = G__20511;
count__20376 = G__20512;
i__20377 = G__20513;
continue;
} else {
var G__20514 = cljs.core.next(seq__20373__$1);
var G__20515 = null;
var G__20516 = (0);
var G__20517 = (0);
seq__20373 = G__20514;
chunk__20375 = G__20515;
count__20376 = G__20516;
i__20377 = G__20517;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__20539){
var map__20540 = p__20539;
var map__20540__$1 = ((((!((map__20540 == null)))?(((((map__20540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20540):map__20540);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20540__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20540__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__20540,map__20540__$1,id,js){
return (function (){
return eval(js);
});})(map__20540,map__20540__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__20542){
var map__20543 = p__20542;
var map__20543__$1 = ((((!((map__20543 == null)))?(((((map__20543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20543):map__20543);
var msg = map__20543__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20543__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20543__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20543__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20543__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__20543,map__20543__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__20547){
var map__20548 = p__20547;
var map__20548__$1 = ((((!((map__20548 == null)))?(((((map__20548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20548):map__20548);
var src = map__20548__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20548__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__3938__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__3938__auto__;
}
});})(map__20543,map__20543__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__20543,map__20543__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__20543,map__20543__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__20554){
var map__20555 = p__20554;
var map__20555__$1 = ((((!((map__20555 == null)))?(((((map__20555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20555):map__20555);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20555__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20555__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__20555,map__20555__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__20555,map__20555__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__20557){
var map__20560 = p__20557;
var map__20560__$1 = ((((!((map__20560 == null)))?(((((map__20560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20560):map__20560);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20560__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20560__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__20566){
var map__20568 = p__20566;
var map__20568__$1 = ((((!((map__20568 == null)))?(((((map__20568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20568):map__20568);
var msg = map__20568__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20568__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__20571 = type;
var G__20571__$1 = (((G__20571 instanceof cljs.core.Keyword))?G__20571.fqn:null);
switch (G__20571__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__20573 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__20574 = ((function (G__20573){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__20573))
;
var G__20575 = "POST";
var G__20576 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__20577 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__20573,G__20574,G__20575,G__20576,G__20577);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__3949__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e20580){var e = e20580;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___20581 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___20581)){
var s_20582 = temp__5457__auto___20581;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_20582.onclose = ((function (s_20582,temp__5457__auto___20581){
return (function (e){
return null;
});})(s_20582,temp__5457__auto___20581))
;

s_20582.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
