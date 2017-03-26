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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	body {
		background-color: red;
	}
</style>
