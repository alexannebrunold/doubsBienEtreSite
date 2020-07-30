<template>
	<div class="contact">
		<div class="contact__action">
			<h1 class="contact__action--title">Envie de prendre contact ?</h1>
			<div class="contact__action__mailOrPhone">
				<div>
					<h2>
						1 Par Mail
					</h2>
					<h3>1 Par Mail</h3>
					<p>abc@def.hi</p>
				</div>
				<div>
					<h2>
						1 Par Téléphone
					</h2>
					<h3>1 Par Téléphone</h3>
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

	height: 100vh;
	margin-top: 8%;
	text-align: center;
	@include tablet {
		padding-right: 80px;
		padding-left: 80px;
	}
	& h2 {
		font-size: 14px;
		position: absolute;
		text-decoration: none;
		-webkit-text-stroke: 1px;
		-webkit-text-stroke-color: #000;
		color: $white;
		z-index: 2;
		@include tablet {
			font-size: 20px;
		}
	}
	& h3 {
		font-size: 14px;
		position: relative;
		text-decoration: none;
		-webkit-text-stroke: 4px;
		-webkit-text-stroke-color: $secondaryLightPink;
		margin-left: 2px;
		color: transparent;
		z-index: 1;
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
	&__action {
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
		&__mailOrPhone {
			background-image: url("~@/assets/img/flowersBackground.jpg");
			padding: 16px;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			height: 100%;
			background-repeat: no-repeat;
			@include tablet {
				flex-direction: row;
			}
		}
	}
}
.number {
	font-size: 14px;
	position: absolute;
	text-decoration: none;
	-webkit-text-stroke: 1px;
	-webkit-text-stroke-color: #000;
	color: $white;
	z-index: 2;
	@include tablet {
		font-size: 20px;
	}
}
.numberBack {
	font-size: 14px;
	position: relative;
	text-decoration: none;
	-webkit-text-stroke: 4px;
	-webkit-text-stroke-color: $secondaryLightPink;

	color: transparent;
	z-index: 6;
	@include tablet {
		font-size: 20px;
	}
}
</style>
