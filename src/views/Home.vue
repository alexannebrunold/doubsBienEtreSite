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
			<Button textButton="Lire la suite" class="home__presentation--buttonNext" />
		</section>
		<div class="home__parallax2"></div>
		<section class="home__contact">
			<h1 class="home__contact--title">On reste en contact ?</h1>
			<!-- <img src="../assets/img/contact.jpg" alt="" /> -->
			<div class="home__contact__cardContact">
				<a href="mailto:#">doubsbiênetre5@yahoo.fr</a>
				<a href="tel:0102030405">01 02 03 04 05</a>
				<span>
					<img src="../assets/img/logo/facebook.svg" alt="Facebook" />
					<p>doubsbiênetre5@yahoo.fr</p>
				</span>
				<span>
					<img src="../assets/img/logo/instagram.svg" alt="Instagram" />
					<p>doubsbiênetre5@yahoo.fr</p>
				</span>
			</div>
		</section>
		<Footer />
	</div>
</template>

<!-- <Button textButton="Lire la suite" /> -->
<script>
import Button from "@/components/Button.vue"
import Footer from "@/components/Footer.vue"

export default {
	name: "Home",
	components: {
		Button,
		Footer,
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
		@include laptop {
			height: 90vh;
		}
		&--citation {
			padding-right: 16px;
			padding-left: 16px;
			font-size: 20px;
			@include tablet {
				padding-right: 80px;
				padding-left: 80px;
				font-size: 24px;
			}
			@include laptop {
				font-size: 36px;
			}
		}
		&--auteur {
			margin-top: 6%;
			color: $secondaryPink;
			font-size: 22px;
			@include tablet {
				font-size: 24px;
			}
			@include laptop {
				font-size: 36px;
			}
		}
	}

	//Présentation

	&__presentation {
		padding-right: 16px;
		padding-left: 16px;
		padding-top: 12%;
		padding-bottom: 16%;
		height: 86vh;
		text-align: center;
		font-family: "Josefin Sans", sans-serif;
		@include tablet {
			padding-right: 80px;
			padding-left: 80px;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(3, auto);
			grid-column-gap: 0px;
			grid-row-gap: 0px;
			height: 100vh;
		}
		@include laptop {
			padding-top: 6%;
			padding-bottom: 16%;
		}
		&--title {
			font-family: "Dancing Script", cursive;
			margin-bottom: 16%;
			font-size: 24px;
			font-weight: bold;
			text-decoration: underline;
			@include tablet {
				font-size: 24px;
				grid-area: 1 / 2 / 2 / 3;
				margin-bottom: 0;
			}
			@include laptop {
				font-size: 48px;
				margin-bottom: 6%;
			}
		}
		&--avatar {
			width: 204px;
			height: 132px;
			margin-bottom: 14%;
			@include tablet {
				width: 231px;
				height: 227.02px;
				grid-area: 2 / 1 / 3 / 2;
				margin-bottom: 12%;
			}
			@include laptop {
				width: 353px;
				height: 346.91px;
				margin-bottom: 0;
			}
		}
		&--textPresentation {
			font-size: 12px;
			font-weight: lighter;
			width: 72%;
			margin: auto;
			margin-bottom: 8%;
			@include tablet {
				font-size: 16px;
				grid-area: 2 / 2 / 3 / 3;
				margin-bottom: 12%;
				font-size: 16px;
			}
			@include laptop {
				font-size: 24px;
				width: 100%;
				margin: 0;
				display: flex;
				align-self: center;
			}
		}
		&--buttonNext {
			float: right;
			grid-area: 3 / 2 / 4 / 3;
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
	&__parallax2 {
		background-image: url("~@/assets/img/parallax2.jpg");

		height: 160px;

		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	//Contact
	&__contact {
		padding-right: 16px;
		padding-left: 16px;
		margin-top: 8%;
		margin-bottom: 8%;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		&--title {
			font-family: "Dancing Script", cursive;
			font-size: 26px;
			margin-bottom: 8%;
			@include tablet {
				font-size: 40px;
			}
			@include laptop {
				font-size: 48px;
				margin-bottom: 6%;
			}
		}
		&__cardContact {
			background-image: url("~@/assets/img/flowersBackground.jpg");
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			padding: 8%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-content: center;
			height: 205px;
			font-size: 12px;
			@include tablet {
				width: 469px;
				height: 287px;
				font-size: 18px;
				padding: 5%;
			}
			@include laptop {
			}
			& span {
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;
			}
		}
	}
}
</style>
