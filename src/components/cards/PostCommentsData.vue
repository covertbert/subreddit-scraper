<template>
	<p>{{ numberOfChildren }}</p>
</template>

<script>
	import Reddit from '../../main';

	export default {
		name: 'PostCommentsData',

		extends: {},

		props: {
			currentPostId: {
				type: String,
				required: true,
			},
		},

		data() {
			return {
				jsonData: [],
				numberOfChildren: null,
			};
		},

		computed: {},

		components: {},

		watch: {},

		methods: {
			fireApiRequest() {
				Reddit.getSubmission('4j8p6d').expandReplies({ limit: Infinity, depth: Infinity }).then(console.log);
			},
		},

		beforeCreate() {

		},

		mounted() {
			this.fireApiRequest(this.currentPostId);
		},

	};
</script>

<style scoped lang="scss">

</style>
