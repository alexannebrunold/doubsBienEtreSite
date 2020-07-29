<template>
	<div class="footer">
		<h1 class="footer--title">DoubsBienEtre</h1>
		<p class="footer--copyright">© 2020 DoubsBienEtre by Anna made with love by Alexannebrd</p>
		<ul class="footer--li">
			<li @click="$router.push('/')">Services</li>
			<li @click="$router.push('/aboutme')">A Propos</li>
			<li @click="$router.push('/contact')">Contact</li>
		</ul>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
	width: 100%;
	padding: 2%;
	background-color: $primaryPink;
	display: flex;
	padding-right: 16px;
	padding-left: 16px;
	flex-direction: row;
	align-items: center;
	text-align: center;
	@include tablet {
		height: 48px;
		padding-right: 80px;
		padding-left: 80px;
	}
	&--title {
		vertical-align: middle;
		color: $white;
		font-family: "Dancing Script", cursive;
		font-weight: bold;
		font-size: 12px;
		@include tablet {
			font-size: 32px;
		}
		@include laptop {
			margin: 0;
		}
	}
	&--copyright {
		color: $white;
		font-family: "Josefin Sans";
		font-size: 8px;
		width: 50%;
		margin: auto;
		@include tablet {
			font-size: 10px;
		}
		@include laptop {
			font-size: 12px;
		}
	}
	&--li {
		display: flex;
		flex-direction: column;
		color: $white;
		font-family: "Josefin Sans";
		font-size: 8px;
		& li:hover {
			color: $secondaryPink;
		}
		@include tablet {
			font-size: 10px;
		}
		@include laptop {
			font-size: 12px;
		}
	}
}
</style>
