import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import VueScrollReveal from "vue-scroll-reveal"

Vue.use(VueScrollReveal)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app")
