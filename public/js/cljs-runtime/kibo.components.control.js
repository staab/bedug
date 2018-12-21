goog.provide('bedug.components.control');
goog.require('cljs.core');
goog.require('bedug.state');
bedug.components.control.done_QMARK_ = (function bedug$components$control$done_QMARK_(){
return (cljs.core.deref(bedug.state.step) >= cljs.core.count(cljs.core.deref(bedug.state.queue)));
});
bedug.components.control.tick = (function bedug$components$control$tick(){
if(cljs.core.truth_(bedug.components.control.done_QMARK_())){
return cljs.core.reset_BANG_(bedug.state.animate,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(bedug.state.step,cljs.core.inc);
}
});
bedug.components.control.toggle_animate = (function bedug$components$control$toggle_animate(){
if(cljs.core.truth_(bedug.components.control.done_QMARK_())){
cljs.core.reset_BANG_(bedug.state.step,(0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bedug.state.animate),new cljs.core.Keyword(null,"play","play",-580418022))){
return cljs.core.reset_BANG_(bedug.state.animate,new cljs.core.Keyword(null,"pause","pause",-2095325672));
} else {
return cljs.core.reset_BANG_(bedug.state.animate,new cljs.core.Keyword(null,"play","play",-580418022));
}
});
bedug.components.control.control = (function bedug$components$control$control(){
var p_button = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bedug.state.animate),new cljs.core.Keyword(null,"play","play",-580418022)))?"fa fa-2x fa-pause":"fa fa-2x fa-play");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bedug.state.animate),new cljs.core.Keyword(null,"play","play",-580418022))){
setTimeout(bedug.components.control.tick,(300));
} else {
}

cljs.core.deref(bedug.state.step);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bedug-control"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),p_button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),bedug.components.control.toggle_animate], null)], null)], null);
});

//# sourceMappingURL=kibo.components.control.js.map
