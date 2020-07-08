<template>
	<div class="home">
		<span class="home__background">
			<img src="../assets/img/background.jpg" alt="" />
			<h1 class="home__background--citation">
				« Certains regardent la vase au fond de l'étang, d'autres contemplent la fleur de lotus à la
				surface de l'eau, il s'agit d'un choix. »
			</h1>
			<h2 class="home__background--auteur">Le Dalaï Lama</h2>
		</span>
	</div>
</template>

<!-- <Button textButton="Lire la suite" /> -->
<script>
// import Button from "@/components/Button.vue"

export default {
	name: "Home",
	components: {
		// Button,
	},
}
</script>

<style lang="scss" scoped>
.home {
	width: 100vw;

	&__background {
		font-family: "Dancing Script";
		font-size: 20px;
		font-weight: bold;
		line-height: 1.4em;
		text-align: center;
		& img {
			max-width: 100%;
			height: 273px;
			z-index: -2;
			padding-right: 0;
			padding-left: 0;
		}
		&--citation {
			padding-right: 16px;
			padding-left: 16px;
			margin-top: -80%;
		}
		&--auteur {
			margin-top: 4%;
			color: $secondaryPink;
			font-size: 22px;
		}
	}
}
</style>
