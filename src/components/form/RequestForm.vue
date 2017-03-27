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
				<form-button :click-event="fireApiRequest"
										 :modifier="'is-primary'"
										 :is-disabled-conditions="!subreddit">Request</form-button>

				<form-button :click-event="clearResultCards"
										 :modifier="'is-danger'"
										 :is-disabled-conditions="!clearButtonIsActive">Clear</form-button>
			</div>
		</div>

	</div>

</template>

<script>
	import FormButton from './FormButton';

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

		components: {
			FormButton,
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
		margin-top: 1.8rem;
	}

	.input {
		height: 90px;
		text-align: center;
		font-size: 2.5rem;
	}
</style>
