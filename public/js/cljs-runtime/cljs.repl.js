goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__15087){
var map__15088 = p__15087;
var map__15088__$1 = ((((!((map__15088 == null)))?(((((map__15088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15088):map__15088);
var m = map__15088__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15088__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15088__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15090_15149 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15091_15150 = null;
var count__15092_15151 = (0);
var i__15093_15152 = (0);
while(true){
if((i__15093_15152 < count__15092_15151)){
var f_15157 = chunk__15091_15150.cljs$core$IIndexed$_nth$arity$2(null,i__15093_15152);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_15157], 0));


var G__15158 = seq__15090_15149;
var G__15159 = chunk__15091_15150;
var G__15160 = count__15092_15151;
var G__15161 = (i__15093_15152 + (1));
seq__15090_15149 = G__15158;
chunk__15091_15150 = G__15159;
count__15092_15151 = G__15160;
i__15093_15152 = G__15161;
continue;
} else {
var temp__5457__auto___15162 = cljs.core.seq(seq__15090_15149);
if(temp__5457__auto___15162){
var seq__15090_15163__$1 = temp__5457__auto___15162;
if(cljs.core.chunked_seq_QMARK_(seq__15090_15163__$1)){
var c__4351__auto___15165 = cljs.core.chunk_first(seq__15090_15163__$1);
var G__15166 = cljs.core.chunk_rest(seq__15090_15163__$1);
var G__15167 = c__4351__auto___15165;
var G__15168 = cljs.core.count(c__4351__auto___15165);
var G__15169 = (0);
seq__15090_15149 = G__15166;
chunk__15091_15150 = G__15167;
count__15092_15151 = G__15168;
i__15093_15152 = G__15169;
continue;
} else {
var f_15170 = cljs.core.first(seq__15090_15163__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_15170], 0));


var G__15172 = cljs.core.next(seq__15090_15163__$1);
var G__15173 = null;
var G__15174 = (0);
var G__15175 = (0);
seq__15090_15149 = G__15172;
chunk__15091_15150 = G__15173;
count__15092_15151 = G__15174;
i__15093_15152 = G__15175;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_15181 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_15181], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_15181)))?cljs.core.second(arglists_15181):arglists_15181)], 0));
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15094_15192 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15095_15193 = null;
var count__15096_15194 = (0);
var i__15097_15195 = (0);
while(true){
if((i__15097_15195 < count__15096_15194)){
var vec__15098_15196 = chunk__15095_15193.cljs$core$IIndexed$_nth$arity$2(null,i__15097_15195);
var name_15197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15098_15196,(0),null);
var map__15101_15198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15098_15196,(1),null);
var map__15101_15199__$1 = ((((!((map__15101_15198 == null)))?(((((map__15101_15198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15101_15198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15101_15198):map__15101_15198);
var doc_15200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15101_15199__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15101_15199__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_15197], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_15201], 0));

if(cljs.core.truth_(doc_15200)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_15200], 0));
} else {
}


var G__15202 = seq__15094_15192;
var G__15203 = chunk__15095_15193;
var G__15204 = count__15096_15194;
var G__15205 = (i__15097_15195 + (1));
seq__15094_15192 = G__15202;
chunk__15095_15193 = G__15203;
count__15096_15194 = G__15204;
i__15097_15195 = G__15205;
continue;
} else {
var temp__5457__auto___15206 = cljs.core.seq(seq__15094_15192);
if(temp__5457__auto___15206){
var seq__15094_15207__$1 = temp__5457__auto___15206;
if(cljs.core.chunked_seq_QMARK_(seq__15094_15207__$1)){
var c__4351__auto___15208 = cljs.core.chunk_first(seq__15094_15207__$1);
var G__15209 = cljs.core.chunk_rest(seq__15094_15207__$1);
var G__15210 = c__4351__auto___15208;
var G__15211 = cljs.core.count(c__4351__auto___15208);
var G__15212 = (0);
seq__15094_15192 = G__15209;
chunk__15095_15193 = G__15210;
count__15096_15194 = G__15211;
i__15097_15195 = G__15212;
continue;
} else {
var vec__15109_15213 = cljs.core.first(seq__15094_15207__$1);
var name_15214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15109_15213,(0),null);
var map__15112_15215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15109_15213,(1),null);
var map__15112_15216__$1 = ((((!((map__15112_15215 == null)))?(((((map__15112_15215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15112_15215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15112_15215):map__15112_15215);
var doc_15217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15112_15216__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15112_15216__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_15214], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_15218], 0));

if(cljs.core.truth_(doc_15217)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_15217], 0));
} else {
}


var G__15221 = cljs.core.next(seq__15094_15207__$1);
var G__15222 = null;
var G__15223 = (0);
var G__15224 = (0);
seq__15094_15192 = G__15221;
chunk__15095_15193 = G__15222;
count__15096_15194 = G__15223;
i__15097_15195 = G__15224;
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
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__15119 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__15120 = null;
var count__15121 = (0);
var i__15122 = (0);
while(true){
if((i__15122 < count__15121)){
var role = chunk__15120.cljs$core$IIndexed$_nth$arity$2(null,i__15122);
var temp__5457__auto___15226__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___15226__$1)){
var spec_15227 = temp__5457__auto___15226__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_15227)], 0));
} else {
}


var G__15228 = seq__15119;
var G__15229 = chunk__15120;
var G__15230 = count__15121;
var G__15231 = (i__15122 + (1));
seq__15119 = G__15228;
chunk__15120 = G__15229;
count__15121 = G__15230;
i__15122 = G__15231;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__15119);
if(temp__5457__auto____$1){
var seq__15119__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__15119__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__15119__$1);
var G__15232 = cljs.core.chunk_rest(seq__15119__$1);
var G__15233 = c__4351__auto__;
var G__15234 = cljs.core.count(c__4351__auto__);
var G__15235 = (0);
seq__15119 = G__15232;
chunk__15120 = G__15233;
count__15121 = G__15234;
i__15122 = G__15235;
continue;
} else {
var role = cljs.core.first(seq__15119__$1);
var temp__5457__auto___15236__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___15236__$2)){
var spec_15237 = temp__5457__auto___15236__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_15237)], 0));
} else {
}


var G__15238 = cljs.core.next(seq__15119__$1);
var G__15239 = null;
var G__15240 = (0);
var G__15241 = (0);
seq__15119 = G__15238;
chunk__15120 = G__15239;
count__15121 = G__15240;
i__15122 = G__15241;
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

//# sourceMappingURL=cljs.repl.js.map
