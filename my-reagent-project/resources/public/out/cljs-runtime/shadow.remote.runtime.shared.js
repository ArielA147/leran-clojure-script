goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__48469,res){
var map__48470 = p__48469;
var map__48470__$1 = cljs.core.__destructure_map(map__48470);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48470__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48470__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__48472 = res;
var G__48472__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48472,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__48472);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48472__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__48472__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__48496 = arguments.length;
switch (G__48496) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__48497,msg,handlers,timeout_after_ms){
var map__48498 = p__48497;
var map__48498__$1 = cljs.core.__destructure_map(map__48498);
var runtime = map__48498__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48498__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___48597 = arguments.length;
var i__4830__auto___48598 = (0);
while(true){
if((i__4830__auto___48598 < len__4829__auto___48597)){
args__4835__auto__.push((arguments[i__4830__auto___48598]));

var G__48599 = (i__4830__auto___48598 + (1));
i__4830__auto___48598 = G__48599;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__48540,ev,args){
var map__48541 = p__48540;
var map__48541__$1 = cljs.core.__destructure_map(map__48541);
var runtime = map__48541__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48541__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__48542 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__48545 = null;
var count__48546 = (0);
var i__48547 = (0);
while(true){
if((i__48547 < count__48546)){
var ext = chunk__48545.cljs$core$IIndexed$_nth$arity$2(null,i__48547);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__48600 = seq__48542;
var G__48601 = chunk__48545;
var G__48602 = count__48546;
var G__48603 = (i__48547 + (1));
seq__48542 = G__48600;
chunk__48545 = G__48601;
count__48546 = G__48602;
i__48547 = G__48603;
continue;
} else {
var G__48604 = seq__48542;
var G__48605 = chunk__48545;
var G__48606 = count__48546;
var G__48607 = (i__48547 + (1));
seq__48542 = G__48604;
chunk__48545 = G__48605;
count__48546 = G__48606;
i__48547 = G__48607;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48542);
if(temp__5753__auto__){
var seq__48542__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48542__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__48542__$1);
var G__48608 = cljs.core.chunk_rest(seq__48542__$1);
var G__48609 = c__4649__auto__;
var G__48610 = cljs.core.count(c__4649__auto__);
var G__48611 = (0);
seq__48542 = G__48608;
chunk__48545 = G__48609;
count__48546 = G__48610;
i__48547 = G__48611;
continue;
} else {
var ext = cljs.core.first(seq__48542__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__48612 = cljs.core.next(seq__48542__$1);
var G__48613 = null;
var G__48614 = (0);
var G__48615 = (0);
seq__48542 = G__48612;
chunk__48545 = G__48613;
count__48546 = G__48614;
i__48547 = G__48615;
continue;
} else {
var G__48616 = cljs.core.next(seq__48542__$1);
var G__48617 = null;
var G__48618 = (0);
var G__48619 = (0);
seq__48542 = G__48616;
chunk__48545 = G__48617;
count__48546 = G__48618;
i__48547 = G__48619;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq48506){
var G__48511 = cljs.core.first(seq48506);
var seq48506__$1 = cljs.core.next(seq48506);
var G__48512 = cljs.core.first(seq48506__$1);
var seq48506__$2 = cljs.core.next(seq48506__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48511,G__48512,seq48506__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__48553,p__48554){
var map__48555 = p__48553;
var map__48555__$1 = cljs.core.__destructure_map(map__48555);
var runtime = map__48555__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48555__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__48556 = p__48554;
var map__48556__$1 = cljs.core.__destructure_map(map__48556);
var msg = map__48556__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48556__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__48557 = cljs.core.deref(state_ref);
var map__48557__$1 = cljs.core.__destructure_map(map__48557);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48557__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48557__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__48558){
var map__48559 = p__48558;
var map__48559__$1 = cljs.core.__destructure_map(map__48559);
var runtime = map__48559__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48559__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__48560,msg){
var map__48561 = p__48560;
var map__48561__$1 = cljs.core.__destructure_map(map__48561);
var runtime = map__48561__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48561__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__48562,key,p__48563){
var map__48564 = p__48562;
var map__48564__$1 = cljs.core.__destructure_map(map__48564);
var state = map__48564__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48564__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__48565 = p__48563;
var map__48565__$1 = cljs.core.__destructure_map(map__48565);
var spec = map__48565__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48565__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__48566,key,spec){
var map__48567 = p__48566;
var map__48567__$1 = cljs.core.__destructure_map(map__48567);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48567__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__48568_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__48568_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__48569_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__48569_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__48570_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__48570_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__48571_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__48571_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__48572_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__48572_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__48574,key){
var map__48575 = p__48574;
var map__48575__$1 = cljs.core.__destructure_map(map__48575);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48575__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__48580,msg){
var map__48581 = p__48580;
var map__48581__$1 = cljs.core.__destructure_map(map__48581);
var runtime = map__48581__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48581__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__48582,p__48583){
var map__48584 = p__48582;
var map__48584__$1 = cljs.core.__destructure_map(map__48584);
var runtime = map__48584__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48584__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__48585 = p__48583;
var map__48585__$1 = cljs.core.__destructure_map(map__48585);
var msg = map__48585__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48585__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48585__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__48586 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__48588 = null;
var count__48589 = (0);
var i__48590 = (0);
while(true){
if((i__48590 < count__48589)){
var map__48594 = chunk__48588.cljs$core$IIndexed$_nth$arity$2(null,i__48590);
var map__48594__$1 = cljs.core.__destructure_map(map__48594);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48594__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__48642 = seq__48586;
var G__48643 = chunk__48588;
var G__48644 = count__48589;
var G__48645 = (i__48590 + (1));
seq__48586 = G__48642;
chunk__48588 = G__48643;
count__48589 = G__48644;
i__48590 = G__48645;
continue;
} else {
var G__48646 = seq__48586;
var G__48647 = chunk__48588;
var G__48648 = count__48589;
var G__48649 = (i__48590 + (1));
seq__48586 = G__48646;
chunk__48588 = G__48647;
count__48589 = G__48648;
i__48590 = G__48649;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48586);
if(temp__5753__auto__){
var seq__48586__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48586__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__48586__$1);
var G__48650 = cljs.core.chunk_rest(seq__48586__$1);
var G__48651 = c__4649__auto__;
var G__48652 = cljs.core.count(c__4649__auto__);
var G__48653 = (0);
seq__48586 = G__48650;
chunk__48588 = G__48651;
count__48589 = G__48652;
i__48590 = G__48653;
continue;
} else {
var map__48595 = cljs.core.first(seq__48586__$1);
var map__48595__$1 = cljs.core.__destructure_map(map__48595);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48595__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__48655 = cljs.core.next(seq__48586__$1);
var G__48656 = null;
var G__48657 = (0);
var G__48658 = (0);
seq__48586 = G__48655;
chunk__48588 = G__48656;
count__48589 = G__48657;
i__48590 = G__48658;
continue;
} else {
var G__48659 = cljs.core.next(seq__48586__$1);
var G__48660 = null;
var G__48661 = (0);
var G__48662 = (0);
seq__48586 = G__48659;
chunk__48588 = G__48660;
count__48589 = G__48661;
i__48590 = G__48662;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
