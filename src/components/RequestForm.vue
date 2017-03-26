<template>
	<div class="container">

		<div class="field is-horizontal">
			<div class="field-body">
				<div class="field is-grouped">
					<p class="control is-expanded">
						<input v-model="subreddit"
									 @keyup.enter="fireApiRequest"
									 class="input"
									 type="text"
									 placeholder="Enter subreddit">
					</p>
				</div>
			</div>
		</div>

		<div class="field is-horizontal">
			<div class="field-body">
				<div class="field">
					<div class="control">
						<button @click="fireApiRequest" class="button is-primary">
							Request
						</button>
					</div>
				</div>
			</div>
		</div>

	</div>

</template>

<script>
	export default {
		name: 'RequestForm',

		data() {
			return {
				subreddit: '',
				basicQuery: 'https://www.reddit.com/r/',
				jsonData: [],
			};
		},

		methods: {
			fireApiRequest() {
				const builtQuery = `${this.basicQuery + this.subreddit}.json`;
				this.$http.get(builtQuery).then((response) => {
					this.jsonData = response.body;
					Event.$emit('retrievedData', this.jsonData);
				}, (response) => {
					this.jsonData = response;
				});
			},
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.container {
		margin-top: 50px;
	}
</style>
