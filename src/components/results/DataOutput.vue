<template>
	<div class="container">
		<tabs-container>

			<single-tab name="Overview" :selected="true">

				<result-card v-for="post in jsonData"
										 :key="post.name"
										 :post-title="post.title"
										 :post-url="post.url"
										 :comments-url="post.permalink">
					<post-comments-data
						:post-id="post.id"
						:post-upvotes="post.ups"
						:post-author="post.author.name"
						:post-timestamp="post.created">
					</post-comments-data>
				</result-card>
			</single-tab>

			<single-tab name="About the dog">
				<h1>Here we are dog</h1>
			</single-tab>

			<single-tab name="About the cat">
				<h1>Here we are cat</h1>
			</single-tab>
		</tabs-container>

	</div>
</template>

<script>
	import ResultCard from '../cards/ResultCard';
	import TabsContainer from './../tabs/TabsContainer';
	import SingleTab from './../tabs/SingleTab';
	import PostCommentsData from './../cards/PostCommentsData';

	export default {
		name: 'DataOutput',

		data() {
			return {
				jsonData: [],
				tileIsShown: true,
			};
		},

		components: {
			ResultCard,
			TabsContainer,
			SingleTab,
			PostCommentsData,
		},

		computed: {},

		created() {
			Event.$on('retrievedData', (jsonData) => {
				this.jsonData = jsonData;
			});

			Event.$on('clearResultCards', () => {
				this.jsonData = [];
			});
		},

		methods: {},
	};
</script>

<style scoped lang="scss">
	.container {
		margin-top: 20px;
	}
</style>
