<template>
	<div id="app">
		<Header />
		<router-view />
		<Footer />
	</div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
	name: "Home",
	components: {
		Header,
		Footer,
	},
}
</script>

<style lang="scss">
#app {
	width: 100vw;
	height: 100%;
	background-color: $white;
}
</style>
