goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$IElement$_to_dom$arity$1 == null))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.dom._to_dom["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.dom._to_svg["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__18174 = coll;
var G__18175 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__18174,G__18175) : shadow.dom.lazy_native_coll_seq.call(null,G__18174,G__18175));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__3949__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)].join(''));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__18193 = arguments.length;
switch (G__18193) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__18201 = arguments.length;
switch (G__18201) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__18204 = arguments.length;
switch (G__18204) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__18207 = arguments.length;
switch (G__18207) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__18221 = arguments.length;
switch (G__18221) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__18226 = document;
var G__18227 = shadow.dom.dom_node(el);
return goog.dom.contains(G__18226,G__18227);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__18231 = shadow.dom.dom_node(parent);
var G__18232 = shadow.dom.dom_node(el);
return goog.dom.contains(G__18231,G__18232);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__18242 = shadow.dom.dom_node(el);
var G__18243 = cls;
return goog.dom.classlist.add(G__18242,G__18243);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__18250 = shadow.dom.dom_node(el);
var G__18251 = cls;
return goog.dom.classlist.remove(G__18250,G__18251);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__18256 = arguments.length;
switch (G__18256) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__18257 = shadow.dom.dom_node(el);
var G__18258 = cls;
return goog.dom.classlist.toggle(G__18257,G__18258);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__3949__auto__ = !((typeof document !== 'undefined'));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e18263){if((e18263 instanceof Object)){
var e = e18263;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18263;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__3949__auto__ = !((typeof document !== 'undefined'));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__18274 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18275 = null;
var count__18276 = (0);
var i__18277 = (0);
while(true){
if((i__18277 < count__18276)){
var el = chunk__18275.cljs$core$IIndexed$_nth$arity$2(null,i__18277);
var handler_18286__$1 = ((function (seq__18274,chunk__18275,count__18276,i__18277,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18274,chunk__18275,count__18276,i__18277,el))
;
var G__18280_18287 = el;
var G__18281_18288 = cljs.core.name(ev);
var G__18282_18289 = handler_18286__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18280_18287,G__18281_18288,G__18282_18289) : shadow.dom.dom_listen.call(null,G__18280_18287,G__18281_18288,G__18282_18289));


var G__18290 = seq__18274;
var G__18291 = chunk__18275;
var G__18292 = count__18276;
var G__18293 = (i__18277 + (1));
seq__18274 = G__18290;
chunk__18275 = G__18291;
count__18276 = G__18292;
i__18277 = G__18293;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18274);
if(temp__5457__auto__){
var seq__18274__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18274__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__18274__$1);
var G__18294 = cljs.core.chunk_rest(seq__18274__$1);
var G__18295 = c__4351__auto__;
var G__18296 = cljs.core.count(c__4351__auto__);
var G__18297 = (0);
seq__18274 = G__18294;
chunk__18275 = G__18295;
count__18276 = G__18296;
i__18277 = G__18297;
continue;
} else {
var el = cljs.core.first(seq__18274__$1);
var handler_18298__$1 = ((function (seq__18274,chunk__18275,count__18276,i__18277,el,seq__18274__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18274,chunk__18275,count__18276,i__18277,el,seq__18274__$1,temp__5457__auto__))
;
var G__18283_18299 = el;
var G__18284_18300 = cljs.core.name(ev);
var G__18285_18301 = handler_18298__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18283_18299,G__18284_18300,G__18285_18301) : shadow.dom.dom_listen.call(null,G__18283_18299,G__18284_18300,G__18285_18301));


var G__18303 = cljs.core.next(seq__18274__$1);
var G__18304 = null;
var G__18305 = (0);
var G__18306 = (0);
seq__18274 = G__18303;
chunk__18275 = G__18304;
count__18276 = G__18305;
i__18277 = G__18306;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__18310 = arguments.length;
switch (G__18310) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__18311 = shadow.dom.dom_node(el);
var G__18312 = cljs.core.name(ev);
var G__18313 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18311,G__18312,G__18313) : shadow.dom.dom_listen.call(null,G__18311,G__18312,G__18313));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__18322 = shadow.dom.dom_node(el);
var G__18323 = cljs.core.name(ev);
var G__18324 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__18322,G__18323,G__18324) : shadow.dom.dom_listen_remove.call(null,G__18322,G__18323,G__18324));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18326 = cljs.core.seq(events);
var chunk__18327 = null;
var count__18328 = (0);
var i__18329 = (0);
while(true){
if((i__18329 < count__18328)){
var vec__18331 = chunk__18327.cljs$core$IIndexed$_nth$arity$2(null,i__18329);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18331,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18331,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18341 = seq__18326;
var G__18342 = chunk__18327;
var G__18343 = count__18328;
var G__18344 = (i__18329 + (1));
seq__18326 = G__18341;
chunk__18327 = G__18342;
count__18328 = G__18343;
i__18329 = G__18344;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18326);
if(temp__5457__auto__){
var seq__18326__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18326__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__18326__$1);
var G__18345 = cljs.core.chunk_rest(seq__18326__$1);
var G__18346 = c__4351__auto__;
var G__18347 = cljs.core.count(c__4351__auto__);
var G__18348 = (0);
seq__18326 = G__18345;
chunk__18327 = G__18346;
count__18328 = G__18347;
i__18329 = G__18348;
continue;
} else {
var vec__18335 = cljs.core.first(seq__18326__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18335,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18335,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18349 = cljs.core.next(seq__18326__$1);
var G__18350 = null;
var G__18351 = (0);
var G__18352 = (0);
seq__18326 = G__18349;
chunk__18327 = G__18350;
count__18328 = G__18351;
i__18329 = G__18352;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18353 = cljs.core.seq(styles);
var chunk__18354 = null;
var count__18355 = (0);
var i__18356 = (0);
while(true){
if((i__18356 < count__18355)){
var vec__18357 = chunk__18354.cljs$core$IIndexed$_nth$arity$2(null,i__18356);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18357,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18357,(1),null);
var G__18360_18371 = dom;
var G__18361_18372 = cljs.core.name(k);
var G__18362_18373 = (((v == null))?"":v);
goog.style.setStyle(G__18360_18371,G__18361_18372,G__18362_18373);


var G__18374 = seq__18353;
var G__18375 = chunk__18354;
var G__18376 = count__18355;
var G__18377 = (i__18356 + (1));
seq__18353 = G__18374;
chunk__18354 = G__18375;
count__18355 = G__18376;
i__18356 = G__18377;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18353);
if(temp__5457__auto__){
var seq__18353__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18353__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__18353__$1);
var G__18378 = cljs.core.chunk_rest(seq__18353__$1);
var G__18379 = c__4351__auto__;
var G__18380 = cljs.core.count(c__4351__auto__);
var G__18381 = (0);
seq__18353 = G__18378;
chunk__18354 = G__18379;
count__18355 = G__18380;
i__18356 = G__18381;
continue;
} else {
var vec__18364 = cljs.core.first(seq__18353__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18364,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18364,(1),null);
var G__18368_18385 = dom;
var G__18369_18386 = cljs.core.name(k);
var G__18370_18387 = (((v == null))?"":v);
goog.style.setStyle(G__18368_18385,G__18369_18386,G__18370_18387);


var G__18388 = cljs.core.next(seq__18353__$1);
var G__18389 = null;
var G__18390 = (0);
var G__18391 = (0);
seq__18353 = G__18388;
chunk__18354 = G__18389;
count__18355 = G__18390;
i__18356 = G__18391;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__18394_18395 = key;
var G__18394_18396__$1 = (((G__18394_18395 instanceof cljs.core.Keyword))?G__18394_18395.fqn:null);
switch (G__18394_18396__$1) {
case "id":
el.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "class":
el.className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_18398 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__3949__auto__ = goog.string.startsWith(ks_18398,"data-");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.string.startsWith(ks_18398,"aria-");
}
})())){
el.setAttribute(ks_18398,value);
} else {
(el[ks_18398] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__18399 = shadow.dom.dom_node(el);
var G__18400 = cls;
return goog.dom.classlist.contains(G__18399,G__18400);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18407){
var map__18408 = p__18407;
var map__18408__$1 = ((((!((map__18408 == null)))?(((((map__18408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18408):map__18408);
var props = map__18408__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18408__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18416 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18416,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18416,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18416,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18419 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18419,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18419;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18421 = arguments.length;
switch (G__18421) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18443){
var vec__18444 = p__18443;
var seq__18445 = cljs.core.seq(vec__18444);
var first__18446 = cljs.core.first(seq__18445);
var seq__18445__$1 = cljs.core.next(seq__18445);
var nn = first__18446;
var first__18446__$1 = cljs.core.first(seq__18445__$1);
var seq__18445__$2 = cljs.core.next(seq__18445__$1);
var np = first__18446__$1;
var nc = seq__18445__$2;
var node = vec__18444;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18454 = nn;
var G__18455 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18454,G__18455) : create_fn.call(null,G__18454,G__18455));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18459 = nn;
var G__18460 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18459,G__18460) : create_fn.call(null,G__18459,G__18460));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18487 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18487,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18487,(1),null);
var seq__18490_18532 = cljs.core.seq(node_children);
var chunk__18491_18533 = null;
var count__18492_18534 = (0);
var i__18493_18535 = (0);
while(true){
if((i__18493_18535 < count__18492_18534)){
var child_struct_18536 = chunk__18491_18533.cljs$core$IIndexed$_nth$arity$2(null,i__18493_18535);
var children_18539 = shadow.dom.dom_node(child_struct_18536);
if(cljs.core.seq_QMARK_(children_18539)){
var seq__18497_18540 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18539));
var chunk__18499_18541 = null;
var count__18500_18542 = (0);
var i__18501_18543 = (0);
while(true){
if((i__18501_18543 < count__18500_18542)){
var child_18545 = chunk__18499_18541.cljs$core$IIndexed$_nth$arity$2(null,i__18501_18543);
if(cljs.core.truth_(child_18545)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18545);


var G__18547 = seq__18497_18540;
var G__18548 = chunk__18499_18541;
var G__18549 = count__18500_18542;
var G__18550 = (i__18501_18543 + (1));
seq__18497_18540 = G__18547;
chunk__18499_18541 = G__18548;
count__18500_18542 = G__18549;
i__18501_18543 = G__18550;
continue;
} else {
var G__18551 = seq__18497_18540;
var G__18552 = chunk__18499_18541;
var G__18553 = count__18500_18542;
var G__18554 = (i__18501_18543 + (1));
seq__18497_18540 = G__18551;
chunk__18499_18541 = G__18552;
count__18500_18542 = G__18553;
i__18501_18543 = G__18554;
continue;
}
} else {
var temp__5457__auto___18557 = cljs.core.seq(seq__18497_18540);
if(temp__5457__auto___18557){
var seq__18497_18558__$1 = temp__5457__auto___18557;
if(cljs.core.chunked_seq_QMARK_(seq__18497_18558__$1)){
var c__4351__auto___18559 = cljs.core.chunk_first(seq__18497_18558__$1);
var G__18561 = cljs.core.chunk_rest(seq__18497_18558__$1);
var G__18562 = c__4351__auto___18559;
var G__18563 = cljs.core.count(c__4351__auto___18559);
var G__18564 = (0);
seq__18497_18540 = G__18561;
chunk__18499_18541 = G__18562;
count__18500_18542 = G__18563;
i__18501_18543 = G__18564;
continue;
} else {
var child_18566 = cljs.core.first(seq__18497_18558__$1);
if(cljs.core.truth_(child_18566)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18566);


var G__18570 = cljs.core.next(seq__18497_18558__$1);
var G__18571 = null;
var G__18572 = (0);
var G__18573 = (0);
seq__18497_18540 = G__18570;
chunk__18499_18541 = G__18571;
count__18500_18542 = G__18572;
i__18501_18543 = G__18573;
continue;
} else {
var G__18589 = cljs.core.next(seq__18497_18558__$1);
var G__18590 = null;
var G__18591 = (0);
var G__18592 = (0);
seq__18497_18540 = G__18589;
chunk__18499_18541 = G__18590;
count__18500_18542 = G__18591;
i__18501_18543 = G__18592;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18539);
}


var G__18600 = seq__18490_18532;
var G__18601 = chunk__18491_18533;
var G__18602 = count__18492_18534;
var G__18603 = (i__18493_18535 + (1));
seq__18490_18532 = G__18600;
chunk__18491_18533 = G__18601;
count__18492_18534 = G__18602;
i__18493_18535 = G__18603;
continue;
} else {
var temp__5457__auto___18604 = cljs.core.seq(seq__18490_18532);
if(temp__5457__auto___18604){
var seq__18490_18605__$1 = temp__5457__auto___18604;
if(cljs.core.chunked_seq_QMARK_(seq__18490_18605__$1)){
var c__4351__auto___18610 = cljs.core.chunk_first(seq__18490_18605__$1);
var G__18611 = cljs.core.chunk_rest(seq__18490_18605__$1);
var G__18612 = c__4351__auto___18610;
var G__18613 = cljs.core.count(c__4351__auto___18610);
var G__18614 = (0);
seq__18490_18532 = G__18611;
chunk__18491_18533 = G__18612;
count__18492_18534 = G__18613;
i__18493_18535 = G__18614;
continue;
} else {
var child_struct_18615 = cljs.core.first(seq__18490_18605__$1);
var children_18619 = shadow.dom.dom_node(child_struct_18615);
if(cljs.core.seq_QMARK_(children_18619)){
var seq__18517_18621 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18619));
var chunk__18519_18622 = null;
var count__18520_18623 = (0);
var i__18521_18624 = (0);
while(true){
if((i__18521_18624 < count__18520_18623)){
var child_18627 = chunk__18519_18622.cljs$core$IIndexed$_nth$arity$2(null,i__18521_18624);
if(cljs.core.truth_(child_18627)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18627);


var G__18629 = seq__18517_18621;
var G__18630 = chunk__18519_18622;
var G__18631 = count__18520_18623;
var G__18632 = (i__18521_18624 + (1));
seq__18517_18621 = G__18629;
chunk__18519_18622 = G__18630;
count__18520_18623 = G__18631;
i__18521_18624 = G__18632;
continue;
} else {
var G__18633 = seq__18517_18621;
var G__18634 = chunk__18519_18622;
var G__18635 = count__18520_18623;
var G__18636 = (i__18521_18624 + (1));
seq__18517_18621 = G__18633;
chunk__18519_18622 = G__18634;
count__18520_18623 = G__18635;
i__18521_18624 = G__18636;
continue;
}
} else {
var temp__5457__auto___18638__$1 = cljs.core.seq(seq__18517_18621);
if(temp__5457__auto___18638__$1){
var seq__18517_18639__$1 = temp__5457__auto___18638__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18517_18639__$1)){
var c__4351__auto___18640 = cljs.core.chunk_first(seq__18517_18639__$1);
var G__18641 = cljs.core.chunk_rest(seq__18517_18639__$1);
var G__18642 = c__4351__auto___18640;
var G__18643 = cljs.core.count(c__4351__auto___18640);
var G__18644 = (0);
seq__18517_18621 = G__18641;
chunk__18519_18622 = G__18642;
count__18520_18623 = G__18643;
i__18521_18624 = G__18644;
continue;
} else {
var child_18646 = cljs.core.first(seq__18517_18639__$1);
if(cljs.core.truth_(child_18646)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18646);


var G__18647 = cljs.core.next(seq__18517_18639__$1);
var G__18648 = null;
var G__18649 = (0);
var G__18650 = (0);
seq__18517_18621 = G__18647;
chunk__18519_18622 = G__18648;
count__18520_18623 = G__18649;
i__18521_18624 = G__18650;
continue;
} else {
var G__18653 = cljs.core.next(seq__18517_18639__$1);
var G__18654 = null;
var G__18655 = (0);
var G__18656 = (0);
seq__18517_18621 = G__18653;
chunk__18519_18622 = G__18654;
count__18520_18623 = G__18655;
i__18521_18624 = G__18656;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18619);
}


var G__18657 = cljs.core.next(seq__18490_18605__$1);
var G__18658 = null;
var G__18659 = (0);
var G__18660 = (0);
seq__18490_18532 = G__18657;
chunk__18491_18533 = G__18658;
count__18492_18534 = G__18659;
i__18493_18535 = G__18660;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__18673 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__18673);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if(((!((node == null)))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18684 = cljs.core.seq(node);
var chunk__18685 = null;
var count__18686 = (0);
var i__18687 = (0);
while(true){
if((i__18687 < count__18686)){
var n = chunk__18685.cljs$core$IIndexed$_nth$arity$2(null,i__18687);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18691 = seq__18684;
var G__18692 = chunk__18685;
var G__18693 = count__18686;
var G__18694 = (i__18687 + (1));
seq__18684 = G__18691;
chunk__18685 = G__18692;
count__18686 = G__18693;
i__18687 = G__18694;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18684);
if(temp__5457__auto__){
var seq__18684__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18684__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__18684__$1);
var G__18695 = cljs.core.chunk_rest(seq__18684__$1);
var G__18696 = c__4351__auto__;
var G__18697 = cljs.core.count(c__4351__auto__);
var G__18698 = (0);
seq__18684 = G__18695;
chunk__18685 = G__18696;
count__18686 = G__18697;
i__18687 = G__18698;
continue;
} else {
var n = cljs.core.first(seq__18684__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18699 = cljs.core.next(seq__18684__$1);
var G__18700 = null;
var G__18701 = (0);
var G__18702 = (0);
seq__18684 = G__18699;
chunk__18685 = G__18700;
count__18686 = G__18701;
i__18687 = G__18702;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__18703 = shadow.dom.dom_node(new$);
var G__18704 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__18703,G__18704);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18710 = arguments.length;
switch (G__18710) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18714 = arguments.length;
switch (G__18714) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18750 = arguments.length;
switch (G__18750) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__3949__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18779 = arguments.length;
var i__4532__auto___18781 = (0);
while(true){
if((i__4532__auto___18781 < len__4531__auto___18779)){
args__4534__auto__.push((arguments[i__4532__auto___18781]));

var G__18786 = (i__4532__auto___18781 + (1));
i__4532__auto___18781 = G__18786;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18774_18789 = cljs.core.seq(nodes);
var chunk__18775_18790 = null;
var count__18776_18791 = (0);
var i__18777_18792 = (0);
while(true){
if((i__18777_18792 < count__18776_18791)){
var node_18793 = chunk__18775_18790.cljs$core$IIndexed$_nth$arity$2(null,i__18777_18792);
fragment.appendChild(shadow.dom._to_dom(node_18793));


var G__18794 = seq__18774_18789;
var G__18795 = chunk__18775_18790;
var G__18796 = count__18776_18791;
var G__18797 = (i__18777_18792 + (1));
seq__18774_18789 = G__18794;
chunk__18775_18790 = G__18795;
count__18776_18791 = G__18796;
i__18777_18792 = G__18797;
continue;
} else {
var temp__5457__auto___18798 = cljs.core.seq(seq__18774_18789);
if(temp__5457__auto___18798){
var seq__18774_18799__$1 = temp__5457__auto___18798;
if(cljs.core.chunked_seq_QMARK_(seq__18774_18799__$1)){
var c__4351__auto___18809 = cljs.core.chunk_first(seq__18774_18799__$1);
var G__18810 = cljs.core.chunk_rest(seq__18774_18799__$1);
var G__18811 = c__4351__auto___18809;
var G__18812 = cljs.core.count(c__4351__auto___18809);
var G__18813 = (0);
seq__18774_18789 = G__18810;
chunk__18775_18790 = G__18811;
count__18776_18791 = G__18812;
i__18777_18792 = G__18813;
continue;
} else {
var node_18815 = cljs.core.first(seq__18774_18799__$1);
fragment.appendChild(shadow.dom._to_dom(node_18815));


var G__18816 = cljs.core.next(seq__18774_18799__$1);
var G__18817 = null;
var G__18818 = (0);
var G__18819 = (0);
seq__18774_18789 = G__18816;
chunk__18775_18790 = G__18817;
count__18776_18791 = G__18818;
i__18777_18792 = G__18819;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq18770){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18770));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18825_18841 = cljs.core.seq(scripts);
var chunk__18826_18842 = null;
var count__18827_18843 = (0);
var i__18828_18844 = (0);
while(true){
if((i__18828_18844 < count__18827_18843)){
var vec__18830_18845 = chunk__18826_18842.cljs$core$IIndexed$_nth$arity$2(null,i__18828_18844);
var script_tag_18846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18830_18845,(0),null);
var script_body_18847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18830_18845,(1),null);
eval(script_body_18847);


var G__18848 = seq__18825_18841;
var G__18849 = chunk__18826_18842;
var G__18850 = count__18827_18843;
var G__18851 = (i__18828_18844 + (1));
seq__18825_18841 = G__18848;
chunk__18826_18842 = G__18849;
count__18827_18843 = G__18850;
i__18828_18844 = G__18851;
continue;
} else {
var temp__5457__auto___18852 = cljs.core.seq(seq__18825_18841);
if(temp__5457__auto___18852){
var seq__18825_18853__$1 = temp__5457__auto___18852;
if(cljs.core.chunked_seq_QMARK_(seq__18825_18853__$1)){
var c__4351__auto___18854 = cljs.core.chunk_first(seq__18825_18853__$1);
var G__18855 = cljs.core.chunk_rest(seq__18825_18853__$1);
var G__18856 = c__4351__auto___18854;
var G__18857 = cljs.core.count(c__4351__auto___18854);
var G__18858 = (0);
seq__18825_18841 = G__18855;
chunk__18826_18842 = G__18856;
count__18827_18843 = G__18857;
i__18828_18844 = G__18858;
continue;
} else {
var vec__18834_18859 = cljs.core.first(seq__18825_18853__$1);
var script_tag_18860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18834_18859,(0),null);
var script_body_18861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18834_18859,(1),null);
eval(script_body_18861);


var G__18864 = cljs.core.next(seq__18825_18853__$1);
var G__18865 = null;
var G__18866 = (0);
var G__18867 = (0);
seq__18825_18841 = G__18864;
chunk__18826_18842 = G__18865;
count__18827_18843 = G__18866;
i__18828_18844 = G__18867;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__18837){
var vec__18838 = p__18837;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18838,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18838,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__18877 = shadow.dom.dom_node(el);
var G__18878 = cls;
return goog.dom.getAncestorByClass(G__18877,G__18878);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18883 = arguments.length;
switch (G__18883) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__18884 = shadow.dom.dom_node(el);
var G__18885 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__18884,G__18885);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__18886 = shadow.dom.dom_node(el);
var G__18887 = cljs.core.name(tag);
var G__18888 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__18886,G__18887,G__18888);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__18895 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__18895);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__18900 = shadow.dom.dom_node(dom);
var G__18901 = value;
return goog.dom.forms.setValue(G__18900,G__18901);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18908 = cljs.core.seq(style_keys);
var chunk__18909 = null;
var count__18910 = (0);
var i__18911 = (0);
while(true){
if((i__18911 < count__18910)){
var it = chunk__18909.cljs$core$IIndexed$_nth$arity$2(null,i__18911);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18917 = seq__18908;
var G__18918 = chunk__18909;
var G__18919 = count__18910;
var G__18920 = (i__18911 + (1));
seq__18908 = G__18917;
chunk__18909 = G__18918;
count__18910 = G__18919;
i__18911 = G__18920;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18908);
if(temp__5457__auto__){
var seq__18908__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18908__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__18908__$1);
var G__18923 = cljs.core.chunk_rest(seq__18908__$1);
var G__18924 = c__4351__auto__;
var G__18925 = cljs.core.count(c__4351__auto__);
var G__18926 = (0);
seq__18908 = G__18923;
chunk__18909 = G__18924;
count__18910 = G__18925;
i__18911 = G__18926;
continue;
} else {
var it = cljs.core.first(seq__18908__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18931 = cljs.core.next(seq__18908__$1);
var G__18932 = null;
var G__18933 = (0);
var G__18934 = (0);
seq__18908 = G__18931;
chunk__18909 = G__18932;
count__18910 = G__18933;
i__18911 = G__18934;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k18937,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__18943 = k18937;
var G__18943__$1 = (((G__18943 instanceof cljs.core.Keyword))?G__18943.fqn:null);
switch (G__18943__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18937,else__4206__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18936){
var self__ = this;
var G__18936__$1 = this;
return (new cljs.core.RecordIter((0),G__18936__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__18949 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__18949(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18938,other18939){
var self__ = this;
var this18938__$1 = this;
return ((!((other18939 == null))) && ((this18938__$1.constructor === other18939.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18938__$1.x,other18939.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18938__$1.y,other18939.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18938__$1.__extmap,other18939.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__18936){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__18953 = cljs.core.keyword_identical_QMARK_;
var expr__18954 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__18956 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__18957 = expr__18954;
return (pred__18953.cljs$core$IFn$_invoke$arity$2 ? pred__18953.cljs$core$IFn$_invoke$arity$2(G__18956,G__18957) : pred__18953.call(null,G__18956,G__18957));
})())){
return (new shadow.dom.Coordinate(G__18936,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18958 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__18959 = expr__18954;
return (pred__18953.cljs$core$IFn$_invoke$arity$2 ? pred__18953.cljs$core$IFn$_invoke$arity$2(G__18958,G__18959) : pred__18953.call(null,G__18958,G__18959));
})())){
return (new shadow.dom.Coordinate(self__.x,G__18936,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__18936),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__18936){
var self__ = this;
var this__4202__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18936,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18942){
var extmap__4236__auto__ = (function (){var G__18966 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18942,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18942)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18966);
} else {
return G__18966;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18942),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18942),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__18988 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__18988);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__18990 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__18990);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__18992 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__18992);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k18994,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__19001 = k18994;
var G__19001__$1 = (((G__19001 instanceof cljs.core.Keyword))?G__19001.fqn:null);
switch (G__19001__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18994,else__4206__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#shadow.dom.Size{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18993){
var self__ = this;
var G__18993__$1 = this;
return (new cljs.core.RecordIter((0),G__18993__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__19011 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__19011(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18995,other18996){
var self__ = this;
var this18995__$1 = this;
return ((!((other18996 == null))) && ((this18995__$1.constructor === other18996.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18995__$1.w,other18996.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18995__$1.h,other18996.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18995__$1.__extmap,other18996.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__18993){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__19016 = cljs.core.keyword_identical_QMARK_;
var expr__19017 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__19019 = new cljs.core.Keyword(null,"w","w",354169001);
var G__19020 = expr__19017;
return (pred__19016.cljs$core$IFn$_invoke$arity$2 ? pred__19016.cljs$core$IFn$_invoke$arity$2(G__19019,G__19020) : pred__19016.call(null,G__19019,G__19020));
})())){
return (new shadow.dom.Size(G__18993,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19021 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__19022 = expr__19017;
return (pred__19016.cljs$core$IFn$_invoke$arity$2 ? pred__19016.cljs$core$IFn$_invoke$arity$2(G__19021,G__19022) : pred__19016.call(null,G__19021,G__19022));
})())){
return (new shadow.dom.Size(self__.w,G__18993,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__18993),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__18993){
var self__ = this;
var this__4202__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18993,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18997){
var extmap__4236__auto__ = (function (){var G__19024 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18997,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18997)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19024);
} else {
return G__19024;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18997),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18997),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__19031 = shadow.dom.dom_node(el);
return goog.style.getSize(G__19031);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4405__auto__ = opts;
var l__4406__auto__ = a__4405__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4406__auto__)){
var G__19032 = (i + (1));
var G__19033 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19032;
ret = G__19033;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19034){
var vec__19035 = p__19034;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19035,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19035,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__19039 = arguments.length;
switch (G__19039) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__19041_19043 = new_node;
var G__19042_19044 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__19041_19043,G__19042_19044);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__19045_19047 = new_node;
var G__19046_19048 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__19045_19047,G__19046_19048);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19059 = ps;
var G__19060 = (i + (1));
el__$1 = G__19059;
i = G__19060;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__19061 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__19061);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__19073 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__19073);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__19074 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__19074);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__19075 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19075,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19075,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19075,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19079_19093 = cljs.core.seq(props);
var chunk__19080_19094 = null;
var count__19081_19095 = (0);
var i__19082_19096 = (0);
while(true){
if((i__19082_19096 < count__19081_19095)){
var vec__19083_19097 = chunk__19080_19094.cljs$core$IIndexed$_nth$arity$2(null,i__19082_19096);
var k_19098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19083_19097,(0),null);
var v_19099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19083_19097,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_19098);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19098),v_19099);


var G__19108 = seq__19079_19093;
var G__19109 = chunk__19080_19094;
var G__19110 = count__19081_19095;
var G__19111 = (i__19082_19096 + (1));
seq__19079_19093 = G__19108;
chunk__19080_19094 = G__19109;
count__19081_19095 = G__19110;
i__19082_19096 = G__19111;
continue;
} else {
var temp__5457__auto___19112 = cljs.core.seq(seq__19079_19093);
if(temp__5457__auto___19112){
var seq__19079_19113__$1 = temp__5457__auto___19112;
if(cljs.core.chunked_seq_QMARK_(seq__19079_19113__$1)){
var c__4351__auto___19114 = cljs.core.chunk_first(seq__19079_19113__$1);
var G__19115 = cljs.core.chunk_rest(seq__19079_19113__$1);
var G__19116 = c__4351__auto___19114;
var G__19117 = cljs.core.count(c__4351__auto___19114);
var G__19118 = (0);
seq__19079_19093 = G__19115;
chunk__19080_19094 = G__19116;
count__19081_19095 = G__19117;
i__19082_19096 = G__19118;
continue;
} else {
var vec__19086_19119 = cljs.core.first(seq__19079_19113__$1);
var k_19120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19086_19119,(0),null);
var v_19121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19086_19119,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_19120);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19120),v_19121);


var G__19122 = cljs.core.next(seq__19079_19113__$1);
var G__19123 = null;
var G__19124 = (0);
var G__19125 = (0);
seq__19079_19093 = G__19122;
chunk__19080_19094 = G__19123;
count__19081_19095 = G__19124;
i__19082_19096 = G__19125;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__19127 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19127,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19127,(1),null);
var seq__19130_19148 = cljs.core.seq(node_children);
var chunk__19132_19149 = null;
var count__19133_19150 = (0);
var i__19134_19151 = (0);
while(true){
if((i__19134_19151 < count__19133_19150)){
var child_struct_19152 = chunk__19132_19149.cljs$core$IIndexed$_nth$arity$2(null,i__19134_19151);
if(!((child_struct_19152 == null))){
if(typeof child_struct_19152 === 'string'){
var text_19153 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19153),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_19152)].join(''));
} else {
var children_19154 = shadow.dom.svg_node(child_struct_19152);
if(cljs.core.seq_QMARK_(children_19154)){
var seq__19136_19155 = cljs.core.seq(children_19154);
var chunk__19138_19156 = null;
var count__19139_19157 = (0);
var i__19140_19158 = (0);
while(true){
if((i__19140_19158 < count__19139_19157)){
var child_19159 = chunk__19138_19156.cljs$core$IIndexed$_nth$arity$2(null,i__19140_19158);
if(cljs.core.truth_(child_19159)){
node.appendChild(child_19159);


var G__19160 = seq__19136_19155;
var G__19161 = chunk__19138_19156;
var G__19162 = count__19139_19157;
var G__19163 = (i__19140_19158 + (1));
seq__19136_19155 = G__19160;
chunk__19138_19156 = G__19161;
count__19139_19157 = G__19162;
i__19140_19158 = G__19163;
continue;
} else {
var G__19164 = seq__19136_19155;
var G__19165 = chunk__19138_19156;
var G__19166 = count__19139_19157;
var G__19167 = (i__19140_19158 + (1));
seq__19136_19155 = G__19164;
chunk__19138_19156 = G__19165;
count__19139_19157 = G__19166;
i__19140_19158 = G__19167;
continue;
}
} else {
var temp__5457__auto___19168 = cljs.core.seq(seq__19136_19155);
if(temp__5457__auto___19168){
var seq__19136_19169__$1 = temp__5457__auto___19168;
if(cljs.core.chunked_seq_QMARK_(seq__19136_19169__$1)){
var c__4351__auto___19170 = cljs.core.chunk_first(seq__19136_19169__$1);
var G__19171 = cljs.core.chunk_rest(seq__19136_19169__$1);
var G__19172 = c__4351__auto___19170;
var G__19173 = cljs.core.count(c__4351__auto___19170);
var G__19174 = (0);
seq__19136_19155 = G__19171;
chunk__19138_19156 = G__19172;
count__19139_19157 = G__19173;
i__19140_19158 = G__19174;
continue;
} else {
var child_19175 = cljs.core.first(seq__19136_19169__$1);
if(cljs.core.truth_(child_19175)){
node.appendChild(child_19175);


var G__19176 = cljs.core.next(seq__19136_19169__$1);
var G__19177 = null;
var G__19178 = (0);
var G__19179 = (0);
seq__19136_19155 = G__19176;
chunk__19138_19156 = G__19177;
count__19139_19157 = G__19178;
i__19140_19158 = G__19179;
continue;
} else {
var G__19180 = cljs.core.next(seq__19136_19169__$1);
var G__19181 = null;
var G__19182 = (0);
var G__19183 = (0);
seq__19136_19155 = G__19180;
chunk__19138_19156 = G__19181;
count__19139_19157 = G__19182;
i__19140_19158 = G__19183;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19154);
}
}


var G__19184 = seq__19130_19148;
var G__19185 = chunk__19132_19149;
var G__19186 = count__19133_19150;
var G__19187 = (i__19134_19151 + (1));
seq__19130_19148 = G__19184;
chunk__19132_19149 = G__19185;
count__19133_19150 = G__19186;
i__19134_19151 = G__19187;
continue;
} else {
var G__19188 = seq__19130_19148;
var G__19189 = chunk__19132_19149;
var G__19190 = count__19133_19150;
var G__19191 = (i__19134_19151 + (1));
seq__19130_19148 = G__19188;
chunk__19132_19149 = G__19189;
count__19133_19150 = G__19190;
i__19134_19151 = G__19191;
continue;
}
} else {
var temp__5457__auto___19192 = cljs.core.seq(seq__19130_19148);
if(temp__5457__auto___19192){
var seq__19130_19193__$1 = temp__5457__auto___19192;
if(cljs.core.chunked_seq_QMARK_(seq__19130_19193__$1)){
var c__4351__auto___19194 = cljs.core.chunk_first(seq__19130_19193__$1);
var G__19195 = cljs.core.chunk_rest(seq__19130_19193__$1);
var G__19196 = c__4351__auto___19194;
var G__19197 = cljs.core.count(c__4351__auto___19194);
var G__19198 = (0);
seq__19130_19148 = G__19195;
chunk__19132_19149 = G__19196;
count__19133_19150 = G__19197;
i__19134_19151 = G__19198;
continue;
} else {
var child_struct_19199 = cljs.core.first(seq__19130_19193__$1);
if(!((child_struct_19199 == null))){
if(typeof child_struct_19199 === 'string'){
var text_19200 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19200),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_19199)].join(''));
} else {
var children_19201 = shadow.dom.svg_node(child_struct_19199);
if(cljs.core.seq_QMARK_(children_19201)){
var seq__19142_19202 = cljs.core.seq(children_19201);
var chunk__19144_19203 = null;
var count__19145_19204 = (0);
var i__19146_19205 = (0);
while(true){
if((i__19146_19205 < count__19145_19204)){
var child_19206 = chunk__19144_19203.cljs$core$IIndexed$_nth$arity$2(null,i__19146_19205);
if(cljs.core.truth_(child_19206)){
node.appendChild(child_19206);


var G__19207 = seq__19142_19202;
var G__19208 = chunk__19144_19203;
var G__19209 = count__19145_19204;
var G__19210 = (i__19146_19205 + (1));
seq__19142_19202 = G__19207;
chunk__19144_19203 = G__19208;
count__19145_19204 = G__19209;
i__19146_19205 = G__19210;
continue;
} else {
var G__19211 = seq__19142_19202;
var G__19212 = chunk__19144_19203;
var G__19213 = count__19145_19204;
var G__19214 = (i__19146_19205 + (1));
seq__19142_19202 = G__19211;
chunk__19144_19203 = G__19212;
count__19145_19204 = G__19213;
i__19146_19205 = G__19214;
continue;
}
} else {
var temp__5457__auto___19215__$1 = cljs.core.seq(seq__19142_19202);
if(temp__5457__auto___19215__$1){
var seq__19142_19216__$1 = temp__5457__auto___19215__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19142_19216__$1)){
var c__4351__auto___19217 = cljs.core.chunk_first(seq__19142_19216__$1);
var G__19218 = cljs.core.chunk_rest(seq__19142_19216__$1);
var G__19219 = c__4351__auto___19217;
var G__19220 = cljs.core.count(c__4351__auto___19217);
var G__19221 = (0);
seq__19142_19202 = G__19218;
chunk__19144_19203 = G__19219;
count__19145_19204 = G__19220;
i__19146_19205 = G__19221;
continue;
} else {
var child_19222 = cljs.core.first(seq__19142_19216__$1);
if(cljs.core.truth_(child_19222)){
node.appendChild(child_19222);


var G__19223 = cljs.core.next(seq__19142_19216__$1);
var G__19224 = null;
var G__19225 = (0);
var G__19226 = (0);
seq__19142_19202 = G__19223;
chunk__19144_19203 = G__19224;
count__19145_19204 = G__19225;
i__19146_19205 = G__19226;
continue;
} else {
var G__19227 = cljs.core.next(seq__19142_19216__$1);
var G__19228 = null;
var G__19229 = (0);
var G__19230 = (0);
seq__19142_19202 = G__19227;
chunk__19144_19203 = G__19228;
count__19145_19204 = G__19229;
i__19146_19205 = G__19230;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19201);
}
}


var G__19231 = cljs.core.next(seq__19130_19193__$1);
var G__19232 = null;
var G__19233 = (0);
var G__19234 = (0);
seq__19130_19148 = G__19231;
chunk__19132_19149 = G__19232;
count__19133_19150 = G__19233;
i__19134_19151 = G__19234;
continue;
} else {
var G__19235 = cljs.core.next(seq__19130_19193__$1);
var G__19236 = null;
var G__19237 = (0);
var G__19238 = (0);
seq__19130_19148 = G__19235;
chunk__19132_19149 = G__19236;
count__19133_19150 = G__19237;
i__19134_19151 = G__19238;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__19239_19245 = shadow.dom._to_svg;
var G__19240_19246 = "string";
var G__19241_19247 = ((function (G__19239_19245,G__19240_19246){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__19239_19245,G__19240_19246))
;
goog.object.set(G__19239_19245,G__19240_19246,G__19241_19247);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__19242_19248 = shadow.dom._to_svg;
var G__19243_19249 = "null";
var G__19244_19250 = ((function (G__19242_19248,G__19243_19249){
return (function (_){
return null;
});})(G__19242_19248,G__19243_19249))
;
goog.object.set(G__19242_19248,G__19243_19249,G__19244_19250);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19258 = arguments.length;
var i__4532__auto___19259 = (0);
while(true){
if((i__4532__auto___19259 < len__4531__auto___19258)){
args__4534__auto__.push((arguments[i__4532__auto___19259]));

var G__19260 = (i__4532__auto___19259 + (1));
i__4532__auto___19259 = G__19260;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq19253){
var G__19254 = cljs.core.first(seq19253);
var seq19253__$1 = cljs.core.next(seq19253);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19254,seq19253__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__19271 = arguments.length;
switch (G__19271) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__19273_19297 = shadow.dom.dom_node(el);
var G__19274_19298 = cljs.core.name(event);
var G__19275_19299 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__19273_19297,G__19274_19298,G__19275_19299) : shadow.dom.dom_listen.call(null,G__19273_19297,G__19274_19298,G__19275_19299));

if(cljs.core.truth_((function (){var and__3938__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__3938__auto__)){
return !(once_or_cleanup === true);
} else {
return and__3938__auto__;
}
})())){
var c__10479__auto___19300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10479__auto___19300,buf,chan,event_fn){
return (function (){
var f__10480__auto__ = (function (){var switch__10456__auto__ = ((function (c__10479__auto___19300,buf,chan,event_fn){
return (function (state_19281){
var state_val_19282 = (state_19281[(1)]);
if((state_val_19282 === (1))){
var state_19281__$1 = state_19281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19281__$1,(2),once_or_cleanup);
} else {
if((state_val_19282 === (2))){
var inst_19278 = (state_19281[(2)]);
var inst_19279 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_19281__$1 = (function (){var statearr_19284 = state_19281;
(statearr_19284[(7)] = inst_19278);

return statearr_19284;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19281__$1,inst_19279);
} else {
return null;
}
}
});})(c__10479__auto___19300,buf,chan,event_fn))
;
return ((function (switch__10456__auto__,c__10479__auto___19300,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__10457__auto__ = null;
var shadow$dom$state_machine__10457__auto____0 = (function (){
var statearr_19287 = [null,null,null,null,null,null,null,null];
(statearr_19287[(0)] = shadow$dom$state_machine__10457__auto__);

(statearr_19287[(1)] = (1));

return statearr_19287;
});
var shadow$dom$state_machine__10457__auto____1 = (function (state_19281){
while(true){
var ret_value__10458__auto__ = (function (){try{while(true){
var result__10459__auto__ = switch__10456__auto__(state_19281);
if(cljs.core.keyword_identical_QMARK_(result__10459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10459__auto__;
}
break;
}
}catch (e19291){if((e19291 instanceof Object)){
var ex__10460__auto__ = e19291;
var statearr_19292_19301 = state_19281;
(statearr_19292_19301[(5)] = ex__10460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19291;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19302 = state_19281;
state_19281 = G__19302;
continue;
} else {
return ret_value__10458__auto__;
}
break;
}
});
shadow$dom$state_machine__10457__auto__ = function(state_19281){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__10457__auto____0.call(this);
case 1:
return shadow$dom$state_machine__10457__auto____1.call(this,state_19281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__10457__auto____0;
shadow$dom$state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__10457__auto____1;
return shadow$dom$state_machine__10457__auto__;
})()
;})(switch__10456__auto__,c__10479__auto___19300,buf,chan,event_fn))
})();
var state__10481__auto__ = (function (){var statearr_19294 = (f__10480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10480__auto__.cljs$core$IFn$_invoke$arity$0() : f__10480__auto__.call(null));
(statearr_19294[(6)] = c__10479__auto___19300);

return statearr_19294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10481__auto__);
});})(c__10479__auto___19300,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
