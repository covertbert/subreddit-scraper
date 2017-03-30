import Vue from 'vue';
import App from './App';
import router from './router';

const VueResource = require('vue-resource');
const Bulma = require('bulma');

Vue.use(VueResource);
Vue.use(Bulma);

Vue.config.productionTip = false;
Vue.config.performance = true;

/* eslint-disable no-new */
window.Event = new Vue();

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App },
});
