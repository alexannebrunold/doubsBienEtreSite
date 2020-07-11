<template>
	<div class="cardService">
		<img :src="src" alt="" class="cardService--image" />
		<h1 class="cardService--title">{{ textTitleService }}</h1>
		<p class="cardService--explication">{{ textExplicationService }}</p>
		<p class="cardService--learnMore">En savoir plus --></p>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	props: {
		textTitleService: String,
		textExplicationService: String,
		src: String,
	},
}
</script>

<style lang="scss" scoped></style>
