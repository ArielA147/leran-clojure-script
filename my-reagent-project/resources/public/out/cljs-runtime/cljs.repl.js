goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49467){
var map__49468 = p__49467;
var map__49468__$1 = cljs.core.__destructure_map(map__49468);
var m = map__49468__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49468__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49468__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49469_49681 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49470_49682 = null;
var count__49471_49683 = (0);
var i__49472_49684 = (0);
while(true){
if((i__49472_49684 < count__49471_49683)){
var f_49685 = chunk__49470_49682.cljs$core$IIndexed$_nth$arity$2(null,i__49472_49684);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49685], 0));


var G__49686 = seq__49469_49681;
var G__49687 = chunk__49470_49682;
var G__49688 = count__49471_49683;
var G__49689 = (i__49472_49684 + (1));
seq__49469_49681 = G__49686;
chunk__49470_49682 = G__49687;
count__49471_49683 = G__49688;
i__49472_49684 = G__49689;
continue;
} else {
var temp__5753__auto___49690 = cljs.core.seq(seq__49469_49681);
if(temp__5753__auto___49690){
var seq__49469_49692__$1 = temp__5753__auto___49690;
if(cljs.core.chunked_seq_QMARK_(seq__49469_49692__$1)){
var c__4649__auto___49693 = cljs.core.chunk_first(seq__49469_49692__$1);
var G__49694 = cljs.core.chunk_rest(seq__49469_49692__$1);
var G__49695 = c__4649__auto___49693;
var G__49696 = cljs.core.count(c__4649__auto___49693);
var G__49697 = (0);
seq__49469_49681 = G__49694;
chunk__49470_49682 = G__49695;
count__49471_49683 = G__49696;
i__49472_49684 = G__49697;
continue;
} else {
var f_49698 = cljs.core.first(seq__49469_49692__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49698], 0));


var G__49699 = cljs.core.next(seq__49469_49692__$1);
var G__49700 = null;
var G__49701 = (0);
var G__49702 = (0);
seq__49469_49681 = G__49699;
chunk__49470_49682 = G__49700;
count__49471_49683 = G__49701;
i__49472_49684 = G__49702;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49703 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_49703], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_49703)))?cljs.core.second(arglists_49703):arglists_49703)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49477_49704 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49478_49705 = null;
var count__49479_49706 = (0);
var i__49480_49707 = (0);
while(true){
if((i__49480_49707 < count__49479_49706)){
var vec__49491_49708 = chunk__49478_49705.cljs$core$IIndexed$_nth$arity$2(null,i__49480_49707);
var name_49709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49491_49708,(0),null);
var map__49494_49710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49491_49708,(1),null);
var map__49494_49711__$1 = cljs.core.__destructure_map(map__49494_49710);
var doc_49712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49494_49711__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49494_49711__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49709], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49713], 0));

if(cljs.core.truth_(doc_49712)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49712], 0));
} else {
}


var G__49714 = seq__49477_49704;
var G__49715 = chunk__49478_49705;
var G__49716 = count__49479_49706;
var G__49717 = (i__49480_49707 + (1));
seq__49477_49704 = G__49714;
chunk__49478_49705 = G__49715;
count__49479_49706 = G__49716;
i__49480_49707 = G__49717;
continue;
} else {
var temp__5753__auto___49718 = cljs.core.seq(seq__49477_49704);
if(temp__5753__auto___49718){
var seq__49477_49720__$1 = temp__5753__auto___49718;
if(cljs.core.chunked_seq_QMARK_(seq__49477_49720__$1)){
var c__4649__auto___49721 = cljs.core.chunk_first(seq__49477_49720__$1);
var G__49722 = cljs.core.chunk_rest(seq__49477_49720__$1);
var G__49723 = c__4649__auto___49721;
var G__49724 = cljs.core.count(c__4649__auto___49721);
var G__49725 = (0);
seq__49477_49704 = G__49722;
chunk__49478_49705 = G__49723;
count__49479_49706 = G__49724;
i__49480_49707 = G__49725;
continue;
} else {
var vec__49495_49726 = cljs.core.first(seq__49477_49720__$1);
var name_49727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49495_49726,(0),null);
var map__49498_49728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49495_49726,(1),null);
var map__49498_49729__$1 = cljs.core.__destructure_map(map__49498_49728);
var doc_49730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49498_49729__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49498_49729__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49727], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49731], 0));

if(cljs.core.truth_(doc_49730)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49730], 0));
} else {
}


var G__49732 = cljs.core.next(seq__49477_49720__$1);
var G__49733 = null;
var G__49734 = (0);
var G__49735 = (0);
seq__49477_49704 = G__49732;
chunk__49478_49705 = G__49733;
count__49479_49706 = G__49734;
i__49480_49707 = G__49735;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__49499 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49500 = null;
var count__49501 = (0);
var i__49502 = (0);
while(true){
if((i__49502 < count__49501)){
var role = chunk__49500.cljs$core$IIndexed$_nth$arity$2(null,i__49502);
var temp__5753__auto___49736__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___49736__$1)){
var spec_49737 = temp__5753__auto___49736__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49737)], 0));
} else {
}


var G__49738 = seq__49499;
var G__49739 = chunk__49500;
var G__49740 = count__49501;
var G__49741 = (i__49502 + (1));
seq__49499 = G__49738;
chunk__49500 = G__49739;
count__49501 = G__49740;
i__49502 = G__49741;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__49499);
if(temp__5753__auto____$1){
var seq__49499__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49499__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__49499__$1);
var G__49742 = cljs.core.chunk_rest(seq__49499__$1);
var G__49743 = c__4649__auto__;
var G__49744 = cljs.core.count(c__4649__auto__);
var G__49745 = (0);
seq__49499 = G__49742;
chunk__49500 = G__49743;
count__49501 = G__49744;
i__49502 = G__49745;
continue;
} else {
var role = cljs.core.first(seq__49499__$1);
var temp__5753__auto___49746__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___49746__$2)){
var spec_49747 = temp__5753__auto___49746__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49747)], 0));
} else {
}


var G__49748 = cljs.core.next(seq__49499__$1);
var G__49749 = null;
var G__49750 = (0);
var G__49751 = (0);
seq__49499 = G__49748;
chunk__49500 = G__49749;
count__49501 = G__49750;
i__49502 = G__49751;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__49752 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__49753 = cljs.core.ex_cause(t);
via = G__49752;
t = G__49753;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__49506 = datafied_throwable;
var map__49506__$1 = cljs.core.__destructure_map(map__49506);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49506__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49506__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49506__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__49507 = cljs.core.last(via);
var map__49507__$1 = cljs.core.__destructure_map(map__49507);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49507__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49507__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49507__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__49508 = data;
var map__49508__$1 = cljs.core.__destructure_map(map__49508);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49508__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49508__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49508__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__49509 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__49509__$1 = cljs.core.__destructure_map(map__49509);
var top_data = map__49509__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49509__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__49510 = phase;
var G__49510__$1 = (((G__49510 instanceof cljs.core.Keyword))?G__49510.fqn:null);
switch (G__49510__$1) {
case "read-source":
var map__49511 = data;
var map__49511__$1 = cljs.core.__destructure_map(map__49511);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49511__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49511__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__49512 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__49512__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49512,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49512);
var G__49512__$2 = (cljs.core.truth_((function (){var fexpr__49515 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49515.cljs$core$IFn$_invoke$arity$1 ? fexpr__49515.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49515.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49512__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49512__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49512__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49512__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__49516 = top_data;
var G__49516__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49516,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49516);
var G__49516__$2 = (cljs.core.truth_((function (){var fexpr__49518 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49518.cljs$core$IFn$_invoke$arity$1 ? fexpr__49518.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49518.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49516__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49516__$1);
var G__49516__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49516__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49516__$2);
var G__49516__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49516__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49516__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49516__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49516__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__49519 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49519,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49519,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49519,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49519,(3),null);
var G__49522 = top_data;
var G__49522__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49522,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__49522);
var G__49522__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49522__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__49522__$1);
var G__49522__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49522__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__49522__$2);
var G__49522__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49522__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49522__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49522__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49522__$4;
}

break;
case "execution":
var vec__49525 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49525,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49525,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49525,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49525,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49504_SHARP_){
var or__4223__auto__ = (p1__49504_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__49528 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49528.cljs$core$IFn$_invoke$arity$1 ? fexpr__49528.cljs$core$IFn$_invoke$arity$1(p1__49504_SHARP_) : fexpr__49528.call(null,p1__49504_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__49529 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__49529__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49529,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__49529);
var G__49529__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49529__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49529__$1);
var G__49529__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49529__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__49529__$2);
var G__49529__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49529__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__49529__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49529__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49529__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49510__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__49556){
var map__49557 = p__49556;
var map__49557__$1 = cljs.core.__destructure_map(map__49557);
var triage_data = map__49557__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49557__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49557__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49557__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49557__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49557__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49557__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49557__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49557__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__49596 = phase;
var G__49596__$1 = (((G__49596 instanceof cljs.core.Keyword))?G__49596.fqn:null);
switch (G__49596__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__49597 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__49598 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49599 = loc;
var G__49600 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49608_49765 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49609_49766 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49610_49767 = true;
var _STAR_print_fn_STAR__temp_val__49611_49768 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49610_49767);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49611_49768);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49547_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49547_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49609_49766);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49608_49765);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49597,G__49598,G__49599,G__49600) : format.call(null,G__49597,G__49598,G__49599,G__49600));

break;
case "macroexpansion":
var G__49626 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__49627 = cause_type;
var G__49628 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49629 = loc;
var G__49630 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49626,G__49627,G__49628,G__49629,G__49630) : format.call(null,G__49626,G__49627,G__49628,G__49629,G__49630));

break;
case "compile-syntax-check":
var G__49635 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__49636 = cause_type;
var G__49637 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49638 = loc;
var G__49639 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49635,G__49636,G__49637,G__49638,G__49639) : format.call(null,G__49635,G__49636,G__49637,G__49638,G__49639));

break;
case "compilation":
var G__49644 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__49645 = cause_type;
var G__49646 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49647 = loc;
var G__49648 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49644,G__49645,G__49646,G__49647,G__49648) : format.call(null,G__49644,G__49645,G__49646,G__49647,G__49648));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__49649 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__49650 = symbol;
var G__49651 = loc;
var G__49652 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49657_49772 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49658_49773 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49659_49774 = true;
var _STAR_print_fn_STAR__temp_val__49660_49775 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49659_49774);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49660_49775);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49548_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49548_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49658_49773);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49657_49772);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49649,G__49650,G__49651,G__49652) : format.call(null,G__49649,G__49650,G__49651,G__49652));
} else {
var G__49661 = "Execution error%s at %s(%s).\n%s\n";
var G__49662 = cause_type;
var G__49663 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49664 = loc;
var G__49665 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49661,G__49662,G__49663,G__49664,G__49665) : format.call(null,G__49661,G__49662,G__49663,G__49664,G__49665));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49596__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
