<template>
	<div class="explicationService">
		<h1 class="explicationService--title">Le Reiki {{ title }}</h1>
		<h2 class="explicationService--question">{{ firstQuestion }}</h2>
		<div class="explicationService__flex">
			<p class="explicationService__flex--text">
				Ultima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et
				nitidis et civitates habens quasdam Ultima Syriarum est Palaestina per intervalla magna
				protenta, cultis abundans terris et nitidis et civitates habens quasdam Ultima Syriarum est
				Palaestina per intervalla magna protenta, cultis abundans terris et nitidis et civitates
				habens quasdamUltima Syriarum est Palaestina per intervalla magna protenta, cultis abundans
				terris et nitidis et civitates habens quasdamUltima Syriarum est Palaestina per intervalla
				magna protenta, cultis abundans terris et nitidis et civitates habens quasdam
			</p>
			<img src="" alt="" />
		</div>
		<h2>{{ secondQuestion }}</h2>
		<p>
			Ultima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et
			nitidis et civitates habens quasdam Ultima Syriarum est Palaestina per intervalla magna
			protenta, cultis abundans terris et nitidis et civitates habens quasdam Ultima Syriarum est
			Palaestina per intervalla magna protenta, cultis abundans terris et nitidis et civitates
			habens quasdamUltima Syriarum est Palaestina per intervalla magna protenta, cultis abundans
			terris et nitidis et civitates habens quasdamUltima Syriarum est Palaestina per intervalla
			magna protenta, cultis abundans terris et nitidis et civitates habens quasdam
		</p>
		<h2>{{ bienfaits }}</h2>
		<ul>
			<li>Bonjour</li>
		</ul>
		<Button />
	</div>
</template>

<script>
import Button from "@/components/Button.vue"

export default {
	name: "PrimaryButton",
	data() {
		return {
			firstQuestion: "Qu'est-ce que c'est",
			secondQuestion: "Pour qui ? Pour quoi ?",
			bienfaits: "Les bienfaits",
		}
	},
	components: {
		Button,
	},
	props: {
		title: String,

		Page: String,
	},
	mounted() {
		console.log("aaaa" + this.$router.params)
	},
}
</script>

<style lang="scss" scoped></style>
