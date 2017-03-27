<template>
	<div class="container">
		<tabs-container>

			<single-tab name="Overview" :selected="true">

				<order-by v-show="2> 1"></order-by>

				<result-card
					v-for="post in jsonDataOrderByUps"
					:key="post.id"
					:post-title="post.data.title"
					:post-author="post.data.author"
					:post-url="post.data.url"
					:post-upvotes="post.data.ups"
					:comments-url="post.data.permalink"
					:post-timestamp="post.data.created">
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
	import _ from 'lodash';
	import ResultCard from './ResultCard';
	import OrderBy from './OrderBy';
	import TabsContainer from './../tabs/TabsContainer';
	import SingleTab from './../tabs/SingleTab';

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
		},

		computed: {
			jsonDataOrderByUps() {
				return _.orderBy(this.jsonData, ['data.ups'], ['desc']);
			},
		},

		created() {
			Event.$on('retrievedData', (jsonData) => {
				this.jsonData = jsonData.data.children;
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
