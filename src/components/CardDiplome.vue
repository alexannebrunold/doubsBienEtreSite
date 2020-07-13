<template>
	<div class="cardDiplome">
		<div class="cardDiplome__text">
			<h1 class="cardDiplome__text--title">{{ textTitleDiplome }}</h1>
			<p class="cardDiplome__text--explication">{{ textExplicationDiplome }}</p>
		</div>
		<div>
			<ul>
				<li v-for="(name, index) in names" :key="index">{{ name }}</li>
			</ul>
		</div>
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
		names: Array,
	},
}
</script>

<style lang="scss" scoped>
.cardDiplome {
	border: 2px solid $secondaryLightPink;
	padding: 2%;
	background-color: $white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	height: 216px;
	width: 200px;
	text-align: center;
	font-family: "Josefin Sans", sans-serif;
	border-radius: 6px;
	align-items: center;
	&__text {
		&--title {
			font-size: 18px;
		}
		&--explication {
			font-size: 12px;
			width: 60%;
			margin: auto;
			font-weight: lighter;
		}
	}
	& li::before {
		content: "\2022";
		color: $secondary;
		font-weight: bold;
		display: inline-block;
		width: 1em;
		margin-left: -1em;
		font-size: 1em;
	}
}
</style>
