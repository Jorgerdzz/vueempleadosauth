<template>
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-12 col-xl-10">
        <div class="card shadow border-0 rounded-4 data-card">
          <div
            class="card-header bg-gradient-primary text-white py-3 d-flex align-items-center justify-content-between"
          >
            <h5 class="mb-0 fw-semibold">Subordinados</h5>
            <span class="badge bg-light text-dark" v-if="subordinados.length"
              >{{ subordinados.length }} total</span
            >
          </div>
          <div class="card-body p-0">
            <div v-if="loading" class="p-4 text-center text-muted">
              <div
                class="spinner-border text-primary"
                role="status"
                aria-hidden="true"
              ></div>
              <div class="mt-2 small">Cargando subordinados…</div>
            </div>

            <div
              v-else-if="!subordinados.length"
              class="p-4 text-center text-muted"
            >
              No hay subordinados para mostrar.
            </div>

            <div v-else class="table-responsive">
              <table class="table table-hover align-middle mb-0">
                <thead class="table-light">
                  <tr>
                    <th scope="col">ID Empleado</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Oficio</th>
                    <th scope="col">Salario</th>
                    <th scope="col">Director</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="sub in subordinados" :key="sub.idEmpleado">
                    <td class="text-muted">#{{ sub.idEmpleado }}</td>
                    <td class="fw-semibold">{{ sub.apellido }}</td>
                    <td>
                      <span
                        class="badge bg-primary-subtle text-primary border border-primary-subtle"
                        >{{ sub.oficio }}</span
                      >
                    </td>
                    <td>
                      <span
                        class="badge bg-success-subtle text-success border border-success-subtle"
                        >{{ formatCurrency(sub.salario) }}</span
                      >
                    </td>
                    <td>{{ sub.director }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
import ServiceEmpleados from "@/services/ServiceEmpleados";
const service = new ServiceEmpleados();
export default {
  name: "EmpleadosSubordinadosComponent",
  data() {
    return {
      subordinados: [],
      loading: true,
      error: null,
    };
  },
  mounted() {
    if (sessionStorage.length == 0) {
      this.$router.push("/login");
    } else {
      service
        .getEmpleadosSubordinados()
        .then((response) => {
          this.subordinados = response;
        })
        .catch((err) => {
          this.error = err?.message || "Error al cargar subordinados";
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
  methods: {
    formatCurrency(value) {
      const val = Number(value ?? 0);
      if (Number.isNaN(val)) return value;
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
};
</script>

<style scoped>
.data-card {
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

.table thead th {
  white-space: nowrap;
}

@media (prefers-color-scheme: dark) {
  .data-card {
    background-color: #1f2533;
    color: #e5ebf5;
  }
  .card-footer {
    color: #92a2b8 !important;
  }
}
</style>
