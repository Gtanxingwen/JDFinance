import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"
import White from "../white/index.vue"
import Download from "../special/download.vue"
import "../../css/reset.scss"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/money",
            name: "money",
            component: Money
        },
        {
            path: "/white",
            name: "white",
            component: White
        },
        {
            path: "/download",
            name: "download",
            component: Download
        }
    ],
})
