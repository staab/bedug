goog.provide('kibo.client.app.state');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof kibo !== 'undefined') && (typeof kibo.client !== 'undefined') && (typeof kibo.client.app !== 'undefined') && (typeof kibo.client.app.state !== 'undefined') && (typeof kibo.client.app.state.click_count !== 'undefined')){
} else {
kibo.client.app.state.click_count = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}

//# sourceMappingURL=kibo.app.state.js.map
