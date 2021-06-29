goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__49900,p__49901){
var map__49902 = p__49900;
var map__49902__$1 = cljs.core.__destructure_map(map__49902);
var svc = map__49902__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49902__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49902__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49902__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__49903 = p__49901;
var map__49903__$1 = cljs.core.__destructure_map(map__49903);
var msg = map__49903__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49903__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49903__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49903__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49903__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__49904,p__49905){
var map__49906 = p__49904;
var map__49906__$1 = cljs.core.__destructure_map(map__49906);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49906__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__49907 = p__49905;
var map__49907__$1 = cljs.core.__destructure_map(map__49907);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49907__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__49908,p__49909){
var map__49910 = p__49908;
var map__49910__$1 = cljs.core.__destructure_map(map__49910);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49910__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49910__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__49911 = p__49909;
var map__49911__$1 = cljs.core.__destructure_map(map__49911);
var msg = map__49911__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49911__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__49912,tid){
var map__49913 = p__49912;
var map__49913__$1 = cljs.core.__destructure_map(map__49913);
var svc = map__49913__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49913__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__49918 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__49919 = null;
var count__49920 = (0);
var i__49921 = (0);
while(true){
if((i__49921 < count__49920)){
var vec__49928 = chunk__49919.cljs$core$IIndexed$_nth$arity$2(null,i__49921);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49928,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49928,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__49954 = seq__49918;
var G__49955 = chunk__49919;
var G__49956 = count__49920;
var G__49957 = (i__49921 + (1));
seq__49918 = G__49954;
chunk__49919 = G__49955;
count__49920 = G__49956;
i__49921 = G__49957;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49918);
if(temp__5753__auto__){
var seq__49918__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49918__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__49918__$1);
var G__49958 = cljs.core.chunk_rest(seq__49918__$1);
var G__49959 = c__4649__auto__;
var G__49960 = cljs.core.count(c__4649__auto__);
var G__49961 = (0);
seq__49918 = G__49958;
chunk__49919 = G__49959;
count__49920 = G__49960;
i__49921 = G__49961;
continue;
} else {
var vec__49931 = cljs.core.first(seq__49918__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49931,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49931,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__49964 = cljs.core.next(seq__49918__$1);
var G__49965 = null;
var G__49966 = (0);
var G__49967 = (0);
seq__49918 = G__49964;
chunk__49919 = G__49965;
count__49920 = G__49966;
i__49921 = G__49967;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__49914_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__49914_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__49915_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__49915_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__49916_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__49916_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__49917_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__49917_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__49934){
var map__49935 = p__49934;
var map__49935__$1 = cljs.core.__destructure_map(map__49935);
var svc = map__49935__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49935__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49935__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
