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
			<h1
				class="landingPage__presentation--title"
				v-scroll-reveal.reset="{ duration: 800, scale: 1, distance: '10px', delay: 100 }"
			>
				Qui suis-je ?
			</h1>
			<div class="landingPage__presentation__test">
				<img
					src="../assets/img/logo/avatar.svg"
					alt=""
					class="landingPage__presentation__test--avatar"
					v-scroll-reveal.reset="{ duration: 800, scale: 1, distance: '10px', delay: 200 }"
				/>

				<p
					class="landingPage__presentation__test--textPresentation"
					v-scroll-reveal.reset="{ duration: 800, scale: 1, distance: '10px' }"
				>
					Bonjour, je suis
					<span>Annabelle</span>
					votre praticienne en
					<span>Reiki</span>
					,
					<span>magnetisme</span>
					et
					<span>coach de vie</span>
					. Après de longues années d'études et de développement personnel, je propose de vous
					<span>apaiser</span>
					et
					<span>soigner</span>
					vos maux par la pratique énergétique du Reiki et du magnétisme. En tant que
					<span>coach diplômée</span>
					, je vous accompagne dans votre évolution pour
					<span>briller</span>
					et
					<span>vous accomplir</span>
					à votre tour.
				</p>
			</div>
			<Button
				textButton="Lire la suite"
				class="landingPage__presentation__test--buttonReadMore"
				@click.native="$router.push('/aboutme')"
			/>
		</section>

		<div class="landingPage--parallaxImage2"></div>

		<!-- Services -->
		<section class="landingPage__services">
			<h1 class="landingPage__services--title">Mes services</h1>
			<CardService
				v-for="(logo, index) in logos"
				:key="index"
				:src="logo.image"
				:textTitleService="logo.textTitleService"
				:textExplicationService="logo.textExplicationService"
				:leStyle="{ backgroundColor: logo.color }"
				:linkRedirection="logo.linkRedirection"
			/>
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

						<a href="https://www.facebook.com/doubsbienetre25" target="blank">Doubs Bien Être</a>
					</span>
					<span class="landingPage__contact__cardContact--links__instagram">
						<img src="../assets/img/logo/instagram.svg" alt="Instagram" />
						<a href="https://www.instagram.com/doubsbienetre/?hl=fr" target="blank">
							doubsbienetre
						</a>
					</span>
				</div>
			</div>
			<img
				src="../assets/img/upArrow.svg"
				alt=""
				class="landingPage__contact--upArrow"
				@click="scrollToTop"
			/>
		</section>
	</div>
</template>

<script>
import Button from "@/components/Button.vue"
import CardService from "@/components/CardService.vue"

import reiki from "@/assets/img/logo/reiki.svg"
import magnetism from "@/assets/img/logo/magnetism.svg"
import coach from "@/assets/img/logo/coach.svg"
export default {
	name: "landingPage",
	components: {
		Button,
		CardService,
	},
	data() {
		return {
			logos: [
				{
					image: reiki,
					textTitleService: "Reiki",
					textExplicationService:
						"Ultima Sdescriptionriarum est Palaestina per intervalla magna protenta, cultis abundans terris et nitidis et civitates habens quasdam",
					color: "rgba(162, 197, 94, 0.56)",
					linkRedirection: "reiki",
				},
				{
					image: magnetism,
					textTitleService: "Magnetisme",
					textExplicationService:
						"Ultima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et nitidis et civitates habens quasdam",
					color: "rgba(192, 56, 92, 0.46)",
					linkRedirection: "magnetisme",
				},
				{
					image: coach,
					textTitleService: "Coaching",
					textExplicationService:
						"Ultima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et nitidis et civitates habens quasdam",
					color: "rgba(40, 40, 40, 0.16)",
					linkRedirection: "coaching",
				},
			],
		}
	},
	computed: {
		listee() {
			return console.log(this.diplome.liste.length + "cc")
		},
	},
	methods: {
		scrollToTop: function() {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			})
		},
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
		text-align: center;
		font-family: "Josefin Sans", sans-serif;
		@include tablet {
			padding-right: 80px;
			padding-left: 80px;
		}
		@include laptop {
			padding-top: 6%;
		}
		&--title {
			font-family: "Dancing Script", cursive;
			margin-bottom: 16%;
			font-size: 24px;
			font-weight: bold;
			text-decoration: underline;
			@include tablet {
				font-size: 24px;
			}
			@include laptop {
				font-size: 48px;
				margin-bottom: 6%;
			}
		}
		&__test {
			display: flex;
			flex-direction: column;
			align-items: center;
			@include tablet {
				flex-direction: row;
				justify-content: space-between;
			}

			&--avatar {
				width: 204px;
				height: 132px;
				margin-bottom: 14%;
				@include tablet {
					width: 231px;
					height: 227.02px;
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
				&::first-letter {
					color: $secondaryLightPink;
					font-size: 24px;
					font-weight: normal;
				}
				& span {
					color: $secondaryLightPink;
					font-weight: 300;
				}
				@include tablet {
					font-size: 16px;
					margin-bottom: 12%;
					font-size: 16px;
					width: 50%;
					&::first-letter {
						font-size: 28px;
					}
				}
				@include laptop {
					font-size: 24px;
					width: 50%;
					margin: 0;
					align-self: center;
					&::first-letter {
						font-size: 32px;
					}
				}
			}
			&--buttonReadMore {
				float: right;
			}
		}
	}

	&--parallaxImage {
		background-image: url("~@/assets/img/test.jpg");

		height: 160px;

		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	&--parallaxImage2 {
		background-image: url("~@/assets/img/test.jpg");

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
			cursor: pointer;
			animation: flash 2s infinite;
			@include tablet {
				height: 32px;
				width: 32px;
				display: flex;
				flex-direction: row;
				align-self: flex-end;
			}
		}
	}
	&__services {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		text-align: center;
		padding-left: 80px;
		padding-right: 80px;
		margin-top: 2%;
		@include tablet {
			height: 40vh;
			flex-direction: row;
		}
		@include laptop {
			height: 90vh;
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
	}
}
@keyframes flash {
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0.1;
	}
	100% {
		opacity: 1;
	}
}
</style>
