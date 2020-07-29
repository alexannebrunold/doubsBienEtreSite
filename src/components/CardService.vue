<template>
	<div class="cardService">
		<img :src="src" alt="" class="cardService--image" :style="leStyle" />
		<div class="cardService__text">
			<h1 class="cardService__text--title">{{ textTitleService }}</h1>
			<p class="cardService__text--explication">{{ textExplicationService }}</p>
			<p class="cardService__text--learnMore" @click="switchPage" @mouseenter="switchImg">
				En savoir plus
				<img
					src="../assets/img/rightArrow.svg"
					alt=""
					class="cardService__text--learnMore--img"
					id="myid"
				/>
			</p>
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
	components: {},
	methods: {
		switchPage: function() {
			return this.$router.push({
				name: "Services",
				params: {
					name: this.linkRedirection,
				},
			})
		},
		switchImg: function() {
			this.$el["myid"].setAttribute("src", "../assets/img/rightArrow.svg")
		},
	},
	// created() {
	// 	console.error("aaaa" + this.$el["myid"])
	// },
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
	margin-bottom: 8%;
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
		&--learnMore {
			cursor: pointer;
			font-size: 8px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-end;
			@include tablet {
				font-size: 10px;
			}
			@include laptop {
				font-size: 12px;
			}
			&:hover {
				color: $secondaryPink;
				cursor: pointer;
				// & img {
				// 	background: url("~@/assets/img/parallax.jpg");
				// }
			}
			& img {
				width: 20%;
				height: 40%;
				opacity: 1;
			}
		}
	}
}
</style>
