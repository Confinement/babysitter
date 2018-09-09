<template>
	<div id="app">
		<link rel="stylesheet" href="https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css">
		<router-view/>
		<BottomNav></BottomNav>
	</div>
</template>

<script>
import BottomNav from '@/components/BottomNav.vue';

export default {
	components: {
		BottomNav,
	},
};
</script>


<style lang="scss">
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
