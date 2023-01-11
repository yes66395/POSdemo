<template>
	<Nav></Nav>
	<div class="main">
		<router-view />
	</div>
</template>

<script>
import Nav from './component/Nav.vue';
export default {
	components: {
		Nav,
	},
};
</script>

<style scoped>
.main {
	flex: 2;
	margin-left: 2px;
}
</style>
