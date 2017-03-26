<template>

	<article v-if="resultsCardIsShown" class="media">
		<figure @click="handleLink(false, postUrl)" class="media-left">
			<p class="image is-64x64">
				<img :src="postThumbnailUrl">
			</p>
		</figure>
		<div class="media-content">
			<div class="content">
				<p>
					<strong>{{ postAuthor }}</strong>
					<small><a @click="handleLink(true, postAuthor)">/u/{{ postAuthor }}</a></small>
					<small class="upvote-counter">{{ postUpvotes }}</small>
					<br>
				<div class="content">{{ postTitle }}</div>
				</p>
			</div>
			<nav class="level is-mobile">
				<div class="level-left">
					<a class="level-item">
						<span class="icon is-small"><i class="fa fa-reply"></i></span>
					</a>
					<a class="level-item">
						<span class="icon is-small"><i class="fa fa-retweet"></i></span>
					</a>
					<a class="level-item">
						<span class="icon is-small"><i class="fa fa-heart"></i></span>
					</a>
				</div>
			</nav>
		</div>
		<div class="media-right">
			<button @click="resultsCardIsShown = false" class="delete"></button>
		</div>
	</article>
</template>

<script>
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
			postThumbnailUrl: {
				type: String,
				required: true,
			},
			postUrl: {
				type: String,
				required: true,
			},
			postUpvotes: {
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
			handleLink(isUser, redditSection) {
				if (isUser === true) {
					window.open(`http://reddit.com/u/${redditSection}`, '_blank');
				} else {
					window.open(redditSection, '_blank');
				}
			},
		},

	};
</script>

<style scoped lang="scss">
	@import "../assets/scss/app.scss";

	figure {
		cursor: pointer;
	}
	.upvote-counter {
		color: $red;
		font-weight: bold;
	}
</style>
