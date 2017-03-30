import Vue from 'vue';
import * as VueResource from 'vue-resource';
import * as AppScss from './assets/scss/app.scss';
import App from './App';
import router from './router';

const Bulma = require('bulma');

Vue.use(Bulma);
Vue.use(VueResource);
Vue.use(AppScss);

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
