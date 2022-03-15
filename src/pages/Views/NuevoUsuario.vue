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
          @click="saveNuevoUsuario"
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
          v-model="general.nombres"
          size="mini"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="Contraseña" prop="pass">
        <el-input
          placeholder="Contraseña..."
          size="mini"
          type="password"
          v-model="general.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="OwnerdId" prop="ownerdid">
        <el-input
          placeholder="OwnerdId..."
          size="mini"
          v-model="general.ownerdId"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="ExternalId" prop="externalid">
        <el-input
          placeholder="ExternalId..."
          size="mini"
          v-model="general.externalId"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="ExternalProvider" prop="externalProvider">
        <el-select size="mini" v-model="externalProvider" placeholder="Select">
          <el-option
            v-for="item in externalProvider"
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
        nombres: "",
        password: "",
        ownerdId: "",
        ExternalId: "",
        externalProvider: "",
      },
      externalProvider: [
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
      ],
    };
  },
  mounted() {
    this.valueEdit = this.edit;
    if (this.valueEdit === "true") {
      this.general = this.usuarioSelected;
      console.log(this.general);
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    saveNuevoUsuario() {},
  },
};
</script>
