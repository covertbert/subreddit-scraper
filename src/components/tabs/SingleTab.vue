<template>
	<div v-show="isActive">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'SingleTab',

		extends: {},

		props: {
			name: {
				type: String,
				required: true,
			},
			selected: {
				type: Boolean,
				default: false,
			},
		},

		data() {
			return {
				isActive: false,
			};
		},

		computed: {},

		components: {},

		watch: {},

		methods: {},

		beforeCreate() {

		},

		mounted() {
			this.isActive = this.selected;
		},

	};
</script>

<style scoped lang="scss">

</style>
