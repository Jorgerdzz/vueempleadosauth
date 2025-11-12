<template>
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-lg-7 col-xl-6">
        <div class="card shadow border-0 rounded-4 profile-card">
          <div class="card-header bg-gradient-primary text-white py-3">
            <h5 class="mb-0 fw-semibold">Perfil del empleado</h5>
          </div>
          <div class="card-body p-4">
            <div class="d-flex align-items-center gap-3 mb-4">
              <div
                class="avatar rounded-circle bg-primary-subtle text-primary fw-bold d-flex align-items-center justify-content-center"
              >
                {{ initials }}
              </div>
              <div>
                <div class="h5 mb-0">{{ empleado.apellido }}</div>
                <div class="text-muted small">
                  ID: {{ empleado.idEmpleado }}
                </div>
              </div>
            </div>

            <ul class="list-group list-group-flush">
              <li
                class="list-group-item px-0 d-flex justify-content-between align-items-center"
              >
                <span class="text-muted">Oficio</span>
                <span class="fw-semibold">{{ empleado.oficio }}</span>
              </li>
              <li
                class="list-group-item px-0 d-flex justify-content-between align-items-center"
              >
                <span class="text-muted">Salario</span>
                <span
                  class="badge bg-success-subtle text-success border border-success-subtle"
                  >{{ formattedSalario }}</span
                >
              </li>
              <li
                class="list-group-item px-0 d-flex justify-content-between align-items-center"
              >
                <span class="text-muted">Director</span>
                <span class="fw-semibold">{{ empleado.director }}</span>
              </li>
            </ul>
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
  name: "PerfilEmpleadoComponent",
  data() {
    return {
      empleado: {
        idEmpleado: 0,
        apellido: "",
        oficio: "",
        salario: 0,
        director: "",
      },
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
    initials() {
      const ap = this.empleado?.apellido || "";
      // Toma primeras letras de hasta dos palabras
      return (
        ap
          .split(/\s+/)
          .filter(Boolean)
          .slice(0, 2)
          .map((p) => p[0]?.toUpperCase() || "")
          .join("") || "EM"
      );
    },
    formattedSalario() {
      const val = Number(this.empleado?.salario ?? 0);
      if (Number.isNaN(val)) return this.empleado?.salario;
      try {
        return new Intl.NumberFormat("es-ES", {
          style: "currency",
          currency: "EUR",
          maximumFractionDigits: 0,
        }).format(val);
      } catch (e) {
        return `${val.toLocaleString("es-ES")} €`;
      }
    },
  },
  mounted() {
    if(sessionStorage.length===0){
      this.$router.push("/login")
    }else{
      service.getEmpleado().then((response) => {
        this.empleado = response;
      });
    }
  },
};
</script>

<style scoped>
.profile-card {
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

.bg-gradient-primary {
  background: linear-gradient(135deg, #2463eb 0%, #5b9bff 100%);
}

.avatar {
  width: 56px;
  height: 56px;
  font-size: 1.1rem;
}

.list-group-item {
  background: transparent;
}

@media (prefers-color-scheme: dark) {
  .profile-card {
    background-color: #1f2533;
    color: #e5ebf5;
  }
  .card-footer {
    color: #92a2b8 !important;
  }
}
</style>
