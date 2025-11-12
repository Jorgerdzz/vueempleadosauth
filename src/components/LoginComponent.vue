<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-5">
        <div class="card shadow border-0 rounded-4 login-card">
          <div
            class="card-header bg-gradient-primary text-white text-center py-3"
          >
            <h5 class="mb-0 fw-semibold">Acceso Empleados</h5>
          </div>
          <div class="card-body p-4">
            <form @submit.prevent="login" class="needs-validation" novalidate>
              <div class="mb-3">
                <label class="form-label fw-semibold">Usuario</label>
                <div class="input-group">
                  <span class="input-group-text bg-light"
                    ><span class="text-secondary">@</span></span
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model.trim="user.userName"
                    required
                    autocomplete="username"
                    placeholder="ej. jgarcia"
                  />
                </div>
              </div>
              <div class="mb-4">
                <label class="form-label fw-semibold">Contraseña</label>
                <div class="input-group">
                  <span class="input-group-text bg-light"
                    ><span class="text-secondary">🔒</span></span
                  >
                  <input
                    type="password"
                    class="form-control"
                    v-model="user.password"
                    required
                    autocomplete="current-password"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <button
                class="btn btn-primary w-100 btn-lg d-flex align-items-center justify-content-center gap-2"
              >
                <span>Iniciar Sesión</span>
              </button>
            </form>
          </div>
          <div class="card-footer text-center small text-muted">
            &copy; {{ currentYear }} Portal Empleados
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceEmpleados from "../services/ServiceEmpleados";
const service = new ServiceEmpleados();
export default {
  name: "LoginComponent",
  data() {
    return {
      user: {
        userName: "",
        password: "",
      },
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
  methods: {
    login() {
      service.login(this.user).then((response) => {
        sessionStorage.setItem("token", response.data.response);
        this.$router.push("/perfil");
      });
    },
  },
};
</script>
<style scoped>
/* Card appearance */
.login-card {
  backdrop-filter: blur(3px);
  animation: fadeSlide 0.45s ease;
}

@keyframes fadeSlide {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Gradient header */
.bg-gradient-primary {
  background: linear-gradient(135deg, #2463eb 0%, #5b9bff 100%);
}

/* Input group subtle merge */
.input-group-text {
  border-right: 0;
}
.input-group .form-control {
  border-left: 0;
}
.input-group .form-control:focus {
  box-shadow: none;
  border-color: #5b9bff;
}

/* Button styling */
.btn-primary {
  background: linear-gradient(135deg, #2463eb, #1e4cb5);
  border: none;
  transition: filter 0.15s ease, transform 0.15s ease;
}
.btn-primary:hover {
  filter: brightness(1.07);
}
.btn-primary:active {
  transform: scale(0.97);
}

/* Dark mode (optional future toggle) */
@media (prefers-color-scheme: dark) {
  .login-card {
    background-color: #1f2533;
    color: #e5ebf5;
  }
  .card-footer {
    color: #92a2b8 !important;
  }
}
</style>
