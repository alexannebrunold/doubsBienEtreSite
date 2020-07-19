<template>
	<div class="explicationService">
		<h1 class="explicationService--title">{{ currentPage.title }}</h1>
		<h2 class="explicationService--question">{{ currentPage.unQ }}</h2>
		<div class="explicationService__flex">
			<p class="explicationService__flex--text"></p>
			<img src="" alt="" />
		</div>
		<h2 class="explicationService--question">{{ currentPage.deuxQ }}</h2>
		<p class="explicationService--text"></p>
		<h2 class="explicationService--question">{{ bienfaits }}</h2>
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
			bienfaits: "Les bienfaits",
		}
	},
	components: {
		Button,
	},
	props: {
		// title: String,
		firstQuestion: String,
		secondQuestion: String,
		currentPage: Object,
	},
	mounted() {},
}
</script>

<style lang="scss" scoped>
.explicationService {
	font-family: "Josefin Sans", sans-serif;
	padding-right: 16px;
	padding-left: 16px;
	&--title {
		font-family: "Dancing Script", cursive;
		font-size: 26px;
		margin-bottom: 8%;
		text-align: center;
		@include tablet {
			font-size: 40px;
		}
		@include laptop {
			font-size: 48px;
		}
	}
	&--question {
		font-size: 20px;
	}
	&--text {
		font-size: 16px;
		text-align: left;
		font-weight: 300;
	}
	&__flex {
		&--text {
			font-size: 16px;
			text-align: left;
			font-weight: 300;
		}
	}
}
</style>
