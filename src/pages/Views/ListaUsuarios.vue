<template>
  <div>
    <div class="row">
      <nav class="col-10" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item fs-3" aria-current="page">
            Lista de usuarios
          </li>
        </ol>
      </nav>
      <div class="col-2">
        <button
          type="button"
          class="btn btn-outline-primary ms-3"
          @click="nuevoUsuario"
        >
          Agregar Usuario
        </button>
      </div>
    </div>
    <div class="row mt-2 mb-2">
      <div class="col"></div>
      <el-input
        v-model="busqueda"
        class="col-2"
        placeholder="Buscar..."
        @input="buscarUsuario"
      />
    </div>

    <div class="row ps-3 pe-3 pt-2">
      <el-table :data="allUsuarios" class="col" height="543">
        <el-table-column prop="name" label="Usuario" />
        <el-table-column prop="ownerid" label="External Provider" />
        <el-table-column prop="active" label="Active">
          <template #default="scope">
            <i class="el-icon-check" v-if="scope.row.active" @click="empleadoDetalle(scope.row)"></i>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="Acciones" width="90">
          <template #default="scope">
            <i
              class="el-icon-view hand m-l"
              @click="empleadoDetalle(scope.row)"
            ></i>
            <i class="el-icon-edit hand" @click="usuarioDetalle(scope.row)"></i>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      busqueda: '',
      allUsuarios: [],
      loading: true,
    };
  },
  mounted() {
    this.getUsuarios();
  },
  computed: {
    usuarios() {
      return this.$store.state.usuario.list.status;
    },
  },
  methods: {
    buscarUsuario(val) {
      if (val !== "") {
        this.$store.dispatch("usuario/getAllUsuarios", {
           name: val
        });
      } else {
        this.getUsuarios();
      }
    },
    nuevoUsuario() {
      this.$router.push({ name: "NuevoUsuario", params: { edit: "false" } });
    },
    usuarioDetalle(usuario) {
      console.log(usuario);
      this.$router.push({
        name: "NuevoUsuario",
        params: { edit: "true", usuarioSelected: usuario },
      });
    },
    getUsuarios() {
      this.$store.dispatch("usuario/getAllUsuarios");
      this.loading = true;
    },
  },
  watch: {
    usuarios() {
      if (this.usuarios.loaded) {
        if (this.$store.state.usuario.list.data) {
          this.allUsuarios = this.$store.state.usuario.list.data;
          this.loading = false;
          console.log(this.allUsuarios);
        }
      }
    },
  },
};
</script>
<style>
.m-l {
  margin-right: 15px;
}
</style>
