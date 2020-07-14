<template>
	<div>
		<ExplicationService />
	</div>
</template>

<script>
import ExplicationService from "@/components/ExplicationService.vue"

export default {
	name: "PrimaryButton",
	components: {
		ExplicationService,
	},
	props: {},
	mounted() {
		console.log("aaaa" + this.$router.params)
	},
}
</script>

<style lang="scss" scoped></style>
