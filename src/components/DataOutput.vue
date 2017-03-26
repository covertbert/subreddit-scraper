<template>
	<div class="container">
		<div class="notification" v-for="post in jsonData">
			<button class="delete"></button>
			{{ post.data.title }}
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DataOutput',

		data() {
			return {
				jsonData: [],
			};
		},

		created() {
			Event.$on('retrievedData', (jsonData) => {
				this.jsonData = jsonData.data.children;
			});
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
