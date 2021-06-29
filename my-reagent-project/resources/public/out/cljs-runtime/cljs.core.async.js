goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45077 = arguments.length;
switch (G__45077) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45078 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45078 = (function (f,blockable,meta45079){
this.f = f;
this.blockable = blockable;
this.meta45079 = meta45079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45080,meta45079__$1){
var self__ = this;
var _45080__$1 = this;
return (new cljs.core.async.t_cljs$core$async45078(self__.f,self__.blockable,meta45079__$1));
}));

(cljs.core.async.t_cljs$core$async45078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45080){
var self__ = this;
var _45080__$1 = this;
return self__.meta45079;
}));

(cljs.core.async.t_cljs$core$async45078.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45078.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45078.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async45078.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async45078.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45079","meta45079",1304397775,null)], null);
}));

(cljs.core.async.t_cljs$core$async45078.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45078.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45078");

(cljs.core.async.t_cljs$core$async45078.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45078");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45078.
 */
cljs.core.async.__GT_t_cljs$core$async45078 = (function cljs$core$async$__GT_t_cljs$core$async45078(f__$1,blockable__$1,meta45079){
return (new cljs.core.async.t_cljs$core$async45078(f__$1,blockable__$1,meta45079));
});

}

return (new cljs.core.async.t_cljs$core$async45078(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
if((!((buff == null)))){
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
var G__45093 = arguments.length;
switch (G__45093) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__45095 = arguments.length;
switch (G__45095) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__45097 = arguments.length;
switch (G__45097) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_46824 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46824) : fn1.call(null,val_46824));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46824) : fn1.call(null,val_46824));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

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
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__45099 = arguments.length;
switch (G__45099) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___46826 = n;
var x_46829 = (0);
while(true){
if((x_46829 < n__4706__auto___46826)){
(a[x_46829] = x_46829);

var G__46830 = (x_46829 + (1));
x_46829 = G__46830;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45101 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45101 = (function (flag,meta45102){
this.flag = flag;
this.meta45102 = meta45102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45103,meta45102__$1){
var self__ = this;
var _45103__$1 = this;
return (new cljs.core.async.t_cljs$core$async45101(self__.flag,meta45102__$1));
}));

(cljs.core.async.t_cljs$core$async45101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45103){
var self__ = this;
var _45103__$1 = this;
return self__.meta45102;
}));

(cljs.core.async.t_cljs$core$async45101.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45101.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45101.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45101.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async45101.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45102","meta45102",-1031247140,null)], null);
}));

(cljs.core.async.t_cljs$core$async45101.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45101");

(cljs.core.async.t_cljs$core$async45101.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45101");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45101.
 */
cljs.core.async.__GT_t_cljs$core$async45101 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45101(flag__$1,meta45102){
return (new cljs.core.async.t_cljs$core$async45101(flag__$1,meta45102));
});

}

return (new cljs.core.async.t_cljs$core$async45101(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45104 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45104 = (function (flag,cb,meta45105){
this.flag = flag;
this.cb = cb;
this.meta45105 = meta45105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45106,meta45105__$1){
var self__ = this;
var _45106__$1 = this;
return (new cljs.core.async.t_cljs$core$async45104(self__.flag,self__.cb,meta45105__$1));
}));

(cljs.core.async.t_cljs$core$async45104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45106){
var self__ = this;
var _45106__$1 = this;
return self__.meta45105;
}));

(cljs.core.async.t_cljs$core$async45104.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45104.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45104.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45104.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async45104.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45105","meta45105",264706182,null)], null);
}));

(cljs.core.async.t_cljs$core$async45104.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45104");

(cljs.core.async.t_cljs$core$async45104.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45104");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45104.
 */
cljs.core.async.__GT_t_cljs$core$async45104 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45104(flag__$1,cb__$1,meta45105){
return (new cljs.core.async.t_cljs$core$async45104(flag__$1,cb__$1,meta45105));
});

}

return (new cljs.core.async.t_cljs$core$async45104(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

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
return (function (p1__45107_SHARP_){
var G__45109 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45107_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45109) : fret.call(null,G__45109));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45108_SHARP_){
var G__45110 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45108_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45110) : fret.call(null,G__45110));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46831 = (i + (1));
i = G__46831;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
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
var args__4835__auto__ = [];
var len__4829__auto___46832 = arguments.length;
var i__4830__auto___46833 = (0);
while(true){
if((i__4830__auto___46833 < len__4829__auto___46832)){
args__4835__auto__.push((arguments[i__4830__auto___46833]));

var G__46834 = (i__4830__auto___46833 + (1));
i__4830__auto___46833 = G__46834;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45144){
var map__45145 = p__45144;
var map__45145__$1 = cljs.core.__destructure_map(map__45145);
var opts = map__45145__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45111){
var G__45112 = cljs.core.first(seq45111);
var seq45111__$1 = cljs.core.next(seq45111);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45112,seq45111__$1);
}));

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
var G__45147 = arguments.length;
switch (G__45147) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44987__auto___46836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44988__auto__ = (function (){var switch__44793__auto__ = (function (state_45187){
var state_val_45188 = (state_45187[(1)]);
if((state_val_45188 === (7))){
var inst_45179 = (state_45187[(2)]);
var state_45187__$1 = state_45187;
var statearr_45208_46837 = state_45187__$1;
(statearr_45208_46837[(2)] = inst_45179);

(statearr_45208_46837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (1))){
var state_45187__$1 = state_45187;
var statearr_45212_46838 = state_45187__$1;
(statearr_45212_46838[(2)] = null);

(statearr_45212_46838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (4))){
var inst_45160 = (state_45187[(7)]);
var inst_45160__$1 = (state_45187[(2)]);
var inst_45163 = (inst_45160__$1 == null);
var state_45187__$1 = (function (){var statearr_45214 = state_45187;
(statearr_45214[(7)] = inst_45160__$1);

return statearr_45214;
})();
if(cljs.core.truth_(inst_45163)){
var statearr_45216_46839 = state_45187__$1;
(statearr_45216_46839[(1)] = (5));

} else {
var statearr_45218_46840 = state_45187__$1;
(statearr_45218_46840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (13))){
var state_45187__$1 = state_45187;
var statearr_45222_46841 = state_45187__$1;
(statearr_45222_46841[(2)] = null);

(statearr_45222_46841[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (6))){
var inst_45160 = (state_45187[(7)]);
var state_45187__$1 = state_45187;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45187__$1,(11),to,inst_45160);
} else {
if((state_val_45188 === (3))){
var inst_45181 = (state_45187[(2)]);
var state_45187__$1 = state_45187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45187__$1,inst_45181);
} else {
if((state_val_45188 === (12))){
var state_45187__$1 = state_45187;
var statearr_45229_46842 = state_45187__$1;
(statearr_45229_46842[(2)] = null);

(statearr_45229_46842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (2))){
var state_45187__$1 = state_45187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45187__$1,(4),from);
} else {
if((state_val_45188 === (11))){
var inst_45172 = (state_45187[(2)]);
var state_45187__$1 = state_45187;
if(cljs.core.truth_(inst_45172)){
var statearr_45231_46844 = state_45187__$1;
(statearr_45231_46844[(1)] = (12));

} else {
var statearr_45232_46845 = state_45187__$1;
(statearr_45232_46845[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (9))){
var state_45187__$1 = state_45187;
var statearr_45233_46846 = state_45187__$1;
(statearr_45233_46846[(2)] = null);

(statearr_45233_46846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (5))){
var state_45187__$1 = state_45187;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45238_46847 = state_45187__$1;
(statearr_45238_46847[(1)] = (8));

} else {
var statearr_45239_46849 = state_45187__$1;
(statearr_45239_46849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (14))){
var inst_45177 = (state_45187[(2)]);
var state_45187__$1 = state_45187;
var statearr_45243_46851 = state_45187__$1;
(statearr_45243_46851[(2)] = inst_45177);

(statearr_45243_46851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (10))){
var inst_45169 = (state_45187[(2)]);
var state_45187__$1 = state_45187;
var statearr_45245_46852 = state_45187__$1;
(statearr_45245_46852[(2)] = inst_45169);

(statearr_45245_46852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (8))){
var inst_45166 = cljs.core.async.close_BANG_(to);
var state_45187__$1 = state_45187;
var statearr_45248_46853 = state_45187__$1;
(statearr_45248_46853[(2)] = inst_45166);

(statearr_45248_46853[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__44794__auto__ = null;
var cljs$core$async$state_machine__44794__auto____0 = (function (){
var statearr_45256 = [null,null,null,null,null,null,null,null];
(statearr_45256[(0)] = cljs$core$async$state_machine__44794__auto__);

(statearr_45256[(1)] = (1));

return statearr_45256;
});
var cljs$core$async$state_machine__44794__auto____1 = (function (state_45187){
while(true){
var ret_value__44795__auto__ = (function (){try{while(true){
var result__44796__auto__ = switch__44793__auto__(state_45187);
if(cljs.core.keyword_identical_QMARK_(result__44796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44796__auto__;
}
break;
}
}catch (e45258){var ex__44797__auto__ = e45258;
var statearr_45259_46854 = state_45187;
(statearr_45259_46854[(2)] = ex__44797__auto__);


if(cljs.core.seq((state_45187[(4)]))){
var statearr_45262_46855 = state_45187;
(statearr_45262_46855[(1)] = cljs.core.first((state_45187[(4)])));

} else {
throw ex__44797__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46856 = state_45187;
state_45187 = G__46856;
continue;
} else {
return ret_value__44795__auto__;
}
break;
}
});
cljs$core$async$state_machine__44794__auto__ = function(state_45187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44794__auto____1.call(this,state_45187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44794__auto____0;
cljs$core$async$state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44794__auto____1;
return cljs$core$async$state_machine__44794__auto__;
})()
})();
var state__44989__auto__ = (function (){var statearr_45267 = f__44988__auto__();
(statearr_45267[(6)] = c__44987__auto___46836);

return statearr_45267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44989__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__45283){
var vec__45284 = p__45283;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45284,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45284,(1),null);
var job = vec__45284;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__44987__auto___46857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44988__auto__ = (function (){var switch__44793__auto__ = (function (state_45297){
var state_val_45298 = (state_45297[(1)]);
if((state_val_45298 === (1))){
var state_45297__$1 = state_45297;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45297__$1,(2),res,v);
} else {
if((state_val_45298 === (2))){
var inst_45294 = (state_45297[(2)]);
var inst_45295 = cljs.core.async.close_BANG_(res);
var state_45297__$1 = (function (){var statearr_45309 = state_45297;
(statearr_45309[(7)] = inst_45294);

return statearr_45309;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45297__$1,inst_45295);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____0 = (function (){
var statearr_45312 = [null,null,null,null,null,null,null,null];
(statearr_45312[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__);

(statearr_45312[(1)] = (1));

return statearr_45312;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____1 = (function (state_45297){
while(true){
var ret_value__44795__auto__ = (function (){try{while(true){
var result__44796__auto__ = switch__44793__auto__(state_45297);
if(cljs.core.keyword_identical_QMARK_(result__44796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44796__auto__;
}
break;
}
}catch (e45317){var ex__44797__auto__ = e45317;
var statearr_45318_46858 = state_45297;
(statearr_45318_46858[(2)] = ex__44797__auto__);


if(cljs.core.seq((state_45297[(4)]))){
var statearr_45319_46859 = state_45297;
(statearr_45319_46859[(1)] = cljs.core.first((state_45297[(4)])));

} else {
throw ex__44797__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46860 = state_45297;
state_45297 = G__46860;
continue;
} else {
return ret_value__44795__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__ = function(state_45297){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____1.call(this,state_45297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__;
})()
})();
var state__44989__auto__ = (function (){var statearr_45325 = f__44988__auto__();
(statearr_45325[(6)] = c__44987__auto___46857);

return statearr_45325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44989__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__45330){
var vec__45335 = p__45330;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45335,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45335,(1),null);
var job = vec__45335;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___46863 = n;
var __46864 = (0);
while(true){
if((__46864 < n__4706__auto___46863)){
var G__45344_46865 = type;
var G__45344_46866__$1 = (((G__45344_46865 instanceof cljs.core.Keyword))?G__45344_46865.fqn:null);
switch (G__45344_46866__$1) {
case "compute":
var c__44987__auto___46868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46864,c__44987__auto___46868,G__45344_46865,G__45344_46866__$1,n__4706__auto___46863,jobs,results,process,async){
return (function (){
var f__44988__auto__ = (function (){var switch__44793__auto__ = ((function (__46864,c__44987__auto___46868,G__45344_46865,G__45344_46866__$1,n__4706__auto___46863,jobs,results,process,async){
return (function (state_45363){
var state_val_45364 = (state_45363[(1)]);
if((state_val_45364 === (1))){
var state_45363__$1 = state_45363;
var statearr_45370_46869 = state_45363__$1;
(statearr_45370_46869[(2)] = null);

(statearr_45370_46869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (2))){
var state_45363__$1 = state_45363;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45363__$1,(4),jobs);
} else {
if((state_val_45364 === (3))){
var inst_45357 = (state_45363[(2)]);
var state_45363__$1 = state_45363;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45363__$1,inst_45357);
} else {
if((state_val_45364 === (4))){
var inst_45349 = (state_45363[(2)]);
var inst_45350 = process(inst_45349);
var state_45363__$1 = state_45363;
if(cljs.core.truth_(inst_45350)){
var statearr_45375_46871 = state_45363__$1;
(statearr_45375_46871[(1)] = (5));

} else {
var statearr_45378_46872 = state_45363__$1;
(statearr_45378_46872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (5))){
var state_45363__$1 = state_45363;
var statearr_45379_46874 = state_45363__$1;
(statearr_45379_46874[(2)] = null);

(statearr_45379_46874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (6))){
var state_45363__$1 = state_45363;
var statearr_45380_46875 = state_45363__$1;
(statearr_45380_46875[(2)] = null);

(statearr_45380_46875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (7))){
var inst_45355 = (state_45363[(2)]);
var state_45363__$1 = state_45363;
var statearr_45381_46876 = state_45363__$1;
(statearr_45381_46876[(2)] = inst_45355);

(statearr_45381_46876[(1)] = (3));


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
});})(__46864,c__44987__auto___46868,G__45344_46865,G__45344_46866__$1,n__4706__auto___46863,jobs,results,process,async))
;
return ((function (__46864,switch__44793__auto__,c__44987__auto___46868,G__45344_46865,G__45344_46866__$1,n__4706__auto___46863,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____0 = (function (){
var statearr_45383 = [null,null,null,null,null,null,null];
(statearr_45383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__);

(statearr_45383[(1)] = (1));

return statearr_45383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____1 = (function (state_45363){
while(true){
var ret_value__44795__auto__ = (function (){try{while(true){
var result__44796__auto__ = switch__44793__auto__(state_45363);
if(cljs.core.keyword_identical_QMARK_(result__44796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44796__auto__;
}
break;
}
}catch (e45390){var ex__44797__auto__ = e45390;
var statearr_45391_46877 = state_45363;
(statearr_45391_46877[(2)] = ex__44797__auto__);


if(cljs.core.seq((state_45363[(4)]))){
var statearr_45394_46878 = state_45363;
(statearr_45394_46878[(1)] = cljs.core.first((state_45363[(4)])));

} else {
throw ex__44797__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46879 = state_45363;
state_45363 = G__46879;
continue;
} else {
return ret_value__44795__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__ = function(state_45363){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____1.call(this,state_45363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__;
})()
;})(__46864,switch__44793__auto__,c__44987__auto___46868,G__45344_46865,G__45344_46866__$1,n__4706__auto___46863,jobs,results,process,async))
})();
var state__44989__auto__ = (function (){var statearr_45397 = f__44988__auto__();
(statearr_45397[(6)] = c__44987__auto___46868);

return statearr_45397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44989__auto__);
});})(__46864,c__44987__auto___46868,G__45344_46865,G__45344_46866__$1,n__4706__auto___46863,jobs,results,process,async))
);


break;
case "async":
var c__44987__auto___46880 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46864,c__44987__auto___46880,G__45344_46865,G__45344_46866__$1,n__4706__auto___46863,jobs,results,process,async){
return (function (){
var f__44988__auto__ = (function (){var switch__44793__auto__ = ((function (__46864,c__44987__auto___46880,G__45344_46865,G__45344_46866__$1,n__4706__auto___46863,jobs,results,process,async){
return (function (state_45410){
var state_val_45411 = (state_45410[(1)]);
if((state_val_45411 === (1))){
var state_45410__$1 = state_45410;
var statearr_45413_46881 = state_45410__$1;
(statearr_45413_46881[(2)] = null);

(statearr_45413_46881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45411 === (2))){
var state_45410__$1 = state_45410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45410__$1,(4),jobs);
} else {
if((state_val_45411 === (3))){
var inst_45408 = (state_45410[(2)]);
var state_45410__$1 = state_45410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45410__$1,inst_45408);
} else {
if((state_val_45411 === (4))){
var inst_45400 = (state_45410[(2)]);
var inst_45401 = async(inst_45400);
var state_45410__$1 = state_45410;
if(cljs.core.truth_(inst_45401)){
var statearr_45414_46882 = state_45410__$1;
(statearr_45414_46882[(1)] = (5));

} else {
var statearr_45415_46883 = state_45410__$1;
(statearr_45415_46883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45411 === (5))){
var state_45410__$1 = state_45410;
var statearr_45416_46884 = state_45410__$1;
(statearr_45416_46884[(2)] = null);

(statearr_45416_46884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45411 === (6))){
var state_45410__$1 = state_45410;
var statearr_45417_46886 = state_45410__$1;
(statearr_45417_46886[(2)] = null);

(statearr_45417_46886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45411 === (7))){
var inst_45406 = (state_45410[(2)]);
var state_45410__$1 = state_45410;
var statearr_45418_46888 = state_45410__$1;
(statearr_45418_46888[(2)] = inst_45406);

(statearr_45418_46888[(1)] = (3));


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
});})(__46864,c__44987__auto___46880,G__45344_46865,G__45344_46866__$1,n__4706__auto___46863,jobs,results,process,async))
;
return ((function (__46864,switch__44793__auto__,c__44987__auto___46880,G__45344_46865,G__45344_46866__$1,n__4706__auto___46863,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____0 = (function (){
var statearr_45419 = [null,null,null,null,null,null,null];
(statearr_45419[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__);

(statearr_45419[(1)] = (1));

return statearr_45419;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____1 = (function (state_45410){
while(true){
var ret_value__44795__auto__ = (function (){try{while(true){
var result__44796__auto__ = switch__44793__auto__(state_45410);
if(cljs.core.keyword_identical_QMARK_(result__44796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44796__auto__;
}
break;
}
}catch (e45420){var ex__44797__auto__ = e45420;
var statearr_45421_46889 = state_45410;
(statearr_45421_46889[(2)] = ex__44797__auto__);


if(cljs.core.seq((state_45410[(4)]))){
var statearr_45422_46890 = state_45410;
(statearr_45422_46890[(1)] = cljs.core.first((state_45410[(4)])));

} else {
throw ex__44797__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46891 = state_45410;
state_45410 = G__46891;
continue;
} else {
return ret_value__44795__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__ = function(state_45410){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____1.call(this,state_45410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__;
})()
;})(__46864,switch__44793__auto__,c__44987__auto___46880,G__45344_46865,G__45344_46866__$1,n__4706__auto___46863,jobs,results,process,async))
})();
var state__44989__auto__ = (function (){var statearr_45423 = f__44988__auto__();
(statearr_45423[(6)] = c__44987__auto___46880);

return statearr_45423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44989__auto__);
});})(__46864,c__44987__auto___46880,G__45344_46865,G__45344_46866__$1,n__4706__auto___46863,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45344_46866__$1)].join('')));

}

var G__46892 = (__46864 + (1));
__46864 = G__46892;
continue;
} else {
}
break;
}

var c__44987__auto___46893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44988__auto__ = (function (){var switch__44793__auto__ = (function (state_45447){
var state_val_45448 = (state_45447[(1)]);
if((state_val_45448 === (7))){
var inst_45443 = (state_45447[(2)]);
var state_45447__$1 = state_45447;
var statearr_45450_46894 = state_45447__$1;
(statearr_45450_46894[(2)] = inst_45443);

(statearr_45450_46894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (1))){
var state_45447__$1 = state_45447;
var statearr_45454_46895 = state_45447__$1;
(statearr_45454_46895[(2)] = null);

(statearr_45454_46895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (4))){
var inst_45427 = (state_45447[(7)]);
var inst_45427__$1 = (state_45447[(2)]);
var inst_45428 = (inst_45427__$1 == null);
var state_45447__$1 = (function (){var statearr_45463 = state_45447;
(statearr_45463[(7)] = inst_45427__$1);

return statearr_45463;
})();
if(cljs.core.truth_(inst_45428)){
var statearr_45464_46898 = state_45447__$1;
(statearr_45464_46898[(1)] = (5));

} else {
var statearr_45465_46899 = state_45447__$1;
(statearr_45465_46899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (6))){
var inst_45432 = (state_45447[(8)]);
var inst_45427 = (state_45447[(7)]);
var inst_45432__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_45433 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45434 = [inst_45427,inst_45432__$1];
var inst_45435 = (new cljs.core.PersistentVector(null,2,(5),inst_45433,inst_45434,null));
var state_45447__$1 = (function (){var statearr_45466 = state_45447;
(statearr_45466[(8)] = inst_45432__$1);

return statearr_45466;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45447__$1,(8),jobs,inst_45435);
} else {
if((state_val_45448 === (3))){
var inst_45445 = (state_45447[(2)]);
var state_45447__$1 = state_45447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45447__$1,inst_45445);
} else {
if((state_val_45448 === (2))){
var state_45447__$1 = state_45447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45447__$1,(4),from);
} else {
if((state_val_45448 === (9))){
var inst_45440 = (state_45447[(2)]);
var state_45447__$1 = (function (){var statearr_45467 = state_45447;
(statearr_45467[(9)] = inst_45440);

return statearr_45467;
})();
var statearr_45468_46900 = state_45447__$1;
(statearr_45468_46900[(2)] = null);

(statearr_45468_46900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (5))){
var inst_45430 = cljs.core.async.close_BANG_(jobs);
var state_45447__$1 = state_45447;
var statearr_45469_46901 = state_45447__$1;
(statearr_45469_46901[(2)] = inst_45430);

(statearr_45469_46901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (8))){
var inst_45432 = (state_45447[(8)]);
var inst_45437 = (state_45447[(2)]);
var state_45447__$1 = (function (){var statearr_45470 = state_45447;
(statearr_45470[(10)] = inst_45437);

return statearr_45470;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45447__$1,(9),results,inst_45432);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____0 = (function (){
var statearr_45471 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45471[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__);

(statearr_45471[(1)] = (1));

return statearr_45471;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____1 = (function (state_45447){
while(true){
var ret_value__44795__auto__ = (function (){try{while(true){
var result__44796__auto__ = switch__44793__auto__(state_45447);
if(cljs.core.keyword_identical_QMARK_(result__44796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44796__auto__;
}
break;
}
}catch (e45472){var ex__44797__auto__ = e45472;
var statearr_45473_46902 = state_45447;
(statearr_45473_46902[(2)] = ex__44797__auto__);


if(cljs.core.seq((state_45447[(4)]))){
var statearr_45474_46903 = state_45447;
(statearr_45474_46903[(1)] = cljs.core.first((state_45447[(4)])));

} else {
throw ex__44797__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46904 = state_45447;
state_45447 = G__46904;
continue;
} else {
return ret_value__44795__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__ = function(state_45447){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____1.call(this,state_45447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__;
})()
})();
var state__44989__auto__ = (function (){var statearr_45475 = f__44988__auto__();
(statearr_45475[(6)] = c__44987__auto___46893);

return statearr_45475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44989__auto__);
}));


var c__44987__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44988__auto__ = (function (){var switch__44793__auto__ = (function (state_45513){
var state_val_45514 = (state_45513[(1)]);
if((state_val_45514 === (7))){
var inst_45509 = (state_45513[(2)]);
var state_45513__$1 = state_45513;
var statearr_45515_46905 = state_45513__$1;
(statearr_45515_46905[(2)] = inst_45509);

(statearr_45515_46905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45514 === (20))){
var state_45513__$1 = state_45513;
var statearr_45516_46906 = state_45513__$1;
(statearr_45516_46906[(2)] = null);

(statearr_45516_46906[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45514 === (1))){
var state_45513__$1 = state_45513;
var statearr_45517_46907 = state_45513__$1;
(statearr_45517_46907[(2)] = null);

(statearr_45517_46907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45514 === (4))){
var inst_45478 = (state_45513[(7)]);
var inst_45478__$1 = (state_45513[(2)]);
var inst_45479 = (inst_45478__$1 == null);
var state_45513__$1 = (function (){var statearr_45518 = state_45513;
(statearr_45518[(7)] = inst_45478__$1);

return statearr_45518;
})();
if(cljs.core.truth_(inst_45479)){
var statearr_45519_46909 = state_45513__$1;
(statearr_45519_46909[(1)] = (5));

} else {
var statearr_45520_46911 = state_45513__$1;
(statearr_45520_46911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45514 === (15))){
var inst_45491 = (state_45513[(8)]);
var state_45513__$1 = state_45513;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45513__$1,(18),to,inst_45491);
} else {
if((state_val_45514 === (21))){
var inst_45504 = (state_45513[(2)]);
var state_45513__$1 = state_45513;
var statearr_45521_46912 = state_45513__$1;
(statearr_45521_46912[(2)] = inst_45504);

(statearr_45521_46912[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45514 === (13))){
var inst_45506 = (state_45513[(2)]);
var state_45513__$1 = (function (){var statearr_45522 = state_45513;
(statearr_45522[(9)] = inst_45506);

return statearr_45522;
})();
var statearr_45523_46913 = state_45513__$1;
(statearr_45523_46913[(2)] = null);

(statearr_45523_46913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45514 === (6))){
var inst_45478 = (state_45513[(7)]);
var state_45513__$1 = state_45513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45513__$1,(11),inst_45478);
} else {
if((state_val_45514 === (17))){
var inst_45499 = (state_45513[(2)]);
var state_45513__$1 = state_45513;
if(cljs.core.truth_(inst_45499)){
var statearr_45524_46914 = state_45513__$1;
(statearr_45524_46914[(1)] = (19));

} else {
var statearr_45525_46915 = state_45513__$1;
(statearr_45525_46915[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45514 === (3))){
var inst_45511 = (state_45513[(2)]);
var state_45513__$1 = state_45513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45513__$1,inst_45511);
} else {
if((state_val_45514 === (12))){
var inst_45488 = (state_45513[(10)]);
var state_45513__$1 = state_45513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45513__$1,(14),inst_45488);
} else {
if((state_val_45514 === (2))){
var state_45513__$1 = state_45513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45513__$1,(4),results);
} else {
if((state_val_45514 === (19))){
var state_45513__$1 = state_45513;
var statearr_45526_46916 = state_45513__$1;
(statearr_45526_46916[(2)] = null);

(statearr_45526_46916[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45514 === (11))){
var inst_45488 = (state_45513[(2)]);
var state_45513__$1 = (function (){var statearr_45527 = state_45513;
(statearr_45527[(10)] = inst_45488);

return statearr_45527;
})();
var statearr_45528_46917 = state_45513__$1;
(statearr_45528_46917[(2)] = null);

(statearr_45528_46917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45514 === (9))){
var state_45513__$1 = state_45513;
var statearr_45529_46918 = state_45513__$1;
(statearr_45529_46918[(2)] = null);

(statearr_45529_46918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45514 === (5))){
var state_45513__$1 = state_45513;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45530_46919 = state_45513__$1;
(statearr_45530_46919[(1)] = (8));

} else {
var statearr_45531_46920 = state_45513__$1;
(statearr_45531_46920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45514 === (14))){
var inst_45493 = (state_45513[(11)]);
var inst_45491 = (state_45513[(8)]);
var inst_45491__$1 = (state_45513[(2)]);
var inst_45492 = (inst_45491__$1 == null);
var inst_45493__$1 = cljs.core.not(inst_45492);
var state_45513__$1 = (function (){var statearr_45532 = state_45513;
(statearr_45532[(11)] = inst_45493__$1);

(statearr_45532[(8)] = inst_45491__$1);

return statearr_45532;
})();
if(inst_45493__$1){
var statearr_45533_46922 = state_45513__$1;
(statearr_45533_46922[(1)] = (15));

} else {
var statearr_45534_46923 = state_45513__$1;
(statearr_45534_46923[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45514 === (16))){
var inst_45493 = (state_45513[(11)]);
var state_45513__$1 = state_45513;
var statearr_45535_46924 = state_45513__$1;
(statearr_45535_46924[(2)] = inst_45493);

(statearr_45535_46924[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45514 === (10))){
var inst_45485 = (state_45513[(2)]);
var state_45513__$1 = state_45513;
var statearr_45536_46925 = state_45513__$1;
(statearr_45536_46925[(2)] = inst_45485);

(statearr_45536_46925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45514 === (18))){
var inst_45496 = (state_45513[(2)]);
var state_45513__$1 = state_45513;
var statearr_45537_46926 = state_45513__$1;
(statearr_45537_46926[(2)] = inst_45496);

(statearr_45537_46926[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45514 === (8))){
var inst_45482 = cljs.core.async.close_BANG_(to);
var state_45513__$1 = state_45513;
var statearr_45538_46927 = state_45513__$1;
(statearr_45538_46927[(2)] = inst_45482);

(statearr_45538_46927[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____0 = (function (){
var statearr_45539 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45539[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__);

(statearr_45539[(1)] = (1));

return statearr_45539;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____1 = (function (state_45513){
while(true){
var ret_value__44795__auto__ = (function (){try{while(true){
var result__44796__auto__ = switch__44793__auto__(state_45513);
if(cljs.core.keyword_identical_QMARK_(result__44796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44796__auto__;
}
break;
}
}catch (e45540){var ex__44797__auto__ = e45540;
var statearr_45541_46928 = state_45513;
(statearr_45541_46928[(2)] = ex__44797__auto__);


if(cljs.core.seq((state_45513[(4)]))){
var statearr_45542_46929 = state_45513;
(statearr_45542_46929[(1)] = cljs.core.first((state_45513[(4)])));

} else {
throw ex__44797__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46930 = state_45513;
state_45513 = G__46930;
continue;
} else {
return ret_value__44795__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__ = function(state_45513){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____1.call(this,state_45513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44794__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44794__auto__;
})()
})();
var state__44989__auto__ = (function (){var statearr_45543 = f__44988__auto__();
(statearr_45543[(6)] = c__44987__auto__);

return statearr_45543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44989__auto__);
}));

return c__44987__auto__;
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
var G__45545 = arguments.length;
switch (G__45545) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__45547 = arguments.length;
switch (G__45547) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__45549 = arguments.length;
switch (G__45549) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__44987__auto___46938 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44988__auto__ = (function (){var switch__44793__auto__ = (function (state_45575){
var state_val_45576 = (state_45575[(1)]);
if((state_val_45576 === (7))){
var inst_45571 = (state_45575[(2)]);
var state_45575__$1 = state_45575;
var statearr_45577_46939 = state_45575__$1;
(statearr_45577_46939[(2)] = inst_45571);

(statearr_45577_46939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (1))){
var state_45575__$1 = state_45575;
var statearr_45578_46940 = state_45575__$1;
(statearr_45578_46940[(2)] = null);

(statearr_45578_46940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (4))){
var inst_45552 = (state_45575[(7)]);
var inst_45552__$1 = (state_45575[(2)]);
var inst_45553 = (inst_45552__$1 == null);
var state_45575__$1 = (function (){var statearr_45579 = state_45575;
(statearr_45579[(7)] = inst_45552__$1);

return statearr_45579;
})();
if(cljs.core.truth_(inst_45553)){
var statearr_45580_46941 = state_45575__$1;
(statearr_45580_46941[(1)] = (5));

} else {
var statearr_45581_46942 = state_45575__$1;
(statearr_45581_46942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (13))){
var state_45575__$1 = state_45575;
var statearr_45582_46943 = state_45575__$1;
(statearr_45582_46943[(2)] = null);

(statearr_45582_46943[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (6))){
var inst_45552 = (state_45575[(7)]);
var inst_45558 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45552) : p.call(null,inst_45552));
var state_45575__$1 = state_45575;
if(cljs.core.truth_(inst_45558)){
var statearr_45583_46944 = state_45575__$1;
(statearr_45583_46944[(1)] = (9));

} else {
var statearr_45584_46945 = state_45575__$1;
(statearr_45584_46945[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (3))){
var inst_45573 = (state_45575[(2)]);
var state_45575__$1 = state_45575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45575__$1,inst_45573);
} else {
if((state_val_45576 === (12))){
var state_45575__$1 = state_45575;
var statearr_45585_46946 = state_45575__$1;
(statearr_45585_46946[(2)] = null);

(statearr_45585_46946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (2))){
var state_45575__$1 = state_45575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45575__$1,(4),ch);
} else {
if((state_val_45576 === (11))){
var inst_45552 = (state_45575[(7)]);
var inst_45562 = (state_45575[(2)]);
var state_45575__$1 = state_45575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45575__$1,(8),inst_45562,inst_45552);
} else {
if((state_val_45576 === (9))){
var state_45575__$1 = state_45575;
var statearr_45586_46947 = state_45575__$1;
(statearr_45586_46947[(2)] = tc);

(statearr_45586_46947[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (5))){
var inst_45555 = cljs.core.async.close_BANG_(tc);
var inst_45556 = cljs.core.async.close_BANG_(fc);
var state_45575__$1 = (function (){var statearr_45587 = state_45575;
(statearr_45587[(8)] = inst_45555);

return statearr_45587;
})();
var statearr_45588_46948 = state_45575__$1;
(statearr_45588_46948[(2)] = inst_45556);

(statearr_45588_46948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (14))){
var inst_45569 = (state_45575[(2)]);
var state_45575__$1 = state_45575;
var statearr_45589_46950 = state_45575__$1;
(statearr_45589_46950[(2)] = inst_45569);

(statearr_45589_46950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (10))){
var state_45575__$1 = state_45575;
var statearr_45590_46951 = state_45575__$1;
(statearr_45590_46951[(2)] = fc);

(statearr_45590_46951[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (8))){
var inst_45564 = (state_45575[(2)]);
var state_45575__$1 = state_45575;
if(cljs.core.truth_(inst_45564)){
var statearr_45591_46953 = state_45575__$1;
(statearr_45591_46953[(1)] = (12));

} else {
var statearr_45592_46954 = state_45575__$1;
(statearr_45592_46954[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__44794__auto__ = null;
var cljs$core$async$state_machine__44794__auto____0 = (function (){
var statearr_45593 = [null,null,null,null,null,null,null,null,null];
(statearr_45593[(0)] = cljs$core$async$state_machine__44794__auto__);

(statearr_45593[(1)] = (1));

return statearr_45593;
});
var cljs$core$async$state_machine__44794__auto____1 = (function (state_45575){
while(true){
var ret_value__44795__auto__ = (function (){try{while(true){
var result__44796__auto__ = switch__44793__auto__(state_45575);
if(cljs.core.keyword_identical_QMARK_(result__44796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44796__auto__;
}
break;
}
}catch (e45594){var ex__44797__auto__ = e45594;
var statearr_45595_46955 = state_45575;
(statearr_45595_46955[(2)] = ex__44797__auto__);


if(cljs.core.seq((state_45575[(4)]))){
var statearr_45596_46956 = state_45575;
(statearr_45596_46956[(1)] = cljs.core.first((state_45575[(4)])));

} else {
throw ex__44797__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46957 = state_45575;
state_45575 = G__46957;
continue;
} else {
return ret_value__44795__auto__;
}
break;
}
});
cljs$core$async$state_machine__44794__auto__ = function(state_45575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44794__auto____1.call(this,state_45575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44794__auto____0;
cljs$core$async$state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44794__auto____1;
return cljs$core$async$state_machine__44794__auto__;
})()
})();
var state__44989__auto__ = (function (){var statearr_45597 = f__44988__auto__();
(statearr_45597[(6)] = c__44987__auto___46938);

return statearr_45597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44989__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__44987__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44988__auto__ = (function (){var switch__44793__auto__ = (function (state_45619){
var state_val_45620 = (state_45619[(1)]);
if((state_val_45620 === (7))){
var inst_45615 = (state_45619[(2)]);
var state_45619__$1 = state_45619;
var statearr_45621_46958 = state_45619__$1;
(statearr_45621_46958[(2)] = inst_45615);

(statearr_45621_46958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45620 === (1))){
var inst_45598 = init;
var inst_45599 = inst_45598;
var state_45619__$1 = (function (){var statearr_45622 = state_45619;
(statearr_45622[(7)] = inst_45599);

return statearr_45622;
})();
var statearr_45623_46959 = state_45619__$1;
(statearr_45623_46959[(2)] = null);

(statearr_45623_46959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45620 === (4))){
var inst_45602 = (state_45619[(8)]);
var inst_45602__$1 = (state_45619[(2)]);
var inst_45603 = (inst_45602__$1 == null);
var state_45619__$1 = (function (){var statearr_45624 = state_45619;
(statearr_45624[(8)] = inst_45602__$1);

return statearr_45624;
})();
if(cljs.core.truth_(inst_45603)){
var statearr_45625_46960 = state_45619__$1;
(statearr_45625_46960[(1)] = (5));

} else {
var statearr_45626_46961 = state_45619__$1;
(statearr_45626_46961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45620 === (6))){
var inst_45602 = (state_45619[(8)]);
var inst_45599 = (state_45619[(7)]);
var inst_45606 = (state_45619[(9)]);
var inst_45606__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_45599,inst_45602) : f.call(null,inst_45599,inst_45602));
var inst_45607 = cljs.core.reduced_QMARK_(inst_45606__$1);
var state_45619__$1 = (function (){var statearr_45627 = state_45619;
(statearr_45627[(9)] = inst_45606__$1);

return statearr_45627;
})();
if(inst_45607){
var statearr_45628_46962 = state_45619__$1;
(statearr_45628_46962[(1)] = (8));

} else {
var statearr_45629_46963 = state_45619__$1;
(statearr_45629_46963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45620 === (3))){
var inst_45617 = (state_45619[(2)]);
var state_45619__$1 = state_45619;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45619__$1,inst_45617);
} else {
if((state_val_45620 === (2))){
var state_45619__$1 = state_45619;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45619__$1,(4),ch);
} else {
if((state_val_45620 === (9))){
var inst_45606 = (state_45619[(9)]);
var inst_45599 = inst_45606;
var state_45619__$1 = (function (){var statearr_45630 = state_45619;
(statearr_45630[(7)] = inst_45599);

return statearr_45630;
})();
var statearr_45631_46964 = state_45619__$1;
(statearr_45631_46964[(2)] = null);

(statearr_45631_46964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45620 === (5))){
var inst_45599 = (state_45619[(7)]);
var state_45619__$1 = state_45619;
var statearr_45632_46969 = state_45619__$1;
(statearr_45632_46969[(2)] = inst_45599);

(statearr_45632_46969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45620 === (10))){
var inst_45613 = (state_45619[(2)]);
var state_45619__$1 = state_45619;
var statearr_45633_46973 = state_45619__$1;
(statearr_45633_46973[(2)] = inst_45613);

(statearr_45633_46973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45620 === (8))){
var inst_45606 = (state_45619[(9)]);
var inst_45609 = cljs.core.deref(inst_45606);
var state_45619__$1 = state_45619;
var statearr_45634_46974 = state_45619__$1;
(statearr_45634_46974[(2)] = inst_45609);

(statearr_45634_46974[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__44794__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44794__auto____0 = (function (){
var statearr_45635 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45635[(0)] = cljs$core$async$reduce_$_state_machine__44794__auto__);

(statearr_45635[(1)] = (1));

return statearr_45635;
});
var cljs$core$async$reduce_$_state_machine__44794__auto____1 = (function (state_45619){
while(true){
var ret_value__44795__auto__ = (function (){try{while(true){
var result__44796__auto__ = switch__44793__auto__(state_45619);
if(cljs.core.keyword_identical_QMARK_(result__44796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44796__auto__;
}
break;
}
}catch (e45636){var ex__44797__auto__ = e45636;
var statearr_45637_46975 = state_45619;
(statearr_45637_46975[(2)] = ex__44797__auto__);


if(cljs.core.seq((state_45619[(4)]))){
var statearr_45638_46979 = state_45619;
(statearr_45638_46979[(1)] = cljs.core.first((state_45619[(4)])));

} else {
throw ex__44797__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46980 = state_45619;
state_45619 = G__46980;
continue;
} else {
return ret_value__44795__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44794__auto__ = function(state_45619){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44794__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44794__auto____1.call(this,state_45619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44794__auto____0;
cljs$core$async$reduce_$_state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44794__auto____1;
return cljs$core$async$reduce_$_state_machine__44794__auto__;
})()
})();
var state__44989__auto__ = (function (){var statearr_45639 = f__44988__auto__();
(statearr_45639[(6)] = c__44987__auto__);

return statearr_45639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44989__auto__);
}));

return c__44987__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__44987__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44988__auto__ = (function (){var switch__44793__auto__ = (function (state_45645){
var state_val_45646 = (state_45645[(1)]);
if((state_val_45646 === (1))){
var inst_45640 = cljs.core.async.reduce(f__$1,init,ch);
var state_45645__$1 = state_45645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45645__$1,(2),inst_45640);
} else {
if((state_val_45646 === (2))){
var inst_45642 = (state_45645[(2)]);
var inst_45643 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_45642) : f__$1.call(null,inst_45642));
var state_45645__$1 = state_45645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45645__$1,inst_45643);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__44794__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44794__auto____0 = (function (){
var statearr_45647 = [null,null,null,null,null,null,null];
(statearr_45647[(0)] = cljs$core$async$transduce_$_state_machine__44794__auto__);

(statearr_45647[(1)] = (1));

return statearr_45647;
});
var cljs$core$async$transduce_$_state_machine__44794__auto____1 = (function (state_45645){
while(true){
var ret_value__44795__auto__ = (function (){try{while(true){
var result__44796__auto__ = switch__44793__auto__(state_45645);
if(cljs.core.keyword_identical_QMARK_(result__44796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44796__auto__;
}
break;
}
}catch (e45648){var ex__44797__auto__ = e45648;
var statearr_45649_46984 = state_45645;
(statearr_45649_46984[(2)] = ex__44797__auto__);


if(cljs.core.seq((state_45645[(4)]))){
var statearr_45650_46988 = state_45645;
(statearr_45650_46988[(1)] = cljs.core.first((state_45645[(4)])));

} else {
throw ex__44797__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46989 = state_45645;
state_45645 = G__46989;
continue;
} else {
return ret_value__44795__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44794__auto__ = function(state_45645){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44794__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44794__auto____1.call(this,state_45645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44794__auto____0;
cljs$core$async$transduce_$_state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44794__auto____1;
return cljs$core$async$transduce_$_state_machine__44794__auto__;
})()
})();
var state__44989__auto__ = (function (){var statearr_45651 = f__44988__auto__();
(statearr_45651[(6)] = c__44987__auto__);

return statearr_45651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44989__auto__);
}));

return c__44987__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__45653 = arguments.length;
switch (G__45653) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44987__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44988__auto__ = (function (){var switch__44793__auto__ = (function (state_45678){
var state_val_45679 = (state_45678[(1)]);
if((state_val_45679 === (7))){
var inst_45660 = (state_45678[(2)]);
var state_45678__$1 = state_45678;
var statearr_45680_46995 = state_45678__$1;
(statearr_45680_46995[(2)] = inst_45660);

(statearr_45680_46995[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45679 === (1))){
var inst_45654 = cljs.core.seq(coll);
var inst_45655 = inst_45654;
var state_45678__$1 = (function (){var statearr_45681 = state_45678;
(statearr_45681[(7)] = inst_45655);

return statearr_45681;
})();
var statearr_45682_46999 = state_45678__$1;
(statearr_45682_46999[(2)] = null);

(statearr_45682_46999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45679 === (4))){
var inst_45655 = (state_45678[(7)]);
var inst_45658 = cljs.core.first(inst_45655);
var state_45678__$1 = state_45678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45678__$1,(7),ch,inst_45658);
} else {
if((state_val_45679 === (13))){
var inst_45672 = (state_45678[(2)]);
var state_45678__$1 = state_45678;
var statearr_45683_47000 = state_45678__$1;
(statearr_45683_47000[(2)] = inst_45672);

(statearr_45683_47000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45679 === (6))){
var inst_45663 = (state_45678[(2)]);
var state_45678__$1 = state_45678;
if(cljs.core.truth_(inst_45663)){
var statearr_45684_47001 = state_45678__$1;
(statearr_45684_47001[(1)] = (8));

} else {
var statearr_45685_47002 = state_45678__$1;
(statearr_45685_47002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45679 === (3))){
var inst_45676 = (state_45678[(2)]);
var state_45678__$1 = state_45678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45678__$1,inst_45676);
} else {
if((state_val_45679 === (12))){
var state_45678__$1 = state_45678;
var statearr_45686_47003 = state_45678__$1;
(statearr_45686_47003[(2)] = null);

(statearr_45686_47003[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45679 === (2))){
var inst_45655 = (state_45678[(7)]);
var state_45678__$1 = state_45678;
if(cljs.core.truth_(inst_45655)){
var statearr_45687_47007 = state_45678__$1;
(statearr_45687_47007[(1)] = (4));

} else {
var statearr_45688_47008 = state_45678__$1;
(statearr_45688_47008[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45679 === (11))){
var inst_45669 = cljs.core.async.close_BANG_(ch);
var state_45678__$1 = state_45678;
var statearr_45689_47009 = state_45678__$1;
(statearr_45689_47009[(2)] = inst_45669);

(statearr_45689_47009[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45679 === (9))){
var state_45678__$1 = state_45678;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45690_47010 = state_45678__$1;
(statearr_45690_47010[(1)] = (11));

} else {
var statearr_45691_47011 = state_45678__$1;
(statearr_45691_47011[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45679 === (5))){
var inst_45655 = (state_45678[(7)]);
var state_45678__$1 = state_45678;
var statearr_45692_47015 = state_45678__$1;
(statearr_45692_47015[(2)] = inst_45655);

(statearr_45692_47015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45679 === (10))){
var inst_45674 = (state_45678[(2)]);
var state_45678__$1 = state_45678;
var statearr_45693_47016 = state_45678__$1;
(statearr_45693_47016[(2)] = inst_45674);

(statearr_45693_47016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45679 === (8))){
var inst_45655 = (state_45678[(7)]);
var inst_45665 = cljs.core.next(inst_45655);
var inst_45655__$1 = inst_45665;
var state_45678__$1 = (function (){var statearr_45694 = state_45678;
(statearr_45694[(7)] = inst_45655__$1);

return statearr_45694;
})();
var statearr_45695_47017 = state_45678__$1;
(statearr_45695_47017[(2)] = null);

(statearr_45695_47017[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__44794__auto__ = null;
var cljs$core$async$state_machine__44794__auto____0 = (function (){
var statearr_45696 = [null,null,null,null,null,null,null,null];
(statearr_45696[(0)] = cljs$core$async$state_machine__44794__auto__);

(statearr_45696[(1)] = (1));

return statearr_45696;
});
var cljs$core$async$state_machine__44794__auto____1 = (function (state_45678){
while(true){
var ret_value__44795__auto__ = (function (){try{while(true){
var result__44796__auto__ = switch__44793__auto__(state_45678);
if(cljs.core.keyword_identical_QMARK_(result__44796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44796__auto__;
}
break;
}
}catch (e45697){var ex__44797__auto__ = e45697;
var statearr_45698_47021 = state_45678;
(statearr_45698_47021[(2)] = ex__44797__auto__);


if(cljs.core.seq((state_45678[(4)]))){
var statearr_45699_47022 = state_45678;
(statearr_45699_47022[(1)] = cljs.core.first((state_45678[(4)])));

} else {
throw ex__44797__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47023 = state_45678;
state_45678 = G__47023;
continue;
} else {
return ret_value__44795__auto__;
}
break;
}
});
cljs$core$async$state_machine__44794__auto__ = function(state_45678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44794__auto____1.call(this,state_45678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44794__auto____0;
cljs$core$async$state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44794__auto____1;
return cljs$core$async$state_machine__44794__auto__;
})()
})();
var state__44989__auto__ = (function (){var statearr_45700 = f__44988__auto__();
(statearr_45700[(6)] = c__44987__auto__);

return statearr_45700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44989__auto__);
}));

return c__44987__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__45702 = arguments.length;
switch (G__45702) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_47026 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_47026(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47027 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_47027(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47028 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_47028(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47029 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_47029(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45703 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45703 = (function (ch,cs,meta45704){
this.ch = ch;
this.cs = cs;
this.meta45704 = meta45704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45705,meta45704__$1){
var self__ = this;
var _45705__$1 = this;
return (new cljs.core.async.t_cljs$core$async45703(self__.ch,self__.cs,meta45704__$1));
}));

(cljs.core.async.t_cljs$core$async45703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45705){
var self__ = this;
var _45705__$1 = this;
return self__.meta45704;
}));

(cljs.core.async.t_cljs$core$async45703.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45703.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45703.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45703.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async45703.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async45703.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async45703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45704","meta45704",689779425,null)], null);
}));

(cljs.core.async.t_cljs$core$async45703.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45703");

(cljs.core.async.t_cljs$core$async45703.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45703");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45703.
 */
cljs.core.async.__GT_t_cljs$core$async45703 = (function cljs$core$async$mult_$___GT_t_cljs$core$async45703(ch__$1,cs__$1,meta45704){
return (new cljs.core.async.t_cljs$core$async45703(ch__$1,cs__$1,meta45704));
});

}

return (new cljs.core.async.t_cljs$core$async45703(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__44987__auto___47030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44988__auto__ = (function (){var switch__44793__auto__ = (function (state_45838){
var state_val_45839 = (state_45838[(1)]);
if((state_val_45839 === (7))){
var inst_45834 = (state_45838[(2)]);
var state_45838__$1 = state_45838;
var statearr_45840_47031 = state_45838__$1;
(statearr_45840_47031[(2)] = inst_45834);

(statearr_45840_47031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (20))){
var inst_45739 = (state_45838[(7)]);
var inst_45751 = cljs.core.first(inst_45739);
var inst_45752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45751,(0),null);
var inst_45753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45751,(1),null);
var state_45838__$1 = (function (){var statearr_45841 = state_45838;
(statearr_45841[(8)] = inst_45752);

return statearr_45841;
})();
if(cljs.core.truth_(inst_45753)){
var statearr_45842_47032 = state_45838__$1;
(statearr_45842_47032[(1)] = (22));

} else {
var statearr_45843_47033 = state_45838__$1;
(statearr_45843_47033[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (27))){
var inst_45783 = (state_45838[(9)]);
var inst_45788 = (state_45838[(10)]);
var inst_45708 = (state_45838[(11)]);
var inst_45781 = (state_45838[(12)]);
var inst_45788__$1 = cljs.core._nth(inst_45781,inst_45783);
var inst_45789 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45788__$1,inst_45708,done);
var state_45838__$1 = (function (){var statearr_45844 = state_45838;
(statearr_45844[(10)] = inst_45788__$1);

return statearr_45844;
})();
if(cljs.core.truth_(inst_45789)){
var statearr_45845_47034 = state_45838__$1;
(statearr_45845_47034[(1)] = (30));

} else {
var statearr_45846_47035 = state_45838__$1;
(statearr_45846_47035[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (1))){
var state_45838__$1 = state_45838;
var statearr_45847_47036 = state_45838__$1;
(statearr_45847_47036[(2)] = null);

(statearr_45847_47036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (24))){
var inst_45739 = (state_45838[(7)]);
var inst_45758 = (state_45838[(2)]);
var inst_45759 = cljs.core.next(inst_45739);
var inst_45717 = inst_45759;
var inst_45718 = null;
var inst_45719 = (0);
var inst_45720 = (0);
var state_45838__$1 = (function (){var statearr_45848 = state_45838;
(statearr_45848[(13)] = inst_45719);

(statearr_45848[(14)] = inst_45758);

(statearr_45848[(15)] = inst_45720);

(statearr_45848[(16)] = inst_45718);

(statearr_45848[(17)] = inst_45717);

return statearr_45848;
})();
var statearr_45849_47037 = state_45838__$1;
(statearr_45849_47037[(2)] = null);

(statearr_45849_47037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (39))){
var state_45838__$1 = state_45838;
var statearr_45853_47038 = state_45838__$1;
(statearr_45853_47038[(2)] = null);

(statearr_45853_47038[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (4))){
var inst_45708 = (state_45838[(11)]);
var inst_45708__$1 = (state_45838[(2)]);
var inst_45709 = (inst_45708__$1 == null);
var state_45838__$1 = (function (){var statearr_45854 = state_45838;
(statearr_45854[(11)] = inst_45708__$1);

return statearr_45854;
})();
if(cljs.core.truth_(inst_45709)){
var statearr_45855_47039 = state_45838__$1;
(statearr_45855_47039[(1)] = (5));

} else {
var statearr_45856_47040 = state_45838__$1;
(statearr_45856_47040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (15))){
var inst_45719 = (state_45838[(13)]);
var inst_45720 = (state_45838[(15)]);
var inst_45718 = (state_45838[(16)]);
var inst_45717 = (state_45838[(17)]);
var inst_45735 = (state_45838[(2)]);
var inst_45736 = (inst_45720 + (1));
var tmp45850 = inst_45719;
var tmp45851 = inst_45718;
var tmp45852 = inst_45717;
var inst_45717__$1 = tmp45852;
var inst_45718__$1 = tmp45851;
var inst_45719__$1 = tmp45850;
var inst_45720__$1 = inst_45736;
var state_45838__$1 = (function (){var statearr_45857 = state_45838;
(statearr_45857[(13)] = inst_45719__$1);

(statearr_45857[(15)] = inst_45720__$1);

(statearr_45857[(16)] = inst_45718__$1);

(statearr_45857[(18)] = inst_45735);

(statearr_45857[(17)] = inst_45717__$1);

return statearr_45857;
})();
var statearr_45858_47043 = state_45838__$1;
(statearr_45858_47043[(2)] = null);

(statearr_45858_47043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (21))){
var inst_45762 = (state_45838[(2)]);
var state_45838__$1 = state_45838;
var statearr_45862_47047 = state_45838__$1;
(statearr_45862_47047[(2)] = inst_45762);

(statearr_45862_47047[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (31))){
var inst_45788 = (state_45838[(10)]);
var inst_45792 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45788);
var state_45838__$1 = state_45838;
var statearr_45863_47048 = state_45838__$1;
(statearr_45863_47048[(2)] = inst_45792);

(statearr_45863_47048[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (32))){
var inst_45783 = (state_45838[(9)]);
var inst_45782 = (state_45838[(19)]);
var inst_45780 = (state_45838[(20)]);
var inst_45781 = (state_45838[(12)]);
var inst_45794 = (state_45838[(2)]);
var inst_45795 = (inst_45783 + (1));
var tmp45859 = inst_45782;
var tmp45860 = inst_45780;
var tmp45861 = inst_45781;
var inst_45780__$1 = tmp45860;
var inst_45781__$1 = tmp45861;
var inst_45782__$1 = tmp45859;
var inst_45783__$1 = inst_45795;
var state_45838__$1 = (function (){var statearr_45864 = state_45838;
(statearr_45864[(9)] = inst_45783__$1);

(statearr_45864[(19)] = inst_45782__$1);

(statearr_45864[(20)] = inst_45780__$1);

(statearr_45864[(12)] = inst_45781__$1);

(statearr_45864[(21)] = inst_45794);

return statearr_45864;
})();
var statearr_45865_47050 = state_45838__$1;
(statearr_45865_47050[(2)] = null);

(statearr_45865_47050[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (40))){
var inst_45807 = (state_45838[(22)]);
var inst_45811 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45807);
var state_45838__$1 = state_45838;
var statearr_45866_47051 = state_45838__$1;
(statearr_45866_47051[(2)] = inst_45811);

(statearr_45866_47051[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (33))){
var inst_45798 = (state_45838[(23)]);
var inst_45800 = cljs.core.chunked_seq_QMARK_(inst_45798);
var state_45838__$1 = state_45838;
if(inst_45800){
var statearr_45867_47053 = state_45838__$1;
(statearr_45867_47053[(1)] = (36));

} else {
var statearr_45868_47055 = state_45838__$1;
(statearr_45868_47055[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (13))){
var inst_45729 = (state_45838[(24)]);
var inst_45732 = cljs.core.async.close_BANG_(inst_45729);
var state_45838__$1 = state_45838;
var statearr_45869_47056 = state_45838__$1;
(statearr_45869_47056[(2)] = inst_45732);

(statearr_45869_47056[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (22))){
var inst_45752 = (state_45838[(8)]);
var inst_45755 = cljs.core.async.close_BANG_(inst_45752);
var state_45838__$1 = state_45838;
var statearr_45870_47057 = state_45838__$1;
(statearr_45870_47057[(2)] = inst_45755);

(statearr_45870_47057[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (36))){
var inst_45798 = (state_45838[(23)]);
var inst_45802 = cljs.core.chunk_first(inst_45798);
var inst_45803 = cljs.core.chunk_rest(inst_45798);
var inst_45804 = cljs.core.count(inst_45802);
var inst_45780 = inst_45803;
var inst_45781 = inst_45802;
var inst_45782 = inst_45804;
var inst_45783 = (0);
var state_45838__$1 = (function (){var statearr_45871 = state_45838;
(statearr_45871[(9)] = inst_45783);

(statearr_45871[(19)] = inst_45782);

(statearr_45871[(20)] = inst_45780);

(statearr_45871[(12)] = inst_45781);

return statearr_45871;
})();
var statearr_45872_47058 = state_45838__$1;
(statearr_45872_47058[(2)] = null);

(statearr_45872_47058[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (41))){
var inst_45798 = (state_45838[(23)]);
var inst_45813 = (state_45838[(2)]);
var inst_45814 = cljs.core.next(inst_45798);
var inst_45780 = inst_45814;
var inst_45781 = null;
var inst_45782 = (0);
var inst_45783 = (0);
var state_45838__$1 = (function (){var statearr_45873 = state_45838;
(statearr_45873[(9)] = inst_45783);

(statearr_45873[(19)] = inst_45782);

(statearr_45873[(20)] = inst_45780);

(statearr_45873[(12)] = inst_45781);

(statearr_45873[(25)] = inst_45813);

return statearr_45873;
})();
var statearr_45874_47059 = state_45838__$1;
(statearr_45874_47059[(2)] = null);

(statearr_45874_47059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (43))){
var state_45838__$1 = state_45838;
var statearr_45875_47060 = state_45838__$1;
(statearr_45875_47060[(2)] = null);

(statearr_45875_47060[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (29))){
var inst_45822 = (state_45838[(2)]);
var state_45838__$1 = state_45838;
var statearr_45876_47061 = state_45838__$1;
(statearr_45876_47061[(2)] = inst_45822);

(statearr_45876_47061[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (44))){
var inst_45831 = (state_45838[(2)]);
var state_45838__$1 = (function (){var statearr_45877 = state_45838;
(statearr_45877[(26)] = inst_45831);

return statearr_45877;
})();
var statearr_45878_47062 = state_45838__$1;
(statearr_45878_47062[(2)] = null);

(statearr_45878_47062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (6))){
var inst_45772 = (state_45838[(27)]);
var inst_45771 = cljs.core.deref(cs);
var inst_45772__$1 = cljs.core.keys(inst_45771);
var inst_45773 = cljs.core.count(inst_45772__$1);
var inst_45774 = cljs.core.reset_BANG_(dctr,inst_45773);
var inst_45779 = cljs.core.seq(inst_45772__$1);
var inst_45780 = inst_45779;
var inst_45781 = null;
var inst_45782 = (0);
var inst_45783 = (0);
var state_45838__$1 = (function (){var statearr_45879 = state_45838;
(statearr_45879[(9)] = inst_45783);

(statearr_45879[(19)] = inst_45782);

(statearr_45879[(27)] = inst_45772__$1);

(statearr_45879[(28)] = inst_45774);

(statearr_45879[(20)] = inst_45780);

(statearr_45879[(12)] = inst_45781);

return statearr_45879;
})();
var statearr_45880_47064 = state_45838__$1;
(statearr_45880_47064[(2)] = null);

(statearr_45880_47064[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (28))){
var inst_45780 = (state_45838[(20)]);
var inst_45798 = (state_45838[(23)]);
var inst_45798__$1 = cljs.core.seq(inst_45780);
var state_45838__$1 = (function (){var statearr_45881 = state_45838;
(statearr_45881[(23)] = inst_45798__$1);

return statearr_45881;
})();
if(inst_45798__$1){
var statearr_45882_47068 = state_45838__$1;
(statearr_45882_47068[(1)] = (33));

} else {
var statearr_45883_47069 = state_45838__$1;
(statearr_45883_47069[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (25))){
var inst_45783 = (state_45838[(9)]);
var inst_45782 = (state_45838[(19)]);
var inst_45785 = (inst_45783 < inst_45782);
var inst_45786 = inst_45785;
var state_45838__$1 = state_45838;
if(cljs.core.truth_(inst_45786)){
var statearr_45884_47072 = state_45838__$1;
(statearr_45884_47072[(1)] = (27));

} else {
var statearr_45885_47073 = state_45838__$1;
(statearr_45885_47073[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (34))){
var state_45838__$1 = state_45838;
var statearr_45886_47074 = state_45838__$1;
(statearr_45886_47074[(2)] = null);

(statearr_45886_47074[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (17))){
var state_45838__$1 = state_45838;
var statearr_45887_47075 = state_45838__$1;
(statearr_45887_47075[(2)] = null);

(statearr_45887_47075[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (3))){
var inst_45836 = (state_45838[(2)]);
var state_45838__$1 = state_45838;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45838__$1,inst_45836);
} else {
if((state_val_45839 === (12))){
var inst_45767 = (state_45838[(2)]);
var state_45838__$1 = state_45838;
var statearr_45888_47078 = state_45838__$1;
(statearr_45888_47078[(2)] = inst_45767);

(statearr_45888_47078[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (2))){
var state_45838__$1 = state_45838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45838__$1,(4),ch);
} else {
if((state_val_45839 === (23))){
var state_45838__$1 = state_45838;
var statearr_45889_47079 = state_45838__$1;
(statearr_45889_47079[(2)] = null);

(statearr_45889_47079[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (35))){
var inst_45820 = (state_45838[(2)]);
var state_45838__$1 = state_45838;
var statearr_45890_47080 = state_45838__$1;
(statearr_45890_47080[(2)] = inst_45820);

(statearr_45890_47080[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (19))){
var inst_45739 = (state_45838[(7)]);
var inst_45743 = cljs.core.chunk_first(inst_45739);
var inst_45744 = cljs.core.chunk_rest(inst_45739);
var inst_45745 = cljs.core.count(inst_45743);
var inst_45717 = inst_45744;
var inst_45718 = inst_45743;
var inst_45719 = inst_45745;
var inst_45720 = (0);
var state_45838__$1 = (function (){var statearr_45891 = state_45838;
(statearr_45891[(13)] = inst_45719);

(statearr_45891[(15)] = inst_45720);

(statearr_45891[(16)] = inst_45718);

(statearr_45891[(17)] = inst_45717);

return statearr_45891;
})();
var statearr_45892_47084 = state_45838__$1;
(statearr_45892_47084[(2)] = null);

(statearr_45892_47084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (11))){
var inst_45739 = (state_45838[(7)]);
var inst_45717 = (state_45838[(17)]);
var inst_45739__$1 = cljs.core.seq(inst_45717);
var state_45838__$1 = (function (){var statearr_45893 = state_45838;
(statearr_45893[(7)] = inst_45739__$1);

return statearr_45893;
})();
if(inst_45739__$1){
var statearr_45894_47089 = state_45838__$1;
(statearr_45894_47089[(1)] = (16));

} else {
var statearr_45895_47090 = state_45838__$1;
(statearr_45895_47090[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (9))){
var inst_45769 = (state_45838[(2)]);
var state_45838__$1 = state_45838;
var statearr_45896_47091 = state_45838__$1;
(statearr_45896_47091[(2)] = inst_45769);

(statearr_45896_47091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (5))){
var inst_45715 = cljs.core.deref(cs);
var inst_45716 = cljs.core.seq(inst_45715);
var inst_45717 = inst_45716;
var inst_45718 = null;
var inst_45719 = (0);
var inst_45720 = (0);
var state_45838__$1 = (function (){var statearr_45897 = state_45838;
(statearr_45897[(13)] = inst_45719);

(statearr_45897[(15)] = inst_45720);

(statearr_45897[(16)] = inst_45718);

(statearr_45897[(17)] = inst_45717);

return statearr_45897;
})();
var statearr_45898_47098 = state_45838__$1;
(statearr_45898_47098[(2)] = null);

(statearr_45898_47098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (14))){
var state_45838__$1 = state_45838;
var statearr_45899_47099 = state_45838__$1;
(statearr_45899_47099[(2)] = null);

(statearr_45899_47099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (45))){
var inst_45828 = (state_45838[(2)]);
var state_45838__$1 = state_45838;
var statearr_45900_47100 = state_45838__$1;
(statearr_45900_47100[(2)] = inst_45828);

(statearr_45900_47100[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (26))){
var inst_45772 = (state_45838[(27)]);
var inst_45824 = (state_45838[(2)]);
var inst_45825 = cljs.core.seq(inst_45772);
var state_45838__$1 = (function (){var statearr_45901 = state_45838;
(statearr_45901[(29)] = inst_45824);

return statearr_45901;
})();
if(inst_45825){
var statearr_45902_47101 = state_45838__$1;
(statearr_45902_47101[(1)] = (42));

} else {
var statearr_45903_47102 = state_45838__$1;
(statearr_45903_47102[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (16))){
var inst_45739 = (state_45838[(7)]);
var inst_45741 = cljs.core.chunked_seq_QMARK_(inst_45739);
var state_45838__$1 = state_45838;
if(inst_45741){
var statearr_45904_47103 = state_45838__$1;
(statearr_45904_47103[(1)] = (19));

} else {
var statearr_45905_47104 = state_45838__$1;
(statearr_45905_47104[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (38))){
var inst_45817 = (state_45838[(2)]);
var state_45838__$1 = state_45838;
var statearr_45906_47105 = state_45838__$1;
(statearr_45906_47105[(2)] = inst_45817);

(statearr_45906_47105[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (30))){
var state_45838__$1 = state_45838;
var statearr_45907_47106 = state_45838__$1;
(statearr_45907_47106[(2)] = null);

(statearr_45907_47106[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (10))){
var inst_45720 = (state_45838[(15)]);
var inst_45718 = (state_45838[(16)]);
var inst_45728 = cljs.core._nth(inst_45718,inst_45720);
var inst_45729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45728,(0),null);
var inst_45730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45728,(1),null);
var state_45838__$1 = (function (){var statearr_45908 = state_45838;
(statearr_45908[(24)] = inst_45729);

return statearr_45908;
})();
if(cljs.core.truth_(inst_45730)){
var statearr_45909_47107 = state_45838__$1;
(statearr_45909_47107[(1)] = (13));

} else {
var statearr_45910_47108 = state_45838__$1;
(statearr_45910_47108[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (18))){
var inst_45765 = (state_45838[(2)]);
var state_45838__$1 = state_45838;
var statearr_45911_47109 = state_45838__$1;
(statearr_45911_47109[(2)] = inst_45765);

(statearr_45911_47109[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (42))){
var state_45838__$1 = state_45838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45838__$1,(45),dchan);
} else {
if((state_val_45839 === (37))){
var inst_45807 = (state_45838[(22)]);
var inst_45708 = (state_45838[(11)]);
var inst_45798 = (state_45838[(23)]);
var inst_45807__$1 = cljs.core.first(inst_45798);
var inst_45808 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45807__$1,inst_45708,done);
var state_45838__$1 = (function (){var statearr_45912 = state_45838;
(statearr_45912[(22)] = inst_45807__$1);

return statearr_45912;
})();
if(cljs.core.truth_(inst_45808)){
var statearr_45913_47110 = state_45838__$1;
(statearr_45913_47110[(1)] = (39));

} else {
var statearr_45914_47111 = state_45838__$1;
(statearr_45914_47111[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45839 === (8))){
var inst_45719 = (state_45838[(13)]);
var inst_45720 = (state_45838[(15)]);
var inst_45722 = (inst_45720 < inst_45719);
var inst_45723 = inst_45722;
var state_45838__$1 = state_45838;
if(cljs.core.truth_(inst_45723)){
var statearr_45915_47118 = state_45838__$1;
(statearr_45915_47118[(1)] = (10));

} else {
var statearr_45916_47119 = state_45838__$1;
(statearr_45916_47119[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__44794__auto__ = null;
var cljs$core$async$mult_$_state_machine__44794__auto____0 = (function (){
var statearr_45917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45917[(0)] = cljs$core$async$mult_$_state_machine__44794__auto__);

(statearr_45917[(1)] = (1));

return statearr_45917;
});
var cljs$core$async$mult_$_state_machine__44794__auto____1 = (function (state_45838){
while(true){
var ret_value__44795__auto__ = (function (){try{while(true){
var result__44796__auto__ = switch__44793__auto__(state_45838);
if(cljs.core.keyword_identical_QMARK_(result__44796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44796__auto__;
}
break;
}
}catch (e45918){var ex__44797__auto__ = e45918;
var statearr_45919_47120 = state_45838;
(statearr_45919_47120[(2)] = ex__44797__auto__);


if(cljs.core.seq((state_45838[(4)]))){
var statearr_45920_47121 = state_45838;
(statearr_45920_47121[(1)] = cljs.core.first((state_45838[(4)])));

} else {
throw ex__44797__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47122 = state_45838;
state_45838 = G__47122;
continue;
} else {
return ret_value__44795__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44794__auto__ = function(state_45838){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44794__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44794__auto____1.call(this,state_45838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44794__auto____0;
cljs$core$async$mult_$_state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44794__auto____1;
return cljs$core$async$mult_$_state_machine__44794__auto__;
})()
})();
var state__44989__auto__ = (function (){var statearr_45921 = f__44988__auto__();
(statearr_45921[(6)] = c__44987__auto___47030);

return statearr_45921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44989__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__45923 = arguments.length;
switch (G__45923) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mix$admix_STAR_$dyn_47130 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_47130(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47131 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_47131(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47132 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47132(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47133 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_47133(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47134 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47134(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___47141 = arguments.length;
var i__4830__auto___47142 = (0);
while(true){
if((i__4830__auto___47142 < len__4829__auto___47141)){
args__4835__auto__.push((arguments[i__4830__auto___47142]));

var G__47143 = (i__4830__auto___47142 + (1));
i__4830__auto___47142 = G__47143;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45928){
var map__45929 = p__45928;
var map__45929__$1 = cljs.core.__destructure_map(map__45929);
var opts = map__45929__$1;
var statearr_45930_47144 = state;
(statearr_45930_47144[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45931_47145 = state;
(statearr_45931_47145[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_45932_47146 = state;
(statearr_45932_47146[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45924){
var G__45925 = cljs.core.first(seq45924);
var seq45924__$1 = cljs.core.next(seq45924);
var G__45926 = cljs.core.first(seq45924__$1);
var seq45924__$2 = cljs.core.next(seq45924__$1);
var G__45927 = cljs.core.first(seq45924__$2);
var seq45924__$3 = cljs.core.next(seq45924__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45925,G__45926,G__45927,seq45924__$3);
}));

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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45933 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45933 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45934){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45934 = meta45934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45935,meta45934__$1){
var self__ = this;
var _45935__$1 = this;
return (new cljs.core.async.t_cljs$core$async45933(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45934__$1));
}));

(cljs.core.async.t_cljs$core$async45933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45935){
var self__ = this;
var _45935__$1 = this;
return self__.meta45934;
}));

(cljs.core.async.t_cljs$core$async45933.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45933.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45933.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45933.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45933.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45933.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45933.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45933.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45934","meta45934",-992384825,null)], null);
}));

(cljs.core.async.t_cljs$core$async45933.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45933");

(cljs.core.async.t_cljs$core$async45933.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45933");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45933.
 */
cljs.core.async.__GT_t_cljs$core$async45933 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45933(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45934){
return (new cljs.core.async.t_cljs$core$async45933(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45934));
});

}

return (new cljs.core.async.t_cljs$core$async45933(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44987__auto___47147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44988__auto__ = (function (){var switch__44793__auto__ = (function (state_46003){
var state_val_46004 = (state_46003[(1)]);
if((state_val_46004 === (7))){
var inst_45963 = (state_46003[(2)]);
var state_46003__$1 = state_46003;
if(cljs.core.truth_(inst_45963)){
var statearr_46005_47148 = state_46003__$1;
(statearr_46005_47148[(1)] = (8));

} else {
var statearr_46006_47149 = state_46003__$1;
(statearr_46006_47149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (20))){
var inst_45956 = (state_46003[(7)]);
var state_46003__$1 = state_46003;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46003__$1,(23),out,inst_45956);
} else {
if((state_val_46004 === (1))){
var inst_45939 = calc_state();
var inst_45940 = cljs.core.__destructure_map(inst_45939);
var inst_45941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45940,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45940,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45940,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45944 = inst_45939;
var state_46003__$1 = (function (){var statearr_46007 = state_46003;
(statearr_46007[(8)] = inst_45941);

(statearr_46007[(9)] = inst_45944);

(statearr_46007[(10)] = inst_45943);

(statearr_46007[(11)] = inst_45942);

return statearr_46007;
})();
var statearr_46008_47150 = state_46003__$1;
(statearr_46008_47150[(2)] = null);

(statearr_46008_47150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (24))){
var inst_45947 = (state_46003[(12)]);
var inst_45944 = inst_45947;
var state_46003__$1 = (function (){var statearr_46009 = state_46003;
(statearr_46009[(9)] = inst_45944);

return statearr_46009;
})();
var statearr_46010_47151 = state_46003__$1;
(statearr_46010_47151[(2)] = null);

(statearr_46010_47151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (4))){
var inst_45958 = (state_46003[(13)]);
var inst_45956 = (state_46003[(7)]);
var inst_45955 = (state_46003[(2)]);
var inst_45956__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45955,(0),null);
var inst_45957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45955,(1),null);
var inst_45958__$1 = (inst_45956__$1 == null);
var state_46003__$1 = (function (){var statearr_46011 = state_46003;
(statearr_46011[(13)] = inst_45958__$1);

(statearr_46011[(14)] = inst_45957);

(statearr_46011[(7)] = inst_45956__$1);

return statearr_46011;
})();
if(cljs.core.truth_(inst_45958__$1)){
var statearr_46012_47152 = state_46003__$1;
(statearr_46012_47152[(1)] = (5));

} else {
var statearr_46013_47153 = state_46003__$1;
(statearr_46013_47153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (15))){
var inst_45977 = (state_46003[(15)]);
var inst_45948 = (state_46003[(16)]);
var inst_45977__$1 = cljs.core.empty_QMARK_(inst_45948);
var state_46003__$1 = (function (){var statearr_46014 = state_46003;
(statearr_46014[(15)] = inst_45977__$1);

return statearr_46014;
})();
if(inst_45977__$1){
var statearr_46015_47155 = state_46003__$1;
(statearr_46015_47155[(1)] = (17));

} else {
var statearr_46016_47156 = state_46003__$1;
(statearr_46016_47156[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (21))){
var inst_45947 = (state_46003[(12)]);
var inst_45944 = inst_45947;
var state_46003__$1 = (function (){var statearr_46017 = state_46003;
(statearr_46017[(9)] = inst_45944);

return statearr_46017;
})();
var statearr_46018_47161 = state_46003__$1;
(statearr_46018_47161[(2)] = null);

(statearr_46018_47161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (13))){
var inst_45970 = (state_46003[(2)]);
var inst_45971 = calc_state();
var inst_45944 = inst_45971;
var state_46003__$1 = (function (){var statearr_46019 = state_46003;
(statearr_46019[(17)] = inst_45970);

(statearr_46019[(9)] = inst_45944);

return statearr_46019;
})();
var statearr_46020_47162 = state_46003__$1;
(statearr_46020_47162[(2)] = null);

(statearr_46020_47162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (22))){
var inst_45997 = (state_46003[(2)]);
var state_46003__$1 = state_46003;
var statearr_46021_47163 = state_46003__$1;
(statearr_46021_47163[(2)] = inst_45997);

(statearr_46021_47163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (6))){
var inst_45957 = (state_46003[(14)]);
var inst_45961 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45957,change);
var state_46003__$1 = state_46003;
var statearr_46022_47164 = state_46003__$1;
(statearr_46022_47164[(2)] = inst_45961);

(statearr_46022_47164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (25))){
var state_46003__$1 = state_46003;
var statearr_46023_47165 = state_46003__$1;
(statearr_46023_47165[(2)] = null);

(statearr_46023_47165[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (17))){
var inst_45957 = (state_46003[(14)]);
var inst_45949 = (state_46003[(18)]);
var inst_45979 = (inst_45949.cljs$core$IFn$_invoke$arity$1 ? inst_45949.cljs$core$IFn$_invoke$arity$1(inst_45957) : inst_45949.call(null,inst_45957));
var inst_45980 = cljs.core.not(inst_45979);
var state_46003__$1 = state_46003;
var statearr_46024_47166 = state_46003__$1;
(statearr_46024_47166[(2)] = inst_45980);

(statearr_46024_47166[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (3))){
var inst_46001 = (state_46003[(2)]);
var state_46003__$1 = state_46003;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46003__$1,inst_46001);
} else {
if((state_val_46004 === (12))){
var state_46003__$1 = state_46003;
var statearr_46025_47167 = state_46003__$1;
(statearr_46025_47167[(2)] = null);

(statearr_46025_47167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (2))){
var inst_45947 = (state_46003[(12)]);
var inst_45944 = (state_46003[(9)]);
var inst_45947__$1 = cljs.core.__destructure_map(inst_45944);
var inst_45948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45947__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45947__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45947__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46003__$1 = (function (){var statearr_46026 = state_46003;
(statearr_46026[(12)] = inst_45947__$1);

(statearr_46026[(16)] = inst_45948);

(statearr_46026[(18)] = inst_45949);

return statearr_46026;
})();
return cljs.core.async.ioc_alts_BANG_(state_46003__$1,(4),inst_45950);
} else {
if((state_val_46004 === (23))){
var inst_45988 = (state_46003[(2)]);
var state_46003__$1 = state_46003;
if(cljs.core.truth_(inst_45988)){
var statearr_46027_47168 = state_46003__$1;
(statearr_46027_47168[(1)] = (24));

} else {
var statearr_46028_47169 = state_46003__$1;
(statearr_46028_47169[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (19))){
var inst_45983 = (state_46003[(2)]);
var state_46003__$1 = state_46003;
var statearr_46029_47170 = state_46003__$1;
(statearr_46029_47170[(2)] = inst_45983);

(statearr_46029_47170[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (11))){
var inst_45957 = (state_46003[(14)]);
var inst_45967 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45957);
var state_46003__$1 = state_46003;
var statearr_46030_47171 = state_46003__$1;
(statearr_46030_47171[(2)] = inst_45967);

(statearr_46030_47171[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (9))){
var inst_45957 = (state_46003[(14)]);
var inst_45948 = (state_46003[(16)]);
var inst_45974 = (state_46003[(19)]);
var inst_45974__$1 = (inst_45948.cljs$core$IFn$_invoke$arity$1 ? inst_45948.cljs$core$IFn$_invoke$arity$1(inst_45957) : inst_45948.call(null,inst_45957));
var state_46003__$1 = (function (){var statearr_46031 = state_46003;
(statearr_46031[(19)] = inst_45974__$1);

return statearr_46031;
})();
if(cljs.core.truth_(inst_45974__$1)){
var statearr_46032_47172 = state_46003__$1;
(statearr_46032_47172[(1)] = (14));

} else {
var statearr_46033_47173 = state_46003__$1;
(statearr_46033_47173[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (5))){
var inst_45958 = (state_46003[(13)]);
var state_46003__$1 = state_46003;
var statearr_46034_47174 = state_46003__$1;
(statearr_46034_47174[(2)] = inst_45958);

(statearr_46034_47174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (14))){
var inst_45974 = (state_46003[(19)]);
var state_46003__$1 = state_46003;
var statearr_46035_47175 = state_46003__$1;
(statearr_46035_47175[(2)] = inst_45974);

(statearr_46035_47175[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (26))){
var inst_45993 = (state_46003[(2)]);
var state_46003__$1 = state_46003;
var statearr_46036_47177 = state_46003__$1;
(statearr_46036_47177[(2)] = inst_45993);

(statearr_46036_47177[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (16))){
var inst_45985 = (state_46003[(2)]);
var state_46003__$1 = state_46003;
if(cljs.core.truth_(inst_45985)){
var statearr_46037_47179 = state_46003__$1;
(statearr_46037_47179[(1)] = (20));

} else {
var statearr_46038_47180 = state_46003__$1;
(statearr_46038_47180[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (10))){
var inst_45999 = (state_46003[(2)]);
var state_46003__$1 = state_46003;
var statearr_46039_47181 = state_46003__$1;
(statearr_46039_47181[(2)] = inst_45999);

(statearr_46039_47181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (18))){
var inst_45977 = (state_46003[(15)]);
var state_46003__$1 = state_46003;
var statearr_46040_47182 = state_46003__$1;
(statearr_46040_47182[(2)] = inst_45977);

(statearr_46040_47182[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (8))){
var inst_45956 = (state_46003[(7)]);
var inst_45965 = (inst_45956 == null);
var state_46003__$1 = state_46003;
if(cljs.core.truth_(inst_45965)){
var statearr_46041_47183 = state_46003__$1;
(statearr_46041_47183[(1)] = (11));

} else {
var statearr_46042_47184 = state_46003__$1;
(statearr_46042_47184[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__44794__auto__ = null;
var cljs$core$async$mix_$_state_machine__44794__auto____0 = (function (){
var statearr_46043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46043[(0)] = cljs$core$async$mix_$_state_machine__44794__auto__);

(statearr_46043[(1)] = (1));

return statearr_46043;
});
var cljs$core$async$mix_$_state_machine__44794__auto____1 = (function (state_46003){
while(true){
var ret_value__44795__auto__ = (function (){try{while(true){
var result__44796__auto__ = switch__44793__auto__(state_46003);
if(cljs.core.keyword_identical_QMARK_(result__44796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44796__auto__;
}
break;
}
}catch (e46044){var ex__44797__auto__ = e46044;
var statearr_46045_47185 = state_46003;
(statearr_46045_47185[(2)] = ex__44797__auto__);


if(cljs.core.seq((state_46003[(4)]))){
var statearr_46046_47186 = state_46003;
(statearr_46046_47186[(1)] = cljs.core.first((state_46003[(4)])));

} else {
throw ex__44797__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47188 = state_46003;
state_46003 = G__47188;
continue;
} else {
return ret_value__44795__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44794__auto__ = function(state_46003){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44794__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44794__auto____1.call(this,state_46003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44794__auto____0;
cljs$core$async$mix_$_state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44794__auto____1;
return cljs$core$async$mix_$_state_machine__44794__auto__;
})()
})();
var state__44989__auto__ = (function (){var statearr_46047 = f__44988__auto__();
(statearr_46047[(6)] = c__44987__auto___47147);

return statearr_46047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44989__auto__);
}));


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

var cljs$core$async$Pub$sub_STAR_$dyn_47190 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_47190(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_47191 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_47191(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_47192 = (function() {
var G__47193 = null;
var G__47193__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__47193__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__47193 = function(p,v){
switch(arguments.length){
case 1:
return G__47193__1.call(this,p);
case 2:
return G__47193__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47193.cljs$core$IFn$_invoke$arity$1 = G__47193__1;
G__47193.cljs$core$IFn$_invoke$arity$2 = G__47193__2;
return G__47193;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46049 = arguments.length;
switch (G__46049) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47192(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47192(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__46052 = arguments.length;
switch (G__46052) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46050_SHARP_){
if(cljs.core.truth_((p1__46050_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46050_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46050_SHARP_.call(null,topic)))){
return p1__46050_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46050_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46053 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46053 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46054){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46054 = meta46054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46055,meta46054__$1){
var self__ = this;
var _46055__$1 = this;
return (new cljs.core.async.t_cljs$core$async46053(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46054__$1));
}));

(cljs.core.async.t_cljs$core$async46053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46055){
var self__ = this;
var _46055__$1 = this;
return self__.meta46054;
}));

(cljs.core.async.t_cljs$core$async46053.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46053.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46053.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46053.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46053.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async46053.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46053.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46053.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46054","meta46054",-483305714,null)], null);
}));

(cljs.core.async.t_cljs$core$async46053.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46053.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46053");

(cljs.core.async.t_cljs$core$async46053.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46053");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46053.
 */
cljs.core.async.__GT_t_cljs$core$async46053 = (function cljs$core$async$__GT_t_cljs$core$async46053(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46054){
return (new cljs.core.async.t_cljs$core$async46053(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46054));
});

}

return (new cljs.core.async.t_cljs$core$async46053(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44987__auto___47198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44988__auto__ = (function (){var switch__44793__auto__ = (function (state_46127){
var state_val_46128 = (state_46127[(1)]);
if((state_val_46128 === (7))){
var inst_46123 = (state_46127[(2)]);
var state_46127__$1 = state_46127;
var statearr_46129_47199 = state_46127__$1;
(statearr_46129_47199[(2)] = inst_46123);

(statearr_46129_47199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46128 === (20))){
var state_46127__$1 = state_46127;
var statearr_46130_47200 = state_46127__$1;
(statearr_46130_47200[(2)] = null);

(statearr_46130_47200[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46128 === (1))){
var state_46127__$1 = state_46127;
var statearr_46131_47201 = state_46127__$1;
(statearr_46131_47201[(2)] = null);

(statearr_46131_47201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46128 === (24))){
var inst_46106 = (state_46127[(7)]);
var inst_46115 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46106);
var state_46127__$1 = state_46127;
var statearr_46132_47202 = state_46127__$1;
(statearr_46132_47202[(2)] = inst_46115);

(statearr_46132_47202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46128 === (4))){
var inst_46058 = (state_46127[(8)]);
var inst_46058__$1 = (state_46127[(2)]);
var inst_46059 = (inst_46058__$1 == null);
var state_46127__$1 = (function (){var statearr_46133 = state_46127;
(statearr_46133[(8)] = inst_46058__$1);

return statearr_46133;
})();
if(cljs.core.truth_(inst_46059)){
var statearr_46134_47204 = state_46127__$1;
(statearr_46134_47204[(1)] = (5));

} else {
var statearr_46135_47205 = state_46127__$1;
(statearr_46135_47205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46128 === (15))){
var inst_46100 = (state_46127[(2)]);
var state_46127__$1 = state_46127;
var statearr_46136_47206 = state_46127__$1;
(statearr_46136_47206[(2)] = inst_46100);

(statearr_46136_47206[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46128 === (21))){
var inst_46120 = (state_46127[(2)]);
var state_46127__$1 = (function (){var statearr_46137 = state_46127;
(statearr_46137[(9)] = inst_46120);

return statearr_46137;
})();
var statearr_46138_47207 = state_46127__$1;
(statearr_46138_47207[(2)] = null);

(statearr_46138_47207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46128 === (13))){
var inst_46082 = (state_46127[(10)]);
var inst_46084 = cljs.core.chunked_seq_QMARK_(inst_46082);
var state_46127__$1 = state_46127;
if(inst_46084){
var statearr_46139_47208 = state_46127__$1;
(statearr_46139_47208[(1)] = (16));

} else {
var statearr_46140_47209 = state_46127__$1;
(statearr_46140_47209[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46128 === (22))){
var inst_46112 = (state_46127[(2)]);
var state_46127__$1 = state_46127;
if(cljs.core.truth_(inst_46112)){
var statearr_46141_47210 = state_46127__$1;
(statearr_46141_47210[(1)] = (23));

} else {
var statearr_46142_47211 = state_46127__$1;
(statearr_46142_47211[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46128 === (6))){
var inst_46058 = (state_46127[(8)]);
var inst_46106 = (state_46127[(7)]);
var inst_46108 = (state_46127[(11)]);
var inst_46106__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46058) : topic_fn.call(null,inst_46058));
var inst_46107 = cljs.core.deref(mults);
var inst_46108__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46107,inst_46106__$1);
var state_46127__$1 = (function (){var statearr_46143 = state_46127;
(statearr_46143[(7)] = inst_46106__$1);

(statearr_46143[(11)] = inst_46108__$1);

return statearr_46143;
})();
if(cljs.core.truth_(inst_46108__$1)){
var statearr_46144_47212 = state_46127__$1;
(statearr_46144_47212[(1)] = (19));

} else {
var statearr_46145_47213 = state_46127__$1;
(statearr_46145_47213[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46128 === (25))){
var inst_46117 = (state_46127[(2)]);
var state_46127__$1 = state_46127;
var statearr_46146_47214 = state_46127__$1;
(statearr_46146_47214[(2)] = inst_46117);

(statearr_46146_47214[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46128 === (17))){
var inst_46082 = (state_46127[(10)]);
var inst_46091 = cljs.core.first(inst_46082);
var inst_46092 = cljs.core.async.muxch_STAR_(inst_46091);
var inst_46093 = cljs.core.async.close_BANG_(inst_46092);
var inst_46094 = cljs.core.next(inst_46082);
var inst_46068 = inst_46094;
var inst_46069 = null;
var inst_46070 = (0);
var inst_46071 = (0);
var state_46127__$1 = (function (){var statearr_46147 = state_46127;
(statearr_46147[(12)] = inst_46068);

(statearr_46147[(13)] = inst_46093);

(statearr_46147[(14)] = inst_46071);

(statearr_46147[(15)] = inst_46069);

(statearr_46147[(16)] = inst_46070);

return statearr_46147;
})();
var statearr_46148_47215 = state_46127__$1;
(statearr_46148_47215[(2)] = null);

(statearr_46148_47215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46128 === (3))){
var inst_46125 = (state_46127[(2)]);
var state_46127__$1 = state_46127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46127__$1,inst_46125);
} else {
if((state_val_46128 === (12))){
var inst_46102 = (state_46127[(2)]);
var state_46127__$1 = state_46127;
var statearr_46149_47216 = state_46127__$1;
(statearr_46149_47216[(2)] = inst_46102);

(statearr_46149_47216[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46128 === (2))){
var state_46127__$1 = state_46127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46127__$1,(4),ch);
} else {
if((state_val_46128 === (23))){
var state_46127__$1 = state_46127;
var statearr_46150_47217 = state_46127__$1;
(statearr_46150_47217[(2)] = null);

(statearr_46150_47217[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46128 === (19))){
var inst_46058 = (state_46127[(8)]);
var inst_46108 = (state_46127[(11)]);
var inst_46110 = cljs.core.async.muxch_STAR_(inst_46108);
var state_46127__$1 = state_46127;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46127__$1,(22),inst_46110,inst_46058);
} else {
if((state_val_46128 === (11))){
var inst_46068 = (state_46127[(12)]);
var inst_46082 = (state_46127[(10)]);
var inst_46082__$1 = cljs.core.seq(inst_46068);
var state_46127__$1 = (function (){var statearr_46151 = state_46127;
(statearr_46151[(10)] = inst_46082__$1);

return statearr_46151;
})();
if(inst_46082__$1){
var statearr_46152_47218 = state_46127__$1;
(statearr_46152_47218[(1)] = (13));

} else {
var statearr_46153_47219 = state_46127__$1;
(statearr_46153_47219[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46128 === (9))){
var inst_46104 = (state_46127[(2)]);
var state_46127__$1 = state_46127;
var statearr_46154_47220 = state_46127__$1;
(statearr_46154_47220[(2)] = inst_46104);

(statearr_46154_47220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46128 === (5))){
var inst_46065 = cljs.core.deref(mults);
var inst_46066 = cljs.core.vals(inst_46065);
var inst_46067 = cljs.core.seq(inst_46066);
var inst_46068 = inst_46067;
var inst_46069 = null;
var inst_46070 = (0);
var inst_46071 = (0);
var state_46127__$1 = (function (){var statearr_46155 = state_46127;
(statearr_46155[(12)] = inst_46068);

(statearr_46155[(14)] = inst_46071);

(statearr_46155[(15)] = inst_46069);

(statearr_46155[(16)] = inst_46070);

return statearr_46155;
})();
var statearr_46156_47221 = state_46127__$1;
(statearr_46156_47221[(2)] = null);

(statearr_46156_47221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46128 === (14))){
var state_46127__$1 = state_46127;
var statearr_46160_47226 = state_46127__$1;
(statearr_46160_47226[(2)] = null);

(statearr_46160_47226[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46128 === (16))){
var inst_46082 = (state_46127[(10)]);
var inst_46086 = cljs.core.chunk_first(inst_46082);
var inst_46087 = cljs.core.chunk_rest(inst_46082);
var inst_46088 = cljs.core.count(inst_46086);
var inst_46068 = inst_46087;
var inst_46069 = inst_46086;
var inst_46070 = inst_46088;
var inst_46071 = (0);
var state_46127__$1 = (function (){var statearr_46161 = state_46127;
(statearr_46161[(12)] = inst_46068);

(statearr_46161[(14)] = inst_46071);

(statearr_46161[(15)] = inst_46069);

(statearr_46161[(16)] = inst_46070);

return statearr_46161;
})();
var statearr_46162_47227 = state_46127__$1;
(statearr_46162_47227[(2)] = null);

(statearr_46162_47227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46128 === (10))){
var inst_46068 = (state_46127[(12)]);
var inst_46071 = (state_46127[(14)]);
var inst_46069 = (state_46127[(15)]);
var inst_46070 = (state_46127[(16)]);
var inst_46076 = cljs.core._nth(inst_46069,inst_46071);
var inst_46077 = cljs.core.async.muxch_STAR_(inst_46076);
var inst_46078 = cljs.core.async.close_BANG_(inst_46077);
var inst_46079 = (inst_46071 + (1));
var tmp46157 = inst_46068;
var tmp46158 = inst_46069;
var tmp46159 = inst_46070;
var inst_46068__$1 = tmp46157;
var inst_46069__$1 = tmp46158;
var inst_46070__$1 = tmp46159;
var inst_46071__$1 = inst_46079;
var state_46127__$1 = (function (){var statearr_46163 = state_46127;
(statearr_46163[(12)] = inst_46068__$1);

(statearr_46163[(14)] = inst_46071__$1);

(statearr_46163[(17)] = inst_46078);

(statearr_46163[(15)] = inst_46069__$1);

(statearr_46163[(16)] = inst_46070__$1);

return statearr_46163;
})();
var statearr_46164_47228 = state_46127__$1;
(statearr_46164_47228[(2)] = null);

(statearr_46164_47228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46128 === (18))){
var inst_46097 = (state_46127[(2)]);
var state_46127__$1 = state_46127;
var statearr_46165_47229 = state_46127__$1;
(statearr_46165_47229[(2)] = inst_46097);

(statearr_46165_47229[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46128 === (8))){
var inst_46071 = (state_46127[(14)]);
var inst_46070 = (state_46127[(16)]);
var inst_46073 = (inst_46071 < inst_46070);
var inst_46074 = inst_46073;
var state_46127__$1 = state_46127;
if(cljs.core.truth_(inst_46074)){
var statearr_46166_47230 = state_46127__$1;
(statearr_46166_47230[(1)] = (10));

} else {
var statearr_46167_47231 = state_46127__$1;
(statearr_46167_47231[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__44794__auto__ = null;
var cljs$core$async$state_machine__44794__auto____0 = (function (){
var statearr_46168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46168[(0)] = cljs$core$async$state_machine__44794__auto__);

(statearr_46168[(1)] = (1));

return statearr_46168;
});
var cljs$core$async$state_machine__44794__auto____1 = (function (state_46127){
while(true){
var ret_value__44795__auto__ = (function (){try{while(true){
var result__44796__auto__ = switch__44793__auto__(state_46127);
if(cljs.core.keyword_identical_QMARK_(result__44796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44796__auto__;
}
break;
}
}catch (e46169){var ex__44797__auto__ = e46169;
var statearr_46170_47232 = state_46127;
(statearr_46170_47232[(2)] = ex__44797__auto__);


if(cljs.core.seq((state_46127[(4)]))){
var statearr_46175_47233 = state_46127;
(statearr_46175_47233[(1)] = cljs.core.first((state_46127[(4)])));

} else {
throw ex__44797__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47234 = state_46127;
state_46127 = G__47234;
continue;
} else {
return ret_value__44795__auto__;
}
break;
}
});
cljs$core$async$state_machine__44794__auto__ = function(state_46127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44794__auto____1.call(this,state_46127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44794__auto____0;
cljs$core$async$state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44794__auto____1;
return cljs$core$async$state_machine__44794__auto__;
})()
})();
var state__44989__auto__ = (function (){var statearr_46176 = f__44988__auto__();
(statearr_46176[(6)] = c__44987__auto___47198);

return statearr_46176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44989__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__46178 = arguments.length;
switch (G__46178) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__46180 = arguments.length;
switch (G__46180) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__46185 = arguments.length;
switch (G__46185) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__44987__auto___47245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44988__auto__ = (function (){var switch__44793__auto__ = (function (state_46230){
var state_val_46231 = (state_46230[(1)]);
if((state_val_46231 === (7))){
var state_46230__$1 = state_46230;
var statearr_46232_47246 = state_46230__$1;
(statearr_46232_47246[(2)] = null);

(statearr_46232_47246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46231 === (1))){
var state_46230__$1 = state_46230;
var statearr_46233_47247 = state_46230__$1;
(statearr_46233_47247[(2)] = null);

(statearr_46233_47247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46231 === (4))){
var inst_46191 = (state_46230[(7)]);
var inst_46190 = (state_46230[(8)]);
var inst_46193 = (inst_46191 < inst_46190);
var state_46230__$1 = state_46230;
if(cljs.core.truth_(inst_46193)){
var statearr_46234_47251 = state_46230__$1;
(statearr_46234_47251[(1)] = (6));

} else {
var statearr_46235_47252 = state_46230__$1;
(statearr_46235_47252[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46231 === (15))){
var inst_46216 = (state_46230[(9)]);
var inst_46221 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46216);
var state_46230__$1 = state_46230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46230__$1,(17),out,inst_46221);
} else {
if((state_val_46231 === (13))){
var inst_46216 = (state_46230[(9)]);
var inst_46216__$1 = (state_46230[(2)]);
var inst_46217 = cljs.core.some(cljs.core.nil_QMARK_,inst_46216__$1);
var state_46230__$1 = (function (){var statearr_46236 = state_46230;
(statearr_46236[(9)] = inst_46216__$1);

return statearr_46236;
})();
if(cljs.core.truth_(inst_46217)){
var statearr_46237_47256 = state_46230__$1;
(statearr_46237_47256[(1)] = (14));

} else {
var statearr_46238_47257 = state_46230__$1;
(statearr_46238_47257[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46231 === (6))){
var state_46230__$1 = state_46230;
var statearr_46239_47258 = state_46230__$1;
(statearr_46239_47258[(2)] = null);

(statearr_46239_47258[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46231 === (17))){
var inst_46223 = (state_46230[(2)]);
var state_46230__$1 = (function (){var statearr_46241 = state_46230;
(statearr_46241[(10)] = inst_46223);

return statearr_46241;
})();
var statearr_46242_47259 = state_46230__$1;
(statearr_46242_47259[(2)] = null);

(statearr_46242_47259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46231 === (3))){
var inst_46228 = (state_46230[(2)]);
var state_46230__$1 = state_46230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46230__$1,inst_46228);
} else {
if((state_val_46231 === (12))){
var _ = (function (){var statearr_46243 = state_46230;
(statearr_46243[(4)] = cljs.core.rest((state_46230[(4)])));

return statearr_46243;
})();
var state_46230__$1 = state_46230;
var ex46240 = (state_46230__$1[(2)]);
var statearr_46244_47260 = state_46230__$1;
(statearr_46244_47260[(5)] = ex46240);


if((ex46240 instanceof Object)){
var statearr_46245_47261 = state_46230__$1;
(statearr_46245_47261[(1)] = (11));

(statearr_46245_47261[(5)] = null);

} else {
throw ex46240;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46231 === (2))){
var inst_46189 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46190 = cnt;
var inst_46191 = (0);
var state_46230__$1 = (function (){var statearr_46246 = state_46230;
(statearr_46246[(11)] = inst_46189);

(statearr_46246[(7)] = inst_46191);

(statearr_46246[(8)] = inst_46190);

return statearr_46246;
})();
var statearr_46248_47271 = state_46230__$1;
(statearr_46248_47271[(2)] = null);

(statearr_46248_47271[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46231 === (11))){
var inst_46195 = (state_46230[(2)]);
var inst_46196 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46230__$1 = (function (){var statearr_46249 = state_46230;
(statearr_46249[(12)] = inst_46195);

return statearr_46249;
})();
var statearr_46250_47272 = state_46230__$1;
(statearr_46250_47272[(2)] = inst_46196);

(statearr_46250_47272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46231 === (9))){
var inst_46191 = (state_46230[(7)]);
var _ = (function (){var statearr_46252 = state_46230;
(statearr_46252[(4)] = cljs.core.cons((12),(state_46230[(4)])));

return statearr_46252;
})();
var inst_46202 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46191) : chs__$1.call(null,inst_46191));
var inst_46203 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46191) : done.call(null,inst_46191));
var inst_46204 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46202,inst_46203);
var ___$1 = (function (){var statearr_46254 = state_46230;
(statearr_46254[(4)] = cljs.core.rest((state_46230[(4)])));

return statearr_46254;
})();
var state_46230__$1 = state_46230;
var statearr_46255_47273 = state_46230__$1;
(statearr_46255_47273[(2)] = inst_46204);

(statearr_46255_47273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46231 === (5))){
var inst_46214 = (state_46230[(2)]);
var state_46230__$1 = (function (){var statearr_46256 = state_46230;
(statearr_46256[(13)] = inst_46214);

return statearr_46256;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46230__$1,(13),dchan);
} else {
if((state_val_46231 === (14))){
var inst_46219 = cljs.core.async.close_BANG_(out);
var state_46230__$1 = state_46230;
var statearr_46257_47274 = state_46230__$1;
(statearr_46257_47274[(2)] = inst_46219);

(statearr_46257_47274[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46231 === (16))){
var inst_46226 = (state_46230[(2)]);
var state_46230__$1 = state_46230;
var statearr_46258_47275 = state_46230__$1;
(statearr_46258_47275[(2)] = inst_46226);

(statearr_46258_47275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46231 === (10))){
var inst_46191 = (state_46230[(7)]);
var inst_46207 = (state_46230[(2)]);
var inst_46208 = (inst_46191 + (1));
var inst_46191__$1 = inst_46208;
var state_46230__$1 = (function (){var statearr_46259 = state_46230;
(statearr_46259[(7)] = inst_46191__$1);

(statearr_46259[(14)] = inst_46207);

return statearr_46259;
})();
var statearr_46260_47276 = state_46230__$1;
(statearr_46260_47276[(2)] = null);

(statearr_46260_47276[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46231 === (8))){
var inst_46212 = (state_46230[(2)]);
var state_46230__$1 = state_46230;
var statearr_46261_47277 = state_46230__$1;
(statearr_46261_47277[(2)] = inst_46212);

(statearr_46261_47277[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__44794__auto__ = null;
var cljs$core$async$state_machine__44794__auto____0 = (function (){
var statearr_46262 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46262[(0)] = cljs$core$async$state_machine__44794__auto__);

(statearr_46262[(1)] = (1));

return statearr_46262;
});
var cljs$core$async$state_machine__44794__auto____1 = (function (state_46230){
while(true){
var ret_value__44795__auto__ = (function (){try{while(true){
var result__44796__auto__ = switch__44793__auto__(state_46230);
if(cljs.core.keyword_identical_QMARK_(result__44796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44796__auto__;
}
break;
}
}catch (e46263){var ex__44797__auto__ = e46263;
var statearr_46264_47278 = state_46230;
(statearr_46264_47278[(2)] = ex__44797__auto__);


if(cljs.core.seq((state_46230[(4)]))){
var statearr_46265_47279 = state_46230;
(statearr_46265_47279[(1)] = cljs.core.first((state_46230[(4)])));

} else {
throw ex__44797__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47280 = state_46230;
state_46230 = G__47280;
continue;
} else {
return ret_value__44795__auto__;
}
break;
}
});
cljs$core$async$state_machine__44794__auto__ = function(state_46230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44794__auto____1.call(this,state_46230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44794__auto____0;
cljs$core$async$state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44794__auto____1;
return cljs$core$async$state_machine__44794__auto__;
})()
})();
var state__44989__auto__ = (function (){var statearr_46267 = f__44988__auto__();
(statearr_46267[(6)] = c__44987__auto___47245);

return statearr_46267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44989__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46272 = arguments.length;
switch (G__46272) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44987__auto___47282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44988__auto__ = (function (){var switch__44793__auto__ = (function (state_46304){
var state_val_46305 = (state_46304[(1)]);
if((state_val_46305 === (7))){
var inst_46284 = (state_46304[(7)]);
var inst_46283 = (state_46304[(8)]);
var inst_46283__$1 = (state_46304[(2)]);
var inst_46284__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46283__$1,(0),null);
var inst_46285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46283__$1,(1),null);
var inst_46286 = (inst_46284__$1 == null);
var state_46304__$1 = (function (){var statearr_46306 = state_46304;
(statearr_46306[(7)] = inst_46284__$1);

(statearr_46306[(8)] = inst_46283__$1);

(statearr_46306[(9)] = inst_46285);

return statearr_46306;
})();
if(cljs.core.truth_(inst_46286)){
var statearr_46308_47283 = state_46304__$1;
(statearr_46308_47283[(1)] = (8));

} else {
var statearr_46309_47284 = state_46304__$1;
(statearr_46309_47284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46305 === (1))){
var inst_46273 = cljs.core.vec(chs);
var inst_46274 = inst_46273;
var state_46304__$1 = (function (){var statearr_46310 = state_46304;
(statearr_46310[(10)] = inst_46274);

return statearr_46310;
})();
var statearr_46311_47285 = state_46304__$1;
(statearr_46311_47285[(2)] = null);

(statearr_46311_47285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46305 === (4))){
var inst_46274 = (state_46304[(10)]);
var state_46304__$1 = state_46304;
return cljs.core.async.ioc_alts_BANG_(state_46304__$1,(7),inst_46274);
} else {
if((state_val_46305 === (6))){
var inst_46300 = (state_46304[(2)]);
var state_46304__$1 = state_46304;
var statearr_46313_47286 = state_46304__$1;
(statearr_46313_47286[(2)] = inst_46300);

(statearr_46313_47286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46305 === (3))){
var inst_46302 = (state_46304[(2)]);
var state_46304__$1 = state_46304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46304__$1,inst_46302);
} else {
if((state_val_46305 === (2))){
var inst_46274 = (state_46304[(10)]);
var inst_46276 = cljs.core.count(inst_46274);
var inst_46277 = (inst_46276 > (0));
var state_46304__$1 = state_46304;
if(cljs.core.truth_(inst_46277)){
var statearr_46316_47287 = state_46304__$1;
(statearr_46316_47287[(1)] = (4));

} else {
var statearr_46317_47288 = state_46304__$1;
(statearr_46317_47288[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46305 === (11))){
var inst_46274 = (state_46304[(10)]);
var inst_46293 = (state_46304[(2)]);
var tmp46314 = inst_46274;
var inst_46274__$1 = tmp46314;
var state_46304__$1 = (function (){var statearr_46318 = state_46304;
(statearr_46318[(10)] = inst_46274__$1);

(statearr_46318[(11)] = inst_46293);

return statearr_46318;
})();
var statearr_46319_47289 = state_46304__$1;
(statearr_46319_47289[(2)] = null);

(statearr_46319_47289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46305 === (9))){
var inst_46284 = (state_46304[(7)]);
var state_46304__$1 = state_46304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46304__$1,(11),out,inst_46284);
} else {
if((state_val_46305 === (5))){
var inst_46298 = cljs.core.async.close_BANG_(out);
var state_46304__$1 = state_46304;
var statearr_46320_47290 = state_46304__$1;
(statearr_46320_47290[(2)] = inst_46298);

(statearr_46320_47290[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46305 === (10))){
var inst_46296 = (state_46304[(2)]);
var state_46304__$1 = state_46304;
var statearr_46321_47291 = state_46304__$1;
(statearr_46321_47291[(2)] = inst_46296);

(statearr_46321_47291[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46305 === (8))){
var inst_46284 = (state_46304[(7)]);
var inst_46283 = (state_46304[(8)]);
var inst_46274 = (state_46304[(10)]);
var inst_46285 = (state_46304[(9)]);
var inst_46288 = (function (){var cs = inst_46274;
var vec__46279 = inst_46283;
var v = inst_46284;
var c = inst_46285;
return (function (p1__46270_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46270_SHARP_);
});
})();
var inst_46289 = cljs.core.filterv(inst_46288,inst_46274);
var inst_46274__$1 = inst_46289;
var state_46304__$1 = (function (){var statearr_46322 = state_46304;
(statearr_46322[(10)] = inst_46274__$1);

return statearr_46322;
})();
var statearr_46323_47292 = state_46304__$1;
(statearr_46323_47292[(2)] = null);

(statearr_46323_47292[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__44794__auto__ = null;
var cljs$core$async$state_machine__44794__auto____0 = (function (){
var statearr_46324 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46324[(0)] = cljs$core$async$state_machine__44794__auto__);

(statearr_46324[(1)] = (1));

return statearr_46324;
});
var cljs$core$async$state_machine__44794__auto____1 = (function (state_46304){
while(true){
var ret_value__44795__auto__ = (function (){try{while(true){
var result__44796__auto__ = switch__44793__auto__(state_46304);
if(cljs.core.keyword_identical_QMARK_(result__44796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44796__auto__;
}
break;
}
}catch (e46326){var ex__44797__auto__ = e46326;
var statearr_46327_47293 = state_46304;
(statearr_46327_47293[(2)] = ex__44797__auto__);


if(cljs.core.seq((state_46304[(4)]))){
var statearr_46328_47294 = state_46304;
(statearr_46328_47294[(1)] = cljs.core.first((state_46304[(4)])));

} else {
throw ex__44797__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47295 = state_46304;
state_46304 = G__47295;
continue;
} else {
return ret_value__44795__auto__;
}
break;
}
});
cljs$core$async$state_machine__44794__auto__ = function(state_46304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44794__auto____1.call(this,state_46304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44794__auto____0;
cljs$core$async$state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44794__auto____1;
return cljs$core$async$state_machine__44794__auto__;
})()
})();
var state__44989__auto__ = (function (){var statearr_46329 = f__44988__auto__();
(statearr_46329[(6)] = c__44987__auto___47282);

return statearr_46329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44989__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

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
var G__46331 = arguments.length;
switch (G__46331) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44987__auto___47297 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44988__auto__ = (function (){var switch__44793__auto__ = (function (state_46355){
var state_val_46356 = (state_46355[(1)]);
if((state_val_46356 === (7))){
var inst_46337 = (state_46355[(7)]);
var inst_46337__$1 = (state_46355[(2)]);
var inst_46338 = (inst_46337__$1 == null);
var inst_46339 = cljs.core.not(inst_46338);
var state_46355__$1 = (function (){var statearr_46357 = state_46355;
(statearr_46357[(7)] = inst_46337__$1);

return statearr_46357;
})();
if(inst_46339){
var statearr_46358_47298 = state_46355__$1;
(statearr_46358_47298[(1)] = (8));

} else {
var statearr_46359_47299 = state_46355__$1;
(statearr_46359_47299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46356 === (1))){
var inst_46332 = (0);
var state_46355__$1 = (function (){var statearr_46360 = state_46355;
(statearr_46360[(8)] = inst_46332);

return statearr_46360;
})();
var statearr_46361_47300 = state_46355__$1;
(statearr_46361_47300[(2)] = null);

(statearr_46361_47300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46356 === (4))){
var state_46355__$1 = state_46355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46355__$1,(7),ch);
} else {
if((state_val_46356 === (6))){
var inst_46350 = (state_46355[(2)]);
var state_46355__$1 = state_46355;
var statearr_46362_47301 = state_46355__$1;
(statearr_46362_47301[(2)] = inst_46350);

(statearr_46362_47301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46356 === (3))){
var inst_46352 = (state_46355[(2)]);
var inst_46353 = cljs.core.async.close_BANG_(out);
var state_46355__$1 = (function (){var statearr_46363 = state_46355;
(statearr_46363[(9)] = inst_46352);

return statearr_46363;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46355__$1,inst_46353);
} else {
if((state_val_46356 === (2))){
var inst_46332 = (state_46355[(8)]);
var inst_46334 = (inst_46332 < n);
var state_46355__$1 = state_46355;
if(cljs.core.truth_(inst_46334)){
var statearr_46364_47302 = state_46355__$1;
(statearr_46364_47302[(1)] = (4));

} else {
var statearr_46365_47303 = state_46355__$1;
(statearr_46365_47303[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46356 === (11))){
var inst_46332 = (state_46355[(8)]);
var inst_46342 = (state_46355[(2)]);
var inst_46343 = (inst_46332 + (1));
var inst_46332__$1 = inst_46343;
var state_46355__$1 = (function (){var statearr_46366 = state_46355;
(statearr_46366[(10)] = inst_46342);

(statearr_46366[(8)] = inst_46332__$1);

return statearr_46366;
})();
var statearr_46367_47304 = state_46355__$1;
(statearr_46367_47304[(2)] = null);

(statearr_46367_47304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46356 === (9))){
var state_46355__$1 = state_46355;
var statearr_46368_47305 = state_46355__$1;
(statearr_46368_47305[(2)] = null);

(statearr_46368_47305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46356 === (5))){
var state_46355__$1 = state_46355;
var statearr_46369_47306 = state_46355__$1;
(statearr_46369_47306[(2)] = null);

(statearr_46369_47306[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46356 === (10))){
var inst_46347 = (state_46355[(2)]);
var state_46355__$1 = state_46355;
var statearr_46370_47307 = state_46355__$1;
(statearr_46370_47307[(2)] = inst_46347);

(statearr_46370_47307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46356 === (8))){
var inst_46337 = (state_46355[(7)]);
var state_46355__$1 = state_46355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46355__$1,(11),out,inst_46337);
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
});
return (function() {
var cljs$core$async$state_machine__44794__auto__ = null;
var cljs$core$async$state_machine__44794__auto____0 = (function (){
var statearr_46371 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46371[(0)] = cljs$core$async$state_machine__44794__auto__);

(statearr_46371[(1)] = (1));

return statearr_46371;
});
var cljs$core$async$state_machine__44794__auto____1 = (function (state_46355){
while(true){
var ret_value__44795__auto__ = (function (){try{while(true){
var result__44796__auto__ = switch__44793__auto__(state_46355);
if(cljs.core.keyword_identical_QMARK_(result__44796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44796__auto__;
}
break;
}
}catch (e46372){var ex__44797__auto__ = e46372;
var statearr_46373_47308 = state_46355;
(statearr_46373_47308[(2)] = ex__44797__auto__);


if(cljs.core.seq((state_46355[(4)]))){
var statearr_46374_47309 = state_46355;
(statearr_46374_47309[(1)] = cljs.core.first((state_46355[(4)])));

} else {
throw ex__44797__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47310 = state_46355;
state_46355 = G__47310;
continue;
} else {
return ret_value__44795__auto__;
}
break;
}
});
cljs$core$async$state_machine__44794__auto__ = function(state_46355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44794__auto____1.call(this,state_46355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44794__auto____0;
cljs$core$async$state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44794__auto____1;
return cljs$core$async$state_machine__44794__auto__;
})()
})();
var state__44989__auto__ = (function (){var statearr_46375 = f__44988__auto__();
(statearr_46375[(6)] = c__44987__auto___47297);

return statearr_46375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44989__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46377 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46377 = (function (f,ch,meta46378){
this.f = f;
this.ch = ch;
this.meta46378 = meta46378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46379,meta46378__$1){
var self__ = this;
var _46379__$1 = this;
return (new cljs.core.async.t_cljs$core$async46377(self__.f,self__.ch,meta46378__$1));
}));

(cljs.core.async.t_cljs$core$async46377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46379){
var self__ = this;
var _46379__$1 = this;
return self__.meta46378;
}));

(cljs.core.async.t_cljs$core$async46377.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46377.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46377.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46377.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46377.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46380 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46380 = (function (f,ch,meta46378,_,fn1,meta46381){
this.f = f;
this.ch = ch;
this.meta46378 = meta46378;
this._ = _;
this.fn1 = fn1;
this.meta46381 = meta46381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46382,meta46381__$1){
var self__ = this;
var _46382__$1 = this;
return (new cljs.core.async.t_cljs$core$async46380(self__.f,self__.ch,self__.meta46378,self__._,self__.fn1,meta46381__$1));
}));

(cljs.core.async.t_cljs$core$async46380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46382){
var self__ = this;
var _46382__$1 = this;
return self__.meta46381;
}));

(cljs.core.async.t_cljs$core$async46380.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46380.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46380.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46380.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46376_SHARP_){
var G__46383 = (((p1__46376_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46376_SHARP_) : self__.f.call(null,p1__46376_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46383) : f1.call(null,G__46383));
});
}));

(cljs.core.async.t_cljs$core$async46380.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46378","meta46378",833057601,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46377","cljs.core.async/t_cljs$core$async46377",-1507021445,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46381","meta46381",-1047861328,null)], null);
}));

(cljs.core.async.t_cljs$core$async46380.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46380");

(cljs.core.async.t_cljs$core$async46380.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46380");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46380.
 */
cljs.core.async.__GT_t_cljs$core$async46380 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46380(f__$1,ch__$1,meta46378__$1,___$2,fn1__$1,meta46381){
return (new cljs.core.async.t_cljs$core$async46380(f__$1,ch__$1,meta46378__$1,___$2,fn1__$1,meta46381));
});

}

return (new cljs.core.async.t_cljs$core$async46380(self__.f,self__.ch,self__.meta46378,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46389 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46389) : self__.f.call(null,G__46389));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46377.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46377.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46378","meta46378",833057601,null)], null);
}));

(cljs.core.async.t_cljs$core$async46377.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46377");

(cljs.core.async.t_cljs$core$async46377.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46377");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46377.
 */
cljs.core.async.__GT_t_cljs$core$async46377 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46377(f__$1,ch__$1,meta46378){
return (new cljs.core.async.t_cljs$core$async46377(f__$1,ch__$1,meta46378));
});

}

return (new cljs.core.async.t_cljs$core$async46377(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46403 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46403 = (function (f,ch,meta46404){
this.f = f;
this.ch = ch;
this.meta46404 = meta46404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46405,meta46404__$1){
var self__ = this;
var _46405__$1 = this;
return (new cljs.core.async.t_cljs$core$async46403(self__.f,self__.ch,meta46404__$1));
}));

(cljs.core.async.t_cljs$core$async46403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46405){
var self__ = this;
var _46405__$1 = this;
return self__.meta46404;
}));

(cljs.core.async.t_cljs$core$async46403.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46403.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46403.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46403.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46403.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46403.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46404","meta46404",-1100761948,null)], null);
}));

(cljs.core.async.t_cljs$core$async46403.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46403");

(cljs.core.async.t_cljs$core$async46403.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46403");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46403.
 */
cljs.core.async.__GT_t_cljs$core$async46403 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46403(f__$1,ch__$1,meta46404){
return (new cljs.core.async.t_cljs$core$async46403(f__$1,ch__$1,meta46404));
});

}

return (new cljs.core.async.t_cljs$core$async46403(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46430 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46430 = (function (p,ch,meta46431){
this.p = p;
this.ch = ch;
this.meta46431 = meta46431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46432,meta46431__$1){
var self__ = this;
var _46432__$1 = this;
return (new cljs.core.async.t_cljs$core$async46430(self__.p,self__.ch,meta46431__$1));
}));

(cljs.core.async.t_cljs$core$async46430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46432){
var self__ = this;
var _46432__$1 = this;
return self__.meta46431;
}));

(cljs.core.async.t_cljs$core$async46430.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46430.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46430.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46430.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46430.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46430.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46430.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46430.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46431","meta46431",-1349869672,null)], null);
}));

(cljs.core.async.t_cljs$core$async46430.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46430");

(cljs.core.async.t_cljs$core$async46430.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46430");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46430.
 */
cljs.core.async.__GT_t_cljs$core$async46430 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46430(p__$1,ch__$1,meta46431){
return (new cljs.core.async.t_cljs$core$async46430(p__$1,ch__$1,meta46431));
});

}

return (new cljs.core.async.t_cljs$core$async46430(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46449 = arguments.length;
switch (G__46449) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44987__auto___47322 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44988__auto__ = (function (){var switch__44793__auto__ = (function (state_46470){
var state_val_46471 = (state_46470[(1)]);
if((state_val_46471 === (7))){
var inst_46466 = (state_46470[(2)]);
var state_46470__$1 = state_46470;
var statearr_46472_47323 = state_46470__$1;
(statearr_46472_47323[(2)] = inst_46466);

(statearr_46472_47323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46471 === (1))){
var state_46470__$1 = state_46470;
var statearr_46473_47324 = state_46470__$1;
(statearr_46473_47324[(2)] = null);

(statearr_46473_47324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46471 === (4))){
var inst_46452 = (state_46470[(7)]);
var inst_46452__$1 = (state_46470[(2)]);
var inst_46453 = (inst_46452__$1 == null);
var state_46470__$1 = (function (){var statearr_46474 = state_46470;
(statearr_46474[(7)] = inst_46452__$1);

return statearr_46474;
})();
if(cljs.core.truth_(inst_46453)){
var statearr_46475_47326 = state_46470__$1;
(statearr_46475_47326[(1)] = (5));

} else {
var statearr_46476_47327 = state_46470__$1;
(statearr_46476_47327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46471 === (6))){
var inst_46452 = (state_46470[(7)]);
var inst_46457 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46452) : p.call(null,inst_46452));
var state_46470__$1 = state_46470;
if(cljs.core.truth_(inst_46457)){
var statearr_46477_47331 = state_46470__$1;
(statearr_46477_47331[(1)] = (8));

} else {
var statearr_46478_47332 = state_46470__$1;
(statearr_46478_47332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46471 === (3))){
var inst_46468 = (state_46470[(2)]);
var state_46470__$1 = state_46470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46470__$1,inst_46468);
} else {
if((state_val_46471 === (2))){
var state_46470__$1 = state_46470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46470__$1,(4),ch);
} else {
if((state_val_46471 === (11))){
var inst_46460 = (state_46470[(2)]);
var state_46470__$1 = state_46470;
var statearr_46479_47333 = state_46470__$1;
(statearr_46479_47333[(2)] = inst_46460);

(statearr_46479_47333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46471 === (9))){
var state_46470__$1 = state_46470;
var statearr_46480_47334 = state_46470__$1;
(statearr_46480_47334[(2)] = null);

(statearr_46480_47334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46471 === (5))){
var inst_46455 = cljs.core.async.close_BANG_(out);
var state_46470__$1 = state_46470;
var statearr_46481_47335 = state_46470__$1;
(statearr_46481_47335[(2)] = inst_46455);

(statearr_46481_47335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46471 === (10))){
var inst_46463 = (state_46470[(2)]);
var state_46470__$1 = (function (){var statearr_46482 = state_46470;
(statearr_46482[(8)] = inst_46463);

return statearr_46482;
})();
var statearr_46483_47336 = state_46470__$1;
(statearr_46483_47336[(2)] = null);

(statearr_46483_47336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46471 === (8))){
var inst_46452 = (state_46470[(7)]);
var state_46470__$1 = state_46470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46470__$1,(11),out,inst_46452);
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
});
return (function() {
var cljs$core$async$state_machine__44794__auto__ = null;
var cljs$core$async$state_machine__44794__auto____0 = (function (){
var statearr_46484 = [null,null,null,null,null,null,null,null,null];
(statearr_46484[(0)] = cljs$core$async$state_machine__44794__auto__);

(statearr_46484[(1)] = (1));

return statearr_46484;
});
var cljs$core$async$state_machine__44794__auto____1 = (function (state_46470){
while(true){
var ret_value__44795__auto__ = (function (){try{while(true){
var result__44796__auto__ = switch__44793__auto__(state_46470);
if(cljs.core.keyword_identical_QMARK_(result__44796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44796__auto__;
}
break;
}
}catch (e46489){var ex__44797__auto__ = e46489;
var statearr_46490_47337 = state_46470;
(statearr_46490_47337[(2)] = ex__44797__auto__);


if(cljs.core.seq((state_46470[(4)]))){
var statearr_46491_47338 = state_46470;
(statearr_46491_47338[(1)] = cljs.core.first((state_46470[(4)])));

} else {
throw ex__44797__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47339 = state_46470;
state_46470 = G__47339;
continue;
} else {
return ret_value__44795__auto__;
}
break;
}
});
cljs$core$async$state_machine__44794__auto__ = function(state_46470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44794__auto____1.call(this,state_46470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44794__auto____0;
cljs$core$async$state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44794__auto____1;
return cljs$core$async$state_machine__44794__auto__;
})()
})();
var state__44989__auto__ = (function (){var statearr_46492 = f__44988__auto__();
(statearr_46492[(6)] = c__44987__auto___47322);

return statearr_46492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44989__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46495 = arguments.length;
switch (G__46495) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__44987__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44988__auto__ = (function (){var switch__44793__auto__ = (function (state_46563){
var state_val_46564 = (state_46563[(1)]);
if((state_val_46564 === (7))){
var inst_46559 = (state_46563[(2)]);
var state_46563__$1 = state_46563;
var statearr_46565_47341 = state_46563__$1;
(statearr_46565_47341[(2)] = inst_46559);

(statearr_46565_47341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (20))){
var inst_46528 = (state_46563[(7)]);
var inst_46540 = (state_46563[(2)]);
var inst_46541 = cljs.core.next(inst_46528);
var inst_46511 = inst_46541;
var inst_46512 = null;
var inst_46513 = (0);
var inst_46514 = (0);
var state_46563__$1 = (function (){var statearr_46566 = state_46563;
(statearr_46566[(8)] = inst_46540);

(statearr_46566[(9)] = inst_46513);

(statearr_46566[(10)] = inst_46512);

(statearr_46566[(11)] = inst_46514);

(statearr_46566[(12)] = inst_46511);

return statearr_46566;
})();
var statearr_46567_47342 = state_46563__$1;
(statearr_46567_47342[(2)] = null);

(statearr_46567_47342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (1))){
var state_46563__$1 = state_46563;
var statearr_46568_47343 = state_46563__$1;
(statearr_46568_47343[(2)] = null);

(statearr_46568_47343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (4))){
var inst_46500 = (state_46563[(13)]);
var inst_46500__$1 = (state_46563[(2)]);
var inst_46501 = (inst_46500__$1 == null);
var state_46563__$1 = (function (){var statearr_46569 = state_46563;
(statearr_46569[(13)] = inst_46500__$1);

return statearr_46569;
})();
if(cljs.core.truth_(inst_46501)){
var statearr_46570_47344 = state_46563__$1;
(statearr_46570_47344[(1)] = (5));

} else {
var statearr_46571_47345 = state_46563__$1;
(statearr_46571_47345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (15))){
var state_46563__$1 = state_46563;
var statearr_46575_47346 = state_46563__$1;
(statearr_46575_47346[(2)] = null);

(statearr_46575_47346[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (21))){
var state_46563__$1 = state_46563;
var statearr_46576_47347 = state_46563__$1;
(statearr_46576_47347[(2)] = null);

(statearr_46576_47347[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (13))){
var inst_46513 = (state_46563[(9)]);
var inst_46512 = (state_46563[(10)]);
var inst_46514 = (state_46563[(11)]);
var inst_46511 = (state_46563[(12)]);
var inst_46522 = (state_46563[(2)]);
var inst_46523 = (inst_46514 + (1));
var tmp46572 = inst_46513;
var tmp46573 = inst_46512;
var tmp46574 = inst_46511;
var inst_46511__$1 = tmp46574;
var inst_46512__$1 = tmp46573;
var inst_46513__$1 = tmp46572;
var inst_46514__$1 = inst_46523;
var state_46563__$1 = (function (){var statearr_46577 = state_46563;
(statearr_46577[(14)] = inst_46522);

(statearr_46577[(9)] = inst_46513__$1);

(statearr_46577[(10)] = inst_46512__$1);

(statearr_46577[(11)] = inst_46514__$1);

(statearr_46577[(12)] = inst_46511__$1);

return statearr_46577;
})();
var statearr_46578_47348 = state_46563__$1;
(statearr_46578_47348[(2)] = null);

(statearr_46578_47348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (22))){
var state_46563__$1 = state_46563;
var statearr_46579_47349 = state_46563__$1;
(statearr_46579_47349[(2)] = null);

(statearr_46579_47349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (6))){
var inst_46500 = (state_46563[(13)]);
var inst_46509 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46500) : f.call(null,inst_46500));
var inst_46510 = cljs.core.seq(inst_46509);
var inst_46511 = inst_46510;
var inst_46512 = null;
var inst_46513 = (0);
var inst_46514 = (0);
var state_46563__$1 = (function (){var statearr_46580 = state_46563;
(statearr_46580[(9)] = inst_46513);

(statearr_46580[(10)] = inst_46512);

(statearr_46580[(11)] = inst_46514);

(statearr_46580[(12)] = inst_46511);

return statearr_46580;
})();
var statearr_46581_47350 = state_46563__$1;
(statearr_46581_47350[(2)] = null);

(statearr_46581_47350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (17))){
var inst_46528 = (state_46563[(7)]);
var inst_46533 = cljs.core.chunk_first(inst_46528);
var inst_46534 = cljs.core.chunk_rest(inst_46528);
var inst_46535 = cljs.core.count(inst_46533);
var inst_46511 = inst_46534;
var inst_46512 = inst_46533;
var inst_46513 = inst_46535;
var inst_46514 = (0);
var state_46563__$1 = (function (){var statearr_46582 = state_46563;
(statearr_46582[(9)] = inst_46513);

(statearr_46582[(10)] = inst_46512);

(statearr_46582[(11)] = inst_46514);

(statearr_46582[(12)] = inst_46511);

return statearr_46582;
})();
var statearr_46583_47351 = state_46563__$1;
(statearr_46583_47351[(2)] = null);

(statearr_46583_47351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (3))){
var inst_46561 = (state_46563[(2)]);
var state_46563__$1 = state_46563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46563__$1,inst_46561);
} else {
if((state_val_46564 === (12))){
var inst_46549 = (state_46563[(2)]);
var state_46563__$1 = state_46563;
var statearr_46584_47353 = state_46563__$1;
(statearr_46584_47353[(2)] = inst_46549);

(statearr_46584_47353[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (2))){
var state_46563__$1 = state_46563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46563__$1,(4),in$);
} else {
if((state_val_46564 === (23))){
var inst_46557 = (state_46563[(2)]);
var state_46563__$1 = state_46563;
var statearr_46585_47354 = state_46563__$1;
(statearr_46585_47354[(2)] = inst_46557);

(statearr_46585_47354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (19))){
var inst_46544 = (state_46563[(2)]);
var state_46563__$1 = state_46563;
var statearr_46586_47355 = state_46563__$1;
(statearr_46586_47355[(2)] = inst_46544);

(statearr_46586_47355[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (11))){
var inst_46528 = (state_46563[(7)]);
var inst_46511 = (state_46563[(12)]);
var inst_46528__$1 = cljs.core.seq(inst_46511);
var state_46563__$1 = (function (){var statearr_46587 = state_46563;
(statearr_46587[(7)] = inst_46528__$1);

return statearr_46587;
})();
if(inst_46528__$1){
var statearr_46588_47359 = state_46563__$1;
(statearr_46588_47359[(1)] = (14));

} else {
var statearr_46589_47360 = state_46563__$1;
(statearr_46589_47360[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (9))){
var inst_46551 = (state_46563[(2)]);
var inst_46552 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46563__$1 = (function (){var statearr_46590 = state_46563;
(statearr_46590[(15)] = inst_46551);

return statearr_46590;
})();
if(cljs.core.truth_(inst_46552)){
var statearr_46591_47361 = state_46563__$1;
(statearr_46591_47361[(1)] = (21));

} else {
var statearr_46592_47362 = state_46563__$1;
(statearr_46592_47362[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (5))){
var inst_46503 = cljs.core.async.close_BANG_(out);
var state_46563__$1 = state_46563;
var statearr_46593_47363 = state_46563__$1;
(statearr_46593_47363[(2)] = inst_46503);

(statearr_46593_47363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (14))){
var inst_46528 = (state_46563[(7)]);
var inst_46531 = cljs.core.chunked_seq_QMARK_(inst_46528);
var state_46563__$1 = state_46563;
if(inst_46531){
var statearr_46594_47364 = state_46563__$1;
(statearr_46594_47364[(1)] = (17));

} else {
var statearr_46595_47365 = state_46563__$1;
(statearr_46595_47365[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (16))){
var inst_46547 = (state_46563[(2)]);
var state_46563__$1 = state_46563;
var statearr_46596_47366 = state_46563__$1;
(statearr_46596_47366[(2)] = inst_46547);

(statearr_46596_47366[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (10))){
var inst_46512 = (state_46563[(10)]);
var inst_46514 = (state_46563[(11)]);
var inst_46520 = cljs.core._nth(inst_46512,inst_46514);
var state_46563__$1 = state_46563;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46563__$1,(13),out,inst_46520);
} else {
if((state_val_46564 === (18))){
var inst_46528 = (state_46563[(7)]);
var inst_46538 = cljs.core.first(inst_46528);
var state_46563__$1 = state_46563;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46563__$1,(20),out,inst_46538);
} else {
if((state_val_46564 === (8))){
var inst_46513 = (state_46563[(9)]);
var inst_46514 = (state_46563[(11)]);
var inst_46516 = (inst_46514 < inst_46513);
var inst_46517 = inst_46516;
var state_46563__$1 = state_46563;
if(cljs.core.truth_(inst_46517)){
var statearr_46597_47367 = state_46563__$1;
(statearr_46597_47367[(1)] = (10));

} else {
var statearr_46598_47368 = state_46563__$1;
(statearr_46598_47368[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44794__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44794__auto____0 = (function (){
var statearr_46599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46599[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44794__auto__);

(statearr_46599[(1)] = (1));

return statearr_46599;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44794__auto____1 = (function (state_46563){
while(true){
var ret_value__44795__auto__ = (function (){try{while(true){
var result__44796__auto__ = switch__44793__auto__(state_46563);
if(cljs.core.keyword_identical_QMARK_(result__44796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44796__auto__;
}
break;
}
}catch (e46600){var ex__44797__auto__ = e46600;
var statearr_46601_47369 = state_46563;
(statearr_46601_47369[(2)] = ex__44797__auto__);


if(cljs.core.seq((state_46563[(4)]))){
var statearr_46602_47370 = state_46563;
(statearr_46602_47370[(1)] = cljs.core.first((state_46563[(4)])));

} else {
throw ex__44797__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47371 = state_46563;
state_46563 = G__47371;
continue;
} else {
return ret_value__44795__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44794__auto__ = function(state_46563){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44794__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44794__auto____1.call(this,state_46563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44794__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44794__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44794__auto__;
})()
})();
var state__44989__auto__ = (function (){var statearr_46603 = f__44988__auto__();
(statearr_46603[(6)] = c__44987__auto__);

return statearr_46603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44989__auto__);
}));

return c__44987__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46605 = arguments.length;
switch (G__46605) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46607 = arguments.length;
switch (G__46607) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46609 = arguments.length;
switch (G__46609) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44987__auto___47376 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44988__auto__ = (function (){var switch__44793__auto__ = (function (state_46633){
var state_val_46634 = (state_46633[(1)]);
if((state_val_46634 === (7))){
var inst_46628 = (state_46633[(2)]);
var state_46633__$1 = state_46633;
var statearr_46635_47377 = state_46633__$1;
(statearr_46635_47377[(2)] = inst_46628);

(statearr_46635_47377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46634 === (1))){
var inst_46610 = null;
var state_46633__$1 = (function (){var statearr_46636 = state_46633;
(statearr_46636[(7)] = inst_46610);

return statearr_46636;
})();
var statearr_46637_47378 = state_46633__$1;
(statearr_46637_47378[(2)] = null);

(statearr_46637_47378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46634 === (4))){
var inst_46613 = (state_46633[(8)]);
var inst_46613__$1 = (state_46633[(2)]);
var inst_46614 = (inst_46613__$1 == null);
var inst_46615 = cljs.core.not(inst_46614);
var state_46633__$1 = (function (){var statearr_46638 = state_46633;
(statearr_46638[(8)] = inst_46613__$1);

return statearr_46638;
})();
if(inst_46615){
var statearr_46639_47379 = state_46633__$1;
(statearr_46639_47379[(1)] = (5));

} else {
var statearr_46640_47380 = state_46633__$1;
(statearr_46640_47380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46634 === (6))){
var state_46633__$1 = state_46633;
var statearr_46641_47385 = state_46633__$1;
(statearr_46641_47385[(2)] = null);

(statearr_46641_47385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46634 === (3))){
var inst_46630 = (state_46633[(2)]);
var inst_46631 = cljs.core.async.close_BANG_(out);
var state_46633__$1 = (function (){var statearr_46642 = state_46633;
(statearr_46642[(9)] = inst_46630);

return statearr_46642;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46633__$1,inst_46631);
} else {
if((state_val_46634 === (2))){
var state_46633__$1 = state_46633;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46633__$1,(4),ch);
} else {
if((state_val_46634 === (11))){
var inst_46613 = (state_46633[(8)]);
var inst_46622 = (state_46633[(2)]);
var inst_46610 = inst_46613;
var state_46633__$1 = (function (){var statearr_46643 = state_46633;
(statearr_46643[(10)] = inst_46622);

(statearr_46643[(7)] = inst_46610);

return statearr_46643;
})();
var statearr_46644_47387 = state_46633__$1;
(statearr_46644_47387[(2)] = null);

(statearr_46644_47387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46634 === (9))){
var inst_46613 = (state_46633[(8)]);
var state_46633__$1 = state_46633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46633__$1,(11),out,inst_46613);
} else {
if((state_val_46634 === (5))){
var inst_46610 = (state_46633[(7)]);
var inst_46613 = (state_46633[(8)]);
var inst_46617 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46613,inst_46610);
var state_46633__$1 = state_46633;
if(inst_46617){
var statearr_46646_47388 = state_46633__$1;
(statearr_46646_47388[(1)] = (8));

} else {
var statearr_46647_47389 = state_46633__$1;
(statearr_46647_47389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46634 === (10))){
var inst_46625 = (state_46633[(2)]);
var state_46633__$1 = state_46633;
var statearr_46648_47390 = state_46633__$1;
(statearr_46648_47390[(2)] = inst_46625);

(statearr_46648_47390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46634 === (8))){
var inst_46610 = (state_46633[(7)]);
var tmp46645 = inst_46610;
var inst_46610__$1 = tmp46645;
var state_46633__$1 = (function (){var statearr_46649 = state_46633;
(statearr_46649[(7)] = inst_46610__$1);

return statearr_46649;
})();
var statearr_46650_47391 = state_46633__$1;
(statearr_46650_47391[(2)] = null);

(statearr_46650_47391[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__44794__auto__ = null;
var cljs$core$async$state_machine__44794__auto____0 = (function (){
var statearr_46651 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46651[(0)] = cljs$core$async$state_machine__44794__auto__);

(statearr_46651[(1)] = (1));

return statearr_46651;
});
var cljs$core$async$state_machine__44794__auto____1 = (function (state_46633){
while(true){
var ret_value__44795__auto__ = (function (){try{while(true){
var result__44796__auto__ = switch__44793__auto__(state_46633);
if(cljs.core.keyword_identical_QMARK_(result__44796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44796__auto__;
}
break;
}
}catch (e46652){var ex__44797__auto__ = e46652;
var statearr_46653_47393 = state_46633;
(statearr_46653_47393[(2)] = ex__44797__auto__);


if(cljs.core.seq((state_46633[(4)]))){
var statearr_46654_47394 = state_46633;
(statearr_46654_47394[(1)] = cljs.core.first((state_46633[(4)])));

} else {
throw ex__44797__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47395 = state_46633;
state_46633 = G__47395;
continue;
} else {
return ret_value__44795__auto__;
}
break;
}
});
cljs$core$async$state_machine__44794__auto__ = function(state_46633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44794__auto____1.call(this,state_46633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44794__auto____0;
cljs$core$async$state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44794__auto____1;
return cljs$core$async$state_machine__44794__auto__;
})()
})();
var state__44989__auto__ = (function (){var statearr_46655 = f__44988__auto__();
(statearr_46655[(6)] = c__44987__auto___47376);

return statearr_46655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44989__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46657 = arguments.length;
switch (G__46657) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44987__auto___47401 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44988__auto__ = (function (){var switch__44793__auto__ = (function (state_46695){
var state_val_46696 = (state_46695[(1)]);
if((state_val_46696 === (7))){
var inst_46691 = (state_46695[(2)]);
var state_46695__$1 = state_46695;
var statearr_46697_47402 = state_46695__$1;
(statearr_46697_47402[(2)] = inst_46691);

(statearr_46697_47402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46696 === (1))){
var inst_46658 = (new Array(n));
var inst_46659 = inst_46658;
var inst_46660 = (0);
var state_46695__$1 = (function (){var statearr_46698 = state_46695;
(statearr_46698[(7)] = inst_46660);

(statearr_46698[(8)] = inst_46659);

return statearr_46698;
})();
var statearr_46699_47403 = state_46695__$1;
(statearr_46699_47403[(2)] = null);

(statearr_46699_47403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46696 === (4))){
var inst_46663 = (state_46695[(9)]);
var inst_46663__$1 = (state_46695[(2)]);
var inst_46664 = (inst_46663__$1 == null);
var inst_46665 = cljs.core.not(inst_46664);
var state_46695__$1 = (function (){var statearr_46700 = state_46695;
(statearr_46700[(9)] = inst_46663__$1);

return statearr_46700;
})();
if(inst_46665){
var statearr_46701_47404 = state_46695__$1;
(statearr_46701_47404[(1)] = (5));

} else {
var statearr_46702_47405 = state_46695__$1;
(statearr_46702_47405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46696 === (15))){
var inst_46685 = (state_46695[(2)]);
var state_46695__$1 = state_46695;
var statearr_46703_47406 = state_46695__$1;
(statearr_46703_47406[(2)] = inst_46685);

(statearr_46703_47406[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46696 === (13))){
var state_46695__$1 = state_46695;
var statearr_46704_47407 = state_46695__$1;
(statearr_46704_47407[(2)] = null);

(statearr_46704_47407[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46696 === (6))){
var inst_46660 = (state_46695[(7)]);
var inst_46681 = (inst_46660 > (0));
var state_46695__$1 = state_46695;
if(cljs.core.truth_(inst_46681)){
var statearr_46705_47408 = state_46695__$1;
(statearr_46705_47408[(1)] = (12));

} else {
var statearr_46706_47409 = state_46695__$1;
(statearr_46706_47409[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46696 === (3))){
var inst_46693 = (state_46695[(2)]);
var state_46695__$1 = state_46695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46695__$1,inst_46693);
} else {
if((state_val_46696 === (12))){
var inst_46659 = (state_46695[(8)]);
var inst_46683 = cljs.core.vec(inst_46659);
var state_46695__$1 = state_46695;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46695__$1,(15),out,inst_46683);
} else {
if((state_val_46696 === (2))){
var state_46695__$1 = state_46695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46695__$1,(4),ch);
} else {
if((state_val_46696 === (11))){
var inst_46675 = (state_46695[(2)]);
var inst_46676 = (new Array(n));
var inst_46659 = inst_46676;
var inst_46660 = (0);
var state_46695__$1 = (function (){var statearr_46707 = state_46695;
(statearr_46707[(7)] = inst_46660);

(statearr_46707[(10)] = inst_46675);

(statearr_46707[(8)] = inst_46659);

return statearr_46707;
})();
var statearr_46708_47410 = state_46695__$1;
(statearr_46708_47410[(2)] = null);

(statearr_46708_47410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46696 === (9))){
var inst_46659 = (state_46695[(8)]);
var inst_46673 = cljs.core.vec(inst_46659);
var state_46695__$1 = state_46695;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46695__$1,(11),out,inst_46673);
} else {
if((state_val_46696 === (5))){
var inst_46660 = (state_46695[(7)]);
var inst_46668 = (state_46695[(11)]);
var inst_46663 = (state_46695[(9)]);
var inst_46659 = (state_46695[(8)]);
var inst_46667 = (inst_46659[inst_46660] = inst_46663);
var inst_46668__$1 = (inst_46660 + (1));
var inst_46669 = (inst_46668__$1 < n);
var state_46695__$1 = (function (){var statearr_46709 = state_46695;
(statearr_46709[(12)] = inst_46667);

(statearr_46709[(11)] = inst_46668__$1);

return statearr_46709;
})();
if(cljs.core.truth_(inst_46669)){
var statearr_46710_47411 = state_46695__$1;
(statearr_46710_47411[(1)] = (8));

} else {
var statearr_46711_47412 = state_46695__$1;
(statearr_46711_47412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46696 === (14))){
var inst_46688 = (state_46695[(2)]);
var inst_46689 = cljs.core.async.close_BANG_(out);
var state_46695__$1 = (function (){var statearr_46713 = state_46695;
(statearr_46713[(13)] = inst_46688);

return statearr_46713;
})();
var statearr_46714_47413 = state_46695__$1;
(statearr_46714_47413[(2)] = inst_46689);

(statearr_46714_47413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46696 === (10))){
var inst_46679 = (state_46695[(2)]);
var state_46695__$1 = state_46695;
var statearr_46715_47414 = state_46695__$1;
(statearr_46715_47414[(2)] = inst_46679);

(statearr_46715_47414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46696 === (8))){
var inst_46668 = (state_46695[(11)]);
var inst_46659 = (state_46695[(8)]);
var tmp46712 = inst_46659;
var inst_46659__$1 = tmp46712;
var inst_46660 = inst_46668;
var state_46695__$1 = (function (){var statearr_46716 = state_46695;
(statearr_46716[(7)] = inst_46660);

(statearr_46716[(8)] = inst_46659__$1);

return statearr_46716;
})();
var statearr_46717_47415 = state_46695__$1;
(statearr_46717_47415[(2)] = null);

(statearr_46717_47415[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__44794__auto__ = null;
var cljs$core$async$state_machine__44794__auto____0 = (function (){
var statearr_46718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46718[(0)] = cljs$core$async$state_machine__44794__auto__);

(statearr_46718[(1)] = (1));

return statearr_46718;
});
var cljs$core$async$state_machine__44794__auto____1 = (function (state_46695){
while(true){
var ret_value__44795__auto__ = (function (){try{while(true){
var result__44796__auto__ = switch__44793__auto__(state_46695);
if(cljs.core.keyword_identical_QMARK_(result__44796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44796__auto__;
}
break;
}
}catch (e46719){var ex__44797__auto__ = e46719;
var statearr_46720_47416 = state_46695;
(statearr_46720_47416[(2)] = ex__44797__auto__);


if(cljs.core.seq((state_46695[(4)]))){
var statearr_46721_47417 = state_46695;
(statearr_46721_47417[(1)] = cljs.core.first((state_46695[(4)])));

} else {
throw ex__44797__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47418 = state_46695;
state_46695 = G__47418;
continue;
} else {
return ret_value__44795__auto__;
}
break;
}
});
cljs$core$async$state_machine__44794__auto__ = function(state_46695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44794__auto____1.call(this,state_46695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44794__auto____0;
cljs$core$async$state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44794__auto____1;
return cljs$core$async$state_machine__44794__auto__;
})()
})();
var state__44989__auto__ = (function (){var statearr_46722 = f__44988__auto__();
(statearr_46722[(6)] = c__44987__auto___47401);

return statearr_46722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44989__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46724 = arguments.length;
switch (G__46724) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44987__auto___47421 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44988__auto__ = (function (){var switch__44793__auto__ = (function (state_46769){
var state_val_46770 = (state_46769[(1)]);
if((state_val_46770 === (7))){
var inst_46765 = (state_46769[(2)]);
var state_46769__$1 = state_46769;
var statearr_46771_47422 = state_46769__$1;
(statearr_46771_47422[(2)] = inst_46765);

(statearr_46771_47422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46770 === (1))){
var inst_46725 = [];
var inst_46726 = inst_46725;
var inst_46727 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46769__$1 = (function (){var statearr_46772 = state_46769;
(statearr_46772[(7)] = inst_46727);

(statearr_46772[(8)] = inst_46726);

return statearr_46772;
})();
var statearr_46773_47426 = state_46769__$1;
(statearr_46773_47426[(2)] = null);

(statearr_46773_47426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46770 === (4))){
var inst_46730 = (state_46769[(9)]);
var inst_46730__$1 = (state_46769[(2)]);
var inst_46731 = (inst_46730__$1 == null);
var inst_46732 = cljs.core.not(inst_46731);
var state_46769__$1 = (function (){var statearr_46774 = state_46769;
(statearr_46774[(9)] = inst_46730__$1);

return statearr_46774;
})();
if(inst_46732){
var statearr_46775_47427 = state_46769__$1;
(statearr_46775_47427[(1)] = (5));

} else {
var statearr_46776_47428 = state_46769__$1;
(statearr_46776_47428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46770 === (15))){
var inst_46726 = (state_46769[(8)]);
var inst_46757 = cljs.core.vec(inst_46726);
var state_46769__$1 = state_46769;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46769__$1,(18),out,inst_46757);
} else {
if((state_val_46770 === (13))){
var inst_46752 = (state_46769[(2)]);
var state_46769__$1 = state_46769;
var statearr_46777_47429 = state_46769__$1;
(statearr_46777_47429[(2)] = inst_46752);

(statearr_46777_47429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46770 === (6))){
var inst_46726 = (state_46769[(8)]);
var inst_46754 = inst_46726.length;
var inst_46755 = (inst_46754 > (0));
var state_46769__$1 = state_46769;
if(cljs.core.truth_(inst_46755)){
var statearr_46778_47430 = state_46769__$1;
(statearr_46778_47430[(1)] = (15));

} else {
var statearr_46779_47431 = state_46769__$1;
(statearr_46779_47431[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46770 === (17))){
var inst_46762 = (state_46769[(2)]);
var inst_46763 = cljs.core.async.close_BANG_(out);
var state_46769__$1 = (function (){var statearr_46780 = state_46769;
(statearr_46780[(10)] = inst_46762);

return statearr_46780;
})();
var statearr_46781_47432 = state_46769__$1;
(statearr_46781_47432[(2)] = inst_46763);

(statearr_46781_47432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46770 === (3))){
var inst_46767 = (state_46769[(2)]);
var state_46769__$1 = state_46769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46769__$1,inst_46767);
} else {
if((state_val_46770 === (12))){
var inst_46726 = (state_46769[(8)]);
var inst_46745 = cljs.core.vec(inst_46726);
var state_46769__$1 = state_46769;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46769__$1,(14),out,inst_46745);
} else {
if((state_val_46770 === (2))){
var state_46769__$1 = state_46769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46769__$1,(4),ch);
} else {
if((state_val_46770 === (11))){
var inst_46734 = (state_46769[(11)]);
var inst_46730 = (state_46769[(9)]);
var inst_46726 = (state_46769[(8)]);
var inst_46742 = inst_46726.push(inst_46730);
var tmp46782 = inst_46726;
var inst_46726__$1 = tmp46782;
var inst_46727 = inst_46734;
var state_46769__$1 = (function (){var statearr_46783 = state_46769;
(statearr_46783[(7)] = inst_46727);

(statearr_46783[(12)] = inst_46742);

(statearr_46783[(8)] = inst_46726__$1);

return statearr_46783;
})();
var statearr_46784_47433 = state_46769__$1;
(statearr_46784_47433[(2)] = null);

(statearr_46784_47433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46770 === (9))){
var inst_46727 = (state_46769[(7)]);
var inst_46738 = cljs.core.keyword_identical_QMARK_(inst_46727,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_46769__$1 = state_46769;
var statearr_46785_47434 = state_46769__$1;
(statearr_46785_47434[(2)] = inst_46738);

(statearr_46785_47434[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46770 === (5))){
var inst_46735 = (state_46769[(13)]);
var inst_46727 = (state_46769[(7)]);
var inst_46734 = (state_46769[(11)]);
var inst_46730 = (state_46769[(9)]);
var inst_46734__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46730) : f.call(null,inst_46730));
var inst_46735__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46734__$1,inst_46727);
var state_46769__$1 = (function (){var statearr_46786 = state_46769;
(statearr_46786[(13)] = inst_46735__$1);

(statearr_46786[(11)] = inst_46734__$1);

return statearr_46786;
})();
if(inst_46735__$1){
var statearr_46787_47435 = state_46769__$1;
(statearr_46787_47435[(1)] = (8));

} else {
var statearr_46788_47436 = state_46769__$1;
(statearr_46788_47436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46770 === (14))){
var inst_46734 = (state_46769[(11)]);
var inst_46730 = (state_46769[(9)]);
var inst_46747 = (state_46769[(2)]);
var inst_46748 = [];
var inst_46749 = inst_46748.push(inst_46730);
var inst_46726 = inst_46748;
var inst_46727 = inst_46734;
var state_46769__$1 = (function (){var statearr_46789 = state_46769;
(statearr_46789[(14)] = inst_46747);

(statearr_46789[(7)] = inst_46727);

(statearr_46789[(8)] = inst_46726);

(statearr_46789[(15)] = inst_46749);

return statearr_46789;
})();
var statearr_46790_47437 = state_46769__$1;
(statearr_46790_47437[(2)] = null);

(statearr_46790_47437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46770 === (16))){
var state_46769__$1 = state_46769;
var statearr_46791_47438 = state_46769__$1;
(statearr_46791_47438[(2)] = null);

(statearr_46791_47438[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46770 === (10))){
var inst_46740 = (state_46769[(2)]);
var state_46769__$1 = state_46769;
if(cljs.core.truth_(inst_46740)){
var statearr_46792_47440 = state_46769__$1;
(statearr_46792_47440[(1)] = (11));

} else {
var statearr_46793_47441 = state_46769__$1;
(statearr_46793_47441[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46770 === (18))){
var inst_46759 = (state_46769[(2)]);
var state_46769__$1 = state_46769;
var statearr_46794_47442 = state_46769__$1;
(statearr_46794_47442[(2)] = inst_46759);

(statearr_46794_47442[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46770 === (8))){
var inst_46735 = (state_46769[(13)]);
var state_46769__$1 = state_46769;
var statearr_46795_47443 = state_46769__$1;
(statearr_46795_47443[(2)] = inst_46735);

(statearr_46795_47443[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__44794__auto__ = null;
var cljs$core$async$state_machine__44794__auto____0 = (function (){
var statearr_46796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46796[(0)] = cljs$core$async$state_machine__44794__auto__);

(statearr_46796[(1)] = (1));

return statearr_46796;
});
var cljs$core$async$state_machine__44794__auto____1 = (function (state_46769){
while(true){
var ret_value__44795__auto__ = (function (){try{while(true){
var result__44796__auto__ = switch__44793__auto__(state_46769);
if(cljs.core.keyword_identical_QMARK_(result__44796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44796__auto__;
}
break;
}
}catch (e46797){var ex__44797__auto__ = e46797;
var statearr_46798_47444 = state_46769;
(statearr_46798_47444[(2)] = ex__44797__auto__);


if(cljs.core.seq((state_46769[(4)]))){
var statearr_46799_47445 = state_46769;
(statearr_46799_47445[(1)] = cljs.core.first((state_46769[(4)])));

} else {
throw ex__44797__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47446 = state_46769;
state_46769 = G__47446;
continue;
} else {
return ret_value__44795__auto__;
}
break;
}
});
cljs$core$async$state_machine__44794__auto__ = function(state_46769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44794__auto____1.call(this,state_46769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44794__auto____0;
cljs$core$async$state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44794__auto____1;
return cljs$core$async$state_machine__44794__auto__;
})()
})();
var state__44989__auto__ = (function (){var statearr_46800 = f__44988__auto__();
(statearr_46800[(6)] = c__44987__auto___47421);

return statearr_46800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44989__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
