goog.provide('bedug.state');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof bedug !== 'undefined') && (typeof bedug.state !== 'undefined') && (typeof bedug.state.queue !== 'undefined')){
} else {
bedug.state.queue = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof bedug !== 'undefined') && (typeof bedug.state !== 'undefined') && (typeof bedug.state.step !== 'undefined')){
} else {
bedug.state.step = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof bedug !== 'undefined') && (typeof bedug.state !== 'undefined') && (typeof bedug.state.animate !== 'undefined')){
} else {
bedug.state.animate = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"initialize","initialize",609952913));
}

//# sourceMappingURL=kibo.state.js.map
