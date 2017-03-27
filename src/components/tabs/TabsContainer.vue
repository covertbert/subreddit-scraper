<template>
	<div>
		<div class="tabs">
			<ul>
				<li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive }">
					<a @click="selectTab(tab)">{{ tab.name }}</a>
				</li>
			</ul>
		</div>

		<div class="tabs-details">
			<slot></slot>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'TabsContainer',

		extends: {},

		props: {},

		data() {
			return {
				tabs: [],
			};
		},

		computed: {},

		components: {},

		watch: {},

		methods: {
			selectTab(selectedTab) {
				this.tabs.forEach((tab) => {
					/* eslint-disable no-param-reassign */
					tab.isActive = (tab.name === selectedTab.name);
				});
			},
		},

		beforeCreate() {

		},

		created() {
			this.tabs = this.$children;
		},

	};
</script>

<style scoped lang="scss">

</style>
