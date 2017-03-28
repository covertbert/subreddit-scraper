<template>
	<div class="container">
		<tabs-container>

			<single-tab name="Overview" :selected="true">

				<order-by v-show="2 > 1"></order-by>

				<result-card
					v-for="post in jsonData"
					:key="post.name"
					:post-title="post.title"
					:post-author="post.author.name"
					:post-url="post.url"
					:post-upvotes="post.ups"
					:comments-url="post.permalink"
					:post-timestamp="post.created">
					<post-comments-data
						:comments-url="post.permalink">
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
//	import _ from 'lodash';
	import ResultCard from '../cards/ResultCard';
	import OrderBy from './OrderBy';
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
			OrderBy,
			TabsContainer,
			SingleTab,
			PostCommentsData,
		},

		computed: {
//			jsonDataOrderByUps() {
//				return _.orderBy(this.jsonData, ['data.ups'], ['desc']);
//			},
		},

		created() {
			Event.$on('retrievedData', (jsonData) => {
				this.jsonData = jsonData;
			});
			Event.$on('clearResultCards', () => {
				this.jsonData = [];
			});
		},

		methods: {
		},
	};
</script>

<style scoped lang="scss">
	.container {
		margin-top: 20px;
	}
</style>
