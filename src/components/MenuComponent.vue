<template>
  <div>
        <nav class="navbar navbar-expand-lg modern-navbar sticky-top">
            <div class="container-fluid max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Marca con un ícono SVG moderno -->
                <router-link class="navbar-brand" to="/">
                    <svg class="mb-1 me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-color);">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    Empleados OAuth
                </router-link>
                
                <!-- Botón de Hamburguesa para Responsive -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Enlaces de Navegación -->
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <!-- Nota: Usamos 'active-link' para simular el estado activo sin depender de Bootstrap 'active' -->
                            <router-link class="nav-link active-link" aria-current="page" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/perfil">Perfil empleado</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/subordinados">Empleados subordinados</a>
                        </li>
                    </ul>
                    
                    <!-- Formulario de Búsqueda -->
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" style="width: 12rem;">
                        <button class="btn btn-custom-accent" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>

</template>

<script>
export default {
    name: "MenuComponent"
}
</script>

<style>
    /* Definición de variables CSS para consistencia de colores */
    :root {
        --dark-bg: #1e293b; /* Fondo principal oscuro (Slate-800) */
        --dark-surface: #334155; /* Fondo de elementos (Slate-700) */
        --accent-color: #3b82f6; /* Azul primario (Blue-500) */
        --accent-hover: #2563eb; /* Azul oscuro al pasar el ratón (Blue-600) */
        --text-color: #e2e8f0; /* Texto claro (Slate-200) */
    }

    body {
        font-family: 'Inter', sans-serif;
        background-color: #f8f9fa; /* Fondo del cuerpo para contraste */
    }

    /* Estilo general del Navbar */
    .modern-navbar {
        background-color: var(--dark-bg) !important;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.2);
        border-bottom: 2px solid var(--accent-color);
    }

    /* Marca/Logo */
    .navbar-brand {
        font-weight: 800; /* Extra bold */
        color: var(--text-color) !important;
        transition: color 0.3s;
    }

    .navbar-brand:hover {
        color: var(--accent-color) !important;
    }

    /* Estilos de Enlaces de Navegación */
    .nav-link {
        color: var(--text-color) !important;
        padding: 0.5rem 0.75rem !important;
        border-radius: 0.5rem; /* Esquinas redondeadas */
        margin-right: 0.5rem;
        transition: background-color 0.3s, color 0.3s;
    }
    
    /* Estado Hover/Focus de los Enlaces */
    .nav-link:hover, .nav-link:focus {
        background-color: var(--dark-surface);
        color: white !important;
    }

    /* Estilo para el Enlace Activo */
    .nav-link.active-link, 
    .nav-link[aria-current="page"] {
        background-color: var(--accent-color) !important;
        color: white !important;
        font-weight: 600;
    }

    /* Botón Toggler (Modo Móvil) */
    .navbar-toggler {
        border-color: rgba(255, 255, 255, 0.2);
    }
    .navbar-toggler-icon {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
    
    /* Campos de formulario */
    .form-control {
        border-radius: 0.5rem;
        border: 1px solid var(--dark-surface);
        background-color: var(--dark-surface);
        color: var(--text-color);
        padding: 0.375rem 0.75rem;
    }

    .form-control::placeholder {
        color: #94a3b8; /* Placeholder claro */
    }
    
    .form-control:focus {
        background-color: var(--dark-surface);
        color: var(--text-color);
        border-color: var(--accent-color);
        box-shadow: 0 0 0 0.25rem rgba(59, 130, 246, 0.5); /* Sombra de acento */
    }
    
    /* Botón de Search */
    .btn-custom-accent {
        background-color: var(--accent-color);
        color: white;
        border: none;
        border-radius: 0.5rem;
        font-weight: 600;
        transition: background-color 0.3s, transform 0.1s;
    }

    .btn-custom-accent:hover {
        background-color: var(--accent-hover);
        color: white;
        transform: translateY(-1px); /* Efecto ligero de elevación */
    }
</style>