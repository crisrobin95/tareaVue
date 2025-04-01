import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Catalog from '@/views/Catalog.vue';

const routes =[
    {path: "/", component: Home, name: 'Home'},
    {path: "/Catalog", component: Catalog, name: 'Catalog'}    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
