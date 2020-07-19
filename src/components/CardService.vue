<template>
	<div class="cardService">
		<img :src="src" alt="" class="cardService--image" :style="leStyle" />
		<div class="cardService__text">
			<h1 class="cardService__text--title">{{ textTitleService }}</h1>
			<p class="cardService__text--explication">{{ textExplicationService }}</p>
			<p class="cardService__text--learnMore" @click="switchPage">En savoir plus --></p>
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
		linkRedirection: String,
	},
	methods: {
		switchPage: function() {
			return this.$router.push({
				name: "Services",
				params: {
					name: this.linkRedirection,
				},
			})
		},
	},
	mounted() {
		console.error("aaaa" + this.linkRedirection)
	},
}
</script>

<style lang="scss" scoped>
.cardService {
	width: 100vw;
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
		justify-content: space-evenly;
		font-family: "Josefin Sans", sans-serif;
		height: 160px;
		width: 40%;
		@include laptop {
			height: 200px;
			width: 80%;
		}
		&--title {
			font-weight: 400;
			font-style: 18px;
			text-transform: uppercase;
			@include tablet {
				font-size: 26px;
			}
			@include laptop {
				font-size: 32px;
			}
		}
		&--explication {
			font-weight: lighter;
			font-size: 12px;

			@include tablet {
				font-size: 18px;
			}
			@include laptop {
				font-size: 20px;
			}
		}
	}
}
</style>
