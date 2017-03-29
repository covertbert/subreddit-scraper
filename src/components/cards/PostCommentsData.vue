<template>
	<table class="table">
		<tbody>
		<tr>
			<th>Author</th>
			<td><a :href="`http://reddit.com/u/${postAuthor}`" target="_blank">/u/{{ postAuthor }}</a></td>
		</tr>
		<tr>
			<th>Date</th>
			<td>{{ formatDate(postTimestamp) }}</td>
		</tr>
		<tr>
			<th>Children</th>
			<td>{{ numberOfChildren }}</td>
		</tr>
		<tr>
			<th>Upvotes</th>
			<td>{{ postUpvotes }}</td>
		</tr>
		</tbody>
	</table>
</template>

<script>
	import moment from 'moment';
	import Reddit from '../../config/reddit';

	export default {
		name: 'PostCommentsData',

		extends: {},

		props: {
			postId: {
				type: String,
				required: true,
			},
			postAuthor: {
				type: String,
				required: true,
			},
			postUpvotes: {
				type: Number,
				required: true,
			},
			postTimestamp: {
				type: Number,
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
				Reddit.getSubmission(currentPostId).fetch().then((data) => {
					this.numberOfChildren = data.comments.length;
				});
			},

			formatDate(postTimestamp) {
				return moment.unix(postTimestamp).format('ll');
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
