<template>
  <div>
    <div class="row">
      <nav class="col-10" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item fs-3" aria-current="page">
            <router-link to="/usuarios/listado" class="text-decoration-none"
              >Lista Usuarios</router-link
            >
          </li>
          <li
            class="breadcrumb-item fs-3"
            aria-current="page"
            v-if="valueEdit === 'false'"
          >
            Nuevo usuario
          </li>
          <li
            class="breadcrumb-item fs-3"
            aria-current="page"
            v-if="valueEdit === 'true'"
          >
            Editar usuario
          </li>
        </ol>
      </nav>
      <div class="col-2">
        <button
          type="button"
          class="btn btn-outline-primary ms-3"
          @click="saveNuevoUsuario('general')"
        >
          Guardar
        </button>
      </div>
    </div>
    <el-form
      :model="general"
      status-icon
      ref="general"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="Nombres" prop="nombres">
        <el-input
          placeholder="Nombres..."
          v-model="general.name"
          size="mini"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="Contraseña" prop="pass"
      v-if="general.externalprovider === 'Ninguno'">
        <el-input
          placeholder="Contraseña..."
          size="mini"
          type="password"
          v-model="general.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="OwnerdId" prop="ownerid">
        <el-input
          placeholder="OwnerdId..."
          size="mini"
          v-model="general.ownerid"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="ExternalId" prop="externalid">
        <el-input
          placeholder="ExternalId..."
          size="mini"
          v-model="general.externalid"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="ExternalProvider" prop="externalprovider">
        <el-select size="mini" v-model="general.externalprovider" placeholder="Select">
          <el-option
            v-for="item in listProvider"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    edit: {
      type: String,
      default: "",
    },
    usuarioSelected: {
      type: Object,
    },
  },
  data() {
    return {
      valueEdit: "",
      general: {
        name: "",
        password: "",
        ownerid: "",
        externalid: "",
        externalprovider: "",
      },
      listProvider: [
        {
          value: "Google",
          label: "Google",
        },
        {
          value: "GitHub",
          label: "GitHub",
        },
        {
          value: "LDAP",
          label: "LDAP",
        },
        {
          value: "Ninguno",
          label: "Ninguno",
        },
      ],
    };
  },
  mounted() {
    this.valueEdit = this.edit;
    if (this.valueEdit === "true") {
      this.general = this.usuarioSelected;
    }
  },
  computed: {
    newUsuario() {
      return this.$store.state.usuario.new.status;
    },
  },
  methods: {
    saveNuevoUsuario() {
      this.$store.dispatch("usuario/newUsuario", this.general);
    },
    notificacion(titulo, mensaje, tipo) {
        this.$notify({
          title: titulo,
          message: mensaje,
          type: tipo
        });
      },
  },
  watch: {
    newUsuario() {
      if (this.newUsuario.created) {
        if (this.$store.state.usuario.new.data) {
          this.notificacion("Creado", "Ha sido creado Exitosamente", "success");
          this.$router.push("/usuarios/listado");
        }
      } else if (this.newUsuario.error) {
        this.notificacion("Error", "Ha ocurrido un error al crear el usuario", "error");
      }
    },
  },
};
</script>
