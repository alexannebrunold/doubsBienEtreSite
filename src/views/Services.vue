<template>
	<div class="service">
		<span class="service__back">
			<img
				@click="$router.go(-1)"
				src="../assets/img/leftArrow.svg"
				alt="Flêche de retour"
				class="service--image"
			/>
			Retour
		</span>

		<ExplicationService
			:currentPage="currentService"
			:listebienfaits="currentService.listebienfaits"
		/>
	</div>
</template>

<script>
import ExplicationService from "@/components/ExplicationService.vue"

export default {
	name: "Service",
	data() {
		return {
			services: {
				reiki: {
					title: "Le Reiki",
					whatIsIt: "Qu'est-ce que c'est ?",
					textWhat:
						"La définition du reiki est « la force de l’esprit » (traduction littérale : « énergie de l’esprit »).Union de la méditation et de la relaxation par un toucher relaxant sur des points du corps, elle favorise l’émergence de vos potentiels naturels solutionnant. C’est donc une pratique de bien-être et de relation d’aide, consistant à arrêter les maux de la personne, en équilibrant son corps – énergie – esprit.",
					forWhoWhat: "Pour qui ? Pour quoi ? ",
					forPeople:
						"Ultima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et nitidis et civitates habens quasdam Ultima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et nitidis et civitates habens quasdam Ultima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et nitidis et civitates habens quasdamUltima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et nitidis et civitates habens quasdamUltima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et nitidis et civitates habens quasdam",
					listebienfaits: [
						"Reduit le stress",
						"Facilite la guérison",
						"Améliore le bien-être général",
						"Bénéfique pour certaines maladies",
					],
				},
				magnetisme: {
					title: "Le Magnetisme",
					whatIsIt: "Qu'est-ce que c'est ?",
					textWhat:
						"Le magnétisme est l‘ensemble des procédés (passes, souffle magnétique, imposition des mains,…) utilisant le fluide magnétique à des fins de soulagement et de guérison des maux et maladies. Ce n’est pas simplement un don au sens de « faculté », même si certaines personnes ont plus la capacité de magnétiser que d’autres, mais bien plutôt un don en termes de « donner son énergie aux autres ». Le magnétisme consiste aussi à rééquilibrer les énergies d’une personne. En touchant ou non le corps, le magnétiseur ressent les blocages ou les manques d’énergie et régule ces flux. Cela permet alors de relancer les processus d’auto guérison au niveau physique, émotionnel et mental.",
					forWhoWhat: "Pour qui ? Pour quoi ? ",
					forPeople:
						"Ultima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et nitidis et civitates habens quasdam Ultima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et nitidis et civitates habens quasdam Ultima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et nitidis et civitates habens quasdamUltima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et nitidis et civitates habens quasdamUltima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et nitidis et civitates habens quasdam",
					listebienfaits: [
						"Reduit le stress",
						"Facilite la guérison",
						"Améliore le bien-être général",
						"Bénéfique pour certaines maladies",
					],
				},
				coaching: {
					title: "Le Coaching",
					whatIsIt: "Qu'est-ce que c'est ?",
					textWhat:
						"Ultima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et nitidis et civitates habens quasdam egregias, nullam nulli cedentem sed sibi vicissim velut ad perpendiculum aemulas: Caesaream, quam ad honorem Octaviani principis exaedificavit Herodes, et Eleutheropolim et Neapolim itidemque Ascalonem Gazam aevo superiore exstructas",

					forWhoWhat: "Pour qui ? Pour quoi ? ",
					forPeople:
						"Ultima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et nitidis et civitates habens quasdam Ultima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et nitidis et civitates habens quasdam Ultima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et nitidis et civitates habens quasdamUltima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et nitidis et civitates habens quasdamUltima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et nitidis et civitates habens quasdam",
					listebienfaits: [
						"Reduit le stress",
						"Facilite la guérison",
						"Améliore le bien-être général",
						"Bénéfique pour certaines maladies",
					],
				},
			},
		}
	},

	components: {
		ExplicationService,
	},
	props: {},
	computed: {
		currentService() {
			return this.services[this.$route.params.name]
		},
	},
	mounted() {
		console.error(this.$route.params.name)
	},
}
</script>

<style lang="scss" scoped>
.service {
	width: 100%;
	height: auto;

	&__back {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-family: "Josefin Sans", sans-serif;
		padding-top: 2%;
		padding-right: 16px;
		padding-left: 16px;
		font-size: 10px;
		cursor: pointer;
		&:hover {
			color: $secondaryPink;
		}
		@include tablet {
			padding-right: 80px;
			padding-left: 80px;
			font-size: 12px;
		}
		& img {
			width: 2%;
			margin-right: 1%;
		}
	}
}
</style>
