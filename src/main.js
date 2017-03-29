// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

const VueResource = require('vue-resource');
const Bulma = require('bulma');
const SnooWrap = require('snoowrap');

const Reddit = new SnooWrap({
	//	Sure, due to my lack-of-oAuth laziness, you could steal these details,
	//	but I don't give a fuck about this account so crack on mate!
	userAgent: 'R-Scraper v0.1',
	clientId: '16Ocd8x9UuG3gg',
	clientSecret: 'xjBuw6b6hMUMXa7Jy3W6Tk-pMfg',
	username: 'rScraperoo',
	password: 'Pa55word',
});

Vue.use(VueResource);
Vue.use(Bulma);

Vue.config.productionTip = false;
export default Reddit;
/* eslint-disable no-new */
// Global event handler for sharing events between components
window.Event = new Vue();

// Main Vue
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App },
});
