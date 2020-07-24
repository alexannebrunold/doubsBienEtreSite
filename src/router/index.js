import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/LandingPage.vue"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/aboutme",
		name: "AboutMe",
		component: () => import("../views/AboutMe.vue"),
	},
	{
		path: "/services/:name",
		name: "Services",
		component: () => import("../views/Services.vue"),
	},
	{
		path: "/contact",
		name: "Contact",
		component: () => import("../views/Contact.vue"),
	},
]

const router = new VueRouter({
	routes,
})

export default router
