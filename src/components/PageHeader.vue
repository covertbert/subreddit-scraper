<template>

	<nav class="nav">
		<div class="nav-center">
			<a class="nav-item">
				<img src="../assets/logo.png" alt="Bulma logo">
			</a>
		</div>

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

<style scoped lang="scss">
	.nav {
		min-height: 5rem;
		padding-top: 4rem;
	}

	.nav-item img {
		max-height: 2.7rem;
	}
</style>
