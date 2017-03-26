<template>
	<nav class="nav">
		<div class="nav-left">
			<a class="nav-item">
				<img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
			</a>
		</div>

		<div class="nav-center">
			<a class="nav-item">
      <span class="icon">
        <i class="fa fa-github"></i>
      </span>
			</a>
			<a class="nav-item">
      <span class="icon">
        <i class="fa fa-twitter"></i>
      </span>
			</a>
		</div>

		<!-- This "nav-toggle" hamburger menu is only visible on mobile -->
		<!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
		<span class="nav-toggle">
			<span></span>
			<span></span>
			<span></span>
		</span>

		<!-- This "nav-menu" is hidden on mobile -->
		<!-- Add the modifier "is-active" to display it on mobile -->
		<div class="nav-right nav-menu">
			<router-link class="nav-item is-tab"
									 :class="{'is-active' : isActiveRoute(item.route)}"
									 v-for="item in navItems"
									 :key="item.id"
									 :to="item.route" exact>
				{{ item.name }}
			</router-link>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'PageHeader',
		data() {
			return {
				navItems: [
					{ name: 'Home', route: '/' },
					{ name: 'Results', route: '/Results' },
				],
			};
		},
		methods: {
			isActiveRoute(route) {
				let routeStatus;
				if (route === this.$route.path) {
					routeStatus = true;
				}
				return routeStatus;
			},
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
