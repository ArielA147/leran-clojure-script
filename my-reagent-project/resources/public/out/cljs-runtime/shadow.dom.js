goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_47526 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_47526(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_47527 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_47527(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__46827 = coll;
var G__46828 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__46827,G__46828) : shadow.dom.lazy_native_coll_seq.call(null,G__46827,G__46828));
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
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

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
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__46850 = arguments.length;
switch (G__46850) {
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

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__46862 = arguments.length;
switch (G__46862) {
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

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__46873 = arguments.length;
switch (G__46873) {
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

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__46887 = arguments.length;
switch (G__46887) {
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

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__46897 = arguments.length;
switch (G__46897) {
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

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__46910 = arguments.length;
switch (G__46910) {
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

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e46921){if((e46921 instanceof Object)){
var e = e46921;
return console.log("didnt support attachEvent",el,e);
} else {
throw e46921;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__46932 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__46933 = null;
var count__46934 = (0);
var i__46935 = (0);
while(true){
if((i__46935 < count__46934)){
var el = chunk__46933.cljs$core$IIndexed$_nth$arity$2(null,i__46935);
var handler_47534__$1 = ((function (seq__46932,chunk__46933,count__46934,i__46935,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46932,chunk__46933,count__46934,i__46935,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47534__$1);


var G__47535 = seq__46932;
var G__47536 = chunk__46933;
var G__47537 = count__46934;
var G__47538 = (i__46935 + (1));
seq__46932 = G__47535;
chunk__46933 = G__47536;
count__46934 = G__47537;
i__46935 = G__47538;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46932);
if(temp__5753__auto__){
var seq__46932__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46932__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__46932__$1);
var G__47539 = cljs.core.chunk_rest(seq__46932__$1);
var G__47540 = c__4649__auto__;
var G__47541 = cljs.core.count(c__4649__auto__);
var G__47542 = (0);
seq__46932 = G__47539;
chunk__46933 = G__47540;
count__46934 = G__47541;
i__46935 = G__47542;
continue;
} else {
var el = cljs.core.first(seq__46932__$1);
var handler_47543__$1 = ((function (seq__46932,chunk__46933,count__46934,i__46935,el,seq__46932__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46932,chunk__46933,count__46934,i__46935,el,seq__46932__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47543__$1);


var G__47544 = cljs.core.next(seq__46932__$1);
var G__47545 = null;
var G__47546 = (0);
var G__47547 = (0);
seq__46932 = G__47544;
chunk__46933 = G__47545;
count__46934 = G__47546;
i__46935 = G__47547;
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
var G__46952 = arguments.length;
switch (G__46952) {
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

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__46965 = cljs.core.seq(events);
var chunk__46966 = null;
var count__46967 = (0);
var i__46968 = (0);
while(true){
if((i__46968 < count__46967)){
var vec__46981 = chunk__46966.cljs$core$IIndexed$_nth$arity$2(null,i__46968);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46981,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46981,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47551 = seq__46965;
var G__47552 = chunk__46966;
var G__47553 = count__46967;
var G__47554 = (i__46968 + (1));
seq__46965 = G__47551;
chunk__46966 = G__47552;
count__46967 = G__47553;
i__46968 = G__47554;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46965);
if(temp__5753__auto__){
var seq__46965__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46965__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__46965__$1);
var G__47555 = cljs.core.chunk_rest(seq__46965__$1);
var G__47556 = c__4649__auto__;
var G__47557 = cljs.core.count(c__4649__auto__);
var G__47558 = (0);
seq__46965 = G__47555;
chunk__46966 = G__47556;
count__46967 = G__47557;
i__46968 = G__47558;
continue;
} else {
var vec__46985 = cljs.core.first(seq__46965__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46985,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46985,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47559 = cljs.core.next(seq__46965__$1);
var G__47560 = null;
var G__47561 = (0);
var G__47562 = (0);
seq__46965 = G__47559;
chunk__46966 = G__47560;
count__46967 = G__47561;
i__46968 = G__47562;
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
var seq__46991 = cljs.core.seq(styles);
var chunk__46992 = null;
var count__46993 = (0);
var i__46994 = (0);
while(true){
if((i__46994 < count__46993)){
var vec__47012 = chunk__46992.cljs$core$IIndexed$_nth$arity$2(null,i__46994);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47012,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47012,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47563 = seq__46991;
var G__47564 = chunk__46992;
var G__47565 = count__46993;
var G__47566 = (i__46994 + (1));
seq__46991 = G__47563;
chunk__46992 = G__47564;
count__46993 = G__47565;
i__46994 = G__47566;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46991);
if(temp__5753__auto__){
var seq__46991__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46991__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__46991__$1);
var G__47567 = cljs.core.chunk_rest(seq__46991__$1);
var G__47568 = c__4649__auto__;
var G__47569 = cljs.core.count(c__4649__auto__);
var G__47570 = (0);
seq__46991 = G__47567;
chunk__46992 = G__47568;
count__46993 = G__47569;
i__46994 = G__47570;
continue;
} else {
var vec__47018 = cljs.core.first(seq__46991__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47018,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47018,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47571 = cljs.core.next(seq__46991__$1);
var G__47572 = null;
var G__47573 = (0);
var G__47574 = (0);
seq__46991 = G__47571;
chunk__46992 = G__47572;
count__46993 = G__47573;
i__46994 = G__47574;
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
var G__47025_47575 = key;
var G__47025_47576__$1 = (((G__47025_47575 instanceof cljs.core.Keyword))?G__47025_47575.fqn:null);
switch (G__47025_47576__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

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
var ks_47578 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_47578,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_47578,"aria-");
}
})())){
el.setAttribute(ks_47578,value);
} else {
(el[ks_47578] = value);
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
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
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
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47041){
var map__47042 = p__47041;
var map__47042__$1 = cljs.core.__destructure_map(map__47042);
var props = map__47042__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47042__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47044 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47044,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47044,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47044,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47049 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47049,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47049;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47054 = arguments.length;
switch (G__47054) {
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

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47063){
var vec__47065 = p__47063;
var seq__47066 = cljs.core.seq(vec__47065);
var first__47067 = cljs.core.first(seq__47066);
var seq__47066__$1 = cljs.core.next(seq__47066);
var nn = first__47067;
var first__47067__$1 = cljs.core.first(seq__47066__$1);
var seq__47066__$2 = cljs.core.next(seq__47066__$1);
var np = first__47067__$1;
var nc = seq__47066__$2;
var node = vec__47065;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47070 = nn;
var G__47071 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47070,G__47071) : create_fn.call(null,G__47070,G__47071));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47076 = nn;
var G__47077 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47076,G__47077) : create_fn.call(null,G__47076,G__47077));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47081 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47081,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47081,(1),null);
var seq__47085_47580 = cljs.core.seq(node_children);
var chunk__47086_47581 = null;
var count__47087_47582 = (0);
var i__47088_47583 = (0);
while(true){
if((i__47088_47583 < count__47087_47582)){
var child_struct_47584 = chunk__47086_47581.cljs$core$IIndexed$_nth$arity$2(null,i__47088_47583);
var children_47585 = shadow.dom.dom_node(child_struct_47584);
if(cljs.core.seq_QMARK_(children_47585)){
var seq__47124_47586 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47585));
var chunk__47126_47587 = null;
var count__47127_47588 = (0);
var i__47128_47589 = (0);
while(true){
if((i__47128_47589 < count__47127_47588)){
var child_47590 = chunk__47126_47587.cljs$core$IIndexed$_nth$arity$2(null,i__47128_47589);
if(cljs.core.truth_(child_47590)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47590);


var G__47591 = seq__47124_47586;
var G__47592 = chunk__47126_47587;
var G__47593 = count__47127_47588;
var G__47594 = (i__47128_47589 + (1));
seq__47124_47586 = G__47591;
chunk__47126_47587 = G__47592;
count__47127_47588 = G__47593;
i__47128_47589 = G__47594;
continue;
} else {
var G__47595 = seq__47124_47586;
var G__47596 = chunk__47126_47587;
var G__47597 = count__47127_47588;
var G__47598 = (i__47128_47589 + (1));
seq__47124_47586 = G__47595;
chunk__47126_47587 = G__47596;
count__47127_47588 = G__47597;
i__47128_47589 = G__47598;
continue;
}
} else {
var temp__5753__auto___47599 = cljs.core.seq(seq__47124_47586);
if(temp__5753__auto___47599){
var seq__47124_47600__$1 = temp__5753__auto___47599;
if(cljs.core.chunked_seq_QMARK_(seq__47124_47600__$1)){
var c__4649__auto___47601 = cljs.core.chunk_first(seq__47124_47600__$1);
var G__47602 = cljs.core.chunk_rest(seq__47124_47600__$1);
var G__47603 = c__4649__auto___47601;
var G__47604 = cljs.core.count(c__4649__auto___47601);
var G__47605 = (0);
seq__47124_47586 = G__47602;
chunk__47126_47587 = G__47603;
count__47127_47588 = G__47604;
i__47128_47589 = G__47605;
continue;
} else {
var child_47606 = cljs.core.first(seq__47124_47600__$1);
if(cljs.core.truth_(child_47606)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47606);


var G__47607 = cljs.core.next(seq__47124_47600__$1);
var G__47608 = null;
var G__47609 = (0);
var G__47610 = (0);
seq__47124_47586 = G__47607;
chunk__47126_47587 = G__47608;
count__47127_47588 = G__47609;
i__47128_47589 = G__47610;
continue;
} else {
var G__47611 = cljs.core.next(seq__47124_47600__$1);
var G__47612 = null;
var G__47613 = (0);
var G__47614 = (0);
seq__47124_47586 = G__47611;
chunk__47126_47587 = G__47612;
count__47127_47588 = G__47613;
i__47128_47589 = G__47614;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47585);
}


var G__47615 = seq__47085_47580;
var G__47616 = chunk__47086_47581;
var G__47617 = count__47087_47582;
var G__47618 = (i__47088_47583 + (1));
seq__47085_47580 = G__47615;
chunk__47086_47581 = G__47616;
count__47087_47582 = G__47617;
i__47088_47583 = G__47618;
continue;
} else {
var temp__5753__auto___47619 = cljs.core.seq(seq__47085_47580);
if(temp__5753__auto___47619){
var seq__47085_47620__$1 = temp__5753__auto___47619;
if(cljs.core.chunked_seq_QMARK_(seq__47085_47620__$1)){
var c__4649__auto___47621 = cljs.core.chunk_first(seq__47085_47620__$1);
var G__47622 = cljs.core.chunk_rest(seq__47085_47620__$1);
var G__47623 = c__4649__auto___47621;
var G__47624 = cljs.core.count(c__4649__auto___47621);
var G__47625 = (0);
seq__47085_47580 = G__47622;
chunk__47086_47581 = G__47623;
count__47087_47582 = G__47624;
i__47088_47583 = G__47625;
continue;
} else {
var child_struct_47626 = cljs.core.first(seq__47085_47620__$1);
var children_47627 = shadow.dom.dom_node(child_struct_47626);
if(cljs.core.seq_QMARK_(children_47627)){
var seq__47135_47628 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47627));
var chunk__47137_47629 = null;
var count__47138_47630 = (0);
var i__47139_47631 = (0);
while(true){
if((i__47139_47631 < count__47138_47630)){
var child_47632 = chunk__47137_47629.cljs$core$IIndexed$_nth$arity$2(null,i__47139_47631);
if(cljs.core.truth_(child_47632)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47632);


var G__47633 = seq__47135_47628;
var G__47634 = chunk__47137_47629;
var G__47635 = count__47138_47630;
var G__47636 = (i__47139_47631 + (1));
seq__47135_47628 = G__47633;
chunk__47137_47629 = G__47634;
count__47138_47630 = G__47635;
i__47139_47631 = G__47636;
continue;
} else {
var G__47637 = seq__47135_47628;
var G__47638 = chunk__47137_47629;
var G__47639 = count__47138_47630;
var G__47640 = (i__47139_47631 + (1));
seq__47135_47628 = G__47637;
chunk__47137_47629 = G__47638;
count__47138_47630 = G__47639;
i__47139_47631 = G__47640;
continue;
}
} else {
var temp__5753__auto___47641__$1 = cljs.core.seq(seq__47135_47628);
if(temp__5753__auto___47641__$1){
var seq__47135_47642__$1 = temp__5753__auto___47641__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47135_47642__$1)){
var c__4649__auto___47643 = cljs.core.chunk_first(seq__47135_47642__$1);
var G__47644 = cljs.core.chunk_rest(seq__47135_47642__$1);
var G__47645 = c__4649__auto___47643;
var G__47646 = cljs.core.count(c__4649__auto___47643);
var G__47647 = (0);
seq__47135_47628 = G__47644;
chunk__47137_47629 = G__47645;
count__47138_47630 = G__47646;
i__47139_47631 = G__47647;
continue;
} else {
var child_47648 = cljs.core.first(seq__47135_47642__$1);
if(cljs.core.truth_(child_47648)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47648);


var G__47649 = cljs.core.next(seq__47135_47642__$1);
var G__47650 = null;
var G__47651 = (0);
var G__47652 = (0);
seq__47135_47628 = G__47649;
chunk__47137_47629 = G__47650;
count__47138_47630 = G__47651;
i__47139_47631 = G__47652;
continue;
} else {
var G__47653 = cljs.core.next(seq__47135_47642__$1);
var G__47654 = null;
var G__47655 = (0);
var G__47656 = (0);
seq__47135_47628 = G__47653;
chunk__47137_47629 = G__47654;
count__47138_47630 = G__47655;
i__47139_47631 = G__47656;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47627);
}


var G__47657 = cljs.core.next(seq__47085_47620__$1);
var G__47658 = null;
var G__47659 = (0);
var G__47660 = (0);
seq__47085_47580 = G__47657;
chunk__47086_47581 = G__47658;
count__47087_47582 = G__47659;
i__47088_47583 = G__47660;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47157 = cljs.core.seq(node);
var chunk__47158 = null;
var count__47159 = (0);
var i__47160 = (0);
while(true){
if((i__47160 < count__47159)){
var n = chunk__47158.cljs$core$IIndexed$_nth$arity$2(null,i__47160);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47661 = seq__47157;
var G__47662 = chunk__47158;
var G__47663 = count__47159;
var G__47664 = (i__47160 + (1));
seq__47157 = G__47661;
chunk__47158 = G__47662;
count__47159 = G__47663;
i__47160 = G__47664;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47157);
if(temp__5753__auto__){
var seq__47157__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47157__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47157__$1);
var G__47665 = cljs.core.chunk_rest(seq__47157__$1);
var G__47666 = c__4649__auto__;
var G__47667 = cljs.core.count(c__4649__auto__);
var G__47668 = (0);
seq__47157 = G__47665;
chunk__47158 = G__47666;
count__47159 = G__47667;
i__47160 = G__47668;
continue;
} else {
var n = cljs.core.first(seq__47157__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47669 = cljs.core.next(seq__47157__$1);
var G__47670 = null;
var G__47671 = (0);
var G__47672 = (0);
seq__47157 = G__47669;
chunk__47158 = G__47670;
count__47159 = G__47671;
i__47160 = G__47672;
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
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47178 = arguments.length;
switch (G__47178) {
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

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47189 = arguments.length;
switch (G__47189) {
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

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

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
var G__47196 = arguments.length;
switch (G__47196) {
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

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___47676 = arguments.length;
var i__4830__auto___47677 = (0);
while(true){
if((i__4830__auto___47677 < len__4829__auto___47676)){
args__4835__auto__.push((arguments[i__4830__auto___47677]));

var G__47678 = (i__4830__auto___47677 + (1));
i__4830__auto___47677 = G__47678;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47222_47679 = cljs.core.seq(nodes);
var chunk__47223_47680 = null;
var count__47224_47681 = (0);
var i__47225_47682 = (0);
while(true){
if((i__47225_47682 < count__47224_47681)){
var node_47683 = chunk__47223_47680.cljs$core$IIndexed$_nth$arity$2(null,i__47225_47682);
fragment.appendChild(shadow.dom._to_dom(node_47683));


var G__47684 = seq__47222_47679;
var G__47685 = chunk__47223_47680;
var G__47686 = count__47224_47681;
var G__47687 = (i__47225_47682 + (1));
seq__47222_47679 = G__47684;
chunk__47223_47680 = G__47685;
count__47224_47681 = G__47686;
i__47225_47682 = G__47687;
continue;
} else {
var temp__5753__auto___47688 = cljs.core.seq(seq__47222_47679);
if(temp__5753__auto___47688){
var seq__47222_47689__$1 = temp__5753__auto___47688;
if(cljs.core.chunked_seq_QMARK_(seq__47222_47689__$1)){
var c__4649__auto___47690 = cljs.core.chunk_first(seq__47222_47689__$1);
var G__47691 = cljs.core.chunk_rest(seq__47222_47689__$1);
var G__47692 = c__4649__auto___47690;
var G__47693 = cljs.core.count(c__4649__auto___47690);
var G__47694 = (0);
seq__47222_47679 = G__47691;
chunk__47223_47680 = G__47692;
count__47224_47681 = G__47693;
i__47225_47682 = G__47694;
continue;
} else {
var node_47695 = cljs.core.first(seq__47222_47689__$1);
fragment.appendChild(shadow.dom._to_dom(node_47695));


var G__47696 = cljs.core.next(seq__47222_47689__$1);
var G__47697 = null;
var G__47698 = (0);
var G__47699 = (0);
seq__47222_47679 = G__47696;
chunk__47223_47680 = G__47697;
count__47224_47681 = G__47698;
i__47225_47682 = G__47699;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47203){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47203));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47238_47703 = cljs.core.seq(scripts);
var chunk__47239_47704 = null;
var count__47240_47705 = (0);
var i__47241_47706 = (0);
while(true){
if((i__47241_47706 < count__47240_47705)){
var vec__47253_47707 = chunk__47239_47704.cljs$core$IIndexed$_nth$arity$2(null,i__47241_47706);
var script_tag_47708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47253_47707,(0),null);
var script_body_47709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47253_47707,(1),null);
eval(script_body_47709);


var G__47710 = seq__47238_47703;
var G__47711 = chunk__47239_47704;
var G__47712 = count__47240_47705;
var G__47713 = (i__47241_47706 + (1));
seq__47238_47703 = G__47710;
chunk__47239_47704 = G__47711;
count__47240_47705 = G__47712;
i__47241_47706 = G__47713;
continue;
} else {
var temp__5753__auto___47714 = cljs.core.seq(seq__47238_47703);
if(temp__5753__auto___47714){
var seq__47238_47715__$1 = temp__5753__auto___47714;
if(cljs.core.chunked_seq_QMARK_(seq__47238_47715__$1)){
var c__4649__auto___47716 = cljs.core.chunk_first(seq__47238_47715__$1);
var G__47717 = cljs.core.chunk_rest(seq__47238_47715__$1);
var G__47718 = c__4649__auto___47716;
var G__47719 = cljs.core.count(c__4649__auto___47716);
var G__47720 = (0);
seq__47238_47703 = G__47717;
chunk__47239_47704 = G__47718;
count__47240_47705 = G__47719;
i__47241_47706 = G__47720;
continue;
} else {
var vec__47262_47721 = cljs.core.first(seq__47238_47715__$1);
var script_tag_47722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47262_47721,(0),null);
var script_body_47723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47262_47721,(1),null);
eval(script_body_47723);


var G__47724 = cljs.core.next(seq__47238_47715__$1);
var G__47725 = null;
var G__47726 = (0);
var G__47727 = (0);
seq__47238_47703 = G__47724;
chunk__47239_47704 = G__47725;
count__47240_47705 = G__47726;
i__47241_47706 = G__47727;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47265){
var vec__47266 = p__47265;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47266,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47266,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__47270 = arguments.length;
switch (G__47270) {
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

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
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
var seq__47311 = cljs.core.seq(style_keys);
var chunk__47312 = null;
var count__47313 = (0);
var i__47314 = (0);
while(true){
if((i__47314 < count__47313)){
var it = chunk__47312.cljs$core$IIndexed$_nth$arity$2(null,i__47314);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47733 = seq__47311;
var G__47734 = chunk__47312;
var G__47735 = count__47313;
var G__47736 = (i__47314 + (1));
seq__47311 = G__47733;
chunk__47312 = G__47734;
count__47313 = G__47735;
i__47314 = G__47736;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47311);
if(temp__5753__auto__){
var seq__47311__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47311__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47311__$1);
var G__47737 = cljs.core.chunk_rest(seq__47311__$1);
var G__47738 = c__4649__auto__;
var G__47739 = cljs.core.count(c__4649__auto__);
var G__47740 = (0);
seq__47311 = G__47737;
chunk__47312 = G__47738;
count__47313 = G__47739;
i__47314 = G__47740;
continue;
} else {
var it = cljs.core.first(seq__47311__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47741 = cljs.core.next(seq__47311__$1);
var G__47742 = null;
var G__47743 = (0);
var G__47744 = (0);
seq__47311 = G__47741;
chunk__47312 = G__47742;
count__47313 = G__47743;
i__47314 = G__47744;
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
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k47316,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__47320 = k47316;
var G__47320__$1 = (((G__47320 instanceof cljs.core.Keyword))?G__47320.fqn:null);
switch (G__47320__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47316,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__47325){
var vec__47328 = p__47325;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47328,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47328,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47315){
var self__ = this;
var G__47315__$1 = this;
return (new cljs.core.RecordIter((0),G__47315__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47317,other47318){
var self__ = this;
var this47317__$1 = this;
return (((!((other47318 == null)))) && ((((this47317__$1.constructor === other47318.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47317__$1.x,other47318.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47317__$1.y,other47318.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47317__$1.__extmap,other47318.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k47316){
var self__ = this;
var this__4479__auto____$1 = this;
var G__47352 = k47316;
var G__47352__$1 = (((G__47352 instanceof cljs.core.Keyword))?G__47352.fqn:null);
switch (G__47352__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47316);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__47315){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__47356 = cljs.core.keyword_identical_QMARK_;
var expr__47357 = k__4481__auto__;
if(cljs.core.truth_((pred__47356.cljs$core$IFn$_invoke$arity$2 ? pred__47356.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__47357) : pred__47356.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__47357)))){
return (new shadow.dom.Coordinate(G__47315,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47356.cljs$core$IFn$_invoke$arity$2 ? pred__47356.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__47357) : pred__47356.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__47357)))){
return (new shadow.dom.Coordinate(self__.x,G__47315,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__47315),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__47315){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47315,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47319){
var extmap__4512__auto__ = (function (){var G__47373 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47319,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47319)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47373);
} else {
return G__47373;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47319),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47319),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k47382,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__47392 = k47382;
var G__47392__$1 = (((G__47392 instanceof cljs.core.Keyword))?G__47392.fqn:null);
switch (G__47392__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47382,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__47396){
var vec__47398 = p__47396;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47398,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47398,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47381){
var self__ = this;
var G__47381__$1 = this;
return (new cljs.core.RecordIter((0),G__47381__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47383,other47384){
var self__ = this;
var this47383__$1 = this;
return (((!((other47384 == null)))) && ((((this47383__$1.constructor === other47384.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47383__$1.w,other47384.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47383__$1.h,other47384.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47383__$1.__extmap,other47384.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k47382){
var self__ = this;
var this__4479__auto____$1 = this;
var G__47420 = k47382;
var G__47420__$1 = (((G__47420 instanceof cljs.core.Keyword))?G__47420.fqn:null);
switch (G__47420__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47382);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__47381){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__47423 = cljs.core.keyword_identical_QMARK_;
var expr__47424 = k__4481__auto__;
if(cljs.core.truth_((pred__47423.cljs$core$IFn$_invoke$arity$2 ? pred__47423.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__47424) : pred__47423.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__47424)))){
return (new shadow.dom.Size(G__47381,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47423.cljs$core$IFn$_invoke$arity$2 ? pred__47423.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__47424) : pred__47423.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__47424)))){
return (new shadow.dom.Size(self__.w,G__47381,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__47381),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__47381){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47381,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47386){
var extmap__4512__auto__ = (function (){var G__47439 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47386,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47386)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47439);
} else {
return G__47439;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47386),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47386),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
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
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__47754 = (i + (1));
var G__47755 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__47754;
ret = G__47755;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47451){
var vec__47452 = p__47451;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47452,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47452,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47456 = arguments.length;
switch (G__47456) {
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

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
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
var G__47757 = ps;
var G__47758 = (i + (1));
el__$1 = G__47757;
i = G__47758;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__47457 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47457,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47457,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47457,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47460_47759 = cljs.core.seq(props);
var chunk__47461_47760 = null;
var count__47462_47761 = (0);
var i__47463_47762 = (0);
while(true){
if((i__47463_47762 < count__47462_47761)){
var vec__47470_47763 = chunk__47461_47760.cljs$core$IIndexed$_nth$arity$2(null,i__47463_47762);
var k_47764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47470_47763,(0),null);
var v_47765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47470_47763,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_47764);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47764),v_47765);


var G__47766 = seq__47460_47759;
var G__47767 = chunk__47461_47760;
var G__47768 = count__47462_47761;
var G__47769 = (i__47463_47762 + (1));
seq__47460_47759 = G__47766;
chunk__47461_47760 = G__47767;
count__47462_47761 = G__47768;
i__47463_47762 = G__47769;
continue;
} else {
var temp__5753__auto___47770 = cljs.core.seq(seq__47460_47759);
if(temp__5753__auto___47770){
var seq__47460_47771__$1 = temp__5753__auto___47770;
if(cljs.core.chunked_seq_QMARK_(seq__47460_47771__$1)){
var c__4649__auto___47772 = cljs.core.chunk_first(seq__47460_47771__$1);
var G__47773 = cljs.core.chunk_rest(seq__47460_47771__$1);
var G__47774 = c__4649__auto___47772;
var G__47775 = cljs.core.count(c__4649__auto___47772);
var G__47776 = (0);
seq__47460_47759 = G__47773;
chunk__47461_47760 = G__47774;
count__47462_47761 = G__47775;
i__47463_47762 = G__47776;
continue;
} else {
var vec__47473_47777 = cljs.core.first(seq__47460_47771__$1);
var k_47778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47473_47777,(0),null);
var v_47779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47473_47777,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_47778);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47778),v_47779);


var G__47780 = cljs.core.next(seq__47460_47771__$1);
var G__47781 = null;
var G__47782 = (0);
var G__47783 = (0);
seq__47460_47759 = G__47780;
chunk__47461_47760 = G__47781;
count__47462_47761 = G__47782;
i__47463_47762 = G__47783;
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
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__47477 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47477,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47477,(1),null);
var seq__47480_47787 = cljs.core.seq(node_children);
var chunk__47482_47788 = null;
var count__47483_47789 = (0);
var i__47484_47790 = (0);
while(true){
if((i__47484_47790 < count__47483_47789)){
var child_struct_47791 = chunk__47482_47788.cljs$core$IIndexed$_nth$arity$2(null,i__47484_47790);
if((!((child_struct_47791 == null)))){
if(typeof child_struct_47791 === 'string'){
var text_47792 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47792),child_struct_47791].join(''));
} else {
var children_47793 = shadow.dom.svg_node(child_struct_47791);
if(cljs.core.seq_QMARK_(children_47793)){
var seq__47498_47794 = cljs.core.seq(children_47793);
var chunk__47500_47795 = null;
var count__47501_47796 = (0);
var i__47502_47797 = (0);
while(true){
if((i__47502_47797 < count__47501_47796)){
var child_47798 = chunk__47500_47795.cljs$core$IIndexed$_nth$arity$2(null,i__47502_47797);
if(cljs.core.truth_(child_47798)){
node.appendChild(child_47798);


var G__47799 = seq__47498_47794;
var G__47800 = chunk__47500_47795;
var G__47801 = count__47501_47796;
var G__47802 = (i__47502_47797 + (1));
seq__47498_47794 = G__47799;
chunk__47500_47795 = G__47800;
count__47501_47796 = G__47801;
i__47502_47797 = G__47802;
continue;
} else {
var G__47803 = seq__47498_47794;
var G__47804 = chunk__47500_47795;
var G__47805 = count__47501_47796;
var G__47806 = (i__47502_47797 + (1));
seq__47498_47794 = G__47803;
chunk__47500_47795 = G__47804;
count__47501_47796 = G__47805;
i__47502_47797 = G__47806;
continue;
}
} else {
var temp__5753__auto___47807 = cljs.core.seq(seq__47498_47794);
if(temp__5753__auto___47807){
var seq__47498_47808__$1 = temp__5753__auto___47807;
if(cljs.core.chunked_seq_QMARK_(seq__47498_47808__$1)){
var c__4649__auto___47809 = cljs.core.chunk_first(seq__47498_47808__$1);
var G__47810 = cljs.core.chunk_rest(seq__47498_47808__$1);
var G__47811 = c__4649__auto___47809;
var G__47812 = cljs.core.count(c__4649__auto___47809);
var G__47813 = (0);
seq__47498_47794 = G__47810;
chunk__47500_47795 = G__47811;
count__47501_47796 = G__47812;
i__47502_47797 = G__47813;
continue;
} else {
var child_47818 = cljs.core.first(seq__47498_47808__$1);
if(cljs.core.truth_(child_47818)){
node.appendChild(child_47818);


var G__47819 = cljs.core.next(seq__47498_47808__$1);
var G__47820 = null;
var G__47821 = (0);
var G__47822 = (0);
seq__47498_47794 = G__47819;
chunk__47500_47795 = G__47820;
count__47501_47796 = G__47821;
i__47502_47797 = G__47822;
continue;
} else {
var G__47823 = cljs.core.next(seq__47498_47808__$1);
var G__47824 = null;
var G__47825 = (0);
var G__47826 = (0);
seq__47498_47794 = G__47823;
chunk__47500_47795 = G__47824;
count__47501_47796 = G__47825;
i__47502_47797 = G__47826;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47793);
}
}


var G__47827 = seq__47480_47787;
var G__47828 = chunk__47482_47788;
var G__47829 = count__47483_47789;
var G__47830 = (i__47484_47790 + (1));
seq__47480_47787 = G__47827;
chunk__47482_47788 = G__47828;
count__47483_47789 = G__47829;
i__47484_47790 = G__47830;
continue;
} else {
var G__47831 = seq__47480_47787;
var G__47832 = chunk__47482_47788;
var G__47833 = count__47483_47789;
var G__47834 = (i__47484_47790 + (1));
seq__47480_47787 = G__47831;
chunk__47482_47788 = G__47832;
count__47483_47789 = G__47833;
i__47484_47790 = G__47834;
continue;
}
} else {
var temp__5753__auto___47835 = cljs.core.seq(seq__47480_47787);
if(temp__5753__auto___47835){
var seq__47480_47836__$1 = temp__5753__auto___47835;
if(cljs.core.chunked_seq_QMARK_(seq__47480_47836__$1)){
var c__4649__auto___47837 = cljs.core.chunk_first(seq__47480_47836__$1);
var G__47838 = cljs.core.chunk_rest(seq__47480_47836__$1);
var G__47839 = c__4649__auto___47837;
var G__47840 = cljs.core.count(c__4649__auto___47837);
var G__47841 = (0);
seq__47480_47787 = G__47838;
chunk__47482_47788 = G__47839;
count__47483_47789 = G__47840;
i__47484_47790 = G__47841;
continue;
} else {
var child_struct_47842 = cljs.core.first(seq__47480_47836__$1);
if((!((child_struct_47842 == null)))){
if(typeof child_struct_47842 === 'string'){
var text_47843 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47843),child_struct_47842].join(''));
} else {
var children_47844 = shadow.dom.svg_node(child_struct_47842);
if(cljs.core.seq_QMARK_(children_47844)){
var seq__47504_47845 = cljs.core.seq(children_47844);
var chunk__47506_47846 = null;
var count__47507_47847 = (0);
var i__47508_47848 = (0);
while(true){
if((i__47508_47848 < count__47507_47847)){
var child_47849 = chunk__47506_47846.cljs$core$IIndexed$_nth$arity$2(null,i__47508_47848);
if(cljs.core.truth_(child_47849)){
node.appendChild(child_47849);


var G__47850 = seq__47504_47845;
var G__47851 = chunk__47506_47846;
var G__47852 = count__47507_47847;
var G__47853 = (i__47508_47848 + (1));
seq__47504_47845 = G__47850;
chunk__47506_47846 = G__47851;
count__47507_47847 = G__47852;
i__47508_47848 = G__47853;
continue;
} else {
var G__47854 = seq__47504_47845;
var G__47855 = chunk__47506_47846;
var G__47856 = count__47507_47847;
var G__47857 = (i__47508_47848 + (1));
seq__47504_47845 = G__47854;
chunk__47506_47846 = G__47855;
count__47507_47847 = G__47856;
i__47508_47848 = G__47857;
continue;
}
} else {
var temp__5753__auto___47858__$1 = cljs.core.seq(seq__47504_47845);
if(temp__5753__auto___47858__$1){
var seq__47504_47859__$1 = temp__5753__auto___47858__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47504_47859__$1)){
var c__4649__auto___47860 = cljs.core.chunk_first(seq__47504_47859__$1);
var G__47861 = cljs.core.chunk_rest(seq__47504_47859__$1);
var G__47862 = c__4649__auto___47860;
var G__47863 = cljs.core.count(c__4649__auto___47860);
var G__47864 = (0);
seq__47504_47845 = G__47861;
chunk__47506_47846 = G__47862;
count__47507_47847 = G__47863;
i__47508_47848 = G__47864;
continue;
} else {
var child_47865 = cljs.core.first(seq__47504_47859__$1);
if(cljs.core.truth_(child_47865)){
node.appendChild(child_47865);


var G__47866 = cljs.core.next(seq__47504_47859__$1);
var G__47867 = null;
var G__47868 = (0);
var G__47869 = (0);
seq__47504_47845 = G__47866;
chunk__47506_47846 = G__47867;
count__47507_47847 = G__47868;
i__47508_47848 = G__47869;
continue;
} else {
var G__47870 = cljs.core.next(seq__47504_47859__$1);
var G__47871 = null;
var G__47872 = (0);
var G__47873 = (0);
seq__47504_47845 = G__47870;
chunk__47506_47846 = G__47871;
count__47507_47847 = G__47872;
i__47508_47848 = G__47873;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47844);
}
}


var G__47874 = cljs.core.next(seq__47480_47836__$1);
var G__47875 = null;
var G__47876 = (0);
var G__47877 = (0);
seq__47480_47787 = G__47874;
chunk__47482_47788 = G__47875;
count__47483_47789 = G__47876;
i__47484_47790 = G__47877;
continue;
} else {
var G__47878 = cljs.core.next(seq__47480_47836__$1);
var G__47879 = null;
var G__47880 = (0);
var G__47881 = (0);
seq__47480_47787 = G__47878;
chunk__47482_47788 = G__47879;
count__47483_47789 = G__47880;
i__47484_47790 = G__47881;
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

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___47882 = arguments.length;
var i__4830__auto___47883 = (0);
while(true){
if((i__4830__auto___47883 < len__4829__auto___47882)){
args__4835__auto__.push((arguments[i__4830__auto___47883]));

var G__47884 = (i__4830__auto___47883 + (1));
i__4830__auto___47883 = G__47884;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq47510){
var G__47511 = cljs.core.first(seq47510);
var seq47510__$1 = cljs.core.next(seq47510);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47511,seq47510__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__47513 = arguments.length;
switch (G__47513) {
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

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__44987__auto___47890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44988__auto__ = (function (){var switch__44793__auto__ = (function (state_47518){
var state_val_47519 = (state_47518[(1)]);
if((state_val_47519 === (1))){
var state_47518__$1 = state_47518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47518__$1,(2),once_or_cleanup);
} else {
if((state_val_47519 === (2))){
var inst_47515 = (state_47518[(2)]);
var inst_47516 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_47518__$1 = (function (){var statearr_47520 = state_47518;
(statearr_47520[(7)] = inst_47515);

return statearr_47520;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47518__$1,inst_47516);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__44794__auto__ = null;
var shadow$dom$state_machine__44794__auto____0 = (function (){
var statearr_47521 = [null,null,null,null,null,null,null,null];
(statearr_47521[(0)] = shadow$dom$state_machine__44794__auto__);

(statearr_47521[(1)] = (1));

return statearr_47521;
});
var shadow$dom$state_machine__44794__auto____1 = (function (state_47518){
while(true){
var ret_value__44795__auto__ = (function (){try{while(true){
var result__44796__auto__ = switch__44793__auto__(state_47518);
if(cljs.core.keyword_identical_QMARK_(result__44796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44796__auto__;
}
break;
}
}catch (e47522){var ex__44797__auto__ = e47522;
var statearr_47523_47891 = state_47518;
(statearr_47523_47891[(2)] = ex__44797__auto__);


if(cljs.core.seq((state_47518[(4)]))){
var statearr_47524_47892 = state_47518;
(statearr_47524_47892[(1)] = cljs.core.first((state_47518[(4)])));

} else {
throw ex__44797__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47896 = state_47518;
state_47518 = G__47896;
continue;
} else {
return ret_value__44795__auto__;
}
break;
}
});
shadow$dom$state_machine__44794__auto__ = function(state_47518){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__44794__auto____0.call(this);
case 1:
return shadow$dom$state_machine__44794__auto____1.call(this,state_47518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__44794__auto____0;
shadow$dom$state_machine__44794__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__44794__auto____1;
return shadow$dom$state_machine__44794__auto__;
})()
})();
var state__44989__auto__ = (function (){var statearr_47525 = f__44988__auto__();
(statearr_47525[(6)] = c__44987__auto___47890);

return statearr_47525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44989__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
