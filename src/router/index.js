import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Results from '@/pages/Results';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
		{
			path: '/results',
			name: 'Results',
			component: Results,
		},
	],
});
