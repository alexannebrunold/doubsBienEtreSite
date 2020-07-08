<template>
	<div class="home">
		<section class="home__background">
			<h1 class="home__background--citation">
				« Certains regardent la vase au fond de l'étang, d'autres contemplent la fleur de lotus à la
				surface de l'eau, il s'agit d'un choix. »
			</h1>
			<h2 class="home__background--auteur">Le Dalaï Lama</h2>
		</section>
		<div class="home__parallax"></div>
		<section class="home__presentation">
			<h1 class="home__presentation--title">Qui suis-je ?</h1>
			<img src="../assets/img/logo/avatar.svg" alt="" class="home__presentation--avatar" />
			<p class="home__presentation--textPresentation">
				Ultima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et
				nitidis et civitates habens quasdam egregias, nullam nulli cedentem sed sibi vicissim velut
				ad perpendiculum aemulas: Caesaream, quam ad honorem Octaviani principis exaedificavit
				Herodes, et Eleutheropolim et Neapolim itidemque Ascalonem Gazam aevo superiore exstructas
			</p>
		</section>
		<div class="home__parallax"></div>
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
		height: 60vh;
		font-family: "Dancing Script", cursive;
		font-weight: bold;
		line-height: 1.6em;
		text-align: center;
		background-image: url("~@/assets/img/background.jpg");
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		padding-top: 8%;
		&--citation {
			padding-right: 16px;
			padding-left: 16px;
			font-size: 20px;
		}
		&--auteur {
			margin-top: 6%;
			color: $secondaryPink;
			font-size: 22px;
		}
	}

	//Présentation

	&__presentation {
		padding-right: 16px;
		padding-left: 16px;
		padding-top: 12%;
		padding-bottom: 12%;
		text-align: center;
		font-family: "Josefin Sans", sans-serif;
		&--title {
			font-family: "Dancing Script", cursive;
			margin-bottom: 16%;
			font-size: 24px;
			font-weight: bold;
			text-decoration: underline;
		}
		&--avatar {
			width: 204px;
			height: 132px;
			margin-bottom: 14%;
		}
		&--textPresentation {
			font-size: 12px;
			font-weight: lighter;
			width: 72%;
			margin: auto;
		}
	}

	&__parallax {
		background-image: url("~@/assets/img/parallax.jpg");

		height: 160px;

		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
}
</style>
