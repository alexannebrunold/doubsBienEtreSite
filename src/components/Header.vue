<template>
	<div class="header">
		<h1 class="header--title">Annabelle</h1>
		<nav class="header__nav"><img src="../assets/img/logo/peony.svg" alt="" /></nav>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
	width: 100%;
	height: 48px;
	background-color: $primaryPink;
	display: flex;
	padding-right: 16px;
	padding-left: 16px;
	@include tablet {
		height: 72px;
		padding-right: 80px;
		padding-left: 80px;
	}
	&--title {
		text-align: center;
		vertical-align: middle;
		margin: auto;
		color: $white;
		font-family: "Dancing Script";
		font-weight: bold;
		font-size: 32px;
		@include tablet {
			font-size: 40px;
		}
		@include laptop {
			font-size: 48px;
		}
	}
	&__nav {
		margin: auto 0;
	}
}
</style>
