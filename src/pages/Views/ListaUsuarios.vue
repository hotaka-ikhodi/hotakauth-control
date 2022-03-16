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
      <el-table :data="tabledata" class="col" height="543">
        <el-table-column prop="nombres" label="Usuario" />
        <el-table-column prop="externalId" label="ExternalId" />
        <el-table-column prop="externalId" label="Active">
          <template #default="scope">
            <i class="el-icon-check" @click="empleadoDetalle(scope.row)"></i>
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
      allUsuarios: [],
      loading: true,
      tabledata: [
        {
          nombres: "Juan Ramon",
          password: "123456",
          ownerdId: "Google",
          externalProvider: "LDAP",
          externalId: "12345678",
          active: true,
        },
        {
          nombres: "Juan Ramon",
          password: "123456",
          externalProvider: "LDAP",
          ownerdId: "Google",
          externalId: "12345678",
          active: true,
        },
        {
          nombres: "Juan Ramon",
          password: "123456",
          externalProvider: "LDAP",
          ownerdId: "Google",
          externalId: "12345678",
          active: true,
        },
      ],
    };
  },
  mounted() {
    /* this.getUsuarios(); */
  },
  computed: {
    usuarios() {
      return this.$store.state.usuario.list.status;
    },
  },
  methods: {
    buscarUsuario(val) {
      if (val !== "") {
        this.$store.dispatch("usuario/getUsuarios", {
          filters: { nombre: val },
        });
      } else {
        this.getUsuarios();
      }
    },
    nuevoUsuario() {
      this.$router.push({ name: "NuevoUsuario", params: { edit: "false" } });
    },
    usuarioDetalle(usuario) {
      this.$router.push({
        name: "NuevoUsuario",
        params: { edit: "true", usuarioSelected: usuario },
      });
    },
    getUsuarios() {
      this.$store.dispatch("usuario/getUsuarios");
      this.loading = true;
    },
  },
  watch: {
    usuarios() {
      if (this.usuarios.loaded) {
        if (this.$store.state.usuarios.list.data) {
          this.allUsuarios = this.$store.state.usuarios.list.data.items;
          this.loading = false;
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
