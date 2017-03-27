<template>
	<p>{{ numberOfChildren }}</p>
</template>

<script>
	import _ from 'lodash';

	export default {
		name: 'PostCommentsData',

		extends: {},

		props: {
			commentsUrl: {
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
			fireApiRequest(commentsUrl) {
				const builtString = `http://www.reddit.com/${this.stripTrailingSlash(commentsUrl)}.json`;
				this.$http.get(builtString).then((response) => {
					this.jsonData = response.body;
					this.countChildren(response);
				}, (response) => {
					this.jsonData = response;
				});
			},

			stripTrailingSlash(str) {
				if (str.endsWith('/')) {
					return str.slice(0, -1);
				}
				return str;
			},

			countChildren(postData) {
				const postChildren = postData.body[1].data.children;

				// TODO fix this filter so it returns number or children recursively
				let numberOfChildren = _.filter(postChildren, { submodules: [ { id: 2 } ]});

				this.numberOfChildren = numberOfChildren;
			},
		},

		beforeCreate() {

		},

		mounted() {
			this.fireApiRequest(this.commentsUrl);
		},

	};
</script>

<style scoped lang="scss">

</style>
