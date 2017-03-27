<template>
	<div class="container">
		<order-by></order-by>
		<result-card
			v-for="post in jsonDataOrderByUps"
			:key="post.id"
			:post-title="post.data.title"
			:post-author="post.data.author"
			:post-thumbnail-url="determineThumbnail(post.data.thumbnail)"
			:post-url="post.data.url"
			:post-upvotes="post.data.ups">
		</result-card>
	</div>
</template>

<script>
	import _ from 'lodash';
	import ResultCard from './ResultCard';
	import OrderBy from './OrderBy';

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
			determineThumbnail(thumbnailUrlSource) {
				let thumbnailUrlOutput;
				if (thumbnailUrlSource === 'self' || thumbnailUrlSource === '') {
					thumbnailUrlOutput = 'https://repo.spydar007.com/packages/images/Reddit.png';
				} else if (thumbnailUrlSource === 'nsfw' || thumbnailUrlSource === 'spoiler') {
					thumbnailUrlOutput = 'http://i.imgur.com/UHzw6.png';
				} else {
					thumbnailUrlOutput = thumbnailUrlSource;
				}
				return thumbnailUrlOutput;
			},
		},
	};
</script>

<style scoped lang="scss">
	.container {
		margin-top: 20px;
	}
</style>
