<template>
	<router-link :to="{ name: Page }">
		<button class="button">
			{{ textButton }}
		</button>
	</router-link>
</template>

<script>
export default {
	name: "PrimaryButton",
	props: {
		textButton: String,
		name: String,
		Page: String,
	},
	mounted() {
		console.log("aaaa" + this.$router.params)
	},
}
</script>

<style lang="scss" scoped>
.button {
	background-color: $secondaryPink;
	font-family: "Josefin Sans", sans-serif;
	padding: 6px 16px;
	color: $white;
	font-size: 8px;
	border-radius: 8px;
	border: 1px solid $secondaryPink;
	cursor: pointer;
	text-transform: uppercase;
	@include tablet {
		font-size: 14px;
		padding: 8px 26px;
	}
	&:hover {
		background-color: $white;
		border: 1px solid $secondaryPink;
		color: $secondaryPink;
	}
}
</style>
