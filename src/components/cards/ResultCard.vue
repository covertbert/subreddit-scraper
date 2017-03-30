<template>
	<div v-show="resultsCardIsShown" class="card">
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
				<slot></slot>
			</div>
		</div>
		<footer class="card-footer">
			<a :href="postUrl" target="_blank" class="card-footer-item">View Link</a>
			<a :href="`http://reddit.com/${commentsUrl}`" target="_blank" class="card-footer-item">View Comments</a>
			<a @click="resultsCardIsShown = false" class="card-footer-item">Delete</a>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'ResultCard',

		props: {
			postTitle: {
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
		},

		data() {
			return {
				resultsCardIsShown: true,
			};
		},

		methods: {},

	};
</script>

<style scoped lang="scss">
	.card {
		margin-bottom: 1.8rem;
	}
</style>
