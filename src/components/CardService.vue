<template>
	<div class="cardService">
		<div :style="leStyle">
			<img :src="src" alt="" class="cardService--image" />
		</div>

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
		leStyle: Object,
	},
}
</script>

<style lang="scss" scoped></style>
