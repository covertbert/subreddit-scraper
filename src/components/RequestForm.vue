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
									 placeholder="Enter subreddit"></p>
				</div>
			</div>
		</div>

		<div class="field is-horizontal">
			<div class="field-body">
				<div class="field">
					<div class="control">
						<button @click="fireApiRequest" class="button is-primary" :class="{ 'is-disabled' : !subreddit }">
							Request
						</button>
					</div>
				</div>
				<div class="field">
					<div class="control">
						<button @click="clearResultCards" class="button is-danger" :class="{ 'is-disabled' : !clearButtonIsActive }">
							Clear
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
				clearButtonIsActive: false,
			};
		},

		methods: {

			fireApiRequest() {
				const builtQuery = `${this.basicQuery + this.subreddit}.json`;
				this.clearButtonIsActive = true;

				this.$http.get(builtQuery).then((response) => {
					this.jsonData = response.body;
					Event.$emit('retrievedData', this.jsonData);
				}, (response) => {
					this.jsonData = response;
				});
			},

			clearResultCards() {
				Event.$emit('clearResultCards');
				this.clearButtonIsActive = false;
			},
		},
	};
</script>

<style scoped lang="scss">
	.container {
		margin-top: 3.8rem;
	}

	.control,
	.button {
		width: 100%;
	}

	.control {
		margin-top: .5rem;
	}
</style>
