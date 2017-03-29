<template>
	<p>{{ numberOfChildren }}</p>
</template>

<script>
	import Reddit from '../../main';

	export default {
		name: 'PostCommentsData',

		extends: {},

		props: {
			postId: {
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
			fireApiRequest(currentPostId) {
				Reddit.getSubmission(currentPostId).expandReplies({
					limit: Infinity,
					depth: Infinity,
				}).then((data) => {
					this.numberOfChildren = data.comments.length;
				});
			},
		},

		beforeCreate() {

		},

		mounted() {
			this.fireApiRequest(this.postId);
		},

	};
</script>

<style scoped lang="scss">

</style>
