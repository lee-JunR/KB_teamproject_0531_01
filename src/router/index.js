import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
// import About from '@/pages/About.vue'
// import Members from '@pages/Members.vue'
import Videos from "@/pages/Videos.vue";
import { createRouter, createWebHistory } from "vue-router";
import Error from "@/pages/ErrorPage.vue";
import Home from "@/pages/Home.vue";
import About from "@/pages/AboutView.vue";
import Members from "@/pages/Members.vue";
import MembersInfo from "@/pages/MembersInfo.vue";
// import Videos from '@pages/Videos.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Home },
        { path: "/about", component: About },
        { path: "/members", component: Members },
        { path: "/videos", component: Videos },
        { path: "/members/:id", component: MembersInfo },
        {
            path: "/:catchAll(.*)",
            component: Error,
        },
    ],
});

export default router;
