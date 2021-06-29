goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___50272 = arguments.length;
var i__4830__auto___50273 = (0);
while(true){
if((i__4830__auto___50273 < len__4829__auto___50272)){
args__4835__auto__.push((arguments[i__4830__auto___50273]));

var G__50274 = (i__4830__auto___50273 + (1));
i__4830__auto___50273 = G__50274;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50143){
var G__50144 = cljs.core.first(seq50143);
var seq50143__$1 = cljs.core.next(seq50143);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50144,seq50143__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50145 = cljs.core.seq(sources);
var chunk__50146 = null;
var count__50147 = (0);
var i__50148 = (0);
while(true){
if((i__50148 < count__50147)){
var map__50153 = chunk__50146.cljs$core$IIndexed$_nth$arity$2(null,i__50148);
var map__50153__$1 = cljs.core.__destructure_map(map__50153);
var src = map__50153__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50153__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50153__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50153__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50153__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50154){var e_50275 = e50154;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50275);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50275.message)].join('')));
}

var G__50276 = seq__50145;
var G__50277 = chunk__50146;
var G__50278 = count__50147;
var G__50279 = (i__50148 + (1));
seq__50145 = G__50276;
chunk__50146 = G__50277;
count__50147 = G__50278;
i__50148 = G__50279;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50145);
if(temp__5753__auto__){
var seq__50145__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50145__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50145__$1);
var G__50280 = cljs.core.chunk_rest(seq__50145__$1);
var G__50281 = c__4649__auto__;
var G__50282 = cljs.core.count(c__4649__auto__);
var G__50283 = (0);
seq__50145 = G__50280;
chunk__50146 = G__50281;
count__50147 = G__50282;
i__50148 = G__50283;
continue;
} else {
var map__50158 = cljs.core.first(seq__50145__$1);
var map__50158__$1 = cljs.core.__destructure_map(map__50158);
var src = map__50158__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50158__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50158__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50158__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50158__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50161){var e_50284 = e50161;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50284);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50284.message)].join('')));
}

var G__50285 = cljs.core.next(seq__50145__$1);
var G__50286 = null;
var G__50287 = (0);
var G__50288 = (0);
seq__50145 = G__50285;
chunk__50146 = G__50286;
count__50147 = G__50287;
i__50148 = G__50288;
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
return null;
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
var seq__50162 = cljs.core.seq(js_requires);
var chunk__50163 = null;
var count__50164 = (0);
var i__50165 = (0);
while(true){
if((i__50165 < count__50164)){
var js_ns = chunk__50163.cljs$core$IIndexed$_nth$arity$2(null,i__50165);
var require_str_50289 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50289);


var G__50290 = seq__50162;
var G__50291 = chunk__50163;
var G__50292 = count__50164;
var G__50293 = (i__50165 + (1));
seq__50162 = G__50290;
chunk__50163 = G__50291;
count__50164 = G__50292;
i__50165 = G__50293;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50162);
if(temp__5753__auto__){
var seq__50162__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50162__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50162__$1);
var G__50294 = cljs.core.chunk_rest(seq__50162__$1);
var G__50295 = c__4649__auto__;
var G__50296 = cljs.core.count(c__4649__auto__);
var G__50297 = (0);
seq__50162 = G__50294;
chunk__50163 = G__50295;
count__50164 = G__50296;
i__50165 = G__50297;
continue;
} else {
var js_ns = cljs.core.first(seq__50162__$1);
var require_str_50298 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50298);


var G__50299 = cljs.core.next(seq__50162__$1);
var G__50300 = null;
var G__50301 = (0);
var G__50302 = (0);
seq__50162 = G__50299;
chunk__50163 = G__50300;
count__50164 = G__50301;
i__50165 = G__50302;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__50169){
var map__50170 = p__50169;
var map__50170__$1 = cljs.core.__destructure_map(map__50170);
var msg = map__50170__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50170__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50170__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50171(s__50172){
return (new cljs.core.LazySeq(null,(function (){
var s__50172__$1 = s__50172;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50172__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__50177 = cljs.core.first(xs__6308__auto__);
var map__50177__$1 = cljs.core.__destructure_map(map__50177);
var src = map__50177__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50177__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50177__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__50172__$1,map__50177,map__50177__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50170,map__50170__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50171_$_iter__50173(s__50174){
return (new cljs.core.LazySeq(null,((function (s__50172__$1,map__50177,map__50177__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50170,map__50170__$1,msg,info,reload_info){
return (function (){
var s__50174__$1 = s__50174;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__50174__$1);
if(temp__5753__auto____$1){
var s__50174__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50174__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__50174__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__50176 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__50175 = (0);
while(true){
if((i__50175 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__50175);
cljs.core.chunk_append(b__50176,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__50303 = (i__50175 + (1));
i__50175 = G__50303;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50176),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50171_$_iter__50173(cljs.core.chunk_rest(s__50174__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50176),null);
}
} else {
var warning = cljs.core.first(s__50174__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50171_$_iter__50173(cljs.core.rest(s__50174__$2)));
}
} else {
return null;
}
break;
}
});})(s__50172__$1,map__50177,map__50177__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50170,map__50170__$1,msg,info,reload_info))
,null,null));
});})(s__50172__$1,map__50177,map__50177__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50170,map__50170__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50171(cljs.core.rest(s__50172__$1)));
} else {
var G__50304 = cljs.core.rest(s__50172__$1);
s__50172__$1 = G__50304;
continue;
}
} else {
var G__50305 = cljs.core.rest(s__50172__$1);
s__50172__$1 = G__50305;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__50178_50306 = cljs.core.seq(warnings);
var chunk__50179_50307 = null;
var count__50180_50308 = (0);
var i__50181_50309 = (0);
while(true){
if((i__50181_50309 < count__50180_50308)){
var map__50184_50310 = chunk__50179_50307.cljs$core$IIndexed$_nth$arity$2(null,i__50181_50309);
var map__50184_50311__$1 = cljs.core.__destructure_map(map__50184_50310);
var w_50312 = map__50184_50311__$1;
var msg_50313__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50184_50311__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50184_50311__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50184_50311__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50184_50311__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50316)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50314),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50315),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50313__$1)].join(''));


var G__50317 = seq__50178_50306;
var G__50318 = chunk__50179_50307;
var G__50319 = count__50180_50308;
var G__50320 = (i__50181_50309 + (1));
seq__50178_50306 = G__50317;
chunk__50179_50307 = G__50318;
count__50180_50308 = G__50319;
i__50181_50309 = G__50320;
continue;
} else {
var temp__5753__auto___50321 = cljs.core.seq(seq__50178_50306);
if(temp__5753__auto___50321){
var seq__50178_50322__$1 = temp__5753__auto___50321;
if(cljs.core.chunked_seq_QMARK_(seq__50178_50322__$1)){
var c__4649__auto___50323 = cljs.core.chunk_first(seq__50178_50322__$1);
var G__50324 = cljs.core.chunk_rest(seq__50178_50322__$1);
var G__50325 = c__4649__auto___50323;
var G__50326 = cljs.core.count(c__4649__auto___50323);
var G__50327 = (0);
seq__50178_50306 = G__50324;
chunk__50179_50307 = G__50325;
count__50180_50308 = G__50326;
i__50181_50309 = G__50327;
continue;
} else {
var map__50185_50328 = cljs.core.first(seq__50178_50322__$1);
var map__50185_50329__$1 = cljs.core.__destructure_map(map__50185_50328);
var w_50330 = map__50185_50329__$1;
var msg_50331__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50185_50329__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50185_50329__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50185_50329__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50185_50329__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50334)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50332),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50333),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50331__$1)].join(''));


var G__50335 = cljs.core.next(seq__50178_50322__$1);
var G__50336 = null;
var G__50337 = (0);
var G__50338 = (0);
seq__50178_50306 = G__50335;
chunk__50179_50307 = G__50336;
count__50180_50308 = G__50337;
i__50181_50309 = G__50338;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__50168_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50168_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
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
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__50186){
var map__50187 = p__50186;
var map__50187__$1 = cljs.core.__destructure_map(map__50187);
var msg = map__50187__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50187__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__50188 = cljs.core.seq(updates);
var chunk__50190 = null;
var count__50191 = (0);
var i__50192 = (0);
while(true){
if((i__50192 < count__50191)){
var path = chunk__50190.cljs$core$IIndexed$_nth$arity$2(null,i__50192);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50222_50339 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50226_50340 = null;
var count__50227_50341 = (0);
var i__50228_50342 = (0);
while(true){
if((i__50228_50342 < count__50227_50341)){
var node_50343 = chunk__50226_50340.cljs$core$IIndexed$_nth$arity$2(null,i__50228_50342);
if(cljs.core.not(node_50343.shadow$old)){
var path_match_50344 = shadow.cljs.devtools.client.browser.match_paths(node_50343.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50344)){
var new_link_50345 = (function (){var G__50234 = node_50343.cloneNode(true);
G__50234.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50344),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50234;
})();
(node_50343.shadow$old = true);

(new_link_50345.onload = ((function (seq__50222_50339,chunk__50226_50340,count__50227_50341,i__50228_50342,seq__50188,chunk__50190,count__50191,i__50192,new_link_50345,path_match_50344,node_50343,path,map__50187,map__50187__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50343);
});})(seq__50222_50339,chunk__50226_50340,count__50227_50341,i__50228_50342,seq__50188,chunk__50190,count__50191,i__50192,new_link_50345,path_match_50344,node_50343,path,map__50187,map__50187__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50344], 0));

goog.dom.insertSiblingAfter(new_link_50345,node_50343);


var G__50346 = seq__50222_50339;
var G__50347 = chunk__50226_50340;
var G__50348 = count__50227_50341;
var G__50349 = (i__50228_50342 + (1));
seq__50222_50339 = G__50346;
chunk__50226_50340 = G__50347;
count__50227_50341 = G__50348;
i__50228_50342 = G__50349;
continue;
} else {
var G__50350 = seq__50222_50339;
var G__50351 = chunk__50226_50340;
var G__50352 = count__50227_50341;
var G__50353 = (i__50228_50342 + (1));
seq__50222_50339 = G__50350;
chunk__50226_50340 = G__50351;
count__50227_50341 = G__50352;
i__50228_50342 = G__50353;
continue;
}
} else {
var G__50354 = seq__50222_50339;
var G__50355 = chunk__50226_50340;
var G__50356 = count__50227_50341;
var G__50357 = (i__50228_50342 + (1));
seq__50222_50339 = G__50354;
chunk__50226_50340 = G__50355;
count__50227_50341 = G__50356;
i__50228_50342 = G__50357;
continue;
}
} else {
var temp__5753__auto___50358 = cljs.core.seq(seq__50222_50339);
if(temp__5753__auto___50358){
var seq__50222_50359__$1 = temp__5753__auto___50358;
if(cljs.core.chunked_seq_QMARK_(seq__50222_50359__$1)){
var c__4649__auto___50360 = cljs.core.chunk_first(seq__50222_50359__$1);
var G__50361 = cljs.core.chunk_rest(seq__50222_50359__$1);
var G__50362 = c__4649__auto___50360;
var G__50363 = cljs.core.count(c__4649__auto___50360);
var G__50364 = (0);
seq__50222_50339 = G__50361;
chunk__50226_50340 = G__50362;
count__50227_50341 = G__50363;
i__50228_50342 = G__50364;
continue;
} else {
var node_50365 = cljs.core.first(seq__50222_50359__$1);
if(cljs.core.not(node_50365.shadow$old)){
var path_match_50366 = shadow.cljs.devtools.client.browser.match_paths(node_50365.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50366)){
var new_link_50367 = (function (){var G__50235 = node_50365.cloneNode(true);
G__50235.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50366),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50235;
})();
(node_50365.shadow$old = true);

(new_link_50367.onload = ((function (seq__50222_50339,chunk__50226_50340,count__50227_50341,i__50228_50342,seq__50188,chunk__50190,count__50191,i__50192,new_link_50367,path_match_50366,node_50365,seq__50222_50359__$1,temp__5753__auto___50358,path,map__50187,map__50187__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50365);
});})(seq__50222_50339,chunk__50226_50340,count__50227_50341,i__50228_50342,seq__50188,chunk__50190,count__50191,i__50192,new_link_50367,path_match_50366,node_50365,seq__50222_50359__$1,temp__5753__auto___50358,path,map__50187,map__50187__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50366], 0));

goog.dom.insertSiblingAfter(new_link_50367,node_50365);


var G__50368 = cljs.core.next(seq__50222_50359__$1);
var G__50369 = null;
var G__50370 = (0);
var G__50371 = (0);
seq__50222_50339 = G__50368;
chunk__50226_50340 = G__50369;
count__50227_50341 = G__50370;
i__50228_50342 = G__50371;
continue;
} else {
var G__50372 = cljs.core.next(seq__50222_50359__$1);
var G__50373 = null;
var G__50374 = (0);
var G__50375 = (0);
seq__50222_50339 = G__50372;
chunk__50226_50340 = G__50373;
count__50227_50341 = G__50374;
i__50228_50342 = G__50375;
continue;
}
} else {
var G__50376 = cljs.core.next(seq__50222_50359__$1);
var G__50377 = null;
var G__50378 = (0);
var G__50379 = (0);
seq__50222_50339 = G__50376;
chunk__50226_50340 = G__50377;
count__50227_50341 = G__50378;
i__50228_50342 = G__50379;
continue;
}
}
} else {
}
}
break;
}


var G__50380 = seq__50188;
var G__50381 = chunk__50190;
var G__50382 = count__50191;
var G__50383 = (i__50192 + (1));
seq__50188 = G__50380;
chunk__50190 = G__50381;
count__50191 = G__50382;
i__50192 = G__50383;
continue;
} else {
var G__50384 = seq__50188;
var G__50385 = chunk__50190;
var G__50386 = count__50191;
var G__50387 = (i__50192 + (1));
seq__50188 = G__50384;
chunk__50190 = G__50385;
count__50191 = G__50386;
i__50192 = G__50387;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50188);
if(temp__5753__auto__){
var seq__50188__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50188__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50188__$1);
var G__50388 = cljs.core.chunk_rest(seq__50188__$1);
var G__50389 = c__4649__auto__;
var G__50390 = cljs.core.count(c__4649__auto__);
var G__50391 = (0);
seq__50188 = G__50388;
chunk__50190 = G__50389;
count__50191 = G__50390;
i__50192 = G__50391;
continue;
} else {
var path = cljs.core.first(seq__50188__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50236_50392 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50240_50393 = null;
var count__50241_50394 = (0);
var i__50242_50395 = (0);
while(true){
if((i__50242_50395 < count__50241_50394)){
var node_50396 = chunk__50240_50393.cljs$core$IIndexed$_nth$arity$2(null,i__50242_50395);
if(cljs.core.not(node_50396.shadow$old)){
var path_match_50397 = shadow.cljs.devtools.client.browser.match_paths(node_50396.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50397)){
var new_link_50398 = (function (){var G__50248 = node_50396.cloneNode(true);
G__50248.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50397),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50248;
})();
(node_50396.shadow$old = true);

(new_link_50398.onload = ((function (seq__50236_50392,chunk__50240_50393,count__50241_50394,i__50242_50395,seq__50188,chunk__50190,count__50191,i__50192,new_link_50398,path_match_50397,node_50396,path,seq__50188__$1,temp__5753__auto__,map__50187,map__50187__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50396);
});})(seq__50236_50392,chunk__50240_50393,count__50241_50394,i__50242_50395,seq__50188,chunk__50190,count__50191,i__50192,new_link_50398,path_match_50397,node_50396,path,seq__50188__$1,temp__5753__auto__,map__50187,map__50187__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50397], 0));

goog.dom.insertSiblingAfter(new_link_50398,node_50396);


var G__50399 = seq__50236_50392;
var G__50400 = chunk__50240_50393;
var G__50401 = count__50241_50394;
var G__50402 = (i__50242_50395 + (1));
seq__50236_50392 = G__50399;
chunk__50240_50393 = G__50400;
count__50241_50394 = G__50401;
i__50242_50395 = G__50402;
continue;
} else {
var G__50403 = seq__50236_50392;
var G__50404 = chunk__50240_50393;
var G__50405 = count__50241_50394;
var G__50406 = (i__50242_50395 + (1));
seq__50236_50392 = G__50403;
chunk__50240_50393 = G__50404;
count__50241_50394 = G__50405;
i__50242_50395 = G__50406;
continue;
}
} else {
var G__50407 = seq__50236_50392;
var G__50408 = chunk__50240_50393;
var G__50409 = count__50241_50394;
var G__50410 = (i__50242_50395 + (1));
seq__50236_50392 = G__50407;
chunk__50240_50393 = G__50408;
count__50241_50394 = G__50409;
i__50242_50395 = G__50410;
continue;
}
} else {
var temp__5753__auto___50411__$1 = cljs.core.seq(seq__50236_50392);
if(temp__5753__auto___50411__$1){
var seq__50236_50412__$1 = temp__5753__auto___50411__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50236_50412__$1)){
var c__4649__auto___50413 = cljs.core.chunk_first(seq__50236_50412__$1);
var G__50414 = cljs.core.chunk_rest(seq__50236_50412__$1);
var G__50415 = c__4649__auto___50413;
var G__50416 = cljs.core.count(c__4649__auto___50413);
var G__50417 = (0);
seq__50236_50392 = G__50414;
chunk__50240_50393 = G__50415;
count__50241_50394 = G__50416;
i__50242_50395 = G__50417;
continue;
} else {
var node_50418 = cljs.core.first(seq__50236_50412__$1);
if(cljs.core.not(node_50418.shadow$old)){
var path_match_50419 = shadow.cljs.devtools.client.browser.match_paths(node_50418.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50419)){
var new_link_50420 = (function (){var G__50249 = node_50418.cloneNode(true);
G__50249.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50419),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50249;
})();
(node_50418.shadow$old = true);

(new_link_50420.onload = ((function (seq__50236_50392,chunk__50240_50393,count__50241_50394,i__50242_50395,seq__50188,chunk__50190,count__50191,i__50192,new_link_50420,path_match_50419,node_50418,seq__50236_50412__$1,temp__5753__auto___50411__$1,path,seq__50188__$1,temp__5753__auto__,map__50187,map__50187__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50418);
});})(seq__50236_50392,chunk__50240_50393,count__50241_50394,i__50242_50395,seq__50188,chunk__50190,count__50191,i__50192,new_link_50420,path_match_50419,node_50418,seq__50236_50412__$1,temp__5753__auto___50411__$1,path,seq__50188__$1,temp__5753__auto__,map__50187,map__50187__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50419], 0));

goog.dom.insertSiblingAfter(new_link_50420,node_50418);


var G__50421 = cljs.core.next(seq__50236_50412__$1);
var G__50422 = null;
var G__50423 = (0);
var G__50424 = (0);
seq__50236_50392 = G__50421;
chunk__50240_50393 = G__50422;
count__50241_50394 = G__50423;
i__50242_50395 = G__50424;
continue;
} else {
var G__50425 = cljs.core.next(seq__50236_50412__$1);
var G__50426 = null;
var G__50427 = (0);
var G__50428 = (0);
seq__50236_50392 = G__50425;
chunk__50240_50393 = G__50426;
count__50241_50394 = G__50427;
i__50242_50395 = G__50428;
continue;
}
} else {
var G__50429 = cljs.core.next(seq__50236_50412__$1);
var G__50430 = null;
var G__50431 = (0);
var G__50432 = (0);
seq__50236_50392 = G__50429;
chunk__50240_50393 = G__50430;
count__50241_50394 = G__50431;
i__50242_50395 = G__50432;
continue;
}
}
} else {
}
}
break;
}


var G__50433 = cljs.core.next(seq__50188__$1);
var G__50434 = null;
var G__50435 = (0);
var G__50436 = (0);
seq__50188 = G__50433;
chunk__50190 = G__50434;
count__50191 = G__50435;
i__50192 = G__50436;
continue;
} else {
var G__50437 = cljs.core.next(seq__50188__$1);
var G__50438 = null;
var G__50439 = (0);
var G__50440 = (0);
seq__50188 = G__50437;
chunk__50190 = G__50438;
count__50191 = G__50439;
i__50192 = G__50440;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__50250){
var map__50251 = p__50250;
var map__50251__$1 = cljs.core.__destructure_map(map__50251);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50251__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__50252){
var map__50253 = p__50252;
var map__50253__$1 = cljs.core.__destructure_map(map__50253);
var _ = map__50253__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50253__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__50254,done,error){
var map__50255 = p__50254;
var map__50255__$1 = cljs.core.__destructure_map(map__50255);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50255__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__50256,done,error){
var map__50257 = p__50256;
var map__50257__$1 = cljs.core.__destructure_map(map__50257);
var msg = map__50257__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50257__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50257__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50257__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50258){
var map__50259 = p__50258;
var map__50259__$1 = cljs.core.__destructure_map(map__50259);
var src = map__50259__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50259__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__50260 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__50260) : done.call(null,G__50260));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__50261){
var map__50262 = p__50261;
var map__50262__$1 = cljs.core.__destructure_map(map__50262);
var msg__$1 = map__50262__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50262__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e50263){var ex = e50263;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__50264){
var map__50265 = p__50264;
var map__50265__$1 = cljs.core.__destructure_map(map__50265);
var env = map__50265__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50265__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__50266){
var map__50267 = p__50266;
var map__50267__$1 = cljs.core.__destructure_map(map__50267);
var msg = map__50267__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50267__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__50268){
var map__50269 = p__50268;
var map__50269__$1 = cljs.core.__destructure_map(map__50269);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50269__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50269__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__50270){
var map__50271 = p__50270;
var map__50271__$1 = cljs.core.__destructure_map(map__50271);
var svc = map__50271__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50271__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
