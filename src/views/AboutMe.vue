<template>
	<section class="aboutMe">
		<div class="aboutMe__whoIs">
			<h1 class="aboutMe__whoIs--title">Mes services</h1>
			<div class="aboutMe__whoIs--flex">
				<img src="../assets/img/logo/avatar.svg" alt="" class="aboutMe__whoIs--flex--avatar" />
				<p class="aboutMe__whoIs--flex--textPresentation">
					Ultima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et
					nitidis et civitates habens quasdam egregias, nullam nulli cedentem sed sibi vicissim
					velut ad perpendiculum aemulas: Caesaream, quam ad honorem Octaviani principis
					exaedificavit Herodes, et Eleutheropolim et Neapolim itidemque Ascalonem Gazam aevo
					superiore exstructas Ultima Syriarum est Palaestina per intervalla magna protenta, cultis
					abundans terris et nitidis et civitates habens quasdam egregias, nullam nulli cedentem sed
					sibi vicissim velut ad
				</p>
			</div>
		</div>
		<h1 class="aboutMe__whoIs--title">Formation</h1>
		<div class="aboutMe--card">
			<CardDiplome
				v-for="(diplome, index) in diplomes"
				:key="index"
				:textTitleDiplome="diplome.title"
				:textExplicationDiplome="diplome.description"
				:names="diplome.names"
			/>
		</div>
	</section>
</template>

<script>
import CardDiplome from "@/components/CardDiplome.vue"
export default {
	data() {
		return {
			diplomes: [
				{
					title: "Diplôme de Lorem",
					description: "Ultima Syriarum est Palaestina per intervalla magna",
					names: ["Lorem", "Lorem", "Lorem", "Lorem"],
				},
				{
					title: "Diplôme de Lorem",
					description: "Ultima Syriarum est Palaestina per intervalla magna",
					names: ["Lorem", "Lorem", "Lorem", "Lorem"],
				},
				{
					title: "Diplôme de Lorem",
					description: "Ultima Syriarum est Palaestina per intervalla magna",
					names: ["Lorem", "Lorem", "Lorem", "Lorem"],
				},
			],
		}
	},
	props: {},
	components: {
		CardDiplome,
	},
}
</script>

<style lang="scss" scoped>
.aboutMe {
	width: 100vw;
	padding-right: 16px;
	padding-left: 16px;
	text-align: center;
	@include tablet {
		padding-right: 80px;
		padding-left: 80px;
	}
	&__whoIs {
		padding-top: 12%;
		padding-bottom: 16%;
		text-align: center;
		font-family: "Josefin Sans", sans-serif;

		@include laptop {
			padding-top: 6%;
			padding-bottom: 16%;
		}
		&--title {
			font-family: "Dancing Script", cursive;
			font-size: 26px;
			margin-bottom: 8%;
			text-align: center;
			@include tablet {
				font-size: 40px;
			}
			@include laptop {
				font-size: 48px;
			}
		}
		&--flex {
			display: flex;
			flex-direction: column;
			align-items: center;
			@include tablet {
				flex-direction: row;
				justify-content: space-around;
			}

			&--avatar {
				width: 204px;
				height: 132px;

				@include tablet {
					width: 231px;
					height: 227.02px;
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
				width: 80%;
				@include tablet {
					font-size: 16px;

					font-size: 16px;
				}
				@include laptop {
					font-size: 24px;
					width: 48%;
				}
			}
		}
	}
	&--card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

		@include tablet {
			flex-direction: row;
			justify-content: space-around;
			height: 80vh;
		}
	}
}
</style>
