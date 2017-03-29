<template>

	<div class="field">
		<p class="control">
			<span class="select">
				<select v-model="selected">
					<option>None</option>
					<option value="upvotes">Upvotes</option>
				</select>
    	</span>
			<button @click="orderBy" class="button is-info">Reorder</button>
		</p>
	</div>

</template>

<script>
	export default {
		name: 'OrderBy',

		data() {
			return {
				selected: '',
			};
		},
		methods: {
			orderBy() {
				Event.$emit('reorderData', this.selected);
			},
		},

	};
</script>

<style scoped lang="scss">
	.field:not(:last-child) {
		margin-bottom: 1.5rem;
	}
</style>
