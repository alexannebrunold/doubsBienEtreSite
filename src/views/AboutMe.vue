<template>
	<section class="aboutMe">
		<h1 class="aboutMe--title">Mes services</h1>
		<CardDiplome
			v-for="(diplome, index) in diplomes"
			:key="index"
			:textTitleDiplome="diplome.title"
			:textExplicationDiplome="diplome.description"
			:names="diplome.names"
		/>
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
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
