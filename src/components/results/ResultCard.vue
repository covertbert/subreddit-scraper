<template>

	<div v-if="resultsCardIsShown" class="card">
		<header class="card-header">
			<p class="card-header-title">{{ postTitle }}</p>
			<a class="card-header-icon">
      <span class="icon">
        <i class="fa fa-angle-down"></i>
      </span>
			</a>
		</header>
		<div class="card-content">
			<div class="content">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
				<a @click="handleLink('user', postAuthor)">{{ postAuthor }}</a> <small class="upvote-counter">{{ postUpvotes }}</small>
				<br>
				<small>{{ formatDate(postTimestamp) }}</small>
			</div>
		</div>
		<footer class="card-footer">
			<a @click="handleLink('post', postUrl)" class="card-footer-item">View Link</a>
			<a @click="handleLink('comments', commentsUrl)" class="card-footer-item">View Comments</a>
			<a @click="resultsCardIsShown = false" class="card-footer-item">Delete</a>
		</footer>
	</div>
</template>

<script>
	import moment from 'moment';

	export default {
		name: 'ResultCard',

		props: {
			postTitle: {
				type: String,
				required: true,
			},
			postAuthor: {
				type: String,
				required: true,
			},
			postUrl: {
				type: String,
				required: true,
			},
			commentsUrl: {
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
				resultsCardIsShown: true,
			};
		},

		methods: {
			handleLink(type, redditSection) {
				if (type === 'user') {
					window.open(`http://reddit.com/u/${redditSection}`, '_blank');
				}
				if (type === 'comments') {
					window.open(`http://reddit.com/${redditSection}`, '_blank');
				}
				if (type === 'post') {
					window.open(redditSection, '_blank');
				}
			},

			formatDate(postTimestamp) {
				return moment.unix(postTimestamp).format('ll');
			},
		},

	};
</script>

<style scoped lang="scss">
	@import "../../assets/scss/app.scss";

	.card {
		margin-bottom: 1.8rem;
	}

	.upvote-counter {
		color: $red;
		font-weight: bold;
	}
</style>
