import { createRouter, createWebHistory } from "vue-router";
import HeroSection from "@/components/hero_section.vue";
import SingleProject from "@/components/single_project.vue";

const routes = [
    { path: "/", component: HeroSection },
    { path: "/project/:slug", component: SingleProject, props: true }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;