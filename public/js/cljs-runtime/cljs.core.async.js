goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15594 = arguments.length;
switch (G__15594) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15595 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15595 = (function (f,blockable,meta15596){
this.f = f;
this.blockable = blockable;
this.meta15596 = meta15596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15597,meta15596__$1){
var self__ = this;
var _15597__$1 = this;
return (new cljs.core.async.t_cljs$core$async15595(self__.f,self__.blockable,meta15596__$1));
});

cljs.core.async.t_cljs$core$async15595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15597){
var self__ = this;
var _15597__$1 = this;
return self__.meta15596;
});

cljs.core.async.t_cljs$core$async15595.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15595.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15595.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15595.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15596","meta15596",-2126394538,null)], null);
});

cljs.core.async.t_cljs$core$async15595.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15595";

cljs.core.async.t_cljs$core$async15595.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async15595");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15595.
 */
cljs.core.async.__GT_t_cljs$core$async15595 = (function cljs$core$async$__GT_t_cljs$core$async15595(f__$1,blockable__$1,meta15596){
return (new cljs.core.async.t_cljs$core$async15595(f__$1,blockable__$1,meta15596));
});

}

return (new cljs.core.async.t_cljs$core$async15595(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15619 = arguments.length;
switch (G__15619) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15622 = arguments.length;
switch (G__15622) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15625 = arguments.length;
switch (G__15625) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15628 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15628) : fn1.call(null,val_15628));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15628,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15628) : fn1.call(null,val_15628));
});})(val_15628,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15631 = arguments.length;
switch (G__15631) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___15633 = n;
var x_15634 = (0);
while(true){
if((x_15634 < n__4408__auto___15633)){
(a[x_15634] = (0));

var G__15635 = (x_15634 + (1));
x_15634 = G__15635;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__15636 = (i + (1));
i = G__15636;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15637 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15637 = (function (flag,meta15638){
this.flag = flag;
this.meta15638 = meta15638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15639,meta15638__$1){
var self__ = this;
var _15639__$1 = this;
return (new cljs.core.async.t_cljs$core$async15637(self__.flag,meta15638__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15637.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15639){
var self__ = this;
var _15639__$1 = this;
return self__.meta15638;
});})(flag))
;

cljs.core.async.t_cljs$core$async15637.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15637.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async15637.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15637.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15637.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15638","meta15638",2078637506,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15637.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15637";

cljs.core.async.t_cljs$core$async15637.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async15637");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15637.
 */
cljs.core.async.__GT_t_cljs$core$async15637 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15637(flag__$1,meta15638){
return (new cljs.core.async.t_cljs$core$async15637(flag__$1,meta15638));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15637(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15645 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15645 = (function (flag,cb,meta15646){
this.flag = flag;
this.cb = cb;
this.meta15646 = meta15646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15647,meta15646__$1){
var self__ = this;
var _15647__$1 = this;
return (new cljs.core.async.t_cljs$core$async15645(self__.flag,self__.cb,meta15646__$1));
});

cljs.core.async.t_cljs$core$async15645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15647){
var self__ = this;
var _15647__$1 = this;
return self__.meta15646;
});

cljs.core.async.t_cljs$core$async15645.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15645.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15645.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15645.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15646","meta15646",-1559815913,null)], null);
});

cljs.core.async.t_cljs$core$async15645.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15645";

cljs.core.async.t_cljs$core$async15645.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async15645");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15645.
 */
cljs.core.async.__GT_t_cljs$core$async15645 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15645(flag__$1,cb__$1,meta15646){
return (new cljs.core.async.t_cljs$core$async15645(flag__$1,cb__$1,meta15646));
});

}

return (new cljs.core.async.t_cljs$core$async15645(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15650_SHARP_){
var G__15652 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15650_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15652) : fret.call(null,G__15652));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15651_SHARP_){
var G__15653 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15651_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15653) : fret.call(null,G__15653));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15665 = (i + (1));
i = G__15665;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15672 = arguments.length;
var i__4532__auto___15673 = (0);
while(true){
if((i__4532__auto___15673 < len__4531__auto___15672)){
args__4534__auto__.push((arguments[i__4532__auto___15673]));

var G__15674 = (i__4532__auto___15673 + (1));
i__4532__auto___15673 = G__15674;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15669){
var map__15670 = p__15669;
var map__15670__$1 = ((((!((map__15670 == null)))?(((((map__15670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15670):map__15670);
var opts = map__15670__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15666){
var G__15667 = cljs.core.first(seq15666);
var seq15666__$1 = cljs.core.next(seq15666);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15667,seq15666__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15677 = arguments.length;
switch (G__15677) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10479__auto___15746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10479__auto___15746){
return (function (){
var f__10480__auto__ = (function (){var switch__10456__auto__ = ((function (c__10479__auto___15746){
return (function (state_15707){
var state_val_15708 = (state_15707[(1)]);
if((state_val_15708 === (7))){
var inst_15703 = (state_15707[(2)]);
var state_15707__$1 = state_15707;
var statearr_15709_15747 = state_15707__$1;
(statearr_15709_15747[(2)] = inst_15703);

(statearr_15709_15747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15708 === (1))){
var state_15707__$1 = state_15707;
var statearr_15710_15748 = state_15707__$1;
(statearr_15710_15748[(2)] = null);

(statearr_15710_15748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15708 === (4))){
var inst_15686 = (state_15707[(7)]);
var inst_15686__$1 = (state_15707[(2)]);
var inst_15687 = (inst_15686__$1 == null);
var state_15707__$1 = (function (){var statearr_15711 = state_15707;
(statearr_15711[(7)] = inst_15686__$1);

return statearr_15711;
})();
if(cljs.core.truth_(inst_15687)){
var statearr_15712_15749 = state_15707__$1;
(statearr_15712_15749[(1)] = (5));

} else {
var statearr_15713_15750 = state_15707__$1;
(statearr_15713_15750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15708 === (13))){
var state_15707__$1 = state_15707;
var statearr_15714_15751 = state_15707__$1;
(statearr_15714_15751[(2)] = null);

(statearr_15714_15751[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15708 === (6))){
var inst_15686 = (state_15707[(7)]);
var state_15707__$1 = state_15707;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15707__$1,(11),to,inst_15686);
} else {
if((state_val_15708 === (3))){
var inst_15705 = (state_15707[(2)]);
var state_15707__$1 = state_15707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15707__$1,inst_15705);
} else {
if((state_val_15708 === (12))){
var state_15707__$1 = state_15707;
var statearr_15715_15752 = state_15707__$1;
(statearr_15715_15752[(2)] = null);

(statearr_15715_15752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15708 === (2))){
var state_15707__$1 = state_15707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15707__$1,(4),from);
} else {
if((state_val_15708 === (11))){
var inst_15696 = (state_15707[(2)]);
var state_15707__$1 = state_15707;
if(cljs.core.truth_(inst_15696)){
var statearr_15716_15753 = state_15707__$1;
(statearr_15716_15753[(1)] = (12));

} else {
var statearr_15717_15754 = state_15707__$1;
(statearr_15717_15754[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15708 === (9))){
var state_15707__$1 = state_15707;
var statearr_15718_15755 = state_15707__$1;
(statearr_15718_15755[(2)] = null);

(statearr_15718_15755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15708 === (5))){
var state_15707__$1 = state_15707;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15719_15757 = state_15707__$1;
(statearr_15719_15757[(1)] = (8));

} else {
var statearr_15720_15758 = state_15707__$1;
(statearr_15720_15758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15708 === (14))){
var inst_15701 = (state_15707[(2)]);
var state_15707__$1 = state_15707;
var statearr_15737_15759 = state_15707__$1;
(statearr_15737_15759[(2)] = inst_15701);

(statearr_15737_15759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15708 === (10))){
var inst_15693 = (state_15707[(2)]);
var state_15707__$1 = state_15707;
var statearr_15738_15760 = state_15707__$1;
(statearr_15738_15760[(2)] = inst_15693);

(statearr_15738_15760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15708 === (8))){
var inst_15690 = cljs.core.async.close_BANG_(to);
var state_15707__$1 = state_15707;
var statearr_15739_15761 = state_15707__$1;
(statearr_15739_15761[(2)] = inst_15690);

(statearr_15739_15761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10479__auto___15746))
;
return ((function (switch__10456__auto__,c__10479__auto___15746){
return (function() {
var cljs$core$async$state_machine__10457__auto__ = null;
var cljs$core$async$state_machine__10457__auto____0 = (function (){
var statearr_15740 = [null,null,null,null,null,null,null,null];
(statearr_15740[(0)] = cljs$core$async$state_machine__10457__auto__);

(statearr_15740[(1)] = (1));

return statearr_15740;
});
var cljs$core$async$state_machine__10457__auto____1 = (function (state_15707){
while(true){
var ret_value__10458__auto__ = (function (){try{while(true){
var result__10459__auto__ = switch__10456__auto__(state_15707);
if(cljs.core.keyword_identical_QMARK_(result__10459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10459__auto__;
}
break;
}
}catch (e15741){if((e15741 instanceof Object)){
var ex__10460__auto__ = e15741;
var statearr_15742_15762 = state_15707;
(statearr_15742_15762[(5)] = ex__10460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15741;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15763 = state_15707;
state_15707 = G__15763;
continue;
} else {
return ret_value__10458__auto__;
}
break;
}
});
cljs$core$async$state_machine__10457__auto__ = function(state_15707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10457__auto____1.call(this,state_15707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10457__auto____0;
cljs$core$async$state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10457__auto____1;
return cljs$core$async$state_machine__10457__auto__;
})()
;})(switch__10456__auto__,c__10479__auto___15746))
})();
var state__10481__auto__ = (function (){var statearr_15744 = (f__10480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10480__auto__.cljs$core$IFn$_invoke$arity$0() : f__10480__auto__.call(null));
(statearr_15744[(6)] = c__10479__auto___15746);

return statearr_15744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10481__auto__);
});})(c__10479__auto___15746))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__15764){
var vec__15765 = p__15764;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15765,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15765,(1),null);
var job = vec__15765;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10479__auto___15979 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10479__auto___15979,res,vec__15765,v,p,job,jobs,results){
return (function (){
var f__10480__auto__ = (function (){var switch__10456__auto__ = ((function (c__10479__auto___15979,res,vec__15765,v,p,job,jobs,results){
return (function (state_15772){
var state_val_15773 = (state_15772[(1)]);
if((state_val_15773 === (1))){
var state_15772__$1 = state_15772;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15772__$1,(2),res,v);
} else {
if((state_val_15773 === (2))){
var inst_15769 = (state_15772[(2)]);
var inst_15770 = cljs.core.async.close_BANG_(res);
var state_15772__$1 = (function (){var statearr_15774 = state_15772;
(statearr_15774[(7)] = inst_15769);

return statearr_15774;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15772__$1,inst_15770);
} else {
return null;
}
}
});})(c__10479__auto___15979,res,vec__15765,v,p,job,jobs,results))
;
return ((function (switch__10456__auto__,c__10479__auto___15979,res,vec__15765,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____0 = (function (){
var statearr_15775 = [null,null,null,null,null,null,null,null];
(statearr_15775[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__);

(statearr_15775[(1)] = (1));

return statearr_15775;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____1 = (function (state_15772){
while(true){
var ret_value__10458__auto__ = (function (){try{while(true){
var result__10459__auto__ = switch__10456__auto__(state_15772);
if(cljs.core.keyword_identical_QMARK_(result__10459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10459__auto__;
}
break;
}
}catch (e15776){if((e15776 instanceof Object)){
var ex__10460__auto__ = e15776;
var statearr_15777_15980 = state_15772;
(statearr_15777_15980[(5)] = ex__10460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15776;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15981 = state_15772;
state_15772 = G__15981;
continue;
} else {
return ret_value__10458__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__ = function(state_15772){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____1.call(this,state_15772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__;
})()
;})(switch__10456__auto__,c__10479__auto___15979,res,vec__15765,v,p,job,jobs,results))
})();
var state__10481__auto__ = (function (){var statearr_15778 = (f__10480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10480__auto__.cljs$core$IFn$_invoke$arity$0() : f__10480__auto__.call(null));
(statearr_15778[(6)] = c__10479__auto___15979);

return statearr_15778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10481__auto__);
});})(c__10479__auto___15979,res,vec__15765,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15779){
var vec__15780 = p__15779;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15780,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15780,(1),null);
var job = vec__15780;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___15982 = n;
var __15983 = (0);
while(true){
if((__15983 < n__4408__auto___15982)){
var G__15785_15984 = type;
var G__15785_15985__$1 = (((G__15785_15984 instanceof cljs.core.Keyword))?G__15785_15984.fqn:null);
switch (G__15785_15985__$1) {
case "compute":
var c__10479__auto___15987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15983,c__10479__auto___15987,G__15785_15984,G__15785_15985__$1,n__4408__auto___15982,jobs,results,process,async){
return (function (){
var f__10480__auto__ = (function (){var switch__10456__auto__ = ((function (__15983,c__10479__auto___15987,G__15785_15984,G__15785_15985__$1,n__4408__auto___15982,jobs,results,process,async){
return (function (state_15798){
var state_val_15799 = (state_15798[(1)]);
if((state_val_15799 === (1))){
var state_15798__$1 = state_15798;
var statearr_15800_15989 = state_15798__$1;
(statearr_15800_15989[(2)] = null);

(statearr_15800_15989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15799 === (2))){
var state_15798__$1 = state_15798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15798__$1,(4),jobs);
} else {
if((state_val_15799 === (3))){
var inst_15796 = (state_15798[(2)]);
var state_15798__$1 = state_15798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15798__$1,inst_15796);
} else {
if((state_val_15799 === (4))){
var inst_15788 = (state_15798[(2)]);
var inst_15789 = process(inst_15788);
var state_15798__$1 = state_15798;
if(cljs.core.truth_(inst_15789)){
var statearr_15807_15990 = state_15798__$1;
(statearr_15807_15990[(1)] = (5));

} else {
var statearr_15808_15991 = state_15798__$1;
(statearr_15808_15991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15799 === (5))){
var state_15798__$1 = state_15798;
var statearr_15809_15992 = state_15798__$1;
(statearr_15809_15992[(2)] = null);

(statearr_15809_15992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15799 === (6))){
var state_15798__$1 = state_15798;
var statearr_15810_15993 = state_15798__$1;
(statearr_15810_15993[(2)] = null);

(statearr_15810_15993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15799 === (7))){
var inst_15794 = (state_15798[(2)]);
var state_15798__$1 = state_15798;
var statearr_15815_15994 = state_15798__$1;
(statearr_15815_15994[(2)] = inst_15794);

(statearr_15815_15994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15983,c__10479__auto___15987,G__15785_15984,G__15785_15985__$1,n__4408__auto___15982,jobs,results,process,async))
;
return ((function (__15983,switch__10456__auto__,c__10479__auto___15987,G__15785_15984,G__15785_15985__$1,n__4408__auto___15982,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____0 = (function (){
var statearr_15816 = [null,null,null,null,null,null,null];
(statearr_15816[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__);

(statearr_15816[(1)] = (1));

return statearr_15816;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____1 = (function (state_15798){
while(true){
var ret_value__10458__auto__ = (function (){try{while(true){
var result__10459__auto__ = switch__10456__auto__(state_15798);
if(cljs.core.keyword_identical_QMARK_(result__10459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10459__auto__;
}
break;
}
}catch (e15822){if((e15822 instanceof Object)){
var ex__10460__auto__ = e15822;
var statearr_15825_15996 = state_15798;
(statearr_15825_15996[(5)] = ex__10460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15822;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15997 = state_15798;
state_15798 = G__15997;
continue;
} else {
return ret_value__10458__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__ = function(state_15798){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____1.call(this,state_15798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__;
})()
;})(__15983,switch__10456__auto__,c__10479__auto___15987,G__15785_15984,G__15785_15985__$1,n__4408__auto___15982,jobs,results,process,async))
})();
var state__10481__auto__ = (function (){var statearr_15826 = (f__10480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10480__auto__.cljs$core$IFn$_invoke$arity$0() : f__10480__auto__.call(null));
(statearr_15826[(6)] = c__10479__auto___15987);

return statearr_15826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10481__auto__);
});})(__15983,c__10479__auto___15987,G__15785_15984,G__15785_15985__$1,n__4408__auto___15982,jobs,results,process,async))
);


break;
case "async":
var c__10479__auto___15998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15983,c__10479__auto___15998,G__15785_15984,G__15785_15985__$1,n__4408__auto___15982,jobs,results,process,async){
return (function (){
var f__10480__auto__ = (function (){var switch__10456__auto__ = ((function (__15983,c__10479__auto___15998,G__15785_15984,G__15785_15985__$1,n__4408__auto___15982,jobs,results,process,async){
return (function (state_15839){
var state_val_15840 = (state_15839[(1)]);
if((state_val_15840 === (1))){
var state_15839__$1 = state_15839;
var statearr_15841_15999 = state_15839__$1;
(statearr_15841_15999[(2)] = null);

(statearr_15841_15999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15840 === (2))){
var state_15839__$1 = state_15839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15839__$1,(4),jobs);
} else {
if((state_val_15840 === (3))){
var inst_15837 = (state_15839[(2)]);
var state_15839__$1 = state_15839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15839__$1,inst_15837);
} else {
if((state_val_15840 === (4))){
var inst_15829 = (state_15839[(2)]);
var inst_15830 = async(inst_15829);
var state_15839__$1 = state_15839;
if(cljs.core.truth_(inst_15830)){
var statearr_15842_16000 = state_15839__$1;
(statearr_15842_16000[(1)] = (5));

} else {
var statearr_15843_16001 = state_15839__$1;
(statearr_15843_16001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15840 === (5))){
var state_15839__$1 = state_15839;
var statearr_15844_16002 = state_15839__$1;
(statearr_15844_16002[(2)] = null);

(statearr_15844_16002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15840 === (6))){
var state_15839__$1 = state_15839;
var statearr_15845_16003 = state_15839__$1;
(statearr_15845_16003[(2)] = null);

(statearr_15845_16003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15840 === (7))){
var inst_15835 = (state_15839[(2)]);
var state_15839__$1 = state_15839;
var statearr_15846_16004 = state_15839__$1;
(statearr_15846_16004[(2)] = inst_15835);

(statearr_15846_16004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15983,c__10479__auto___15998,G__15785_15984,G__15785_15985__$1,n__4408__auto___15982,jobs,results,process,async))
;
return ((function (__15983,switch__10456__auto__,c__10479__auto___15998,G__15785_15984,G__15785_15985__$1,n__4408__auto___15982,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____0 = (function (){
var statearr_15847 = [null,null,null,null,null,null,null];
(statearr_15847[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__);

(statearr_15847[(1)] = (1));

return statearr_15847;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____1 = (function (state_15839){
while(true){
var ret_value__10458__auto__ = (function (){try{while(true){
var result__10459__auto__ = switch__10456__auto__(state_15839);
if(cljs.core.keyword_identical_QMARK_(result__10459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10459__auto__;
}
break;
}
}catch (e15848){if((e15848 instanceof Object)){
var ex__10460__auto__ = e15848;
var statearr_15849_16005 = state_15839;
(statearr_15849_16005[(5)] = ex__10460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15848;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16006 = state_15839;
state_15839 = G__16006;
continue;
} else {
return ret_value__10458__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__ = function(state_15839){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____1.call(this,state_15839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__;
})()
;})(__15983,switch__10456__auto__,c__10479__auto___15998,G__15785_15984,G__15785_15985__$1,n__4408__auto___15982,jobs,results,process,async))
})();
var state__10481__auto__ = (function (){var statearr_15850 = (f__10480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10480__auto__.cljs$core$IFn$_invoke$arity$0() : f__10480__auto__.call(null));
(statearr_15850[(6)] = c__10479__auto___15998);

return statearr_15850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10481__auto__);
});})(__15983,c__10479__auto___15998,G__15785_15984,G__15785_15985__$1,n__4408__auto___15982,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15785_15985__$1)].join('')));

}

var G__16008 = (__15983 + (1));
__15983 = G__16008;
continue;
} else {
}
break;
}

var c__10479__auto___16009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10479__auto___16009,jobs,results,process,async){
return (function (){
var f__10480__auto__ = (function (){var switch__10456__auto__ = ((function (c__10479__auto___16009,jobs,results,process,async){
return (function (state_15872){
var state_val_15873 = (state_15872[(1)]);
if((state_val_15873 === (1))){
var state_15872__$1 = state_15872;
var statearr_15876_16010 = state_15872__$1;
(statearr_15876_16010[(2)] = null);

(statearr_15876_16010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15873 === (2))){
var state_15872__$1 = state_15872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15872__$1,(4),from);
} else {
if((state_val_15873 === (3))){
var inst_15870 = (state_15872[(2)]);
var state_15872__$1 = state_15872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15872__$1,inst_15870);
} else {
if((state_val_15873 === (4))){
var inst_15853 = (state_15872[(7)]);
var inst_15853__$1 = (state_15872[(2)]);
var inst_15854 = (inst_15853__$1 == null);
var state_15872__$1 = (function (){var statearr_15881 = state_15872;
(statearr_15881[(7)] = inst_15853__$1);

return statearr_15881;
})();
if(cljs.core.truth_(inst_15854)){
var statearr_15882_16011 = state_15872__$1;
(statearr_15882_16011[(1)] = (5));

} else {
var statearr_15883_16012 = state_15872__$1;
(statearr_15883_16012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15873 === (5))){
var inst_15856 = cljs.core.async.close_BANG_(jobs);
var state_15872__$1 = state_15872;
var statearr_15884_16013 = state_15872__$1;
(statearr_15884_16013[(2)] = inst_15856);

(statearr_15884_16013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15873 === (6))){
var inst_15858 = (state_15872[(8)]);
var inst_15853 = (state_15872[(7)]);
var inst_15858__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15859 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15860 = [inst_15853,inst_15858__$1];
var inst_15861 = (new cljs.core.PersistentVector(null,2,(5),inst_15859,inst_15860,null));
var state_15872__$1 = (function (){var statearr_15885 = state_15872;
(statearr_15885[(8)] = inst_15858__$1);

return statearr_15885;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15872__$1,(8),jobs,inst_15861);
} else {
if((state_val_15873 === (7))){
var inst_15868 = (state_15872[(2)]);
var state_15872__$1 = state_15872;
var statearr_15886_16014 = state_15872__$1;
(statearr_15886_16014[(2)] = inst_15868);

(statearr_15886_16014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15873 === (8))){
var inst_15858 = (state_15872[(8)]);
var inst_15863 = (state_15872[(2)]);
var state_15872__$1 = (function (){var statearr_15887 = state_15872;
(statearr_15887[(9)] = inst_15863);

return statearr_15887;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15872__$1,(9),results,inst_15858);
} else {
if((state_val_15873 === (9))){
var inst_15865 = (state_15872[(2)]);
var state_15872__$1 = (function (){var statearr_15888 = state_15872;
(statearr_15888[(10)] = inst_15865);

return statearr_15888;
})();
var statearr_15889_16017 = state_15872__$1;
(statearr_15889_16017[(2)] = null);

(statearr_15889_16017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__10479__auto___16009,jobs,results,process,async))
;
return ((function (switch__10456__auto__,c__10479__auto___16009,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____0 = (function (){
var statearr_15890 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15890[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__);

(statearr_15890[(1)] = (1));

return statearr_15890;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____1 = (function (state_15872){
while(true){
var ret_value__10458__auto__ = (function (){try{while(true){
var result__10459__auto__ = switch__10456__auto__(state_15872);
if(cljs.core.keyword_identical_QMARK_(result__10459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10459__auto__;
}
break;
}
}catch (e15891){if((e15891 instanceof Object)){
var ex__10460__auto__ = e15891;
var statearr_15892_16018 = state_15872;
(statearr_15892_16018[(5)] = ex__10460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15891;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16019 = state_15872;
state_15872 = G__16019;
continue;
} else {
return ret_value__10458__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__ = function(state_15872){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____1.call(this,state_15872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__;
})()
;})(switch__10456__auto__,c__10479__auto___16009,jobs,results,process,async))
})();
var state__10481__auto__ = (function (){var statearr_15893 = (f__10480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10480__auto__.cljs$core$IFn$_invoke$arity$0() : f__10480__auto__.call(null));
(statearr_15893[(6)] = c__10479__auto___16009);

return statearr_15893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10481__auto__);
});})(c__10479__auto___16009,jobs,results,process,async))
);


var c__10479__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10479__auto__,jobs,results,process,async){
return (function (){
var f__10480__auto__ = (function (){var switch__10456__auto__ = ((function (c__10479__auto__,jobs,results,process,async){
return (function (state_15934){
var state_val_15935 = (state_15934[(1)]);
if((state_val_15935 === (7))){
var inst_15929 = (state_15934[(2)]);
var state_15934__$1 = state_15934;
var statearr_15940_16030 = state_15934__$1;
(statearr_15940_16030[(2)] = inst_15929);

(statearr_15940_16030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15935 === (20))){
var state_15934__$1 = state_15934;
var statearr_15941_16031 = state_15934__$1;
(statearr_15941_16031[(2)] = null);

(statearr_15941_16031[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15935 === (1))){
var state_15934__$1 = state_15934;
var statearr_15946_16032 = state_15934__$1;
(statearr_15946_16032[(2)] = null);

(statearr_15946_16032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15935 === (4))){
var inst_15896 = (state_15934[(7)]);
var inst_15896__$1 = (state_15934[(2)]);
var inst_15897 = (inst_15896__$1 == null);
var state_15934__$1 = (function (){var statearr_15949 = state_15934;
(statearr_15949[(7)] = inst_15896__$1);

return statearr_15949;
})();
if(cljs.core.truth_(inst_15897)){
var statearr_15950_16033 = state_15934__$1;
(statearr_15950_16033[(1)] = (5));

} else {
var statearr_15951_16034 = state_15934__$1;
(statearr_15951_16034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15935 === (15))){
var inst_15910 = (state_15934[(8)]);
var state_15934__$1 = state_15934;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15934__$1,(18),to,inst_15910);
} else {
if((state_val_15935 === (21))){
var inst_15924 = (state_15934[(2)]);
var state_15934__$1 = state_15934;
var statearr_15953_16035 = state_15934__$1;
(statearr_15953_16035[(2)] = inst_15924);

(statearr_15953_16035[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15935 === (13))){
var inst_15926 = (state_15934[(2)]);
var state_15934__$1 = (function (){var statearr_15958 = state_15934;
(statearr_15958[(9)] = inst_15926);

return statearr_15958;
})();
var statearr_15959_16036 = state_15934__$1;
(statearr_15959_16036[(2)] = null);

(statearr_15959_16036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15935 === (6))){
var inst_15896 = (state_15934[(7)]);
var state_15934__$1 = state_15934;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15934__$1,(11),inst_15896);
} else {
if((state_val_15935 === (17))){
var inst_15919 = (state_15934[(2)]);
var state_15934__$1 = state_15934;
if(cljs.core.truth_(inst_15919)){
var statearr_15960_16037 = state_15934__$1;
(statearr_15960_16037[(1)] = (19));

} else {
var statearr_15961_16038 = state_15934__$1;
(statearr_15961_16038[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15935 === (3))){
var inst_15931 = (state_15934[(2)]);
var state_15934__$1 = state_15934;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15934__$1,inst_15931);
} else {
if((state_val_15935 === (12))){
var inst_15906 = (state_15934[(10)]);
var state_15934__$1 = state_15934;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15934__$1,(14),inst_15906);
} else {
if((state_val_15935 === (2))){
var state_15934__$1 = state_15934;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15934__$1,(4),results);
} else {
if((state_val_15935 === (19))){
var state_15934__$1 = state_15934;
var statearr_15962_16039 = state_15934__$1;
(statearr_15962_16039[(2)] = null);

(statearr_15962_16039[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15935 === (11))){
var inst_15906 = (state_15934[(2)]);
var state_15934__$1 = (function (){var statearr_15963 = state_15934;
(statearr_15963[(10)] = inst_15906);

return statearr_15963;
})();
var statearr_15964_16040 = state_15934__$1;
(statearr_15964_16040[(2)] = null);

(statearr_15964_16040[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15935 === (9))){
var state_15934__$1 = state_15934;
var statearr_15965_16041 = state_15934__$1;
(statearr_15965_16041[(2)] = null);

(statearr_15965_16041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15935 === (5))){
var state_15934__$1 = state_15934;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15966_16043 = state_15934__$1;
(statearr_15966_16043[(1)] = (8));

} else {
var statearr_15967_16044 = state_15934__$1;
(statearr_15967_16044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15935 === (14))){
var inst_15910 = (state_15934[(8)]);
var inst_15913 = (state_15934[(11)]);
var inst_15910__$1 = (state_15934[(2)]);
var inst_15912 = (inst_15910__$1 == null);
var inst_15913__$1 = cljs.core.not(inst_15912);
var state_15934__$1 = (function (){var statearr_15968 = state_15934;
(statearr_15968[(8)] = inst_15910__$1);

(statearr_15968[(11)] = inst_15913__$1);

return statearr_15968;
})();
if(inst_15913__$1){
var statearr_15969_16045 = state_15934__$1;
(statearr_15969_16045[(1)] = (15));

} else {
var statearr_15970_16046 = state_15934__$1;
(statearr_15970_16046[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15935 === (16))){
var inst_15913 = (state_15934[(11)]);
var state_15934__$1 = state_15934;
var statearr_15971_16047 = state_15934__$1;
(statearr_15971_16047[(2)] = inst_15913);

(statearr_15971_16047[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15935 === (10))){
var inst_15903 = (state_15934[(2)]);
var state_15934__$1 = state_15934;
var statearr_15972_16048 = state_15934__$1;
(statearr_15972_16048[(2)] = inst_15903);

(statearr_15972_16048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15935 === (18))){
var inst_15916 = (state_15934[(2)]);
var state_15934__$1 = state_15934;
var statearr_15973_16049 = state_15934__$1;
(statearr_15973_16049[(2)] = inst_15916);

(statearr_15973_16049[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15935 === (8))){
var inst_15900 = cljs.core.async.close_BANG_(to);
var state_15934__$1 = state_15934;
var statearr_15974_16050 = state_15934__$1;
(statearr_15974_16050[(2)] = inst_15900);

(statearr_15974_16050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10479__auto__,jobs,results,process,async))
;
return ((function (switch__10456__auto__,c__10479__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____0 = (function (){
var statearr_15975 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15975[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__);

(statearr_15975[(1)] = (1));

return statearr_15975;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____1 = (function (state_15934){
while(true){
var ret_value__10458__auto__ = (function (){try{while(true){
var result__10459__auto__ = switch__10456__auto__(state_15934);
if(cljs.core.keyword_identical_QMARK_(result__10459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10459__auto__;
}
break;
}
}catch (e15976){if((e15976 instanceof Object)){
var ex__10460__auto__ = e15976;
var statearr_15977_16051 = state_15934;
(statearr_15977_16051[(5)] = ex__10460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15976;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16052 = state_15934;
state_15934 = G__16052;
continue;
} else {
return ret_value__10458__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__ = function(state_15934){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____1.call(this,state_15934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10457__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10457__auto__;
})()
;})(switch__10456__auto__,c__10479__auto__,jobs,results,process,async))
})();
var state__10481__auto__ = (function (){var statearr_15978 = (f__10480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10480__auto__.cljs$core$IFn$_invoke$arity$0() : f__10480__auto__.call(null));
(statearr_15978[(6)] = c__10479__auto__);

return statearr_15978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10481__auto__);
});})(c__10479__auto__,jobs,results,process,async))
);

return c__10479__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16054 = arguments.length;
switch (G__16054) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__16061 = arguments.length;
switch (G__16061) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__16075 = arguments.length;
switch (G__16075) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__10479__auto___16142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10479__auto___16142,tc,fc){
return (function (){
var f__10480__auto__ = (function (){var switch__10456__auto__ = ((function (c__10479__auto___16142,tc,fc){
return (function (state_16113){
var state_val_16114 = (state_16113[(1)]);
if((state_val_16114 === (7))){
var inst_16109 = (state_16113[(2)]);
var state_16113__$1 = state_16113;
var statearr_16115_16143 = state_16113__$1;
(statearr_16115_16143[(2)] = inst_16109);

(statearr_16115_16143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16114 === (1))){
var state_16113__$1 = state_16113;
var statearr_16116_16144 = state_16113__$1;
(statearr_16116_16144[(2)] = null);

(statearr_16116_16144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16114 === (4))){
var inst_16090 = (state_16113[(7)]);
var inst_16090__$1 = (state_16113[(2)]);
var inst_16091 = (inst_16090__$1 == null);
var state_16113__$1 = (function (){var statearr_16117 = state_16113;
(statearr_16117[(7)] = inst_16090__$1);

return statearr_16117;
})();
if(cljs.core.truth_(inst_16091)){
var statearr_16118_16145 = state_16113__$1;
(statearr_16118_16145[(1)] = (5));

} else {
var statearr_16119_16146 = state_16113__$1;
(statearr_16119_16146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16114 === (13))){
var state_16113__$1 = state_16113;
var statearr_16120_16147 = state_16113__$1;
(statearr_16120_16147[(2)] = null);

(statearr_16120_16147[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16114 === (6))){
var inst_16090 = (state_16113[(7)]);
var inst_16096 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16090) : p.call(null,inst_16090));
var state_16113__$1 = state_16113;
if(cljs.core.truth_(inst_16096)){
var statearr_16121_16148 = state_16113__$1;
(statearr_16121_16148[(1)] = (9));

} else {
var statearr_16122_16149 = state_16113__$1;
(statearr_16122_16149[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16114 === (3))){
var inst_16111 = (state_16113[(2)]);
var state_16113__$1 = state_16113;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16113__$1,inst_16111);
} else {
if((state_val_16114 === (12))){
var state_16113__$1 = state_16113;
var statearr_16123_16150 = state_16113__$1;
(statearr_16123_16150[(2)] = null);

(statearr_16123_16150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16114 === (2))){
var state_16113__$1 = state_16113;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16113__$1,(4),ch);
} else {
if((state_val_16114 === (11))){
var inst_16090 = (state_16113[(7)]);
var inst_16100 = (state_16113[(2)]);
var state_16113__$1 = state_16113;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16113__$1,(8),inst_16100,inst_16090);
} else {
if((state_val_16114 === (9))){
var state_16113__$1 = state_16113;
var statearr_16124_16151 = state_16113__$1;
(statearr_16124_16151[(2)] = tc);

(statearr_16124_16151[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16114 === (5))){
var inst_16093 = cljs.core.async.close_BANG_(tc);
var inst_16094 = cljs.core.async.close_BANG_(fc);
var state_16113__$1 = (function (){var statearr_16128 = state_16113;
(statearr_16128[(8)] = inst_16093);

return statearr_16128;
})();
var statearr_16129_16152 = state_16113__$1;
(statearr_16129_16152[(2)] = inst_16094);

(statearr_16129_16152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16114 === (14))){
var inst_16107 = (state_16113[(2)]);
var state_16113__$1 = state_16113;
var statearr_16130_16153 = state_16113__$1;
(statearr_16130_16153[(2)] = inst_16107);

(statearr_16130_16153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16114 === (10))){
var state_16113__$1 = state_16113;
var statearr_16131_16154 = state_16113__$1;
(statearr_16131_16154[(2)] = fc);

(statearr_16131_16154[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16114 === (8))){
var inst_16102 = (state_16113[(2)]);
var state_16113__$1 = state_16113;
if(cljs.core.truth_(inst_16102)){
var statearr_16132_16155 = state_16113__$1;
(statearr_16132_16155[(1)] = (12));

} else {
var statearr_16133_16156 = state_16113__$1;
(statearr_16133_16156[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10479__auto___16142,tc,fc))
;
return ((function (switch__10456__auto__,c__10479__auto___16142,tc,fc){
return (function() {
var cljs$core$async$state_machine__10457__auto__ = null;
var cljs$core$async$state_machine__10457__auto____0 = (function (){
var statearr_16134 = [null,null,null,null,null,null,null,null,null];
(statearr_16134[(0)] = cljs$core$async$state_machine__10457__auto__);

(statearr_16134[(1)] = (1));

return statearr_16134;
});
var cljs$core$async$state_machine__10457__auto____1 = (function (state_16113){
while(true){
var ret_value__10458__auto__ = (function (){try{while(true){
var result__10459__auto__ = switch__10456__auto__(state_16113);
if(cljs.core.keyword_identical_QMARK_(result__10459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10459__auto__;
}
break;
}
}catch (e16135){if((e16135 instanceof Object)){
var ex__10460__auto__ = e16135;
var statearr_16139_16157 = state_16113;
(statearr_16139_16157[(5)] = ex__10460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16135;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16158 = state_16113;
state_16113 = G__16158;
continue;
} else {
return ret_value__10458__auto__;
}
break;
}
});
cljs$core$async$state_machine__10457__auto__ = function(state_16113){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10457__auto____1.call(this,state_16113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10457__auto____0;
cljs$core$async$state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10457__auto____1;
return cljs$core$async$state_machine__10457__auto__;
})()
;})(switch__10456__auto__,c__10479__auto___16142,tc,fc))
})();
var state__10481__auto__ = (function (){var statearr_16140 = (f__10480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10480__auto__.cljs$core$IFn$_invoke$arity$0() : f__10480__auto__.call(null));
(statearr_16140[(6)] = c__10479__auto___16142);

return statearr_16140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10481__auto__);
});})(c__10479__auto___16142,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__10479__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10479__auto__){
return (function (){
var f__10480__auto__ = (function (){var switch__10456__auto__ = ((function (c__10479__auto__){
return (function (state_16179){
var state_val_16180 = (state_16179[(1)]);
if((state_val_16180 === (7))){
var inst_16175 = (state_16179[(2)]);
var state_16179__$1 = state_16179;
var statearr_16182_16204 = state_16179__$1;
(statearr_16182_16204[(2)] = inst_16175);

(statearr_16182_16204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16180 === (1))){
var inst_16159 = init;
var state_16179__$1 = (function (){var statearr_16183 = state_16179;
(statearr_16183[(7)] = inst_16159);

return statearr_16183;
})();
var statearr_16184_16206 = state_16179__$1;
(statearr_16184_16206[(2)] = null);

(statearr_16184_16206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16180 === (4))){
var inst_16162 = (state_16179[(8)]);
var inst_16162__$1 = (state_16179[(2)]);
var inst_16163 = (inst_16162__$1 == null);
var state_16179__$1 = (function (){var statearr_16185 = state_16179;
(statearr_16185[(8)] = inst_16162__$1);

return statearr_16185;
})();
if(cljs.core.truth_(inst_16163)){
var statearr_16186_16211 = state_16179__$1;
(statearr_16186_16211[(1)] = (5));

} else {
var statearr_16187_16212 = state_16179__$1;
(statearr_16187_16212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16180 === (6))){
var inst_16162 = (state_16179[(8)]);
var inst_16166 = (state_16179[(9)]);
var inst_16159 = (state_16179[(7)]);
var inst_16166__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16159,inst_16162) : f.call(null,inst_16159,inst_16162));
var inst_16167 = cljs.core.reduced_QMARK_(inst_16166__$1);
var state_16179__$1 = (function (){var statearr_16188 = state_16179;
(statearr_16188[(9)] = inst_16166__$1);

return statearr_16188;
})();
if(inst_16167){
var statearr_16189_16213 = state_16179__$1;
(statearr_16189_16213[(1)] = (8));

} else {
var statearr_16190_16214 = state_16179__$1;
(statearr_16190_16214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16180 === (3))){
var inst_16177 = (state_16179[(2)]);
var state_16179__$1 = state_16179;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16179__$1,inst_16177);
} else {
if((state_val_16180 === (2))){
var state_16179__$1 = state_16179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16179__$1,(4),ch);
} else {
if((state_val_16180 === (9))){
var inst_16166 = (state_16179[(9)]);
var inst_16159 = inst_16166;
var state_16179__$1 = (function (){var statearr_16194 = state_16179;
(statearr_16194[(7)] = inst_16159);

return statearr_16194;
})();
var statearr_16195_16215 = state_16179__$1;
(statearr_16195_16215[(2)] = null);

(statearr_16195_16215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16180 === (5))){
var inst_16159 = (state_16179[(7)]);
var state_16179__$1 = state_16179;
var statearr_16196_16216 = state_16179__$1;
(statearr_16196_16216[(2)] = inst_16159);

(statearr_16196_16216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16180 === (10))){
var inst_16173 = (state_16179[(2)]);
var state_16179__$1 = state_16179;
var statearr_16197_16217 = state_16179__$1;
(statearr_16197_16217[(2)] = inst_16173);

(statearr_16197_16217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16180 === (8))){
var inst_16166 = (state_16179[(9)]);
var inst_16169 = cljs.core.deref(inst_16166);
var state_16179__$1 = state_16179;
var statearr_16198_16218 = state_16179__$1;
(statearr_16198_16218[(2)] = inst_16169);

(statearr_16198_16218[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__10479__auto__))
;
return ((function (switch__10456__auto__,c__10479__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10457__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10457__auto____0 = (function (){
var statearr_16199 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16199[(0)] = cljs$core$async$reduce_$_state_machine__10457__auto__);

(statearr_16199[(1)] = (1));

return statearr_16199;
});
var cljs$core$async$reduce_$_state_machine__10457__auto____1 = (function (state_16179){
while(true){
var ret_value__10458__auto__ = (function (){try{while(true){
var result__10459__auto__ = switch__10456__auto__(state_16179);
if(cljs.core.keyword_identical_QMARK_(result__10459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10459__auto__;
}
break;
}
}catch (e16200){if((e16200 instanceof Object)){
var ex__10460__auto__ = e16200;
var statearr_16201_16226 = state_16179;
(statearr_16201_16226[(5)] = ex__10460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16200;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16227 = state_16179;
state_16179 = G__16227;
continue;
} else {
return ret_value__10458__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10457__auto__ = function(state_16179){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10457__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10457__auto____1.call(this,state_16179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10457__auto____0;
cljs$core$async$reduce_$_state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10457__auto____1;
return cljs$core$async$reduce_$_state_machine__10457__auto__;
})()
;})(switch__10456__auto__,c__10479__auto__))
})();
var state__10481__auto__ = (function (){var statearr_16203 = (f__10480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10480__auto__.cljs$core$IFn$_invoke$arity$0() : f__10480__auto__.call(null));
(statearr_16203[(6)] = c__10479__auto__);

return statearr_16203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10481__auto__);
});})(c__10479__auto__))
);

return c__10479__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10479__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10479__auto__,f__$1){
return (function (){
var f__10480__auto__ = (function (){var switch__10456__auto__ = ((function (c__10479__auto__,f__$1){
return (function (state_16233){
var state_val_16234 = (state_16233[(1)]);
if((state_val_16234 === (1))){
var inst_16228 = cljs.core.async.reduce(f__$1,init,ch);
var state_16233__$1 = state_16233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16233__$1,(2),inst_16228);
} else {
if((state_val_16234 === (2))){
var inst_16230 = (state_16233[(2)]);
var inst_16231 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16230) : f__$1.call(null,inst_16230));
var state_16233__$1 = state_16233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16233__$1,inst_16231);
} else {
return null;
}
}
});})(c__10479__auto__,f__$1))
;
return ((function (switch__10456__auto__,c__10479__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__10457__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10457__auto____0 = (function (){
var statearr_16235 = [null,null,null,null,null,null,null];
(statearr_16235[(0)] = cljs$core$async$transduce_$_state_machine__10457__auto__);

(statearr_16235[(1)] = (1));

return statearr_16235;
});
var cljs$core$async$transduce_$_state_machine__10457__auto____1 = (function (state_16233){
while(true){
var ret_value__10458__auto__ = (function (){try{while(true){
var result__10459__auto__ = switch__10456__auto__(state_16233);
if(cljs.core.keyword_identical_QMARK_(result__10459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10459__auto__;
}
break;
}
}catch (e16236){if((e16236 instanceof Object)){
var ex__10460__auto__ = e16236;
var statearr_16237_16239 = state_16233;
(statearr_16237_16239[(5)] = ex__10460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16236;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16240 = state_16233;
state_16233 = G__16240;
continue;
} else {
return ret_value__10458__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10457__auto__ = function(state_16233){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10457__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10457__auto____1.call(this,state_16233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10457__auto____0;
cljs$core$async$transduce_$_state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10457__auto____1;
return cljs$core$async$transduce_$_state_machine__10457__auto__;
})()
;})(switch__10456__auto__,c__10479__auto__,f__$1))
})();
var state__10481__auto__ = (function (){var statearr_16238 = (f__10480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10480__auto__.cljs$core$IFn$_invoke$arity$0() : f__10480__auto__.call(null));
(statearr_16238[(6)] = c__10479__auto__);

return statearr_16238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10481__auto__);
});})(c__10479__auto__,f__$1))
);

return c__10479__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16243 = arguments.length;
switch (G__16243) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10479__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10479__auto__){
return (function (){
var f__10480__auto__ = (function (){var switch__10456__auto__ = ((function (c__10479__auto__){
return (function (state_16269){
var state_val_16270 = (state_16269[(1)]);
if((state_val_16270 === (7))){
var inst_16250 = (state_16269[(2)]);
var state_16269__$1 = state_16269;
var statearr_16272_16307 = state_16269__$1;
(statearr_16272_16307[(2)] = inst_16250);

(statearr_16272_16307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16270 === (1))){
var inst_16244 = cljs.core.seq(coll);
var inst_16245 = inst_16244;
var state_16269__$1 = (function (){var statearr_16273 = state_16269;
(statearr_16273[(7)] = inst_16245);

return statearr_16273;
})();
var statearr_16274_16308 = state_16269__$1;
(statearr_16274_16308[(2)] = null);

(statearr_16274_16308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16270 === (4))){
var inst_16245 = (state_16269[(7)]);
var inst_16248 = cljs.core.first(inst_16245);
var state_16269__$1 = state_16269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16269__$1,(7),ch,inst_16248);
} else {
if((state_val_16270 === (13))){
var inst_16263 = (state_16269[(2)]);
var state_16269__$1 = state_16269;
var statearr_16275_16309 = state_16269__$1;
(statearr_16275_16309[(2)] = inst_16263);

(statearr_16275_16309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16270 === (6))){
var inst_16253 = (state_16269[(2)]);
var state_16269__$1 = state_16269;
if(cljs.core.truth_(inst_16253)){
var statearr_16276_16311 = state_16269__$1;
(statearr_16276_16311[(1)] = (8));

} else {
var statearr_16277_16313 = state_16269__$1;
(statearr_16277_16313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16270 === (3))){
var inst_16267 = (state_16269[(2)]);
var state_16269__$1 = state_16269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16269__$1,inst_16267);
} else {
if((state_val_16270 === (12))){
var state_16269__$1 = state_16269;
var statearr_16278_16314 = state_16269__$1;
(statearr_16278_16314[(2)] = null);

(statearr_16278_16314[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16270 === (2))){
var inst_16245 = (state_16269[(7)]);
var state_16269__$1 = state_16269;
if(cljs.core.truth_(inst_16245)){
var statearr_16279_16315 = state_16269__$1;
(statearr_16279_16315[(1)] = (4));

} else {
var statearr_16280_16316 = state_16269__$1;
(statearr_16280_16316[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16270 === (11))){
var inst_16260 = cljs.core.async.close_BANG_(ch);
var state_16269__$1 = state_16269;
var statearr_16281_16317 = state_16269__$1;
(statearr_16281_16317[(2)] = inst_16260);

(statearr_16281_16317[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16270 === (9))){
var state_16269__$1 = state_16269;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16282_16321 = state_16269__$1;
(statearr_16282_16321[(1)] = (11));

} else {
var statearr_16283_16322 = state_16269__$1;
(statearr_16283_16322[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16270 === (5))){
var inst_16245 = (state_16269[(7)]);
var state_16269__$1 = state_16269;
var statearr_16284_16323 = state_16269__$1;
(statearr_16284_16323[(2)] = inst_16245);

(statearr_16284_16323[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16270 === (10))){
var inst_16265 = (state_16269[(2)]);
var state_16269__$1 = state_16269;
var statearr_16285_16324 = state_16269__$1;
(statearr_16285_16324[(2)] = inst_16265);

(statearr_16285_16324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16270 === (8))){
var inst_16245 = (state_16269[(7)]);
var inst_16255 = cljs.core.next(inst_16245);
var inst_16245__$1 = inst_16255;
var state_16269__$1 = (function (){var statearr_16286 = state_16269;
(statearr_16286[(7)] = inst_16245__$1);

return statearr_16286;
})();
var statearr_16287_16325 = state_16269__$1;
(statearr_16287_16325[(2)] = null);

(statearr_16287_16325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10479__auto__))
;
return ((function (switch__10456__auto__,c__10479__auto__){
return (function() {
var cljs$core$async$state_machine__10457__auto__ = null;
var cljs$core$async$state_machine__10457__auto____0 = (function (){
var statearr_16288 = [null,null,null,null,null,null,null,null];
(statearr_16288[(0)] = cljs$core$async$state_machine__10457__auto__);

(statearr_16288[(1)] = (1));

return statearr_16288;
});
var cljs$core$async$state_machine__10457__auto____1 = (function (state_16269){
while(true){
var ret_value__10458__auto__ = (function (){try{while(true){
var result__10459__auto__ = switch__10456__auto__(state_16269);
if(cljs.core.keyword_identical_QMARK_(result__10459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10459__auto__;
}
break;
}
}catch (e16289){if((e16289 instanceof Object)){
var ex__10460__auto__ = e16289;
var statearr_16292_16326 = state_16269;
(statearr_16292_16326[(5)] = ex__10460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16289;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16327 = state_16269;
state_16269 = G__16327;
continue;
} else {
return ret_value__10458__auto__;
}
break;
}
});
cljs$core$async$state_machine__10457__auto__ = function(state_16269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10457__auto____1.call(this,state_16269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10457__auto____0;
cljs$core$async$state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10457__auto____1;
return cljs$core$async$state_machine__10457__auto__;
})()
;})(switch__10456__auto__,c__10479__auto__))
})();
var state__10481__auto__ = (function (){var statearr_16293 = (f__10480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10480__auto__.cljs$core$IFn$_invoke$arity$0() : f__10480__auto__.call(null));
(statearr_16293[(6)] = c__10479__auto__);

return statearr_16293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10481__auto__);
});})(c__10479__auto__))
);

return c__10479__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto__.call(null,_));
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16339 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16339 = (function (ch,cs,meta16340){
this.ch = ch;
this.cs = cs;
this.meta16340 = meta16340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16341,meta16340__$1){
var self__ = this;
var _16341__$1 = this;
return (new cljs.core.async.t_cljs$core$async16339(self__.ch,self__.cs,meta16340__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16341){
var self__ = this;
var _16341__$1 = this;
return self__.meta16340;
});})(cs))
;

cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16339.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16340","meta16340",910856888,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16339.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16339";

cljs.core.async.t_cljs$core$async16339.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async16339");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16339.
 */
cljs.core.async.__GT_t_cljs$core$async16339 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16339(ch__$1,cs__$1,meta16340){
return (new cljs.core.async.t_cljs$core$async16339(ch__$1,cs__$1,meta16340));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16339(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__10479__auto___16588 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10479__auto___16588,cs,m,dchan,dctr,done){
return (function (){
var f__10480__auto__ = (function (){var switch__10456__auto__ = ((function (c__10479__auto___16588,cs,m,dchan,dctr,done){
return (function (state_16482){
var state_val_16488 = (state_16482[(1)]);
if((state_val_16488 === (7))){
var inst_16478 = (state_16482[(2)]);
var state_16482__$1 = state_16482;
var statearr_16489_16591 = state_16482__$1;
(statearr_16489_16591[(2)] = inst_16478);

(statearr_16489_16591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (20))){
var inst_16381 = (state_16482[(7)]);
var inst_16393 = cljs.core.first(inst_16381);
var inst_16394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16393,(0),null);
var inst_16395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16393,(1),null);
var state_16482__$1 = (function (){var statearr_16490 = state_16482;
(statearr_16490[(8)] = inst_16394);

return statearr_16490;
})();
if(cljs.core.truth_(inst_16395)){
var statearr_16491_16592 = state_16482__$1;
(statearr_16491_16592[(1)] = (22));

} else {
var statearr_16493_16593 = state_16482__$1;
(statearr_16493_16593[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (27))){
var inst_16430 = (state_16482[(9)]);
var inst_16423 = (state_16482[(10)]);
var inst_16425 = (state_16482[(11)]);
var inst_16350 = (state_16482[(12)]);
var inst_16430__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16423,inst_16425);
var inst_16431 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16430__$1,inst_16350,done);
var state_16482__$1 = (function (){var statearr_16494 = state_16482;
(statearr_16494[(9)] = inst_16430__$1);

return statearr_16494;
})();
if(cljs.core.truth_(inst_16431)){
var statearr_16495_16594 = state_16482__$1;
(statearr_16495_16594[(1)] = (30));

} else {
var statearr_16496_16595 = state_16482__$1;
(statearr_16496_16595[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (1))){
var state_16482__$1 = state_16482;
var statearr_16497_16596 = state_16482__$1;
(statearr_16497_16596[(2)] = null);

(statearr_16497_16596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (24))){
var inst_16381 = (state_16482[(7)]);
var inst_16400 = (state_16482[(2)]);
var inst_16401 = cljs.core.next(inst_16381);
var inst_16359 = inst_16401;
var inst_16360 = null;
var inst_16361 = (0);
var inst_16362 = (0);
var state_16482__$1 = (function (){var statearr_16498 = state_16482;
(statearr_16498[(13)] = inst_16359);

(statearr_16498[(14)] = inst_16360);

(statearr_16498[(15)] = inst_16361);

(statearr_16498[(16)] = inst_16362);

(statearr_16498[(17)] = inst_16400);

return statearr_16498;
})();
var statearr_16499_16597 = state_16482__$1;
(statearr_16499_16597[(2)] = null);

(statearr_16499_16597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (39))){
var state_16482__$1 = state_16482;
var statearr_16503_16602 = state_16482__$1;
(statearr_16503_16602[(2)] = null);

(statearr_16503_16602[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (4))){
var inst_16350 = (state_16482[(12)]);
var inst_16350__$1 = (state_16482[(2)]);
var inst_16351 = (inst_16350__$1 == null);
var state_16482__$1 = (function (){var statearr_16505 = state_16482;
(statearr_16505[(12)] = inst_16350__$1);

return statearr_16505;
})();
if(cljs.core.truth_(inst_16351)){
var statearr_16506_16604 = state_16482__$1;
(statearr_16506_16604[(1)] = (5));

} else {
var statearr_16507_16605 = state_16482__$1;
(statearr_16507_16605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (15))){
var inst_16359 = (state_16482[(13)]);
var inst_16360 = (state_16482[(14)]);
var inst_16361 = (state_16482[(15)]);
var inst_16362 = (state_16482[(16)]);
var inst_16377 = (state_16482[(2)]);
var inst_16378 = (inst_16362 + (1));
var tmp16500 = inst_16359;
var tmp16501 = inst_16360;
var tmp16502 = inst_16361;
var inst_16359__$1 = tmp16500;
var inst_16360__$1 = tmp16501;
var inst_16361__$1 = tmp16502;
var inst_16362__$1 = inst_16378;
var state_16482__$1 = (function (){var statearr_16508 = state_16482;
(statearr_16508[(13)] = inst_16359__$1);

(statearr_16508[(18)] = inst_16377);

(statearr_16508[(14)] = inst_16360__$1);

(statearr_16508[(15)] = inst_16361__$1);

(statearr_16508[(16)] = inst_16362__$1);

return statearr_16508;
})();
var statearr_16509_16607 = state_16482__$1;
(statearr_16509_16607[(2)] = null);

(statearr_16509_16607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (21))){
var inst_16404 = (state_16482[(2)]);
var state_16482__$1 = state_16482;
var statearr_16513_16608 = state_16482__$1;
(statearr_16513_16608[(2)] = inst_16404);

(statearr_16513_16608[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (31))){
var inst_16430 = (state_16482[(9)]);
var inst_16434 = done(null);
var inst_16435 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16430);
var state_16482__$1 = (function (){var statearr_16517 = state_16482;
(statearr_16517[(19)] = inst_16434);

return statearr_16517;
})();
var statearr_16520_16609 = state_16482__$1;
(statearr_16520_16609[(2)] = inst_16435);

(statearr_16520_16609[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (32))){
var inst_16424 = (state_16482[(20)]);
var inst_16422 = (state_16482[(21)]);
var inst_16423 = (state_16482[(10)]);
var inst_16425 = (state_16482[(11)]);
var inst_16437 = (state_16482[(2)]);
var inst_16438 = (inst_16425 + (1));
var tmp16510 = inst_16424;
var tmp16511 = inst_16422;
var tmp16512 = inst_16423;
var inst_16422__$1 = tmp16511;
var inst_16423__$1 = tmp16512;
var inst_16424__$1 = tmp16510;
var inst_16425__$1 = inst_16438;
var state_16482__$1 = (function (){var statearr_16525 = state_16482;
(statearr_16525[(20)] = inst_16424__$1);

(statearr_16525[(21)] = inst_16422__$1);

(statearr_16525[(22)] = inst_16437);

(statearr_16525[(10)] = inst_16423__$1);

(statearr_16525[(11)] = inst_16425__$1);

return statearr_16525;
})();
var statearr_16526_16610 = state_16482__$1;
(statearr_16526_16610[(2)] = null);

(statearr_16526_16610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (40))){
var inst_16450 = (state_16482[(23)]);
var inst_16454 = done(null);
var inst_16455 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16450);
var state_16482__$1 = (function (){var statearr_16527 = state_16482;
(statearr_16527[(24)] = inst_16454);

return statearr_16527;
})();
var statearr_16528_16611 = state_16482__$1;
(statearr_16528_16611[(2)] = inst_16455);

(statearr_16528_16611[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (33))){
var inst_16441 = (state_16482[(25)]);
var inst_16443 = cljs.core.chunked_seq_QMARK_(inst_16441);
var state_16482__$1 = state_16482;
if(inst_16443){
var statearr_16529_16613 = state_16482__$1;
(statearr_16529_16613[(1)] = (36));

} else {
var statearr_16530_16614 = state_16482__$1;
(statearr_16530_16614[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (13))){
var inst_16371 = (state_16482[(26)]);
var inst_16374 = cljs.core.async.close_BANG_(inst_16371);
var state_16482__$1 = state_16482;
var statearr_16531_16615 = state_16482__$1;
(statearr_16531_16615[(2)] = inst_16374);

(statearr_16531_16615[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (22))){
var inst_16394 = (state_16482[(8)]);
var inst_16397 = cljs.core.async.close_BANG_(inst_16394);
var state_16482__$1 = state_16482;
var statearr_16534_16616 = state_16482__$1;
(statearr_16534_16616[(2)] = inst_16397);

(statearr_16534_16616[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (36))){
var inst_16441 = (state_16482[(25)]);
var inst_16445 = cljs.core.chunk_first(inst_16441);
var inst_16446 = cljs.core.chunk_rest(inst_16441);
var inst_16447 = cljs.core.count(inst_16445);
var inst_16422 = inst_16446;
var inst_16423 = inst_16445;
var inst_16424 = inst_16447;
var inst_16425 = (0);
var state_16482__$1 = (function (){var statearr_16535 = state_16482;
(statearr_16535[(20)] = inst_16424);

(statearr_16535[(21)] = inst_16422);

(statearr_16535[(10)] = inst_16423);

(statearr_16535[(11)] = inst_16425);

return statearr_16535;
})();
var statearr_16536_16617 = state_16482__$1;
(statearr_16536_16617[(2)] = null);

(statearr_16536_16617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (41))){
var inst_16441 = (state_16482[(25)]);
var inst_16457 = (state_16482[(2)]);
var inst_16458 = cljs.core.next(inst_16441);
var inst_16422 = inst_16458;
var inst_16423 = null;
var inst_16424 = (0);
var inst_16425 = (0);
var state_16482__$1 = (function (){var statearr_16537 = state_16482;
(statearr_16537[(20)] = inst_16424);

(statearr_16537[(21)] = inst_16422);

(statearr_16537[(27)] = inst_16457);

(statearr_16537[(10)] = inst_16423);

(statearr_16537[(11)] = inst_16425);

return statearr_16537;
})();
var statearr_16538_16618 = state_16482__$1;
(statearr_16538_16618[(2)] = null);

(statearr_16538_16618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (43))){
var state_16482__$1 = state_16482;
var statearr_16539_16619 = state_16482__$1;
(statearr_16539_16619[(2)] = null);

(statearr_16539_16619[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (29))){
var inst_16466 = (state_16482[(2)]);
var state_16482__$1 = state_16482;
var statearr_16540_16620 = state_16482__$1;
(statearr_16540_16620[(2)] = inst_16466);

(statearr_16540_16620[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (44))){
var inst_16475 = (state_16482[(2)]);
var state_16482__$1 = (function (){var statearr_16541 = state_16482;
(statearr_16541[(28)] = inst_16475);

return statearr_16541;
})();
var statearr_16542_16621 = state_16482__$1;
(statearr_16542_16621[(2)] = null);

(statearr_16542_16621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (6))){
var inst_16414 = (state_16482[(29)]);
var inst_16413 = cljs.core.deref(cs);
var inst_16414__$1 = cljs.core.keys(inst_16413);
var inst_16415 = cljs.core.count(inst_16414__$1);
var inst_16416 = cljs.core.reset_BANG_(dctr,inst_16415);
var inst_16421 = cljs.core.seq(inst_16414__$1);
var inst_16422 = inst_16421;
var inst_16423 = null;
var inst_16424 = (0);
var inst_16425 = (0);
var state_16482__$1 = (function (){var statearr_16543 = state_16482;
(statearr_16543[(20)] = inst_16424);

(statearr_16543[(29)] = inst_16414__$1);

(statearr_16543[(21)] = inst_16422);

(statearr_16543[(10)] = inst_16423);

(statearr_16543[(11)] = inst_16425);

(statearr_16543[(30)] = inst_16416);

return statearr_16543;
})();
var statearr_16544_16629 = state_16482__$1;
(statearr_16544_16629[(2)] = null);

(statearr_16544_16629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (28))){
var inst_16441 = (state_16482[(25)]);
var inst_16422 = (state_16482[(21)]);
var inst_16441__$1 = cljs.core.seq(inst_16422);
var state_16482__$1 = (function (){var statearr_16545 = state_16482;
(statearr_16545[(25)] = inst_16441__$1);

return statearr_16545;
})();
if(inst_16441__$1){
var statearr_16546_16634 = state_16482__$1;
(statearr_16546_16634[(1)] = (33));

} else {
var statearr_16547_16635 = state_16482__$1;
(statearr_16547_16635[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (25))){
var inst_16424 = (state_16482[(20)]);
var inst_16425 = (state_16482[(11)]);
var inst_16427 = (inst_16425 < inst_16424);
var inst_16428 = inst_16427;
var state_16482__$1 = state_16482;
if(cljs.core.truth_(inst_16428)){
var statearr_16548_16636 = state_16482__$1;
(statearr_16548_16636[(1)] = (27));

} else {
var statearr_16549_16638 = state_16482__$1;
(statearr_16549_16638[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (34))){
var state_16482__$1 = state_16482;
var statearr_16550_16640 = state_16482__$1;
(statearr_16550_16640[(2)] = null);

(statearr_16550_16640[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (17))){
var state_16482__$1 = state_16482;
var statearr_16551_16641 = state_16482__$1;
(statearr_16551_16641[(2)] = null);

(statearr_16551_16641[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (3))){
var inst_16480 = (state_16482[(2)]);
var state_16482__$1 = state_16482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16482__$1,inst_16480);
} else {
if((state_val_16488 === (12))){
var inst_16409 = (state_16482[(2)]);
var state_16482__$1 = state_16482;
var statearr_16552_16642 = state_16482__$1;
(statearr_16552_16642[(2)] = inst_16409);

(statearr_16552_16642[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (2))){
var state_16482__$1 = state_16482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16482__$1,(4),ch);
} else {
if((state_val_16488 === (23))){
var state_16482__$1 = state_16482;
var statearr_16553_16643 = state_16482__$1;
(statearr_16553_16643[(2)] = null);

(statearr_16553_16643[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (35))){
var inst_16464 = (state_16482[(2)]);
var state_16482__$1 = state_16482;
var statearr_16554_16644 = state_16482__$1;
(statearr_16554_16644[(2)] = inst_16464);

(statearr_16554_16644[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (19))){
var inst_16381 = (state_16482[(7)]);
var inst_16385 = cljs.core.chunk_first(inst_16381);
var inst_16386 = cljs.core.chunk_rest(inst_16381);
var inst_16387 = cljs.core.count(inst_16385);
var inst_16359 = inst_16386;
var inst_16360 = inst_16385;
var inst_16361 = inst_16387;
var inst_16362 = (0);
var state_16482__$1 = (function (){var statearr_16555 = state_16482;
(statearr_16555[(13)] = inst_16359);

(statearr_16555[(14)] = inst_16360);

(statearr_16555[(15)] = inst_16361);

(statearr_16555[(16)] = inst_16362);

return statearr_16555;
})();
var statearr_16556_16645 = state_16482__$1;
(statearr_16556_16645[(2)] = null);

(statearr_16556_16645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (11))){
var inst_16359 = (state_16482[(13)]);
var inst_16381 = (state_16482[(7)]);
var inst_16381__$1 = cljs.core.seq(inst_16359);
var state_16482__$1 = (function (){var statearr_16557 = state_16482;
(statearr_16557[(7)] = inst_16381__$1);

return statearr_16557;
})();
if(inst_16381__$1){
var statearr_16558_16646 = state_16482__$1;
(statearr_16558_16646[(1)] = (16));

} else {
var statearr_16559_16647 = state_16482__$1;
(statearr_16559_16647[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (9))){
var inst_16411 = (state_16482[(2)]);
var state_16482__$1 = state_16482;
var statearr_16560_16648 = state_16482__$1;
(statearr_16560_16648[(2)] = inst_16411);

(statearr_16560_16648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (5))){
var inst_16357 = cljs.core.deref(cs);
var inst_16358 = cljs.core.seq(inst_16357);
var inst_16359 = inst_16358;
var inst_16360 = null;
var inst_16361 = (0);
var inst_16362 = (0);
var state_16482__$1 = (function (){var statearr_16561 = state_16482;
(statearr_16561[(13)] = inst_16359);

(statearr_16561[(14)] = inst_16360);

(statearr_16561[(15)] = inst_16361);

(statearr_16561[(16)] = inst_16362);

return statearr_16561;
})();
var statearr_16562_16649 = state_16482__$1;
(statearr_16562_16649[(2)] = null);

(statearr_16562_16649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (14))){
var state_16482__$1 = state_16482;
var statearr_16563_16650 = state_16482__$1;
(statearr_16563_16650[(2)] = null);

(statearr_16563_16650[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (45))){
var inst_16472 = (state_16482[(2)]);
var state_16482__$1 = state_16482;
var statearr_16564_16651 = state_16482__$1;
(statearr_16564_16651[(2)] = inst_16472);

(statearr_16564_16651[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (26))){
var inst_16414 = (state_16482[(29)]);
var inst_16468 = (state_16482[(2)]);
var inst_16469 = cljs.core.seq(inst_16414);
var state_16482__$1 = (function (){var statearr_16565 = state_16482;
(statearr_16565[(31)] = inst_16468);

return statearr_16565;
})();
if(inst_16469){
var statearr_16566_16652 = state_16482__$1;
(statearr_16566_16652[(1)] = (42));

} else {
var statearr_16567_16653 = state_16482__$1;
(statearr_16567_16653[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (16))){
var inst_16381 = (state_16482[(7)]);
var inst_16383 = cljs.core.chunked_seq_QMARK_(inst_16381);
var state_16482__$1 = state_16482;
if(inst_16383){
var statearr_16568_16654 = state_16482__$1;
(statearr_16568_16654[(1)] = (19));

} else {
var statearr_16569_16655 = state_16482__$1;
(statearr_16569_16655[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (38))){
var inst_16461 = (state_16482[(2)]);
var state_16482__$1 = state_16482;
var statearr_16570_16656 = state_16482__$1;
(statearr_16570_16656[(2)] = inst_16461);

(statearr_16570_16656[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (30))){
var state_16482__$1 = state_16482;
var statearr_16571_16657 = state_16482__$1;
(statearr_16571_16657[(2)] = null);

(statearr_16571_16657[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (10))){
var inst_16360 = (state_16482[(14)]);
var inst_16362 = (state_16482[(16)]);
var inst_16370 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16360,inst_16362);
var inst_16371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16370,(0),null);
var inst_16372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16370,(1),null);
var state_16482__$1 = (function (){var statearr_16572 = state_16482;
(statearr_16572[(26)] = inst_16371);

return statearr_16572;
})();
if(cljs.core.truth_(inst_16372)){
var statearr_16573_16658 = state_16482__$1;
(statearr_16573_16658[(1)] = (13));

} else {
var statearr_16574_16659 = state_16482__$1;
(statearr_16574_16659[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (18))){
var inst_16407 = (state_16482[(2)]);
var state_16482__$1 = state_16482;
var statearr_16575_16660 = state_16482__$1;
(statearr_16575_16660[(2)] = inst_16407);

(statearr_16575_16660[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (42))){
var state_16482__$1 = state_16482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16482__$1,(45),dchan);
} else {
if((state_val_16488 === (37))){
var inst_16450 = (state_16482[(23)]);
var inst_16441 = (state_16482[(25)]);
var inst_16350 = (state_16482[(12)]);
var inst_16450__$1 = cljs.core.first(inst_16441);
var inst_16451 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16450__$1,inst_16350,done);
var state_16482__$1 = (function (){var statearr_16576 = state_16482;
(statearr_16576[(23)] = inst_16450__$1);

return statearr_16576;
})();
if(cljs.core.truth_(inst_16451)){
var statearr_16577_16661 = state_16482__$1;
(statearr_16577_16661[(1)] = (39));

} else {
var statearr_16578_16663 = state_16482__$1;
(statearr_16578_16663[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16488 === (8))){
var inst_16361 = (state_16482[(15)]);
var inst_16362 = (state_16482[(16)]);
var inst_16364 = (inst_16362 < inst_16361);
var inst_16365 = inst_16364;
var state_16482__$1 = state_16482;
if(cljs.core.truth_(inst_16365)){
var statearr_16579_16670 = state_16482__$1;
(statearr_16579_16670[(1)] = (10));

} else {
var statearr_16580_16674 = state_16482__$1;
(statearr_16580_16674[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10479__auto___16588,cs,m,dchan,dctr,done))
;
return ((function (switch__10456__auto__,c__10479__auto___16588,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10457__auto__ = null;
var cljs$core$async$mult_$_state_machine__10457__auto____0 = (function (){
var statearr_16581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16581[(0)] = cljs$core$async$mult_$_state_machine__10457__auto__);

(statearr_16581[(1)] = (1));

return statearr_16581;
});
var cljs$core$async$mult_$_state_machine__10457__auto____1 = (function (state_16482){
while(true){
var ret_value__10458__auto__ = (function (){try{while(true){
var result__10459__auto__ = switch__10456__auto__(state_16482);
if(cljs.core.keyword_identical_QMARK_(result__10459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10459__auto__;
}
break;
}
}catch (e16582){if((e16582 instanceof Object)){
var ex__10460__auto__ = e16582;
var statearr_16583_16675 = state_16482;
(statearr_16583_16675[(5)] = ex__10460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16582;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16676 = state_16482;
state_16482 = G__16676;
continue;
} else {
return ret_value__10458__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10457__auto__ = function(state_16482){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10457__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10457__auto____1.call(this,state_16482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10457__auto____0;
cljs$core$async$mult_$_state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10457__auto____1;
return cljs$core$async$mult_$_state_machine__10457__auto__;
})()
;})(switch__10456__auto__,c__10479__auto___16588,cs,m,dchan,dctr,done))
})();
var state__10481__auto__ = (function (){var statearr_16584 = (f__10480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10480__auto__.cljs$core$IFn$_invoke$arity$0() : f__10480__auto__.call(null));
(statearr_16584[(6)] = c__10479__auto___16588);

return statearr_16584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10481__auto__);
});})(c__10479__auto___16588,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16678 = arguments.length;
switch (G__16678) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto__.call(null,m,state_map));
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto__.call(null,m,mode));
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___16708 = arguments.length;
var i__4532__auto___16709 = (0);
while(true){
if((i__4532__auto___16709 < len__4531__auto___16708)){
args__4534__auto__.push((arguments[i__4532__auto___16709]));

var G__16710 = (i__4532__auto___16709 + (1));
i__4532__auto___16709 = G__16710;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16702){
var map__16703 = p__16702;
var map__16703__$1 = ((((!((map__16703 == null)))?(((((map__16703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16703):map__16703);
var opts = map__16703__$1;
var statearr_16705_16711 = state;
(statearr_16705_16711[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__16703,map__16703__$1,opts){
return (function (val){
var statearr_16706_16712 = state;
(statearr_16706_16712[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16703,map__16703__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_16707_16713 = state;
(statearr_16707_16713[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16698){
var G__16699 = cljs.core.first(seq16698);
var seq16698__$1 = cljs.core.next(seq16698);
var G__16700 = cljs.core.first(seq16698__$1);
var seq16698__$2 = cljs.core.next(seq16698__$1);
var G__16701 = cljs.core.first(seq16698__$2);
var seq16698__$3 = cljs.core.next(seq16698__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16699,G__16700,G__16701,seq16698__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16714 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16714 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta16715){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta16715 = meta16715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16716,meta16715__$1){
var self__ = this;
var _16716__$1 = this;
return (new cljs.core.async.t_cljs$core$async16714(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta16715__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16714.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16716){
var self__ = this;
var _16716__$1 = this;
return self__.meta16715;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16714.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16714.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16714.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16714.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16714.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16714.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16714.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16714.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16714.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta16715","meta16715",1589230636,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16714.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16714";

cljs.core.async.t_cljs$core$async16714.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async16714");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16714.
 */
cljs.core.async.__GT_t_cljs$core$async16714 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16714(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16715){
return (new cljs.core.async.t_cljs$core$async16714(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16715));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16714(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10479__auto___16914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10479__auto___16914,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10480__auto__ = (function (){var switch__10456__auto__ = ((function (c__10479__auto___16914,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16829){
var state_val_16830 = (state_16829[(1)]);
if((state_val_16830 === (7))){
var inst_16744 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
var statearr_16831_16915 = state_16829__$1;
(statearr_16831_16915[(2)] = inst_16744);

(statearr_16831_16915[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (20))){
var inst_16756 = (state_16829[(7)]);
var state_16829__$1 = state_16829;
var statearr_16832_16916 = state_16829__$1;
(statearr_16832_16916[(2)] = inst_16756);

(statearr_16832_16916[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (27))){
var state_16829__$1 = state_16829;
var statearr_16833_16917 = state_16829__$1;
(statearr_16833_16917[(2)] = null);

(statearr_16833_16917[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (1))){
var inst_16727 = (state_16829[(8)]);
var inst_16727__$1 = calc_state();
var inst_16729 = (inst_16727__$1 == null);
var inst_16730 = cljs.core.not(inst_16729);
var state_16829__$1 = (function (){var statearr_16834 = state_16829;
(statearr_16834[(8)] = inst_16727__$1);

return statearr_16834;
})();
if(inst_16730){
var statearr_16835_16918 = state_16829__$1;
(statearr_16835_16918[(1)] = (2));

} else {
var statearr_16836_16919 = state_16829__$1;
(statearr_16836_16919[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (24))){
var inst_16789 = (state_16829[(9)]);
var inst_16803 = (state_16829[(10)]);
var inst_16780 = (state_16829[(11)]);
var inst_16803__$1 = (inst_16780.cljs$core$IFn$_invoke$arity$1 ? inst_16780.cljs$core$IFn$_invoke$arity$1(inst_16789) : inst_16780.call(null,inst_16789));
var state_16829__$1 = (function (){var statearr_16837 = state_16829;
(statearr_16837[(10)] = inst_16803__$1);

return statearr_16837;
})();
if(cljs.core.truth_(inst_16803__$1)){
var statearr_16838_16920 = state_16829__$1;
(statearr_16838_16920[(1)] = (29));

} else {
var statearr_16839_16921 = state_16829__$1;
(statearr_16839_16921[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (4))){
var inst_16747 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
if(cljs.core.truth_(inst_16747)){
var statearr_16840_16922 = state_16829__$1;
(statearr_16840_16922[(1)] = (8));

} else {
var statearr_16841_16923 = state_16829__$1;
(statearr_16841_16923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (15))){
var inst_16774 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
if(cljs.core.truth_(inst_16774)){
var statearr_16842_16924 = state_16829__$1;
(statearr_16842_16924[(1)] = (19));

} else {
var statearr_16843_16925 = state_16829__$1;
(statearr_16843_16925[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (21))){
var inst_16779 = (state_16829[(12)]);
var inst_16779__$1 = (state_16829[(2)]);
var inst_16780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16779__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16779__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16779__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16829__$1 = (function (){var statearr_16844 = state_16829;
(statearr_16844[(13)] = inst_16781);

(statearr_16844[(12)] = inst_16779__$1);

(statearr_16844[(11)] = inst_16780);

return statearr_16844;
})();
return cljs.core.async.ioc_alts_BANG_(state_16829__$1,(22),inst_16782);
} else {
if((state_val_16830 === (31))){
var inst_16811 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
if(cljs.core.truth_(inst_16811)){
var statearr_16845_16926 = state_16829__$1;
(statearr_16845_16926[(1)] = (32));

} else {
var statearr_16846_16927 = state_16829__$1;
(statearr_16846_16927[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (32))){
var inst_16788 = (state_16829[(14)]);
var state_16829__$1 = state_16829;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16829__$1,(35),out,inst_16788);
} else {
if((state_val_16830 === (33))){
var inst_16779 = (state_16829[(12)]);
var inst_16756 = inst_16779;
var state_16829__$1 = (function (){var statearr_16847 = state_16829;
(statearr_16847[(7)] = inst_16756);

return statearr_16847;
})();
var statearr_16848_16928 = state_16829__$1;
(statearr_16848_16928[(2)] = null);

(statearr_16848_16928[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (13))){
var inst_16756 = (state_16829[(7)]);
var inst_16763 = inst_16756.cljs$lang$protocol_mask$partition0$;
var inst_16764 = (inst_16763 & (64));
var inst_16765 = inst_16756.cljs$core$ISeq$;
var inst_16766 = (cljs.core.PROTOCOL_SENTINEL === inst_16765);
var inst_16767 = ((inst_16764) || (inst_16766));
var state_16829__$1 = state_16829;
if(cljs.core.truth_(inst_16767)){
var statearr_16849_16929 = state_16829__$1;
(statearr_16849_16929[(1)] = (16));

} else {
var statearr_16850_16930 = state_16829__$1;
(statearr_16850_16930[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (22))){
var inst_16788 = (state_16829[(14)]);
var inst_16789 = (state_16829[(9)]);
var inst_16787 = (state_16829[(2)]);
var inst_16788__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16787,(0),null);
var inst_16789__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16787,(1),null);
var inst_16790 = (inst_16788__$1 == null);
var inst_16791 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16789__$1,change);
var inst_16792 = ((inst_16790) || (inst_16791));
var state_16829__$1 = (function (){var statearr_16851 = state_16829;
(statearr_16851[(14)] = inst_16788__$1);

(statearr_16851[(9)] = inst_16789__$1);

return statearr_16851;
})();
if(cljs.core.truth_(inst_16792)){
var statearr_16852_16937 = state_16829__$1;
(statearr_16852_16937[(1)] = (23));

} else {
var statearr_16853_16940 = state_16829__$1;
(statearr_16853_16940[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (36))){
var inst_16779 = (state_16829[(12)]);
var inst_16756 = inst_16779;
var state_16829__$1 = (function (){var statearr_16854 = state_16829;
(statearr_16854[(7)] = inst_16756);

return statearr_16854;
})();
var statearr_16858_16943 = state_16829__$1;
(statearr_16858_16943[(2)] = null);

(statearr_16858_16943[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (29))){
var inst_16803 = (state_16829[(10)]);
var state_16829__$1 = state_16829;
var statearr_16859_16944 = state_16829__$1;
(statearr_16859_16944[(2)] = inst_16803);

(statearr_16859_16944[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (6))){
var state_16829__$1 = state_16829;
var statearr_16860_16945 = state_16829__$1;
(statearr_16860_16945[(2)] = false);

(statearr_16860_16945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (28))){
var inst_16799 = (state_16829[(2)]);
var inst_16800 = calc_state();
var inst_16756 = inst_16800;
var state_16829__$1 = (function (){var statearr_16861 = state_16829;
(statearr_16861[(15)] = inst_16799);

(statearr_16861[(7)] = inst_16756);

return statearr_16861;
})();
var statearr_16862_16948 = state_16829__$1;
(statearr_16862_16948[(2)] = null);

(statearr_16862_16948[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (25))){
var inst_16825 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
var statearr_16863_16949 = state_16829__$1;
(statearr_16863_16949[(2)] = inst_16825);

(statearr_16863_16949[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (34))){
var inst_16823 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
var statearr_16864_16950 = state_16829__$1;
(statearr_16864_16950[(2)] = inst_16823);

(statearr_16864_16950[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (17))){
var state_16829__$1 = state_16829;
var statearr_16865_16951 = state_16829__$1;
(statearr_16865_16951[(2)] = false);

(statearr_16865_16951[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (3))){
var state_16829__$1 = state_16829;
var statearr_16866_16952 = state_16829__$1;
(statearr_16866_16952[(2)] = false);

(statearr_16866_16952[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (12))){
var inst_16827 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16829__$1,inst_16827);
} else {
if((state_val_16830 === (2))){
var inst_16727 = (state_16829[(8)]);
var inst_16734 = inst_16727.cljs$lang$protocol_mask$partition0$;
var inst_16735 = (inst_16734 & (64));
var inst_16738 = inst_16727.cljs$core$ISeq$;
var inst_16739 = (cljs.core.PROTOCOL_SENTINEL === inst_16738);
var inst_16740 = ((inst_16735) || (inst_16739));
var state_16829__$1 = state_16829;
if(cljs.core.truth_(inst_16740)){
var statearr_16867_16956 = state_16829__$1;
(statearr_16867_16956[(1)] = (5));

} else {
var statearr_16868_16957 = state_16829__$1;
(statearr_16868_16957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (23))){
var inst_16788 = (state_16829[(14)]);
var inst_16794 = (inst_16788 == null);
var state_16829__$1 = state_16829;
if(cljs.core.truth_(inst_16794)){
var statearr_16869_16958 = state_16829__$1;
(statearr_16869_16958[(1)] = (26));

} else {
var statearr_16870_16959 = state_16829__$1;
(statearr_16870_16959[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (35))){
var inst_16814 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
if(cljs.core.truth_(inst_16814)){
var statearr_16873_16960 = state_16829__$1;
(statearr_16873_16960[(1)] = (36));

} else {
var statearr_16874_16961 = state_16829__$1;
(statearr_16874_16961[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (19))){
var inst_16756 = (state_16829[(7)]);
var inst_16776 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16756);
var state_16829__$1 = state_16829;
var statearr_16878_16962 = state_16829__$1;
(statearr_16878_16962[(2)] = inst_16776);

(statearr_16878_16962[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (11))){
var inst_16756 = (state_16829[(7)]);
var inst_16760 = (inst_16756 == null);
var inst_16761 = cljs.core.not(inst_16760);
var state_16829__$1 = state_16829;
if(inst_16761){
var statearr_16879_16963 = state_16829__$1;
(statearr_16879_16963[(1)] = (13));

} else {
var statearr_16880_16964 = state_16829__$1;
(statearr_16880_16964[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (9))){
var inst_16727 = (state_16829[(8)]);
var state_16829__$1 = state_16829;
var statearr_16881_16965 = state_16829__$1;
(statearr_16881_16965[(2)] = inst_16727);

(statearr_16881_16965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (5))){
var state_16829__$1 = state_16829;
var statearr_16885_16966 = state_16829__$1;
(statearr_16885_16966[(2)] = true);

(statearr_16885_16966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (14))){
var state_16829__$1 = state_16829;
var statearr_16886_16973 = state_16829__$1;
(statearr_16886_16973[(2)] = false);

(statearr_16886_16973[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (26))){
var inst_16789 = (state_16829[(9)]);
var inst_16796 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16789);
var state_16829__$1 = state_16829;
var statearr_16887_16974 = state_16829__$1;
(statearr_16887_16974[(2)] = inst_16796);

(statearr_16887_16974[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (16))){
var state_16829__$1 = state_16829;
var statearr_16888_16975 = state_16829__$1;
(statearr_16888_16975[(2)] = true);

(statearr_16888_16975[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (38))){
var inst_16819 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
var statearr_16889_16976 = state_16829__$1;
(statearr_16889_16976[(2)] = inst_16819);

(statearr_16889_16976[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (30))){
var inst_16789 = (state_16829[(9)]);
var inst_16781 = (state_16829[(13)]);
var inst_16780 = (state_16829[(11)]);
var inst_16806 = cljs.core.empty_QMARK_(inst_16780);
var inst_16807 = (inst_16781.cljs$core$IFn$_invoke$arity$1 ? inst_16781.cljs$core$IFn$_invoke$arity$1(inst_16789) : inst_16781.call(null,inst_16789));
var inst_16808 = cljs.core.not(inst_16807);
var inst_16809 = ((inst_16806) && (inst_16808));
var state_16829__$1 = state_16829;
var statearr_16890_16977 = state_16829__$1;
(statearr_16890_16977[(2)] = inst_16809);

(statearr_16890_16977[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (10))){
var inst_16727 = (state_16829[(8)]);
var inst_16752 = (state_16829[(2)]);
var inst_16753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16752,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16752,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16752,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16756 = inst_16727;
var state_16829__$1 = (function (){var statearr_16891 = state_16829;
(statearr_16891[(16)] = inst_16754);

(statearr_16891[(17)] = inst_16753);

(statearr_16891[(7)] = inst_16756);

(statearr_16891[(18)] = inst_16755);

return statearr_16891;
})();
var statearr_16892_16978 = state_16829__$1;
(statearr_16892_16978[(2)] = null);

(statearr_16892_16978[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (18))){
var inst_16771 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
var statearr_16893_16979 = state_16829__$1;
(statearr_16893_16979[(2)] = inst_16771);

(statearr_16893_16979[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (37))){
var state_16829__$1 = state_16829;
var statearr_16894_16980 = state_16829__$1;
(statearr_16894_16980[(2)] = null);

(statearr_16894_16980[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (8))){
var inst_16727 = (state_16829[(8)]);
var inst_16749 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16727);
var state_16829__$1 = state_16829;
var statearr_16898_16981 = state_16829__$1;
(statearr_16898_16981[(2)] = inst_16749);

(statearr_16898_16981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10479__auto___16914,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10456__auto__,c__10479__auto___16914,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10457__auto__ = null;
var cljs$core$async$mix_$_state_machine__10457__auto____0 = (function (){
var statearr_16899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16899[(0)] = cljs$core$async$mix_$_state_machine__10457__auto__);

(statearr_16899[(1)] = (1));

return statearr_16899;
});
var cljs$core$async$mix_$_state_machine__10457__auto____1 = (function (state_16829){
while(true){
var ret_value__10458__auto__ = (function (){try{while(true){
var result__10459__auto__ = switch__10456__auto__(state_16829);
if(cljs.core.keyword_identical_QMARK_(result__10459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10459__auto__;
}
break;
}
}catch (e16900){if((e16900 instanceof Object)){
var ex__10460__auto__ = e16900;
var statearr_16901_16982 = state_16829;
(statearr_16901_16982[(5)] = ex__10460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16900;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16983 = state_16829;
state_16829 = G__16983;
continue;
} else {
return ret_value__10458__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10457__auto__ = function(state_16829){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10457__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10457__auto____1.call(this,state_16829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10457__auto____0;
cljs$core$async$mix_$_state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10457__auto____1;
return cljs$core$async$mix_$_state_machine__10457__auto__;
})()
;})(switch__10456__auto__,c__10479__auto___16914,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10481__auto__ = (function (){var statearr_16902 = (f__10480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10480__auto__.cljs$core$IFn$_invoke$arity$0() : f__10480__auto__.call(null));
(statearr_16902[(6)] = c__10479__auto___16914);

return statearr_16902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10481__auto__);
});})(c__10479__auto___16914,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto__.call(null,p,v,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16992 = arguments.length;
switch (G__16992) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto__.call(null,p));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto__.call(null,p,v));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16999 = arguments.length;
switch (G__16999) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3949__auto__,mults){
return (function (p1__16997_SHARP_){
if(cljs.core.truth_((p1__16997_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16997_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16997_SHARP_.call(null,topic)))){
return p1__16997_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16997_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17000 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17000 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17001){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17001 = meta17001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17002,meta17001__$1){
var self__ = this;
var _17002__$1 = this;
return (new cljs.core.async.t_cljs$core$async17000(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17001__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17000.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17002){
var self__ = this;
var _17002__$1 = this;
return self__.meta17001;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17000.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17000.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17000.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17000.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17000.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17000.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17000.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17000.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17001","meta17001",-2075649397,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17000.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17000";

cljs.core.async.t_cljs$core$async17000.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17000");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17000.
 */
cljs.core.async.__GT_t_cljs$core$async17000 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17000(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17001){
return (new cljs.core.async.t_cljs$core$async17000(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17001));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17000(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10479__auto___17193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10479__auto___17193,mults,ensure_mult,p){
return (function (){
var f__10480__auto__ = (function (){var switch__10456__auto__ = ((function (c__10479__auto___17193,mults,ensure_mult,p){
return (function (state_17086){
var state_val_17087 = (state_17086[(1)]);
if((state_val_17087 === (7))){
var inst_17082 = (state_17086[(2)]);
var state_17086__$1 = state_17086;
var statearr_17088_17194 = state_17086__$1;
(statearr_17088_17194[(2)] = inst_17082);

(statearr_17088_17194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (20))){
var state_17086__$1 = state_17086;
var statearr_17089_17195 = state_17086__$1;
(statearr_17089_17195[(2)] = null);

(statearr_17089_17195[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (1))){
var state_17086__$1 = state_17086;
var statearr_17090_17196 = state_17086__$1;
(statearr_17090_17196[(2)] = null);

(statearr_17090_17196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (24))){
var inst_17065 = (state_17086[(7)]);
var inst_17074 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17065);
var state_17086__$1 = state_17086;
var statearr_17091_17197 = state_17086__$1;
(statearr_17091_17197[(2)] = inst_17074);

(statearr_17091_17197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (4))){
var inst_17017 = (state_17086[(8)]);
var inst_17017__$1 = (state_17086[(2)]);
var inst_17018 = (inst_17017__$1 == null);
var state_17086__$1 = (function (){var statearr_17092 = state_17086;
(statearr_17092[(8)] = inst_17017__$1);

return statearr_17092;
})();
if(cljs.core.truth_(inst_17018)){
var statearr_17093_17198 = state_17086__$1;
(statearr_17093_17198[(1)] = (5));

} else {
var statearr_17094_17199 = state_17086__$1;
(statearr_17094_17199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (15))){
var inst_17059 = (state_17086[(2)]);
var state_17086__$1 = state_17086;
var statearr_17100_17200 = state_17086__$1;
(statearr_17100_17200[(2)] = inst_17059);

(statearr_17100_17200[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (21))){
var inst_17079 = (state_17086[(2)]);
var state_17086__$1 = (function (){var statearr_17101 = state_17086;
(statearr_17101[(9)] = inst_17079);

return statearr_17101;
})();
var statearr_17102_17201 = state_17086__$1;
(statearr_17102_17201[(2)] = null);

(statearr_17102_17201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (13))){
var inst_17041 = (state_17086[(10)]);
var inst_17043 = cljs.core.chunked_seq_QMARK_(inst_17041);
var state_17086__$1 = state_17086;
if(inst_17043){
var statearr_17103_17202 = state_17086__$1;
(statearr_17103_17202[(1)] = (16));

} else {
var statearr_17104_17203 = state_17086__$1;
(statearr_17104_17203[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (22))){
var inst_17071 = (state_17086[(2)]);
var state_17086__$1 = state_17086;
if(cljs.core.truth_(inst_17071)){
var statearr_17105_17204 = state_17086__$1;
(statearr_17105_17204[(1)] = (23));

} else {
var statearr_17106_17205 = state_17086__$1;
(statearr_17106_17205[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (6))){
var inst_17017 = (state_17086[(8)]);
var inst_17067 = (state_17086[(11)]);
var inst_17065 = (state_17086[(7)]);
var inst_17065__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17017) : topic_fn.call(null,inst_17017));
var inst_17066 = cljs.core.deref(mults);
var inst_17067__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17066,inst_17065__$1);
var state_17086__$1 = (function (){var statearr_17107 = state_17086;
(statearr_17107[(11)] = inst_17067__$1);

(statearr_17107[(7)] = inst_17065__$1);

return statearr_17107;
})();
if(cljs.core.truth_(inst_17067__$1)){
var statearr_17108_17206 = state_17086__$1;
(statearr_17108_17206[(1)] = (19));

} else {
var statearr_17109_17207 = state_17086__$1;
(statearr_17109_17207[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (25))){
var inst_17076 = (state_17086[(2)]);
var state_17086__$1 = state_17086;
var statearr_17110_17208 = state_17086__$1;
(statearr_17110_17208[(2)] = inst_17076);

(statearr_17110_17208[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (17))){
var inst_17041 = (state_17086[(10)]);
var inst_17050 = cljs.core.first(inst_17041);
var inst_17051 = cljs.core.async.muxch_STAR_(inst_17050);
var inst_17052 = cljs.core.async.close_BANG_(inst_17051);
var inst_17053 = cljs.core.next(inst_17041);
var inst_17027 = inst_17053;
var inst_17028 = null;
var inst_17029 = (0);
var inst_17030 = (0);
var state_17086__$1 = (function (){var statearr_17111 = state_17086;
(statearr_17111[(12)] = inst_17030);

(statearr_17111[(13)] = inst_17052);

(statearr_17111[(14)] = inst_17028);

(statearr_17111[(15)] = inst_17027);

(statearr_17111[(16)] = inst_17029);

return statearr_17111;
})();
var statearr_17116_17218 = state_17086__$1;
(statearr_17116_17218[(2)] = null);

(statearr_17116_17218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (3))){
var inst_17084 = (state_17086[(2)]);
var state_17086__$1 = state_17086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17086__$1,inst_17084);
} else {
if((state_val_17087 === (12))){
var inst_17061 = (state_17086[(2)]);
var state_17086__$1 = state_17086;
var statearr_17126_17219 = state_17086__$1;
(statearr_17126_17219[(2)] = inst_17061);

(statearr_17126_17219[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (2))){
var state_17086__$1 = state_17086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17086__$1,(4),ch);
} else {
if((state_val_17087 === (23))){
var state_17086__$1 = state_17086;
var statearr_17130_17220 = state_17086__$1;
(statearr_17130_17220[(2)] = null);

(statearr_17130_17220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (19))){
var inst_17017 = (state_17086[(8)]);
var inst_17067 = (state_17086[(11)]);
var inst_17069 = cljs.core.async.muxch_STAR_(inst_17067);
var state_17086__$1 = state_17086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17086__$1,(22),inst_17069,inst_17017);
} else {
if((state_val_17087 === (11))){
var inst_17041 = (state_17086[(10)]);
var inst_17027 = (state_17086[(15)]);
var inst_17041__$1 = cljs.core.seq(inst_17027);
var state_17086__$1 = (function (){var statearr_17131 = state_17086;
(statearr_17131[(10)] = inst_17041__$1);

return statearr_17131;
})();
if(inst_17041__$1){
var statearr_17132_17221 = state_17086__$1;
(statearr_17132_17221[(1)] = (13));

} else {
var statearr_17133_17222 = state_17086__$1;
(statearr_17133_17222[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (9))){
var inst_17063 = (state_17086[(2)]);
var state_17086__$1 = state_17086;
var statearr_17134_17223 = state_17086__$1;
(statearr_17134_17223[(2)] = inst_17063);

(statearr_17134_17223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (5))){
var inst_17024 = cljs.core.deref(mults);
var inst_17025 = cljs.core.vals(inst_17024);
var inst_17026 = cljs.core.seq(inst_17025);
var inst_17027 = inst_17026;
var inst_17028 = null;
var inst_17029 = (0);
var inst_17030 = (0);
var state_17086__$1 = (function (){var statearr_17135 = state_17086;
(statearr_17135[(12)] = inst_17030);

(statearr_17135[(14)] = inst_17028);

(statearr_17135[(15)] = inst_17027);

(statearr_17135[(16)] = inst_17029);

return statearr_17135;
})();
var statearr_17136_17224 = state_17086__$1;
(statearr_17136_17224[(2)] = null);

(statearr_17136_17224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (14))){
var state_17086__$1 = state_17086;
var statearr_17140_17225 = state_17086__$1;
(statearr_17140_17225[(2)] = null);

(statearr_17140_17225[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (16))){
var inst_17041 = (state_17086[(10)]);
var inst_17045 = cljs.core.chunk_first(inst_17041);
var inst_17046 = cljs.core.chunk_rest(inst_17041);
var inst_17047 = cljs.core.count(inst_17045);
var inst_17027 = inst_17046;
var inst_17028 = inst_17045;
var inst_17029 = inst_17047;
var inst_17030 = (0);
var state_17086__$1 = (function (){var statearr_17141 = state_17086;
(statearr_17141[(12)] = inst_17030);

(statearr_17141[(14)] = inst_17028);

(statearr_17141[(15)] = inst_17027);

(statearr_17141[(16)] = inst_17029);

return statearr_17141;
})();
var statearr_17142_17226 = state_17086__$1;
(statearr_17142_17226[(2)] = null);

(statearr_17142_17226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (10))){
var inst_17030 = (state_17086[(12)]);
var inst_17028 = (state_17086[(14)]);
var inst_17027 = (state_17086[(15)]);
var inst_17029 = (state_17086[(16)]);
var inst_17035 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17028,inst_17030);
var inst_17036 = cljs.core.async.muxch_STAR_(inst_17035);
var inst_17037 = cljs.core.async.close_BANG_(inst_17036);
var inst_17038 = (inst_17030 + (1));
var tmp17137 = inst_17028;
var tmp17138 = inst_17027;
var tmp17139 = inst_17029;
var inst_17027__$1 = tmp17138;
var inst_17028__$1 = tmp17137;
var inst_17029__$1 = tmp17139;
var inst_17030__$1 = inst_17038;
var state_17086__$1 = (function (){var statearr_17143 = state_17086;
(statearr_17143[(12)] = inst_17030__$1);

(statearr_17143[(14)] = inst_17028__$1);

(statearr_17143[(15)] = inst_17027__$1);

(statearr_17143[(16)] = inst_17029__$1);

(statearr_17143[(17)] = inst_17037);

return statearr_17143;
})();
var statearr_17144_17227 = state_17086__$1;
(statearr_17144_17227[(2)] = null);

(statearr_17144_17227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (18))){
var inst_17056 = (state_17086[(2)]);
var state_17086__$1 = state_17086;
var statearr_17149_17228 = state_17086__$1;
(statearr_17149_17228[(2)] = inst_17056);

(statearr_17149_17228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (8))){
var inst_17030 = (state_17086[(12)]);
var inst_17029 = (state_17086[(16)]);
var inst_17032 = (inst_17030 < inst_17029);
var inst_17033 = inst_17032;
var state_17086__$1 = state_17086;
if(cljs.core.truth_(inst_17033)){
var statearr_17151_17229 = state_17086__$1;
(statearr_17151_17229[(1)] = (10));

} else {
var statearr_17155_17230 = state_17086__$1;
(statearr_17155_17230[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10479__auto___17193,mults,ensure_mult,p))
;
return ((function (switch__10456__auto__,c__10479__auto___17193,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10457__auto__ = null;
var cljs$core$async$state_machine__10457__auto____0 = (function (){
var statearr_17176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17176[(0)] = cljs$core$async$state_machine__10457__auto__);

(statearr_17176[(1)] = (1));

return statearr_17176;
});
var cljs$core$async$state_machine__10457__auto____1 = (function (state_17086){
while(true){
var ret_value__10458__auto__ = (function (){try{while(true){
var result__10459__auto__ = switch__10456__auto__(state_17086);
if(cljs.core.keyword_identical_QMARK_(result__10459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10459__auto__;
}
break;
}
}catch (e17177){if((e17177 instanceof Object)){
var ex__10460__auto__ = e17177;
var statearr_17178_17231 = state_17086;
(statearr_17178_17231[(5)] = ex__10460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17177;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17232 = state_17086;
state_17086 = G__17232;
continue;
} else {
return ret_value__10458__auto__;
}
break;
}
});
cljs$core$async$state_machine__10457__auto__ = function(state_17086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10457__auto____1.call(this,state_17086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10457__auto____0;
cljs$core$async$state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10457__auto____1;
return cljs$core$async$state_machine__10457__auto__;
})()
;})(switch__10456__auto__,c__10479__auto___17193,mults,ensure_mult,p))
})();
var state__10481__auto__ = (function (){var statearr_17179 = (f__10480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10480__auto__.cljs$core$IFn$_invoke$arity$0() : f__10480__auto__.call(null));
(statearr_17179[(6)] = c__10479__auto___17193);

return statearr_17179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10481__auto__);
});})(c__10479__auto___17193,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17234 = arguments.length;
switch (G__17234) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17246 = arguments.length;
switch (G__17246) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17255 = arguments.length;
switch (G__17255) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__10479__auto___17336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10479__auto___17336,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10480__auto__ = (function (){var switch__10456__auto__ = ((function (c__10479__auto___17336,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17294){
var state_val_17295 = (state_17294[(1)]);
if((state_val_17295 === (7))){
var state_17294__$1 = state_17294;
var statearr_17296_17340 = state_17294__$1;
(statearr_17296_17340[(2)] = null);

(statearr_17296_17340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (1))){
var state_17294__$1 = state_17294;
var statearr_17300_17341 = state_17294__$1;
(statearr_17300_17341[(2)] = null);

(statearr_17300_17341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (4))){
var inst_17258 = (state_17294[(7)]);
var inst_17260 = (inst_17258 < cnt);
var state_17294__$1 = state_17294;
if(cljs.core.truth_(inst_17260)){
var statearr_17301_17342 = state_17294__$1;
(statearr_17301_17342[(1)] = (6));

} else {
var statearr_17302_17343 = state_17294__$1;
(statearr_17302_17343[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (15))){
var inst_17290 = (state_17294[(2)]);
var state_17294__$1 = state_17294;
var statearr_17303_17347 = state_17294__$1;
(statearr_17303_17347[(2)] = inst_17290);

(statearr_17303_17347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (13))){
var inst_17283 = cljs.core.async.close_BANG_(out);
var state_17294__$1 = state_17294;
var statearr_17310_17348 = state_17294__$1;
(statearr_17310_17348[(2)] = inst_17283);

(statearr_17310_17348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (6))){
var state_17294__$1 = state_17294;
var statearr_17311_17349 = state_17294__$1;
(statearr_17311_17349[(2)] = null);

(statearr_17311_17349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (3))){
var inst_17292 = (state_17294[(2)]);
var state_17294__$1 = state_17294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17294__$1,inst_17292);
} else {
if((state_val_17295 === (12))){
var inst_17280 = (state_17294[(8)]);
var inst_17280__$1 = (state_17294[(2)]);
var inst_17281 = cljs.core.some(cljs.core.nil_QMARK_,inst_17280__$1);
var state_17294__$1 = (function (){var statearr_17312 = state_17294;
(statearr_17312[(8)] = inst_17280__$1);

return statearr_17312;
})();
if(cljs.core.truth_(inst_17281)){
var statearr_17313_17353 = state_17294__$1;
(statearr_17313_17353[(1)] = (13));

} else {
var statearr_17314_17354 = state_17294__$1;
(statearr_17314_17354[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (2))){
var inst_17257 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17258 = (0);
var state_17294__$1 = (function (){var statearr_17315 = state_17294;
(statearr_17315[(7)] = inst_17258);

(statearr_17315[(9)] = inst_17257);

return statearr_17315;
})();
var statearr_17316_17355 = state_17294__$1;
(statearr_17316_17355[(2)] = null);

(statearr_17316_17355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (11))){
var inst_17258 = (state_17294[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17294,(10),Object,null,(9));
var inst_17267 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17258) : chs__$1.call(null,inst_17258));
var inst_17268 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17258) : done.call(null,inst_17258));
var inst_17269 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17267,inst_17268);
var state_17294__$1 = state_17294;
var statearr_17317_17358 = state_17294__$1;
(statearr_17317_17358[(2)] = inst_17269);


cljs.core.async.impl.ioc_helpers.process_exception(state_17294__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (9))){
var inst_17258 = (state_17294[(7)]);
var inst_17271 = (state_17294[(2)]);
var inst_17272 = (inst_17258 + (1));
var inst_17258__$1 = inst_17272;
var state_17294__$1 = (function (){var statearr_17318 = state_17294;
(statearr_17318[(10)] = inst_17271);

(statearr_17318[(7)] = inst_17258__$1);

return statearr_17318;
})();
var statearr_17319_17359 = state_17294__$1;
(statearr_17319_17359[(2)] = null);

(statearr_17319_17359[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (5))){
var inst_17278 = (state_17294[(2)]);
var state_17294__$1 = (function (){var statearr_17320 = state_17294;
(statearr_17320[(11)] = inst_17278);

return statearr_17320;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17294__$1,(12),dchan);
} else {
if((state_val_17295 === (14))){
var inst_17280 = (state_17294[(8)]);
var inst_17285 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17280);
var state_17294__$1 = state_17294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17294__$1,(16),out,inst_17285);
} else {
if((state_val_17295 === (16))){
var inst_17287 = (state_17294[(2)]);
var state_17294__$1 = (function (){var statearr_17323 = state_17294;
(statearr_17323[(12)] = inst_17287);

return statearr_17323;
})();
var statearr_17324_17360 = state_17294__$1;
(statearr_17324_17360[(2)] = null);

(statearr_17324_17360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (10))){
var inst_17262 = (state_17294[(2)]);
var inst_17263 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17294__$1 = (function (){var statearr_17325 = state_17294;
(statearr_17325[(13)] = inst_17262);

return statearr_17325;
})();
var statearr_17326_17361 = state_17294__$1;
(statearr_17326_17361[(2)] = inst_17263);


cljs.core.async.impl.ioc_helpers.process_exception(state_17294__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17295 === (8))){
var inst_17276 = (state_17294[(2)]);
var state_17294__$1 = state_17294;
var statearr_17327_17365 = state_17294__$1;
(statearr_17327_17365[(2)] = inst_17276);

(statearr_17327_17365[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10479__auto___17336,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10456__auto__,c__10479__auto___17336,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10457__auto__ = null;
var cljs$core$async$state_machine__10457__auto____0 = (function (){
var statearr_17331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17331[(0)] = cljs$core$async$state_machine__10457__auto__);

(statearr_17331[(1)] = (1));

return statearr_17331;
});
var cljs$core$async$state_machine__10457__auto____1 = (function (state_17294){
while(true){
var ret_value__10458__auto__ = (function (){try{while(true){
var result__10459__auto__ = switch__10456__auto__(state_17294);
if(cljs.core.keyword_identical_QMARK_(result__10459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10459__auto__;
}
break;
}
}catch (e17332){if((e17332 instanceof Object)){
var ex__10460__auto__ = e17332;
var statearr_17333_17367 = state_17294;
(statearr_17333_17367[(5)] = ex__10460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17332;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17368 = state_17294;
state_17294 = G__17368;
continue;
} else {
return ret_value__10458__auto__;
}
break;
}
});
cljs$core$async$state_machine__10457__auto__ = function(state_17294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10457__auto____1.call(this,state_17294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10457__auto____0;
cljs$core$async$state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10457__auto____1;
return cljs$core$async$state_machine__10457__auto__;
})()
;})(switch__10456__auto__,c__10479__auto___17336,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10481__auto__ = (function (){var statearr_17334 = (f__10480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10480__auto__.cljs$core$IFn$_invoke$arity$0() : f__10480__auto__.call(null));
(statearr_17334[(6)] = c__10479__auto___17336);

return statearr_17334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10481__auto__);
});})(c__10479__auto___17336,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17374 = arguments.length;
switch (G__17374) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10479__auto___17444 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10479__auto___17444,out){
return (function (){
var f__10480__auto__ = (function (){var switch__10456__auto__ = ((function (c__10479__auto___17444,out){
return (function (state_17418){
var state_val_17419 = (state_17418[(1)]);
if((state_val_17419 === (7))){
var inst_17397 = (state_17418[(7)]);
var inst_17398 = (state_17418[(8)]);
var inst_17397__$1 = (state_17418[(2)]);
var inst_17398__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17397__$1,(0),null);
var inst_17399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17397__$1,(1),null);
var inst_17400 = (inst_17398__$1 == null);
var state_17418__$1 = (function (){var statearr_17420 = state_17418;
(statearr_17420[(7)] = inst_17397__$1);

(statearr_17420[(8)] = inst_17398__$1);

(statearr_17420[(9)] = inst_17399);

return statearr_17420;
})();
if(cljs.core.truth_(inst_17400)){
var statearr_17421_17449 = state_17418__$1;
(statearr_17421_17449[(1)] = (8));

} else {
var statearr_17422_17450 = state_17418__$1;
(statearr_17422_17450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (1))){
var inst_17375 = cljs.core.vec(chs);
var inst_17376 = inst_17375;
var state_17418__$1 = (function (){var statearr_17423 = state_17418;
(statearr_17423[(10)] = inst_17376);

return statearr_17423;
})();
var statearr_17424_17454 = state_17418__$1;
(statearr_17424_17454[(2)] = null);

(statearr_17424_17454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (4))){
var inst_17376 = (state_17418[(10)]);
var state_17418__$1 = state_17418;
return cljs.core.async.ioc_alts_BANG_(state_17418__$1,(7),inst_17376);
} else {
if((state_val_17419 === (6))){
var inst_17414 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17425_17455 = state_17418__$1;
(statearr_17425_17455[(2)] = inst_17414);

(statearr_17425_17455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (3))){
var inst_17416 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17418__$1,inst_17416);
} else {
if((state_val_17419 === (2))){
var inst_17376 = (state_17418[(10)]);
var inst_17378 = cljs.core.count(inst_17376);
var inst_17379 = (inst_17378 > (0));
var state_17418__$1 = state_17418;
if(cljs.core.truth_(inst_17379)){
var statearr_17427_17456 = state_17418__$1;
(statearr_17427_17456[(1)] = (4));

} else {
var statearr_17428_17457 = state_17418__$1;
(statearr_17428_17457[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (11))){
var inst_17376 = (state_17418[(10)]);
var inst_17407 = (state_17418[(2)]);
var tmp17426 = inst_17376;
var inst_17376__$1 = tmp17426;
var state_17418__$1 = (function (){var statearr_17429 = state_17418;
(statearr_17429[(11)] = inst_17407);

(statearr_17429[(10)] = inst_17376__$1);

return statearr_17429;
})();
var statearr_17430_17461 = state_17418__$1;
(statearr_17430_17461[(2)] = null);

(statearr_17430_17461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (9))){
var inst_17398 = (state_17418[(8)]);
var state_17418__$1 = state_17418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17418__$1,(11),out,inst_17398);
} else {
if((state_val_17419 === (5))){
var inst_17412 = cljs.core.async.close_BANG_(out);
var state_17418__$1 = state_17418;
var statearr_17431_17462 = state_17418__$1;
(statearr_17431_17462[(2)] = inst_17412);

(statearr_17431_17462[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (10))){
var inst_17410 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17432_17463 = state_17418__$1;
(statearr_17432_17463[(2)] = inst_17410);

(statearr_17432_17463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (8))){
var inst_17397 = (state_17418[(7)]);
var inst_17398 = (state_17418[(8)]);
var inst_17376 = (state_17418[(10)]);
var inst_17399 = (state_17418[(9)]);
var inst_17402 = (function (){var cs = inst_17376;
var vec__17384 = inst_17397;
var v = inst_17398;
var c = inst_17399;
return ((function (cs,vec__17384,v,c,inst_17397,inst_17398,inst_17376,inst_17399,state_val_17419,c__10479__auto___17444,out){
return (function (p1__17372_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17372_SHARP_);
});
;})(cs,vec__17384,v,c,inst_17397,inst_17398,inst_17376,inst_17399,state_val_17419,c__10479__auto___17444,out))
})();
var inst_17403 = cljs.core.filterv(inst_17402,inst_17376);
var inst_17376__$1 = inst_17403;
var state_17418__$1 = (function (){var statearr_17433 = state_17418;
(statearr_17433[(10)] = inst_17376__$1);

return statearr_17433;
})();
var statearr_17434_17464 = state_17418__$1;
(statearr_17434_17464[(2)] = null);

(statearr_17434_17464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10479__auto___17444,out))
;
return ((function (switch__10456__auto__,c__10479__auto___17444,out){
return (function() {
var cljs$core$async$state_machine__10457__auto__ = null;
var cljs$core$async$state_machine__10457__auto____0 = (function (){
var statearr_17435 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17435[(0)] = cljs$core$async$state_machine__10457__auto__);

(statearr_17435[(1)] = (1));

return statearr_17435;
});
var cljs$core$async$state_machine__10457__auto____1 = (function (state_17418){
while(true){
var ret_value__10458__auto__ = (function (){try{while(true){
var result__10459__auto__ = switch__10456__auto__(state_17418);
if(cljs.core.keyword_identical_QMARK_(result__10459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10459__auto__;
}
break;
}
}catch (e17436){if((e17436 instanceof Object)){
var ex__10460__auto__ = e17436;
var statearr_17437_17465 = state_17418;
(statearr_17437_17465[(5)] = ex__10460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17436;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17466 = state_17418;
state_17418 = G__17466;
continue;
} else {
return ret_value__10458__auto__;
}
break;
}
});
cljs$core$async$state_machine__10457__auto__ = function(state_17418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10457__auto____1.call(this,state_17418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10457__auto____0;
cljs$core$async$state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10457__auto____1;
return cljs$core$async$state_machine__10457__auto__;
})()
;})(switch__10456__auto__,c__10479__auto___17444,out))
})();
var state__10481__auto__ = (function (){var statearr_17438 = (f__10480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10480__auto__.cljs$core$IFn$_invoke$arity$0() : f__10480__auto__.call(null));
(statearr_17438[(6)] = c__10479__auto___17444);

return statearr_17438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10481__auto__);
});})(c__10479__auto___17444,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17474 = arguments.length;
switch (G__17474) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10479__auto___17522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10479__auto___17522,out){
return (function (){
var f__10480__auto__ = (function (){var switch__10456__auto__ = ((function (c__10479__auto___17522,out){
return (function (state_17498){
var state_val_17499 = (state_17498[(1)]);
if((state_val_17499 === (7))){
var inst_17480 = (state_17498[(7)]);
var inst_17480__$1 = (state_17498[(2)]);
var inst_17481 = (inst_17480__$1 == null);
var inst_17482 = cljs.core.not(inst_17481);
var state_17498__$1 = (function (){var statearr_17500 = state_17498;
(statearr_17500[(7)] = inst_17480__$1);

return statearr_17500;
})();
if(inst_17482){
var statearr_17501_17527 = state_17498__$1;
(statearr_17501_17527[(1)] = (8));

} else {
var statearr_17502_17528 = state_17498__$1;
(statearr_17502_17528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17499 === (1))){
var inst_17475 = (0);
var state_17498__$1 = (function (){var statearr_17503 = state_17498;
(statearr_17503[(8)] = inst_17475);

return statearr_17503;
})();
var statearr_17504_17529 = state_17498__$1;
(statearr_17504_17529[(2)] = null);

(statearr_17504_17529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17499 === (4))){
var state_17498__$1 = state_17498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17498__$1,(7),ch);
} else {
if((state_val_17499 === (6))){
var inst_17493 = (state_17498[(2)]);
var state_17498__$1 = state_17498;
var statearr_17505_17530 = state_17498__$1;
(statearr_17505_17530[(2)] = inst_17493);

(statearr_17505_17530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17499 === (3))){
var inst_17495 = (state_17498[(2)]);
var inst_17496 = cljs.core.async.close_BANG_(out);
var state_17498__$1 = (function (){var statearr_17506 = state_17498;
(statearr_17506[(9)] = inst_17495);

return statearr_17506;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17498__$1,inst_17496);
} else {
if((state_val_17499 === (2))){
var inst_17475 = (state_17498[(8)]);
var inst_17477 = (inst_17475 < n);
var state_17498__$1 = state_17498;
if(cljs.core.truth_(inst_17477)){
var statearr_17507_17531 = state_17498__$1;
(statearr_17507_17531[(1)] = (4));

} else {
var statearr_17508_17532 = state_17498__$1;
(statearr_17508_17532[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17499 === (11))){
var inst_17475 = (state_17498[(8)]);
var inst_17485 = (state_17498[(2)]);
var inst_17486 = (inst_17475 + (1));
var inst_17475__$1 = inst_17486;
var state_17498__$1 = (function (){var statearr_17509 = state_17498;
(statearr_17509[(10)] = inst_17485);

(statearr_17509[(8)] = inst_17475__$1);

return statearr_17509;
})();
var statearr_17510_17533 = state_17498__$1;
(statearr_17510_17533[(2)] = null);

(statearr_17510_17533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17499 === (9))){
var state_17498__$1 = state_17498;
var statearr_17511_17534 = state_17498__$1;
(statearr_17511_17534[(2)] = null);

(statearr_17511_17534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17499 === (5))){
var state_17498__$1 = state_17498;
var statearr_17512_17535 = state_17498__$1;
(statearr_17512_17535[(2)] = null);

(statearr_17512_17535[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17499 === (10))){
var inst_17490 = (state_17498[(2)]);
var state_17498__$1 = state_17498;
var statearr_17513_17536 = state_17498__$1;
(statearr_17513_17536[(2)] = inst_17490);

(statearr_17513_17536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17499 === (8))){
var inst_17480 = (state_17498[(7)]);
var state_17498__$1 = state_17498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17498__$1,(11),out,inst_17480);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10479__auto___17522,out))
;
return ((function (switch__10456__auto__,c__10479__auto___17522,out){
return (function() {
var cljs$core$async$state_machine__10457__auto__ = null;
var cljs$core$async$state_machine__10457__auto____0 = (function (){
var statearr_17514 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17514[(0)] = cljs$core$async$state_machine__10457__auto__);

(statearr_17514[(1)] = (1));

return statearr_17514;
});
var cljs$core$async$state_machine__10457__auto____1 = (function (state_17498){
while(true){
var ret_value__10458__auto__ = (function (){try{while(true){
var result__10459__auto__ = switch__10456__auto__(state_17498);
if(cljs.core.keyword_identical_QMARK_(result__10459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10459__auto__;
}
break;
}
}catch (e17515){if((e17515 instanceof Object)){
var ex__10460__auto__ = e17515;
var statearr_17516_17537 = state_17498;
(statearr_17516_17537[(5)] = ex__10460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17515;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17538 = state_17498;
state_17498 = G__17538;
continue;
} else {
return ret_value__10458__auto__;
}
break;
}
});
cljs$core$async$state_machine__10457__auto__ = function(state_17498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10457__auto____1.call(this,state_17498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10457__auto____0;
cljs$core$async$state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10457__auto____1;
return cljs$core$async$state_machine__10457__auto__;
})()
;})(switch__10456__auto__,c__10479__auto___17522,out))
})();
var state__10481__auto__ = (function (){var statearr_17520 = (f__10480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10480__auto__.cljs$core$IFn$_invoke$arity$0() : f__10480__auto__.call(null));
(statearr_17520[(6)] = c__10479__auto___17522);

return statearr_17520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10481__auto__);
});})(c__10479__auto___17522,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17543 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17543 = (function (f,ch,meta17544){
this.f = f;
this.ch = ch;
this.meta17544 = meta17544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17545,meta17544__$1){
var self__ = this;
var _17545__$1 = this;
return (new cljs.core.async.t_cljs$core$async17543(self__.f,self__.ch,meta17544__$1));
});

cljs.core.async.t_cljs$core$async17543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17545){
var self__ = this;
var _17545__$1 = this;
return self__.meta17544;
});

cljs.core.async.t_cljs$core$async17543.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17543.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17543.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17543.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17543.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17549 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17549 = (function (f,ch,meta17544,_,fn1,meta17550){
this.f = f;
this.ch = ch;
this.meta17544 = meta17544;
this._ = _;
this.fn1 = fn1;
this.meta17550 = meta17550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17551,meta17550__$1){
var self__ = this;
var _17551__$1 = this;
return (new cljs.core.async.t_cljs$core$async17549(self__.f,self__.ch,self__.meta17544,self__._,self__.fn1,meta17550__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17549.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17551){
var self__ = this;
var _17551__$1 = this;
return self__.meta17550;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17549.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17549.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17549.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17549.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17542_SHARP_){
var G__17552 = (((p1__17542_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17542_SHARP_) : self__.f.call(null,p1__17542_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17552) : f1.call(null,G__17552));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17549.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17544","meta17544",1296513753,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17543","cljs.core.async/t_cljs$core$async17543",1065795641,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17550","meta17550",1360531342,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17549.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17549";

cljs.core.async.t_cljs$core$async17549.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17549");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17549.
 */
cljs.core.async.__GT_t_cljs$core$async17549 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17549(f__$1,ch__$1,meta17544__$1,___$2,fn1__$1,meta17550){
return (new cljs.core.async.t_cljs$core$async17549(f__$1,ch__$1,meta17544__$1,___$2,fn1__$1,meta17550));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17549(self__.f,self__.ch,self__.meta17544,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17553 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17553) : self__.f.call(null,G__17553));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17543.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17543.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17544","meta17544",1296513753,null)], null);
});

cljs.core.async.t_cljs$core$async17543.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17543";

cljs.core.async.t_cljs$core$async17543.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17543");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17543.
 */
cljs.core.async.__GT_t_cljs$core$async17543 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17543(f__$1,ch__$1,meta17544){
return (new cljs.core.async.t_cljs$core$async17543(f__$1,ch__$1,meta17544));
});

}

return (new cljs.core.async.t_cljs$core$async17543(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17556 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17556 = (function (f,ch,meta17557){
this.f = f;
this.ch = ch;
this.meta17557 = meta17557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17558,meta17557__$1){
var self__ = this;
var _17558__$1 = this;
return (new cljs.core.async.t_cljs$core$async17556(self__.f,self__.ch,meta17557__$1));
});

cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17558){
var self__ = this;
var _17558__$1 = this;
return self__.meta17557;
});

cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17557","meta17557",417112085,null)], null);
});

cljs.core.async.t_cljs$core$async17556.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17556";

cljs.core.async.t_cljs$core$async17556.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17556");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17556.
 */
cljs.core.async.__GT_t_cljs$core$async17556 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17556(f__$1,ch__$1,meta17557){
return (new cljs.core.async.t_cljs$core$async17556(f__$1,ch__$1,meta17557));
});

}

return (new cljs.core.async.t_cljs$core$async17556(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17568 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17568 = (function (p,ch,meta17569){
this.p = p;
this.ch = ch;
this.meta17569 = meta17569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17570,meta17569__$1){
var self__ = this;
var _17570__$1 = this;
return (new cljs.core.async.t_cljs$core$async17568(self__.p,self__.ch,meta17569__$1));
});

cljs.core.async.t_cljs$core$async17568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17570){
var self__ = this;
var _17570__$1 = this;
return self__.meta17569;
});

cljs.core.async.t_cljs$core$async17568.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17568.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17568.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17568.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17568.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17568.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17568.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17569","meta17569",1388677410,null)], null);
});

cljs.core.async.t_cljs$core$async17568.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17568";

cljs.core.async.t_cljs$core$async17568.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17568");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17568.
 */
cljs.core.async.__GT_t_cljs$core$async17568 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17568(p__$1,ch__$1,meta17569){
return (new cljs.core.async.t_cljs$core$async17568(p__$1,ch__$1,meta17569));
});

}

return (new cljs.core.async.t_cljs$core$async17568(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17579 = arguments.length;
switch (G__17579) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10479__auto___17664 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10479__auto___17664,out){
return (function (){
var f__10480__auto__ = (function (){var switch__10456__auto__ = ((function (c__10479__auto___17664,out){
return (function (state_17633){
var state_val_17634 = (state_17633[(1)]);
if((state_val_17634 === (7))){
var inst_17629 = (state_17633[(2)]);
var state_17633__$1 = state_17633;
var statearr_17644_17665 = state_17633__$1;
(statearr_17644_17665[(2)] = inst_17629);

(statearr_17644_17665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17634 === (1))){
var state_17633__$1 = state_17633;
var statearr_17645_17666 = state_17633__$1;
(statearr_17645_17666[(2)] = null);

(statearr_17645_17666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17634 === (4))){
var inst_17615 = (state_17633[(7)]);
var inst_17615__$1 = (state_17633[(2)]);
var inst_17616 = (inst_17615__$1 == null);
var state_17633__$1 = (function (){var statearr_17646 = state_17633;
(statearr_17646[(7)] = inst_17615__$1);

return statearr_17646;
})();
if(cljs.core.truth_(inst_17616)){
var statearr_17647_17667 = state_17633__$1;
(statearr_17647_17667[(1)] = (5));

} else {
var statearr_17648_17668 = state_17633__$1;
(statearr_17648_17668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17634 === (6))){
var inst_17615 = (state_17633[(7)]);
var inst_17620 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17615) : p.call(null,inst_17615));
var state_17633__$1 = state_17633;
if(cljs.core.truth_(inst_17620)){
var statearr_17649_17669 = state_17633__$1;
(statearr_17649_17669[(1)] = (8));

} else {
var statearr_17650_17670 = state_17633__$1;
(statearr_17650_17670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17634 === (3))){
var inst_17631 = (state_17633[(2)]);
var state_17633__$1 = state_17633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17633__$1,inst_17631);
} else {
if((state_val_17634 === (2))){
var state_17633__$1 = state_17633;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17633__$1,(4),ch);
} else {
if((state_val_17634 === (11))){
var inst_17623 = (state_17633[(2)]);
var state_17633__$1 = state_17633;
var statearr_17651_17671 = state_17633__$1;
(statearr_17651_17671[(2)] = inst_17623);

(statearr_17651_17671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17634 === (9))){
var state_17633__$1 = state_17633;
var statearr_17652_17672 = state_17633__$1;
(statearr_17652_17672[(2)] = null);

(statearr_17652_17672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17634 === (5))){
var inst_17618 = cljs.core.async.close_BANG_(out);
var state_17633__$1 = state_17633;
var statearr_17653_17673 = state_17633__$1;
(statearr_17653_17673[(2)] = inst_17618);

(statearr_17653_17673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17634 === (10))){
var inst_17626 = (state_17633[(2)]);
var state_17633__$1 = (function (){var statearr_17654 = state_17633;
(statearr_17654[(8)] = inst_17626);

return statearr_17654;
})();
var statearr_17655_17674 = state_17633__$1;
(statearr_17655_17674[(2)] = null);

(statearr_17655_17674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17634 === (8))){
var inst_17615 = (state_17633[(7)]);
var state_17633__$1 = state_17633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17633__$1,(11),out,inst_17615);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10479__auto___17664,out))
;
return ((function (switch__10456__auto__,c__10479__auto___17664,out){
return (function() {
var cljs$core$async$state_machine__10457__auto__ = null;
var cljs$core$async$state_machine__10457__auto____0 = (function (){
var statearr_17656 = [null,null,null,null,null,null,null,null,null];
(statearr_17656[(0)] = cljs$core$async$state_machine__10457__auto__);

(statearr_17656[(1)] = (1));

return statearr_17656;
});
var cljs$core$async$state_machine__10457__auto____1 = (function (state_17633){
while(true){
var ret_value__10458__auto__ = (function (){try{while(true){
var result__10459__auto__ = switch__10456__auto__(state_17633);
if(cljs.core.keyword_identical_QMARK_(result__10459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10459__auto__;
}
break;
}
}catch (e17657){if((e17657 instanceof Object)){
var ex__10460__auto__ = e17657;
var statearr_17658_17675 = state_17633;
(statearr_17658_17675[(5)] = ex__10460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17657;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17676 = state_17633;
state_17633 = G__17676;
continue;
} else {
return ret_value__10458__auto__;
}
break;
}
});
cljs$core$async$state_machine__10457__auto__ = function(state_17633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10457__auto____1.call(this,state_17633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10457__auto____0;
cljs$core$async$state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10457__auto____1;
return cljs$core$async$state_machine__10457__auto__;
})()
;})(switch__10456__auto__,c__10479__auto___17664,out))
})();
var state__10481__auto__ = (function (){var statearr_17659 = (f__10480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10480__auto__.cljs$core$IFn$_invoke$arity$0() : f__10480__auto__.call(null));
(statearr_17659[(6)] = c__10479__auto___17664);

return statearr_17659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10481__auto__);
});})(c__10479__auto___17664,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17678 = arguments.length;
switch (G__17678) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__10479__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10479__auto__){
return (function (){
var f__10480__auto__ = (function (){var switch__10456__auto__ = ((function (c__10479__auto__){
return (function (state_17750){
var state_val_17751 = (state_17750[(1)]);
if((state_val_17751 === (7))){
var inst_17746 = (state_17750[(2)]);
var state_17750__$1 = state_17750;
var statearr_17752_17796 = state_17750__$1;
(statearr_17752_17796[(2)] = inst_17746);

(statearr_17752_17796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (20))){
var inst_17716 = (state_17750[(7)]);
var inst_17727 = (state_17750[(2)]);
var inst_17728 = cljs.core.next(inst_17716);
var inst_17702 = inst_17728;
var inst_17703 = null;
var inst_17704 = (0);
var inst_17705 = (0);
var state_17750__$1 = (function (){var statearr_17753 = state_17750;
(statearr_17753[(8)] = inst_17702);

(statearr_17753[(9)] = inst_17727);

(statearr_17753[(10)] = inst_17704);

(statearr_17753[(11)] = inst_17703);

(statearr_17753[(12)] = inst_17705);

return statearr_17753;
})();
var statearr_17754_17797 = state_17750__$1;
(statearr_17754_17797[(2)] = null);

(statearr_17754_17797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (1))){
var state_17750__$1 = state_17750;
var statearr_17755_17798 = state_17750__$1;
(statearr_17755_17798[(2)] = null);

(statearr_17755_17798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (4))){
var inst_17691 = (state_17750[(13)]);
var inst_17691__$1 = (state_17750[(2)]);
var inst_17692 = (inst_17691__$1 == null);
var state_17750__$1 = (function (){var statearr_17756 = state_17750;
(statearr_17756[(13)] = inst_17691__$1);

return statearr_17756;
})();
if(cljs.core.truth_(inst_17692)){
var statearr_17757_17799 = state_17750__$1;
(statearr_17757_17799[(1)] = (5));

} else {
var statearr_17764_17800 = state_17750__$1;
(statearr_17764_17800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (15))){
var state_17750__$1 = state_17750;
var statearr_17768_17801 = state_17750__$1;
(statearr_17768_17801[(2)] = null);

(statearr_17768_17801[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (21))){
var state_17750__$1 = state_17750;
var statearr_17769_17802 = state_17750__$1;
(statearr_17769_17802[(2)] = null);

(statearr_17769_17802[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (13))){
var inst_17702 = (state_17750[(8)]);
var inst_17704 = (state_17750[(10)]);
var inst_17703 = (state_17750[(11)]);
var inst_17705 = (state_17750[(12)]);
var inst_17712 = (state_17750[(2)]);
var inst_17713 = (inst_17705 + (1));
var tmp17765 = inst_17702;
var tmp17766 = inst_17704;
var tmp17767 = inst_17703;
var inst_17702__$1 = tmp17765;
var inst_17703__$1 = tmp17767;
var inst_17704__$1 = tmp17766;
var inst_17705__$1 = inst_17713;
var state_17750__$1 = (function (){var statearr_17770 = state_17750;
(statearr_17770[(8)] = inst_17702__$1);

(statearr_17770[(10)] = inst_17704__$1);

(statearr_17770[(11)] = inst_17703__$1);

(statearr_17770[(12)] = inst_17705__$1);

(statearr_17770[(14)] = inst_17712);

return statearr_17770;
})();
var statearr_17771_17806 = state_17750__$1;
(statearr_17771_17806[(2)] = null);

(statearr_17771_17806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (22))){
var state_17750__$1 = state_17750;
var statearr_17772_17807 = state_17750__$1;
(statearr_17772_17807[(2)] = null);

(statearr_17772_17807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (6))){
var inst_17691 = (state_17750[(13)]);
var inst_17700 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17691) : f.call(null,inst_17691));
var inst_17701 = cljs.core.seq(inst_17700);
var inst_17702 = inst_17701;
var inst_17703 = null;
var inst_17704 = (0);
var inst_17705 = (0);
var state_17750__$1 = (function (){var statearr_17773 = state_17750;
(statearr_17773[(8)] = inst_17702);

(statearr_17773[(10)] = inst_17704);

(statearr_17773[(11)] = inst_17703);

(statearr_17773[(12)] = inst_17705);

return statearr_17773;
})();
var statearr_17774_17812 = state_17750__$1;
(statearr_17774_17812[(2)] = null);

(statearr_17774_17812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (17))){
var inst_17716 = (state_17750[(7)]);
var inst_17720 = cljs.core.chunk_first(inst_17716);
var inst_17721 = cljs.core.chunk_rest(inst_17716);
var inst_17722 = cljs.core.count(inst_17720);
var inst_17702 = inst_17721;
var inst_17703 = inst_17720;
var inst_17704 = inst_17722;
var inst_17705 = (0);
var state_17750__$1 = (function (){var statearr_17775 = state_17750;
(statearr_17775[(8)] = inst_17702);

(statearr_17775[(10)] = inst_17704);

(statearr_17775[(11)] = inst_17703);

(statearr_17775[(12)] = inst_17705);

return statearr_17775;
})();
var statearr_17776_17816 = state_17750__$1;
(statearr_17776_17816[(2)] = null);

(statearr_17776_17816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (3))){
var inst_17748 = (state_17750[(2)]);
var state_17750__$1 = state_17750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17750__$1,inst_17748);
} else {
if((state_val_17751 === (12))){
var inst_17736 = (state_17750[(2)]);
var state_17750__$1 = state_17750;
var statearr_17777_17817 = state_17750__$1;
(statearr_17777_17817[(2)] = inst_17736);

(statearr_17777_17817[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (2))){
var state_17750__$1 = state_17750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17750__$1,(4),in$);
} else {
if((state_val_17751 === (23))){
var inst_17744 = (state_17750[(2)]);
var state_17750__$1 = state_17750;
var statearr_17778_17818 = state_17750__$1;
(statearr_17778_17818[(2)] = inst_17744);

(statearr_17778_17818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (19))){
var inst_17731 = (state_17750[(2)]);
var state_17750__$1 = state_17750;
var statearr_17779_17819 = state_17750__$1;
(statearr_17779_17819[(2)] = inst_17731);

(statearr_17779_17819[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (11))){
var inst_17702 = (state_17750[(8)]);
var inst_17716 = (state_17750[(7)]);
var inst_17716__$1 = cljs.core.seq(inst_17702);
var state_17750__$1 = (function (){var statearr_17780 = state_17750;
(statearr_17780[(7)] = inst_17716__$1);

return statearr_17780;
})();
if(inst_17716__$1){
var statearr_17781_17820 = state_17750__$1;
(statearr_17781_17820[(1)] = (14));

} else {
var statearr_17782_17821 = state_17750__$1;
(statearr_17782_17821[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (9))){
var inst_17738 = (state_17750[(2)]);
var inst_17739 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17750__$1 = (function (){var statearr_17783 = state_17750;
(statearr_17783[(15)] = inst_17738);

return statearr_17783;
})();
if(cljs.core.truth_(inst_17739)){
var statearr_17784_17822 = state_17750__$1;
(statearr_17784_17822[(1)] = (21));

} else {
var statearr_17785_17823 = state_17750__$1;
(statearr_17785_17823[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (5))){
var inst_17694 = cljs.core.async.close_BANG_(out);
var state_17750__$1 = state_17750;
var statearr_17786_17824 = state_17750__$1;
(statearr_17786_17824[(2)] = inst_17694);

(statearr_17786_17824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (14))){
var inst_17716 = (state_17750[(7)]);
var inst_17718 = cljs.core.chunked_seq_QMARK_(inst_17716);
var state_17750__$1 = state_17750;
if(inst_17718){
var statearr_17787_17825 = state_17750__$1;
(statearr_17787_17825[(1)] = (17));

} else {
var statearr_17788_17826 = state_17750__$1;
(statearr_17788_17826[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (16))){
var inst_17734 = (state_17750[(2)]);
var state_17750__$1 = state_17750;
var statearr_17789_17827 = state_17750__$1;
(statearr_17789_17827[(2)] = inst_17734);

(statearr_17789_17827[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17751 === (10))){
var inst_17703 = (state_17750[(11)]);
var inst_17705 = (state_17750[(12)]);
var inst_17710 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17703,inst_17705);
var state_17750__$1 = state_17750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17750__$1,(13),out,inst_17710);
} else {
if((state_val_17751 === (18))){
var inst_17716 = (state_17750[(7)]);
var inst_17725 = cljs.core.first(inst_17716);
var state_17750__$1 = state_17750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17750__$1,(20),out,inst_17725);
} else {
if((state_val_17751 === (8))){
var inst_17704 = (state_17750[(10)]);
var inst_17705 = (state_17750[(12)]);
var inst_17707 = (inst_17705 < inst_17704);
var inst_17708 = inst_17707;
var state_17750__$1 = state_17750;
if(cljs.core.truth_(inst_17708)){
var statearr_17790_17828 = state_17750__$1;
(statearr_17790_17828[(1)] = (10));

} else {
var statearr_17791_17829 = state_17750__$1;
(statearr_17791_17829[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10479__auto__))
;
return ((function (switch__10456__auto__,c__10479__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10457__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10457__auto____0 = (function (){
var statearr_17792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17792[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10457__auto__);

(statearr_17792[(1)] = (1));

return statearr_17792;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10457__auto____1 = (function (state_17750){
while(true){
var ret_value__10458__auto__ = (function (){try{while(true){
var result__10459__auto__ = switch__10456__auto__(state_17750);
if(cljs.core.keyword_identical_QMARK_(result__10459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10459__auto__;
}
break;
}
}catch (e17793){if((e17793 instanceof Object)){
var ex__10460__auto__ = e17793;
var statearr_17794_17830 = state_17750;
(statearr_17794_17830[(5)] = ex__10460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17793;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17831 = state_17750;
state_17750 = G__17831;
continue;
} else {
return ret_value__10458__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10457__auto__ = function(state_17750){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10457__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10457__auto____1.call(this,state_17750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10457__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10457__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10457__auto__;
})()
;})(switch__10456__auto__,c__10479__auto__))
})();
var state__10481__auto__ = (function (){var statearr_17795 = (f__10480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10480__auto__.cljs$core$IFn$_invoke$arity$0() : f__10480__auto__.call(null));
(statearr_17795[(6)] = c__10479__auto__);

return statearr_17795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10481__auto__);
});})(c__10479__auto__))
);

return c__10479__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17833 = arguments.length;
switch (G__17833) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17836 = arguments.length;
switch (G__17836) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17839 = arguments.length;
switch (G__17839) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10479__auto___17890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10479__auto___17890,out){
return (function (){
var f__10480__auto__ = (function (){var switch__10456__auto__ = ((function (c__10479__auto___17890,out){
return (function (state_17863){
var state_val_17864 = (state_17863[(1)]);
if((state_val_17864 === (7))){
var inst_17858 = (state_17863[(2)]);
var state_17863__$1 = state_17863;
var statearr_17865_17891 = state_17863__$1;
(statearr_17865_17891[(2)] = inst_17858);

(statearr_17865_17891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17864 === (1))){
var inst_17840 = null;
var state_17863__$1 = (function (){var statearr_17866 = state_17863;
(statearr_17866[(7)] = inst_17840);

return statearr_17866;
})();
var statearr_17867_17892 = state_17863__$1;
(statearr_17867_17892[(2)] = null);

(statearr_17867_17892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17864 === (4))){
var inst_17843 = (state_17863[(8)]);
var inst_17843__$1 = (state_17863[(2)]);
var inst_17844 = (inst_17843__$1 == null);
var inst_17845 = cljs.core.not(inst_17844);
var state_17863__$1 = (function (){var statearr_17868 = state_17863;
(statearr_17868[(8)] = inst_17843__$1);

return statearr_17868;
})();
if(inst_17845){
var statearr_17869_17897 = state_17863__$1;
(statearr_17869_17897[(1)] = (5));

} else {
var statearr_17870_17898 = state_17863__$1;
(statearr_17870_17898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17864 === (6))){
var state_17863__$1 = state_17863;
var statearr_17871_17899 = state_17863__$1;
(statearr_17871_17899[(2)] = null);

(statearr_17871_17899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17864 === (3))){
var inst_17860 = (state_17863[(2)]);
var inst_17861 = cljs.core.async.close_BANG_(out);
var state_17863__$1 = (function (){var statearr_17872 = state_17863;
(statearr_17872[(9)] = inst_17860);

return statearr_17872;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17863__$1,inst_17861);
} else {
if((state_val_17864 === (2))){
var state_17863__$1 = state_17863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17863__$1,(4),ch);
} else {
if((state_val_17864 === (11))){
var inst_17843 = (state_17863[(8)]);
var inst_17852 = (state_17863[(2)]);
var inst_17840 = inst_17843;
var state_17863__$1 = (function (){var statearr_17873 = state_17863;
(statearr_17873[(10)] = inst_17852);

(statearr_17873[(7)] = inst_17840);

return statearr_17873;
})();
var statearr_17874_17900 = state_17863__$1;
(statearr_17874_17900[(2)] = null);

(statearr_17874_17900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17864 === (9))){
var inst_17843 = (state_17863[(8)]);
var state_17863__$1 = state_17863;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17863__$1,(11),out,inst_17843);
} else {
if((state_val_17864 === (5))){
var inst_17840 = (state_17863[(7)]);
var inst_17843 = (state_17863[(8)]);
var inst_17847 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17843,inst_17840);
var state_17863__$1 = state_17863;
if(inst_17847){
var statearr_17877_17901 = state_17863__$1;
(statearr_17877_17901[(1)] = (8));

} else {
var statearr_17878_17902 = state_17863__$1;
(statearr_17878_17902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17864 === (10))){
var inst_17855 = (state_17863[(2)]);
var state_17863__$1 = state_17863;
var statearr_17882_17903 = state_17863__$1;
(statearr_17882_17903[(2)] = inst_17855);

(statearr_17882_17903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17864 === (8))){
var inst_17840 = (state_17863[(7)]);
var tmp17875 = inst_17840;
var inst_17840__$1 = tmp17875;
var state_17863__$1 = (function (){var statearr_17883 = state_17863;
(statearr_17883[(7)] = inst_17840__$1);

return statearr_17883;
})();
var statearr_17884_17904 = state_17863__$1;
(statearr_17884_17904[(2)] = null);

(statearr_17884_17904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10479__auto___17890,out))
;
return ((function (switch__10456__auto__,c__10479__auto___17890,out){
return (function() {
var cljs$core$async$state_machine__10457__auto__ = null;
var cljs$core$async$state_machine__10457__auto____0 = (function (){
var statearr_17885 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17885[(0)] = cljs$core$async$state_machine__10457__auto__);

(statearr_17885[(1)] = (1));

return statearr_17885;
});
var cljs$core$async$state_machine__10457__auto____1 = (function (state_17863){
while(true){
var ret_value__10458__auto__ = (function (){try{while(true){
var result__10459__auto__ = switch__10456__auto__(state_17863);
if(cljs.core.keyword_identical_QMARK_(result__10459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10459__auto__;
}
break;
}
}catch (e17886){if((e17886 instanceof Object)){
var ex__10460__auto__ = e17886;
var statearr_17887_17905 = state_17863;
(statearr_17887_17905[(5)] = ex__10460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17886;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17906 = state_17863;
state_17863 = G__17906;
continue;
} else {
return ret_value__10458__auto__;
}
break;
}
});
cljs$core$async$state_machine__10457__auto__ = function(state_17863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10457__auto____1.call(this,state_17863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10457__auto____0;
cljs$core$async$state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10457__auto____1;
return cljs$core$async$state_machine__10457__auto__;
})()
;})(switch__10456__auto__,c__10479__auto___17890,out))
})();
var state__10481__auto__ = (function (){var statearr_17888 = (f__10480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10480__auto__.cljs$core$IFn$_invoke$arity$0() : f__10480__auto__.call(null));
(statearr_17888[(6)] = c__10479__auto___17890);

return statearr_17888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10481__auto__);
});})(c__10479__auto___17890,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17912 = arguments.length;
switch (G__17912) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10479__auto___17983 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10479__auto___17983,out){
return (function (){
var f__10480__auto__ = (function (){var switch__10456__auto__ = ((function (c__10479__auto___17983,out){
return (function (state_17950){
var state_val_17951 = (state_17950[(1)]);
if((state_val_17951 === (7))){
var inst_17946 = (state_17950[(2)]);
var state_17950__$1 = state_17950;
var statearr_17952_17984 = state_17950__$1;
(statearr_17952_17984[(2)] = inst_17946);

(statearr_17952_17984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (1))){
var inst_17913 = (new Array(n));
var inst_17914 = inst_17913;
var inst_17915 = (0);
var state_17950__$1 = (function (){var statearr_17953 = state_17950;
(statearr_17953[(7)] = inst_17915);

(statearr_17953[(8)] = inst_17914);

return statearr_17953;
})();
var statearr_17954_17985 = state_17950__$1;
(statearr_17954_17985[(2)] = null);

(statearr_17954_17985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (4))){
var inst_17918 = (state_17950[(9)]);
var inst_17918__$1 = (state_17950[(2)]);
var inst_17919 = (inst_17918__$1 == null);
var inst_17920 = cljs.core.not(inst_17919);
var state_17950__$1 = (function (){var statearr_17955 = state_17950;
(statearr_17955[(9)] = inst_17918__$1);

return statearr_17955;
})();
if(inst_17920){
var statearr_17956_17986 = state_17950__$1;
(statearr_17956_17986[(1)] = (5));

} else {
var statearr_17957_17987 = state_17950__$1;
(statearr_17957_17987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (15))){
var inst_17940 = (state_17950[(2)]);
var state_17950__$1 = state_17950;
var statearr_17958_17988 = state_17950__$1;
(statearr_17958_17988[(2)] = inst_17940);

(statearr_17958_17988[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (13))){
var state_17950__$1 = state_17950;
var statearr_17959_17993 = state_17950__$1;
(statearr_17959_17993[(2)] = null);

(statearr_17959_17993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (6))){
var inst_17915 = (state_17950[(7)]);
var inst_17936 = (inst_17915 > (0));
var state_17950__$1 = state_17950;
if(cljs.core.truth_(inst_17936)){
var statearr_17960_17994 = state_17950__$1;
(statearr_17960_17994[(1)] = (12));

} else {
var statearr_17961_17995 = state_17950__$1;
(statearr_17961_17995[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (3))){
var inst_17948 = (state_17950[(2)]);
var state_17950__$1 = state_17950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17950__$1,inst_17948);
} else {
if((state_val_17951 === (12))){
var inst_17914 = (state_17950[(8)]);
var inst_17938 = cljs.core.vec(inst_17914);
var state_17950__$1 = state_17950;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17950__$1,(15),out,inst_17938);
} else {
if((state_val_17951 === (2))){
var state_17950__$1 = state_17950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17950__$1,(4),ch);
} else {
if((state_val_17951 === (11))){
var inst_17930 = (state_17950[(2)]);
var inst_17931 = (new Array(n));
var inst_17914 = inst_17931;
var inst_17915 = (0);
var state_17950__$1 = (function (){var statearr_17962 = state_17950;
(statearr_17962[(7)] = inst_17915);

(statearr_17962[(10)] = inst_17930);

(statearr_17962[(8)] = inst_17914);

return statearr_17962;
})();
var statearr_17963_18002 = state_17950__$1;
(statearr_17963_18002[(2)] = null);

(statearr_17963_18002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (9))){
var inst_17914 = (state_17950[(8)]);
var inst_17928 = cljs.core.vec(inst_17914);
var state_17950__$1 = state_17950;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17950__$1,(11),out,inst_17928);
} else {
if((state_val_17951 === (5))){
var inst_17923 = (state_17950[(11)]);
var inst_17915 = (state_17950[(7)]);
var inst_17914 = (state_17950[(8)]);
var inst_17918 = (state_17950[(9)]);
var inst_17922 = (inst_17914[inst_17915] = inst_17918);
var inst_17923__$1 = (inst_17915 + (1));
var inst_17924 = (inst_17923__$1 < n);
var state_17950__$1 = (function (){var statearr_17964 = state_17950;
(statearr_17964[(11)] = inst_17923__$1);

(statearr_17964[(12)] = inst_17922);

return statearr_17964;
})();
if(cljs.core.truth_(inst_17924)){
var statearr_17967_18009 = state_17950__$1;
(statearr_17967_18009[(1)] = (8));

} else {
var statearr_17970_18010 = state_17950__$1;
(statearr_17970_18010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (14))){
var inst_17943 = (state_17950[(2)]);
var inst_17944 = cljs.core.async.close_BANG_(out);
var state_17950__$1 = (function (){var statearr_17973 = state_17950;
(statearr_17973[(13)] = inst_17943);

return statearr_17973;
})();
var statearr_17974_18011 = state_17950__$1;
(statearr_17974_18011[(2)] = inst_17944);

(statearr_17974_18011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (10))){
var inst_17934 = (state_17950[(2)]);
var state_17950__$1 = state_17950;
var statearr_17975_18012 = state_17950__$1;
(statearr_17975_18012[(2)] = inst_17934);

(statearr_17975_18012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17951 === (8))){
var inst_17923 = (state_17950[(11)]);
var inst_17914 = (state_17950[(8)]);
var tmp17972 = inst_17914;
var inst_17914__$1 = tmp17972;
var inst_17915 = inst_17923;
var state_17950__$1 = (function (){var statearr_17976 = state_17950;
(statearr_17976[(7)] = inst_17915);

(statearr_17976[(8)] = inst_17914__$1);

return statearr_17976;
})();
var statearr_17977_18013 = state_17950__$1;
(statearr_17977_18013[(2)] = null);

(statearr_17977_18013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10479__auto___17983,out))
;
return ((function (switch__10456__auto__,c__10479__auto___17983,out){
return (function() {
var cljs$core$async$state_machine__10457__auto__ = null;
var cljs$core$async$state_machine__10457__auto____0 = (function (){
var statearr_17978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17978[(0)] = cljs$core$async$state_machine__10457__auto__);

(statearr_17978[(1)] = (1));

return statearr_17978;
});
var cljs$core$async$state_machine__10457__auto____1 = (function (state_17950){
while(true){
var ret_value__10458__auto__ = (function (){try{while(true){
var result__10459__auto__ = switch__10456__auto__(state_17950);
if(cljs.core.keyword_identical_QMARK_(result__10459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10459__auto__;
}
break;
}
}catch (e17979){if((e17979 instanceof Object)){
var ex__10460__auto__ = e17979;
var statearr_17980_18014 = state_17950;
(statearr_17980_18014[(5)] = ex__10460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17979;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18015 = state_17950;
state_17950 = G__18015;
continue;
} else {
return ret_value__10458__auto__;
}
break;
}
});
cljs$core$async$state_machine__10457__auto__ = function(state_17950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10457__auto____1.call(this,state_17950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10457__auto____0;
cljs$core$async$state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10457__auto____1;
return cljs$core$async$state_machine__10457__auto__;
})()
;})(switch__10456__auto__,c__10479__auto___17983,out))
})();
var state__10481__auto__ = (function (){var statearr_17981 = (f__10480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10480__auto__.cljs$core$IFn$_invoke$arity$0() : f__10480__auto__.call(null));
(statearr_17981[(6)] = c__10479__auto___17983);

return statearr_17981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10481__auto__);
});})(c__10479__auto___17983,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18018 = arguments.length;
switch (G__18018) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10479__auto___18101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10479__auto___18101,out){
return (function (){
var f__10480__auto__ = (function (){var switch__10456__auto__ = ((function (c__10479__auto___18101,out){
return (function (state_18060){
var state_val_18061 = (state_18060[(1)]);
if((state_val_18061 === (7))){
var inst_18056 = (state_18060[(2)]);
var state_18060__$1 = state_18060;
var statearr_18074_18102 = state_18060__$1;
(statearr_18074_18102[(2)] = inst_18056);

(statearr_18074_18102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18061 === (1))){
var inst_18019 = [];
var inst_18020 = inst_18019;
var inst_18021 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18060__$1 = (function (){var statearr_18076 = state_18060;
(statearr_18076[(7)] = inst_18020);

(statearr_18076[(8)] = inst_18021);

return statearr_18076;
})();
var statearr_18077_18103 = state_18060__$1;
(statearr_18077_18103[(2)] = null);

(statearr_18077_18103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18061 === (4))){
var inst_18024 = (state_18060[(9)]);
var inst_18024__$1 = (state_18060[(2)]);
var inst_18025 = (inst_18024__$1 == null);
var inst_18026 = cljs.core.not(inst_18025);
var state_18060__$1 = (function (){var statearr_18078 = state_18060;
(statearr_18078[(9)] = inst_18024__$1);

return statearr_18078;
})();
if(inst_18026){
var statearr_18079_18104 = state_18060__$1;
(statearr_18079_18104[(1)] = (5));

} else {
var statearr_18080_18105 = state_18060__$1;
(statearr_18080_18105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18061 === (15))){
var inst_18050 = (state_18060[(2)]);
var state_18060__$1 = state_18060;
var statearr_18081_18106 = state_18060__$1;
(statearr_18081_18106[(2)] = inst_18050);

(statearr_18081_18106[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18061 === (13))){
var state_18060__$1 = state_18060;
var statearr_18082_18110 = state_18060__$1;
(statearr_18082_18110[(2)] = null);

(statearr_18082_18110[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18061 === (6))){
var inst_18020 = (state_18060[(7)]);
var inst_18045 = inst_18020.length;
var inst_18046 = (inst_18045 > (0));
var state_18060__$1 = state_18060;
if(cljs.core.truth_(inst_18046)){
var statearr_18083_18111 = state_18060__$1;
(statearr_18083_18111[(1)] = (12));

} else {
var statearr_18084_18112 = state_18060__$1;
(statearr_18084_18112[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18061 === (3))){
var inst_18058 = (state_18060[(2)]);
var state_18060__$1 = state_18060;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18060__$1,inst_18058);
} else {
if((state_val_18061 === (12))){
var inst_18020 = (state_18060[(7)]);
var inst_18048 = cljs.core.vec(inst_18020);
var state_18060__$1 = state_18060;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18060__$1,(15),out,inst_18048);
} else {
if((state_val_18061 === (2))){
var state_18060__$1 = state_18060;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18060__$1,(4),ch);
} else {
if((state_val_18061 === (11))){
var inst_18024 = (state_18060[(9)]);
var inst_18028 = (state_18060[(10)]);
var inst_18038 = (state_18060[(2)]);
var inst_18039 = [];
var inst_18040 = inst_18039.push(inst_18024);
var inst_18020 = inst_18039;
var inst_18021 = inst_18028;
var state_18060__$1 = (function (){var statearr_18085 = state_18060;
(statearr_18085[(11)] = inst_18040);

(statearr_18085[(7)] = inst_18020);

(statearr_18085[(8)] = inst_18021);

(statearr_18085[(12)] = inst_18038);

return statearr_18085;
})();
var statearr_18086_18113 = state_18060__$1;
(statearr_18086_18113[(2)] = null);

(statearr_18086_18113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18061 === (9))){
var inst_18020 = (state_18060[(7)]);
var inst_18036 = cljs.core.vec(inst_18020);
var state_18060__$1 = state_18060;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18060__$1,(11),out,inst_18036);
} else {
if((state_val_18061 === (5))){
var inst_18024 = (state_18060[(9)]);
var inst_18028 = (state_18060[(10)]);
var inst_18021 = (state_18060[(8)]);
var inst_18028__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18024) : f.call(null,inst_18024));
var inst_18029 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18028__$1,inst_18021);
var inst_18030 = cljs.core.keyword_identical_QMARK_(inst_18021,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18031 = ((inst_18029) || (inst_18030));
var state_18060__$1 = (function (){var statearr_18087 = state_18060;
(statearr_18087[(10)] = inst_18028__$1);

return statearr_18087;
})();
if(cljs.core.truth_(inst_18031)){
var statearr_18088_18114 = state_18060__$1;
(statearr_18088_18114[(1)] = (8));

} else {
var statearr_18089_18115 = state_18060__$1;
(statearr_18089_18115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18061 === (14))){
var inst_18053 = (state_18060[(2)]);
var inst_18054 = cljs.core.async.close_BANG_(out);
var state_18060__$1 = (function (){var statearr_18091 = state_18060;
(statearr_18091[(13)] = inst_18053);

return statearr_18091;
})();
var statearr_18092_18116 = state_18060__$1;
(statearr_18092_18116[(2)] = inst_18054);

(statearr_18092_18116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18061 === (10))){
var inst_18043 = (state_18060[(2)]);
var state_18060__$1 = state_18060;
var statearr_18093_18117 = state_18060__$1;
(statearr_18093_18117[(2)] = inst_18043);

(statearr_18093_18117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18061 === (8))){
var inst_18024 = (state_18060[(9)]);
var inst_18020 = (state_18060[(7)]);
var inst_18028 = (state_18060[(10)]);
var inst_18033 = inst_18020.push(inst_18024);
var tmp18090 = inst_18020;
var inst_18020__$1 = tmp18090;
var inst_18021 = inst_18028;
var state_18060__$1 = (function (){var statearr_18094 = state_18060;
(statearr_18094[(7)] = inst_18020__$1);

(statearr_18094[(14)] = inst_18033);

(statearr_18094[(8)] = inst_18021);

return statearr_18094;
})();
var statearr_18095_18118 = state_18060__$1;
(statearr_18095_18118[(2)] = null);

(statearr_18095_18118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10479__auto___18101,out))
;
return ((function (switch__10456__auto__,c__10479__auto___18101,out){
return (function() {
var cljs$core$async$state_machine__10457__auto__ = null;
var cljs$core$async$state_machine__10457__auto____0 = (function (){
var statearr_18096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18096[(0)] = cljs$core$async$state_machine__10457__auto__);

(statearr_18096[(1)] = (1));

return statearr_18096;
});
var cljs$core$async$state_machine__10457__auto____1 = (function (state_18060){
while(true){
var ret_value__10458__auto__ = (function (){try{while(true){
var result__10459__auto__ = switch__10456__auto__(state_18060);
if(cljs.core.keyword_identical_QMARK_(result__10459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10459__auto__;
}
break;
}
}catch (e18097){if((e18097 instanceof Object)){
var ex__10460__auto__ = e18097;
var statearr_18098_18119 = state_18060;
(statearr_18098_18119[(5)] = ex__10460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18097;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18120 = state_18060;
state_18060 = G__18120;
continue;
} else {
return ret_value__10458__auto__;
}
break;
}
});
cljs$core$async$state_machine__10457__auto__ = function(state_18060){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10457__auto____1.call(this,state_18060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10457__auto____0;
cljs$core$async$state_machine__10457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10457__auto____1;
return cljs$core$async$state_machine__10457__auto__;
})()
;})(switch__10456__auto__,c__10479__auto___18101,out))
})();
var state__10481__auto__ = (function (){var statearr_18099 = (f__10480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10480__auto__.cljs$core$IFn$_invoke$arity$0() : f__10480__auto__.call(null));
(statearr_18099[(6)] = c__10479__auto___18101);

return statearr_18099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10481__auto__);
});})(c__10479__auto___18101,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
