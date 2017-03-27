<template>
	<div class="field">
		<div class="control">
			<button @click="clickEvent" class="button" :class="combinedComputedClasses(modifier, isDisabledConditions)">
				<slot></slot>
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'FormButton',

		props: {
			clickEvent: {
				type: Function,
				required: true,
			},
			modifier: {
				type: String,
				required: true,
			},
			isDisabledConditions: {
				type: Boolean,
				required: true,
			},
		},

		methods: {
			combinedComputedClasses(modifier, isDisabledConditions) {
				const computedClassConcat = isDisabledConditions ? 'is-disabled' : '';
				return `${modifier} ${computedClassConcat}`;
			},
		},

	};
</script>

<style scoped lang="scss">
	.control,
	button {
		width: 100%;
	}

	.control {
		margin-top: .5rem;
	}

	button {
		height: 50px;
		font-size: 1.2rem;
	}
</style>
