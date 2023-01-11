<template>
	<div class="navigation-container">
		<ul class="navigation">
			<li class="nav-item">
				<span>速食店POS機點餐demo</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: '左邊導航欄',
};
</script>

<style scoped>
.navigation-container {
	width: 100%;
	box-sizing: border-box;
	text-align: center;
}

.navigation-container .nav-item {
	padding: 8px 0;
	margin-left: 8px;

	cursor: pointer;
}
.nav-item span {
	font-size: 1.3rem;
}
.nav-item:hover {
	transition: 0.3s;
	color: #000;
}
</style>
