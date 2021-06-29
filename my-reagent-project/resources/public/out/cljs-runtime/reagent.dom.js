goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__50897 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__50898 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__50898);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__50899 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__50900 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__50900);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__50899);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__50897);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__50906 = arguments.length;
switch (G__50906) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__50907 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50907,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50907,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__50910_50929 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__50911_50930 = null;
var count__50912_50931 = (0);
var i__50913_50932 = (0);
while(true){
if((i__50913_50932 < count__50912_50931)){
var vec__50920_50933 = chunk__50911_50930.cljs$core$IIndexed$_nth$arity$2(null,i__50913_50932);
var container_50934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50920_50933,(0),null);
var comp_50935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50920_50933,(1),null);
reagent.dom.re_render_component(comp_50935,container_50934);


var G__50936 = seq__50910_50929;
var G__50937 = chunk__50911_50930;
var G__50938 = count__50912_50931;
var G__50939 = (i__50913_50932 + (1));
seq__50910_50929 = G__50936;
chunk__50911_50930 = G__50937;
count__50912_50931 = G__50938;
i__50913_50932 = G__50939;
continue;
} else {
var temp__5753__auto___50940 = cljs.core.seq(seq__50910_50929);
if(temp__5753__auto___50940){
var seq__50910_50941__$1 = temp__5753__auto___50940;
if(cljs.core.chunked_seq_QMARK_(seq__50910_50941__$1)){
var c__4649__auto___50942 = cljs.core.chunk_first(seq__50910_50941__$1);
var G__50943 = cljs.core.chunk_rest(seq__50910_50941__$1);
var G__50944 = c__4649__auto___50942;
var G__50945 = cljs.core.count(c__4649__auto___50942);
var G__50946 = (0);
seq__50910_50929 = G__50943;
chunk__50911_50930 = G__50944;
count__50912_50931 = G__50945;
i__50913_50932 = G__50946;
continue;
} else {
var vec__50923_50947 = cljs.core.first(seq__50910_50941__$1);
var container_50948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50923_50947,(0),null);
var comp_50949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50923_50947,(1),null);
reagent.dom.re_render_component(comp_50949,container_50948);


var G__50950 = cljs.core.next(seq__50910_50941__$1);
var G__50951 = null;
var G__50952 = (0);
var G__50953 = (0);
seq__50910_50929 = G__50950;
chunk__50911_50930 = G__50951;
count__50912_50931 = G__50952;
i__50913_50932 = G__50953;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
