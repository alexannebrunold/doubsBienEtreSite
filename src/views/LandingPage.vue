<template>
	<div class="landingPage">
		<section class="landingPage__home">
			<h1 class="landingPage__home--citation">
				« Certains regardent la vase au fond de l'étang, d'autres contemplent la fleur de lotus à la
				surface de l'eau, il s'agit d'un choix. »
			</h1>
			<h2 class="landingPage__home--author">Le Dalaï Lama</h2>
		</section>

		<div class="landingPage--parallaxImage"></div>

		<!-- Présentation -->
		<section class="landingPage__presentation">
			<h1 class="landingPage__presentation--title">Qui suis-je ?</h1>
			<img src="../assets/img/logo/avatar.svg" alt="" class="landingPage__presentation--avatar" />
			<p class="landingPage__presentation--textPresentation">
				Ultima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et
				nitidis et civitates habens quasdam egregias, nullam nulli cedentem sed sibi vicissim velut
				ad perpendiculum aemulas: Caesaream, quam ad honorem Octaviani principis exaedificavit
				Herodes, et Eleutheropolim et Neapolim itidemque Ascalonem Gazam aevo superiore exstructas
			</p>
			<Button textButton="Lire la suite" class="landingPage__presentation--buttonReadMore" />
		</section>

		<div class="landingPage--parallaxImage2"></div>

		<!-- Contact -->
		<section class="landingPage__contact">
			<h1 class="landingPage__contact--title">On reste en contact ?</h1>

			<div class="landingPage__contact__cardContact">
				<img
					src="../assets/img/contact.jpg"
					alt=""
					class="landingPage__contact__cardContact--imageContactLeft"
				/>

				<div class="landingPage__contact__cardContact--links">
					<a href="mailto:#">doubsbiênetre5@yahoo.fr</a>
					<a href="tel:0102030405">01 02 03 04 05</a>
					<span class="landingPage__contact__cardContact--links__facebook">
						<img src="../assets/img/logo/facebook.svg" alt="Facebook" />
						<p>doubsbiênetre5@yahoo.fr</p>
					</span>
					<span class="landingPage__contact__cardContact--links__instagram">
						<img src="../assets/img/logo/instagram.svg" alt="Instagram" />
						<p>doubsbiênetre5@yahoo.fr</p>
					</span>
				</div>
			</div>
			<img src="../assets/img/upArrow.svg" alt="" class="landingPage__contact--upArrow" />
		</section>
		<CardService
			v-for="item in items"
			:key="index"
			:src="item[index].image"
			textTitleService="Coucou"
			textExplicationService="Bonjour"
		/>
		<!-- Footer -->
		<Footer />
	</div>
</template>

<!-- <Button textButton="Lire la suite" /> -->
<script>
import Button from "@/components/Button.vue"
import Footer from "@/components/Footer.vue"
import CardService from "@/components/CardService.vue"
export default {
	name: "landingPage",
	components: {
		Button,
		Footer,
		CardService,
	},
	data() {
		return {
			items: [
				{
					image: require("../assets/img/logo/reiki.svg"),
				},
				{
					image: require("../assets/img/logo/magnetism.svg"),
				},
				{
					image: require("../assets/img/logo/coach.svg"),
				},
			],
		}
	},
}
</script>

<style lang="scss" scoped>
.landingPage {
	width: 100vw;

	&__home {
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
		&--author {
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
		&--buttonReadMore {
			float: right;
			grid-area: 3 / 2 / 4 / 3;
		}
	}

	&--parallaxImage {
		background-image: url("~@/assets/img/parallax.jpg");

		height: 160px;

		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	&--parallaxImage2 {
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
		height: 40vh;

		@include tablet {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			height: 48vh;
			padding-right: 80px;
			padding-left: 80px;
		}
		@include laptop {
			height: 100vh;
			padding-top: 4%;
			margin-top: 0;
			margin-bottom: 0;
		}
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
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			&--imageContactLeft {
				display: none;
				@include tablet {
					display: block;
				}
			}
			&--links {
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
				font-family: "Josefin Sans", sans-serif;
				position: relative;
				width: 90%;
				& a {
					text-decoration: none;
					color: $black;
					&:hover {
						color: $secondaryPink;
					}
				}
				@include tablet {
					width: 469px;
					height: 287px;
					font-size: 18px;
					background-image: url("~@/assets/img/test.svg");
				}
				@include laptop {
					justify-content: space-between;
				}
				& span {
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					align-items: center;
					@include tablet {
						justify-content: center;
						& p {
							margin-right: 10%;
						}
						& img {
							padding-right: 6%;
						}
					}
				}
			}
		}
		&--upArrow {
			float: right;
			height: 24px;
			width: 24px;
			margin-top: 4%;
			margin-bottom: 4%;
			@include tablet {
				height: 32px;
				width: 32px;
				display: flex;
				flex-direction: row;
				align-self: flex-end;
			}
		}
	}
}
</style>
