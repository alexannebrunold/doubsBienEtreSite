<template>
	<div>
		<nav class="header">
			<!-- <h1 class="header--title">Annabelle</h1> -->
			<img
				src="../assets/img/logo/logo1.svg"
				alt=""
				class="header--logo"
				@click="$router.push('/')"
			/>
			<div class="header__hamburger" @click="openMenu">
				<div class="header__hamburger--line"></div>
				<div class="header__hamburger--line"></div>
				<div class="header__hamburger--line"></div>
			</div>
			<ul class="header__navLinks" @click="clickClose">
				<li @click="$router.push('/')" class="li">
					<a class="li">Services</a>
				</li>
				<li @click="$router.push('/aboutme')" class="li">
					<a class="li">À Propos</a>
				</li>
				<li @click="$router.push('/contact')" class="li">
					<a class="li">Contact</a>
				</li>
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
		openMenu: function() {
			this.$el.querySelector(".header__navLinks").classList.toggle("open")
		},
		clickClose: function() {
			this.$el.querySelector(".header__navLinks").classList.remove("open")
		},
		scrollInto: function() {
			// this.$el.querySelector(".landingPage").scrollTo(".landingPage__services")
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
	}
	@include laptop {
		// position: fixed;
		align-items: center;
		z-index: 1;
	}
	&--logo {
		vertical-align: middle;
		margin: auto 0;
		padding-left: 16px;
		height: 80%;
		cursor: pointer;

		@include laptop {
			font-size: 48px;
			height: 100%;
			padding-left: 80px;
			transition: 0.4s;
			&:hover {
				transform: scale(1.01);
			}
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
			display: none;
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
		cursor: pointer;
		@include laptop {
			position: relative;
			width: 40%;
			list-style: none;
			height: 0;
			clip-path: none;
			-webkit-clip-path: none;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			padding-right: 80px;
			pointer-events: all;
		}
		& li {
			opacity: 0;

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
				text-decoration: none;
				color: $white;
				font-family: "Josefin Sans", sans-serif;
				text-transform: uppercase;
				position: relative;
				&::after {
					content: "";
					position: absolute;
					left: 50%;
					bottom: -2px;
					transform: translateX(-50%) scaleX(0);
					transform-origin: 50% 50%;
					width: 100%;
					height: 1.4px;
					background-color: $white;
					transition: transform 250ms;
				}
				&:hover {
					&::after {
						transform: translateX(-50%) scaleX(1);
					}
				}

				@include laptop {
					opacity: 1;
					text-transform: none;
				}
			}
		}
		&.close {
			visibility: hidden;
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

			@include tablet {
				clip-path: circle(2000px at 90% -10%);
				-webkit-clip-path: circle(2000px at 90% -10%);
			}
			& li {
				opacity: 1;

				// & a {
				// 	text-decoration: none;
				// 	color: $white;
				// 	font-family: "Josefin Sans", sans-serif;
				// 	text-transform: uppercase;
				// }
			}
		}
	}
}
</style>
