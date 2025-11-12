<template>

    <main>
        <!-- 2. SECCIÓN HERO (Principal y llamativa) -->
        <section class="hero-section text-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <h1 class="hero-title mb-4">
                            La Plataforma Definitiva para la <span class="hero-highlight">Gestión de Talento</span>
                        </h1>
                        <p class="lead mb-5 fs-5 text-gray-400">
                            Centraliza perfiles de empleados, gestiona subordinados y optimiza flujos de trabajo con nuestra interfaz de usuario de última generación.
                        </p>
                        
                        <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                            <router-link to="/login" class="btn btn-custom-accent btn-lg px-4 me-sm-3 shadow-lg">
                                Empezar Ahora <i class="fas fa-arrow-right ms-2"></i>
                            </router-link>
                            <a href="#features" class="btn btn-outline-light btn-lg px-4 shadow-lg" style="border-color: var(--text-color); color: var(--text-color);">
                                Ver Características
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 3. SECCIÓN DE CARACTERÍSTICAS (Cards modernas) -->
        <section id="features" class="container py-5">
            <h2 class="text-center display-6 fw-bold mb-5">Soluciones que Impulsan tu Negocio</h2>
            
            <div class="row g-4">
                
                <!-- Card 1: Perfiles de Empleados -->
                <div class="col-md-6 col-lg-4">
                    <div class="feature-card p-4">
                        <div class="feature-icon"><i class="fas fa-user-tie"></i></div>
                        <h3 class="fs-4 fw-bold mb-3">Perfiles Detallados</h3>
                        <p class="text-muted">
                            Accede a la información completa de cada empleado, historial de roles y datos de contacto actualizados en tiempo real.
                        </p>
                        <a href="#perfil" class="text-decoration-none fw-semibold" style="color: var(--accent-color);">
                            Explorar Perfiles <i class="fas fa-chevron-right ms-1 small"></i>
                        </a>
                    </div>
                </div>

                <!-- Card 2: Gestión de Subordinados -->
                <div class="col-md-6 col-lg-4">
                    <div class="feature-card p-4">
                        <div class="feature-icon"><i class="fas fa-project-diagram"></i></div>
                        <h3 class="fs-4 fw-bold mb-3">Jerarquía Clara</h3>
                        <p class="text-muted">
                            Visualiza la estructura de subordinados de cada manager con mapas interactivos y reportes directos.
                        </p>
                        <a href="#subordinados" class="text-decoration-none fw-semibold" style="color: var(--accent-color);">
                            Ver Estructura <i class="fas fa-chevron-right ms-1 small"></i>
                        </a>
                    </div>
                </div>

                <!-- Card 3: Acceso Seguro -->
                <div class="col-md-6 col-lg-4">
                    <div class="feature-card p-4">
                        <div class="feature-icon"><i class="fas fa-lock"></i></div>
                        <h3 class="fs-4 fw-bold mb-3">Seguridad Garantizada</h3>
                        <p class="text-muted">
                            Implementamos los más altos estándares de seguridad para proteger la información sensible de tu equipo y empresa.
                        </p>
                        <a href="#security" class="text-decoration-none fw-semibold" style="color: var(--accent-color);">
                            Saber Más <i class="fas fa-chevron-right ms-1 small"></i>
                        </a>
                    </div>
                </div>
                
            </div>
        </section>

    </main>

    <!-- 5. FOOTER (Oscuro y Minimalista) -->
    <footer class="modern-footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6 mb-4 mb-md-0">
                    <h5 class="fw-bold" style="color: var(--accent-color);">MyCompany</h5>
                    <p class="text-gray-400">Soluciones de gestión de recursos humanos del futuro.</p>
                </div>
                <div class="col-6 col-md-3">
                    <h6 class="fw-bold mb-3 text-white">Enlaces Rápidos</h6>
                    <ul class="list-unstyled">
                        <li><a href="#" class="footer-link">Home</a></li>
                        <li><a href="#perfil" class="footer-link">Perfil</a></li>
                        <li><a href="#subordinados" class="footer-link">Organigrama</a></li>
                    </ul>
                </div>
                <div class="col-6 col-md-3">
                    <h6 class="fw-bold mb-3 text-white">Legal</h6>
                    <ul class="list-unstyled">
                        <li><a href="#" class="footer-link">Política de Privacidad</a></li>
                        <li><a href="#" class="footer-link">Términos de Servicio</a></li>
                    </ul>
                </div>
            </div>
            <div class="text-center mt-5 pt-3 border-top border-secondary opacity-75">
                <small class="text-gray-400">&copy; 2024 MyCompany. Todos los derechos reservados.</small>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "HomeComponent"
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
        --text-light: #f8fafc; /* Blanco para contraste máximo */
    }

    body {
        font-family: 'Inter', sans-serif;
        background-color: #f8f9fa; /* Fondo del cuerpo */
        color: #333;
    }

    /* --- Estilos del Navbar (Consistencia) --- */
    .modern-navbar {
        background-color: var(--dark-bg) !important;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.2);
        border-bottom: 3px solid var(--accent-color);
    }

    .navbar-brand {
        font-weight: 800;
        color: var(--text-light) !important;
    }

    .navbar-brand:hover {
        color: var(--accent-color) !important;
    }

    .nav-link {
        color: var(--text-color) !important;
        padding: 0.5rem 0.75rem !important;
        border-radius: 0.5rem;
        margin-right: 0.5rem;
        transition: background-color 0.3s, color 0.3s;
    }
    
    .nav-link:hover, .nav-link:focus {
        background-color: var(--dark-surface);
        color: white !important;
    }

    .nav-link.active-link, 
    .nav-link[aria-current="page"] {
        background-color: var(--accent-color) !important;
        color: white !important;
        font-weight: 600;
    }
    
    .form-control {
        border-radius: 0.5rem;
        border: 1px solid var(--dark-surface);
        background-color: var(--dark-surface);
        color: var(--text-color);
    }

    .form-control:focus {
        border-color: var(--accent-color);
        box-shadow: 0 0 0 0.25rem rgba(59, 130, 246, 0.5);
    }
    
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
        transform: translateY(-1px);
    }

    /* --- Estilos de la Sección HERO (Principal) --- */
    .hero-section {
        background: linear-gradient(135deg, var(--dark-bg) 0%, #111827 100%); /* Degradado oscuro */
        padding: 5rem 0;
        color: var(--text-color);
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;
        margin-bottom: 3rem;
    }

    .hero-title {
        font-size: 3.5rem; /* Título grande */
        font-weight: 900;
        line-height: 1.1;
    }

    .hero-highlight {
        color: var(--accent-color); /* Acento azul en el texto clave */
    }
    
    /* --- Estilos de la Sección de Características (Cards) --- */
    .feature-card {
        background-color: white;
        border: 1px solid #e5e7eb;
        border-radius: 1rem; /* Esquinas muy redondeadas */
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        height: 100%; /* Asegura que todas las tarjetas tengan la misma altura */
    }

    .feature-card:hover {
        transform: translateY(-5px); /* Efecto 3D de levantamiento */
        box-shadow: 0 20px 25px -5px rgba(59, 130, 246, 0.2), 0 8px 10px -6px rgba(59, 130, 246, 0.2);
    }
    
    .feature-icon {
        color: var(--accent-color);
        background-color: rgba(59, 130, 246, 0.1); /* Fondo ligero para el ícono */
        padding: 1rem;
        border-radius: 50%;
        display: inline-flex;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    /* --- Estilos del Footer --- */
    .modern-footer {
        background-color: var(--dark-bg);
        color: var(--text-color);
        padding: 3rem 0;
        margin-top: 5rem;
        border-top: 3px solid var(--accent-color);
    }
    .footer-link {
        color: var(--text-color);
        text-decoration: none;
        transition: color 0.3s;
    }
    .footer-link:hover {
        color: var(--accent-color);
    }
</style>