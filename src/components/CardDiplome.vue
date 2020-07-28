<template>
	<div class="cardDiplome">
		<div class="cardDiplome__text">
			<h1 class="cardDiplome__text--title">{{ textTitleDiplome }}</h1>
			<p class="cardDiplome__text--explication">{{ textExplicationDiplome }}</p>
		</div>
		<div class="cardDiplome__list">
			<ul>
				<li v-for="(name, index) in names" :key="index" class="cardDiplome__list--li">
					{{ name }}
				</li>
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

	@include laptop {
		width: 332px;
		height: 408px;
		transition: 0.4s;
		&:hover {
			-webkit-box-shadow: 16px 10px 24px 1px rgba(221, 220, 220, 0.8);
			-moz-box-shadow: 16px 10px 24px 1px rgba(201, 200, 200, 0.8);
			box-shadow: 16px 10px 24px 1px rgba(214, 214, 214, 0.8);
		}
	}
	&__text {
		&--title {
			font-size: 18px;
			@include laptop {
				font-size: 24px;
			}
		}
		&--explication {
			font-size: 12px;
			width: 60%;
			margin: auto;
			font-weight: lighter;
			@include laptop {
				font-size: 20px;
			}
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
	&__list {
		&--li {
			font-size: 14px;
			@include laptop {
				font-size: 20px;
				margin-bottom: 8%;
			}
		}
	}
}
</style>
