<template>
	<div class="contact">
		<div class="contact__messages">
			<h1 class="contact__messages--title">Envie de prendre contact ?</h1>
			<div class="contact__messages__next">
				<div>
					<h2>1 Par Mail</h2>
					<p>abc@def.hi</p>
				</div>
				<div>
					<h2>1 Par Mail</h2>
					<p>abc@def.hi</p>
				</div>
			</div>
		</div>
		<div class="contact__find">
			<h1 class="contact--title">Où me retrouver ?</h1>
			<div class="contact__find__text">
				<div>
					<h2>1 Par Mail</h2>
					<p>abc@def.hi</p>
				</div>
				<div>
					<h2>1 Par Mail</h2>
					<p>abc@def.hi</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Contact",
	data() {
		return {}
	},
	components: {},
	props: {},
	mounted() {},
}
</script>

<style lang="scss" scoped>
.contact {
	padding-right: 16px;
	padding-left: 16px;
	font-family: "Josefin Sans", sans-serif;
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: space-evenly;
	text-align: center;
	@include tablet {
		padding-right: 80px;
		padding-left: 80px;
	}
	& h2 {
		font-size: 14px;
		@include tablet {
			font-size: 20px;
		}
	}
	& p {
		font-size: 12px;
		@include tablet {
			font-size: 18px;
		}
	}

	&--title {
		font-family: "Dancing Script", cursive;
		font-size: 20px;
		margin-bottom: 8%;
		text-align: center;
		@include tablet {
			font-size: 48px;
		}
	}
	&__messages {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 40%;
		&--title {
			font-size: 20px;
			font-family: "Dancing Script", cursive;
			margin-bottom: 8%;
			@include tablet {
				font-size: 48px;
			}
		}
		&__next {
			background-image: url("~@/assets/img/flowersBackground.jpg");
			padding: 16px;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			height: 80%;
			background-repeat: no-repeat;
		}
	}
	&__find {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 40%;
		&__text {
			background-image: url("~@/assets/img/flowersBackground.jpg");
			padding: 16px;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			height: 80%;
			background-repeat: no-repeat;
		}
	}
}
</style>
