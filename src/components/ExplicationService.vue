<template>
	<div class="explicationService">
		<h1 class="explicationService--title">{{ currentPage.title }}</h1>
		<h2 class="explicationService--question">{{ currentPage.whatIsIt }}</h2>
		<div class="explicationService__flex">
			<img src="../assets/img/testImg.jpg" alt="" />
			<p class="explicationService__flex--text">
				{{ currentPage.textWhat }}
			</p>
		</div>

		<h2 class="explicationService--question">{{ currentPage.forWhoWhat }}</h2>
		<p class="explicationService--text">{{ currentPage.forPeople }}</p>
		<h2 class="explicationService--question">{{ bienfaits }}</h2>
		<li v-for="(listebienfait, index) in listebienfaits" :key="index" class="cardDiplome__list--li">
			{{ listebienfait }}
		</li>
		<Button />
	</div>
</template>

<script>
import Button from "@/components/Button.vue"

export default {
	name: "PrimaryButton",
	data() {
		return {
			bienfaits: "Les bienfaits",
		}
	},
	components: {
		Button,
	},
	props: {
		firstQuestion: String,
		secondQuestion: String,
		currentPage: Object,
		listebienfaits: Array,
	},
	mounted() {},
}
</script>

<style lang="scss" scoped>
.explicationService {
	font-family: "Josefin Sans", sans-serif;
	padding-right: 16px;
	padding-left: 16px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;
	height: 100vh;
	&--title {
		font-family: "Dancing Script", cursive;
		font-size: 20px;
		margin-bottom: 8%;
		text-align: center;

		@include tablet {
			font-size: 24px;
		}
		@include laptop {
			font-size: 48px;
		}
	}
	&--question {
		font-size: 18px;
		text-align: left;
	}
	&--text {
		font-size: 12px;
		text-align: left;
		font-weight: 300;
	}
	&__flex {
		&--text {
			font-size: 12px;
			text-align: left;
			font-weight: 300;
			width: 80%;
			margin: auto;
		}
	}
}
</style>
