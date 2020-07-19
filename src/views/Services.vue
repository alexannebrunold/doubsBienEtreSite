<template>
	<div>
		<ExplicationService :currentPage="currentService" />
	</div>
</template>

<script>
import ExplicationService from "@/components/ExplicationService.vue"

export default {
	name: "Service",
	data() {
		return {
			services: {
				reiki: {
					title: "Le Reiki",
					unQ: "Coucou",
					deuxQ: "Yo",
				},
				magnetism: {
					title: "Le Magnetisme",
					unQ: "Coucou",
					deuxQ: "Yo",
				},
				coaching: {
					title: "Le Coaching",
					unQ: "Coucou",
					deuxQ: "Yo",
				},
			},
		}
	},

	components: {
		ExplicationService,
	},
	props: {},
	computed: {
		currentService() {
			return this.services[this.$route.params.name]
		},
	},
	mounted() {
		console.error(this.$route.params.name)
	},
}
</script>

<style lang="scss" scoped></style>
