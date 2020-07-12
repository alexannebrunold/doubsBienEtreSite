<template>
	<div class="cardService">
		<div class="cardService__around">
			<img :src="src" alt="" class="cardService__around--image" :style="leStyle" />
			<div class="cardService__around__text">
				<h1 class="cardService__around__text--title">{{ textTitleService }}</h1>
				<p class="cardService__around__text--explication">{{ textExplicationService }}</p>
				<p class="cardService__around__text--learnMore">En savoir plus --></p>
			</div>
		</div>
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

<style lang="scss" scoped>
.cardService {
	width: 100vw;

	height: 24vh;
	&__around {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		justify-content: space-around;
		&--image {
			width: 86px;
			height: 80px;
			padding: 2%;
			border-radius: 8px;
			text-align: center;
			@include tablet {
				width: 116px;
				height: 108px;
			}
			@include laptop {
				width: 164px;
				height: 142px;
			}
		}
		&__text {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			height: 100px;
			width: 20%;
			font-size: 12px;
		}
	}
}
</style>
