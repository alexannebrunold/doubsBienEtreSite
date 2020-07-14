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
// #app {
// 	font-family: "Josefin Sans", sans-serif;
// 	-webkit-font-smoothing: antialiased;
// 	-moz-osx-font-smoothing: grayscale;
// 	text-align: center;
// 	color: $secondaryPink;
// }
</style>
