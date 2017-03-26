<template>
	<div id="app" class="container">
		<page-header></page-header>
		<router-view></router-view>
	</div>
</template>

<script>
	import PageHeader from './components/PageHeader';

	export default {
		name: 'app',
		components: {
			PageHeader,
		},
	};
</script>

<style>
	.container {
		padding: 0 2vw;
	}
</style>

