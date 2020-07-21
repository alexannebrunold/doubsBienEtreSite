<template>
	<div>
		<nav class="header">
			<h1 class="header--title">Annabelle</h1>

			<div class="header__hamburger" @click="cc">
				<div class="header__hamburger--line"></div>
				<div class="header__hamburger--line"></div>
				<div class="header__hamburger--line"></div>
			</div>
			<ul class="header__navLinks">
				<li><a href="#">Services</a></li>
				<li><a href="#">À Propos</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
		</nav>
	</div>
</template>

<script>
export default {
	data() {
		return {
			open: true,
		}
	},
	methods: {
		cc: function() {
			// hamburger.addEventListener("click", () => {
			this.$el.querySelector(".header__navLinks").classList.toggle("open")
			// this.$el.querySelectorAll(".header__navLinks li").forEach((link) => {
			// 	link.classList.toggle("fade")
			// })
			// })
		},
	},
}
</script>

<style lang="scss" scoped>
.header {
	width: 100%;
	height: 48px;
	background-color: $primaryPink;
	display: flex;

	flex-direction: row;
	justify-content: space-between;

	position: relative;

	@include tablet {
		height: 72px;
		padding-right: 80px;
		padding-left: 80px;
	}
	&--title {
		vertical-align: middle;
		margin: auto 0;
		padding-left: 16px;

		color: $white;
		font-family: "Dancing Script", cursive;
		font-weight: bold;
		font-size: 32px;
		@include tablet {
			font-size: 40px;
		}
		@include laptop {
			font-size: 48px;
		}
	}
	&__hamburger {
		position: absolute;
		cursor: pointer;
		right: 5%;
		top: 50%;
		transform: translate(-5%, -50%);
		z-index: 15;
		@include laptop {
			opacity: 0;
		}
		&--line {
			width: 30px;
			height: 3px;
			background: white;
			margin: 5px;
		}
	}
	&__navLinks {
		position: fixed;
		height: 100vh;
		width: 100%;
		flex-direction: column;
		clip-path: circle(100px at 90% -10%);
		-webkit-clip-path: circle(100px at 90% -10%);
		transition: all 1s ease-out;
		pointer-events: none;
		@include laptop {
			display: flex;
			list-style: none;
			justify-content: space-around;
			align-items: center;
			flex-direction: row;
			list-style: none;

			align-items: center;

			background-color: violet;
		}
		& li {
			opacity: 0;
			z-index: 11;
			@include laptop {
				opacity: 1;
			}
			&:nth-child(1) {
				transition: all 0.5s ease 0.2s;
			}
			&:nth-child(2) {
				transition: all 0.5s ease 0.4s;
			}
			&:nth-child(3) {
				transition: all 0.5s ease 0.6s;
			}
			& a {
				font-size: 24px;
				@include laptop {
					opacity: 1;
				}
			}
		}
		&.open {
			clip-path: circle(1000px at 90% -10%);
			-webkit-clip-path: circle(1000px at 90% -10%);
			pointer-events: all;
			z-index: 10;
			height: 100vh;
			width: 100vw;
			padding: inherit;
			background-color: $secondaryPink;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: center;

			& li {
				opacity: 1;

				& a {
					text-decoration: none;
					color: $white;
					font-family: "Josefin Sans", sans-serif;
					text-transform: uppercase;
				}
			}
		}

		// @include laptop {
		// 	display: flex;
		// 	list-style: none;
		// 	width: 50%;
		// 	height: 100%;
		// 	justify-content: space-around;
		// 	align-items: center;
		// 	margin-left: auto;
		// 	& li a {
		// 		color: white;
		// 		text-decoration: none;
		// 		font-size: 16px;
		// 		@include laptop {
		// 			opacity: 1;
		// 		}
		// 	}
		// }
	}
}
</style>
