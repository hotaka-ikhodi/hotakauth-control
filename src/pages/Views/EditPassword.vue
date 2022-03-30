<template>
  <modal @hide="hideModal">
    <template v-slot:header>
      <h5 class="modal-title">Cambiando contraseña...</h5>
    </template>
    <template v-slot:body>
      <div class="contenedor">
        <el-form :model="general" :rules="rules" ref="general">
          <el-form-item prop="password">
            <el-input
              v-model="general.password"
              type="password"
              placeholder="Please input password"
              show-password
            />
          </el-form-item>
        </el-form>
      </div>
    </template>
    <template v-slot:footer>
      <button type="button" class="btn btn-secondary" @click="hideModal">
        Cancelar
      </button>
      <button
        type="button"
        class="btn btn-primary"
        @click="editedpassword('general')"
      >
        Aceptar
      </button>
    </template>
  </modal>
</template>
<script>
import Modal from "@/components/ModalHotakauth.vue";

export default {
  name: "EditPassword",
  components: { Modal },
  data() {
    return {
      general: {
        password: "",
      },
      rules: {
        password: [
          { required: true, message: "Contraseña requerida!", trigger: "blur" },
          {
            min: 5,
            message: "Contraseña debe tener al menos 5 caracteres.",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {},
  computed: {
    changePassword() {
      return this.$store.state.user.editPass.status;
    },
  },
  methods: {
    hideModal() {
      this.$emit("hide");
    },
    editedpassword(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch("user/changePassword", this.general);
        }
      });
    },
    notificacion(titulo, msg, tipo) {
      this.$notify({
        title: titulo,
        message: msg,
        type: tipo,
      });
    },
  },
  watch: {
    changePassword() {
      if (this.$store.state.user.editPass.status.edited) {
        this.notificacion(
          "Guardada",
          "Tu contraseña ha sido cambiada exitosamente!",
          "success"
        );
        this.hideModal();
      } else if (this.$store.state.user.editPass.status.error) {
        this.notificacion(
          "Error",
          "Ha ocurrido un error!",
          "error"
        );
        this.hideModal();
      }
    },
  },
};
</script>
<style scoped></style>
