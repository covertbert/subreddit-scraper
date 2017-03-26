<template>
	<div class="container">
		<request-form></request-form>
		<data-output></data-output>
	</div>
</template>

<script>
	import RequestForm from '../components/RequestForm';
	import DataOutput from '../components/DataOutput';

	export default {
		name: 'home',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
			};
		},
		components: {
			RequestForm,
			DataOutput,
		},
	};
</script>

<style scoped lang="scss">
	body {
		background-color: red;
	}
</style>
