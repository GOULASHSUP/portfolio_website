import { createRouter, createWebHistory } from "vue-router";
import HeroSection from "@/components/hero_section.vue";
import SingleProject from "@/components/single_project.vue";
import SingleInternship from "@/components/single_internship.vue";

const routes = [
    { path: "/", component: HeroSection },
    { path: "/project/:slug", component: SingleProject, props: true },
    { path: "/internship/:slug", component: SingleInternship, props: true }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;