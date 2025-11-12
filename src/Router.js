import { createRouter, createWebHistory } from "vue-router"
import HomeComponent from './components/HomeComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import PerfilEmpleadoComponent from './components/PerfilEmpleadoComponent.vue';
import EmpleadosSubordinadosComponent from './components/EmpleadosSubordinadosComponent.vue';

const routes = [
    {path: "/", component:HomeComponent},
    {path: "/login", component:LoginComponent},
    {path: "/perfil", component:PerfilEmpleadoComponent},
    {path: "/subordinados", component:EmpleadosSubordinadosComponent},
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;