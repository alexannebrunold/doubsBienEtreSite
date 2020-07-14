<template>
	<section class="aboutMe">
		<h1 class="aboutMe--title">Mes services</h1>
		<img src="../assets/img/logo/avatar.svg" alt="" class="aboutMe--avatar" />
		<p class="aboutMe--textPresentation">
			Ultima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et
			nitidis et civitates habens quasdam egregias, nullam nulli cedentem sed sibi vicissim velut ad
			perpendiculum aemulas: Caesaream, quam ad honorem Octaviani principis exaedificavit Herodes,
			et Eleutheropolim et Neapolim itidemque Ascalonem Gazam aevo superiore exstructas
		</p>
		<h1 class="aboutMe--title">Formation</h1>
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
	&--card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		@include tablet {
			flex-direction: row;
			justify-content: space-around;
		}
	}
}
</style>
