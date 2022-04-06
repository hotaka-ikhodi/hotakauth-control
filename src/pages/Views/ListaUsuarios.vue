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
        <el-table-column prop="ownerid" label="OwnerId" />
        <el-table-column prop="active" label="Active">
          <template #default="scope">
            <i
              class="el-icon-check"
              v-if="scope.row.active"
              @click="empleadoDetalle(scope.row)"
            ></i>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="Acciones" width="90">
          <template #default="scope">
            <i
              class="el-icon-key hand m-l"
              @click="editPassword(scope.row)"
            ></i>
            <i class="el-icon-edit hand" @click="usuarioDetalle(scope.row)"></i>
          </template>
        </el-table-column>
        <el-table-column prop="active" fixed="right" width="90">
          <template #default="scope"
            >
            <div @click="desactivarUsuario(scope.row)">
              <el-switch v-model="scope.row.active" />
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <edit-password
      v-if="showModalEdit"
      :userItemProp="user"
      @hide="hideModal"
    />
    <usuario-active
      v-if="activarUsuario"
      :usuarioProp="user"
      @hide="hideModal"
    />
  </div>
</template>
<script>
import EditPassword from "./EditPassword.vue";
import UsuarioActive from "./UsuarioActive.vue";

export default {
  components: { EditPassword, UsuarioActive },
  data() {
    return {
      activarUsuario: false,
      user: null,
      showModalEdit: false,
      busqueda: "",
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
    hideModal() {
      this.showModalEdit = false;
      this.activarUsuario = false;
    },
    desactivarUsuario(usuario) {
      this.user = usuario;
      this.activarUsuario = true;
    },
    buscarUsuario(val) {
      if (val !== "") {
        this.$store.dispatch("usuario/getAllUsuarios", {
          name: val,
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
    editPassword(usuario) {
      this.user = usuario;
      this.showModalEdit = true;
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
