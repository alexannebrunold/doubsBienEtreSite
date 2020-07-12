<template>
	<div class="cardDiplome">
		<h1 class="cardDiplome--title">{{ textTitleDiplome }}</h1>
		<p class="cardDiplome--explication">{{ textExplicationDiplome }}</p>
		<ul>
			<li>1</li>
			<li>1</li>
			<li>1</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	props: {
		textTitleDiplome: String,
		textExplicationDiplome: String,
		src: String,
		leStyle: Object,
	},
}
</script>

<style lang="scss" scoped>
.cardDiplome {
	border: 2px solid $secondaryLightPink;
	padding: 8%;
	background-color: $white;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 240px;
	width: 240px;
	&--title {
		font-size: 18px;
	}
	&--explication {
		font-size: 12px;
	}
}
</style>
