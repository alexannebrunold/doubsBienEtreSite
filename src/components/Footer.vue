<template>
	<div class="footer">
		<h1 class="footer--title">Annabelle</h1>
		<p>© 2020 DoubsBienEtre by Anna made with love by Alexannebrd</p>
		<ul>
			<li>A Propos</li>
			<li>Services</li>
			<li>Contact</li>
		</ul>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
	margin-top: 80%;
	width: 100%;
	height: 100%;
	background-color: $primaryPink;
	display: flex;
	padding-right: 16px;
	padding-left: 16px;
	font-size: 12px;
	@include tablet {
		height: 48px;
		padding-right: 80px;
		padding-left: 80px;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	&--title {
		text-align: center;
		vertical-align: middle;
		margin: auto;
		color: $white;
		font-family: "Dancing Script", cursive;
		font-weight: bold;
		font-size: 24px;
		@include tablet {
			font-size: 32px;
		}
		@include laptop {
			margin: 0;
		}
	}
}
</style>
