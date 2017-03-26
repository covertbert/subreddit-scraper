<template>
	<div class="container">
		<result-card v-for="post in jsonData" :key="post.id">
			{{ post.data.title }}
		</result-card>
	</div>
</template>

<script>
	import ResultCard from './ResultCard';

	export default {
		name: 'DataOutput',

		data() {
			return {
				jsonData: [],
				tileIsShown: true,
			};
		},

		components: {
			ResultCard,
		},

		created() {
			Event.$on('retrievedData', (jsonData) => {
				this.jsonData = jsonData.data.children;
			});
		},
	};
</script>

<style scoped lang="scss">
	.container {
		margin-top: 50px;
	}
</style>
