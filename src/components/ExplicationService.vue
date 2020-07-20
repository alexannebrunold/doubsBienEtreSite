<template>
	<div class="explicationService">
		<h1 class="explicationService--title">{{ currentPage.title }}</h1>

		<div class="explicationService__flex">
			<h2 class="explicationService__flex--question">{{ currentPage.whatIsIt }}</h2>
			<img src="../assets/img/testImg.jpg" alt="" />
			<p class="explicationService__flex--text">
				{{ currentPage.textWhat }}
			</p>
		</div>
		<div class="explicationService__to">
			<h2 class="explicationService__to--question">{{ currentPage.forWhoWhat }}</h2>
			<p class="explicationService__to--text">{{ currentPage.forPeople }}</p>
		</div>
		<div class="explicationService__benefits">
			<h2 class="explicationService__benefits--question">{{ bienfaits }}</h2>
			<ul>
				<li
					v-for="(listebienfait, index) in listebienfaits"
					:key="index"
					class="explicationService__benefits__list--li"
				>
					{{ listebienfait }}
				</li>
			</ul>
		</div>

		<!-- <Button /> -->
	</div>
</template>

<script>
// import Button from "@/components/Button.vue"

export default {
	name: "ExplicationService",
	data() {
		return {
			bienfaits: "Les bienfaits",
		}
	},
	components: {
		// Button,
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
	height: 100%;
	@include tablet {
		padding-right: 80px;
		padding-left: 80px;
	}

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
	&__to {
		margin-bottom: 16%;
		@include tablet {
			margin-bottom: 8%;
		}
		&--question {
			font-size: 18px;
			text-align: left;
			margin-bottom: 8%;
			@include tablet {
				font-size: 20px;
				margin-bottom: 4%;
			}
			@include laptop {
				font-size: 32px;
			}
		}
		&--text {
			font-size: 12px;
			text-align: left;
			font-weight: 300;
			@include tablet {
				font-size: 16px;
			}
			@include laptop {
				font-size: 20px;
			}
		}
	}

	&__flex {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-bottom: 16%;
		@include tablet {
			margin-bottom: 8%;
		}
		&--question {
			font-size: 18px;
			text-align: left;
			margin-bottom: 8%;
			@include tablet {
				font-size: 20px;
				margin-bottom: 4%;
			}
			@include laptop {
				font-size: 32px;
			}
		}
		&--text {
			font-size: 12px;
			text-align: left;
			font-weight: 300;
			width: 80%;
			margin: auto;
			@include tablet {
				font-size: 16px;
			}
			@include laptop {
				font-size: 20px;
			}
		}
		& img {
			align-self: center;
			margin-bottom: 4%;
		}
	}
	&__benefits {
		margin-bottom: 16%;
		@include tablet {
			margin-bottom: 8%;
		}

		&--question {
			font-size: 18px;
			text-align: left;
			margin-bottom: 8%;
			@include tablet {
				font-size: 20px;
				margin-bottom: 4%;
			}
			@include laptop {
				font-size: 32px;
			}
		}
		& li::before {
			content: "\2022";
			color: $secondary;
			font-weight: bold;
			display: inline-block;
			width: 1em;
			font-size: 1em;
		}
		&__list {
			&--li {
				font-size: 14px;
				font-weight: lighter;
				margin-bottom: 2%;
				@include tablet {
					font-size: 16px;
				}

				@include laptop {
					font-size: 20px;
				}
			}
		}
	}
}
</style>
