<template>

	<div class="field">
		<p class="control">
    <span class="select">
      <select>
        <option>Order by</option>
        <option>None</option>
        <option>Upvotes</option>
      </select>
    </span>
		</p>
	</div>

</template>

<script>
	export default {
		name: 'OrderBy',

		data() {
			return {};
		},

		methods: {},

	};
</script>

<style scoped lang="scss">
	.field:not(:last-child) {
		margin-bottom: 1.5rem;
	}
</style>
