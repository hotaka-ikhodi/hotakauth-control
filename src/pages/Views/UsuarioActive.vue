<template>
  <modal @hide="hideModal">
    <template v-slot:header>
      <h5 class="modal-title">Advertencia</h5>
    </template>
    <template v-slot:body>
      <div class="contenedor">
        <h5>¿Esta seguro que desea activar el usuario?</h5>
      </div>
    </template>
    <template v-slot:footer>
      <button type="button" class="btn btn-secondary" @click="hideModal">
        Cancelar
      </button>
      <button type="button" class="btn btn-primary" @click="userEdited">
        Aceptar
      </button>
    </template>
  </modal>
</template>
<script>
import Modal from "@/components/ModalHotakauth.vue";

export default {
  name: "UsuarioActive",
  components: { Modal },
  props: {
    usuarioProp: {
      type: Object,
    },
  },
  data() {
    return {
      usuario: null,
    };
  },
  mounted() {
    this.usuario = this.usuarioProp;
    console.log(this.usuario);
  },
  computed: {
    editUsuario() {
      return this.$store.state.usuario.editStatus.status;
    },
  },
  methods: {
    hideModal() {
      this.$emit("hide");
    },
    userEdited() {
      const desactivarUsuario = {
        iduser: this.usuario.userid,
        active: false,
      };
      this.$store.dispatch("usuario/updateStatusUser", desactivarUsuario);
    },
    notificacion(titulo, mensaje, tipo) {
      this.$notify({
        title: titulo,
        message: mensaje,
        type: tipo,
      });
    },
  },
  watch: {
    editUsuario(val) {
      if (val.edited) {
        this.notificacion(
          "Exitoso",
          "El estado ha sido actualizado",
          "success"
        );
        this.hideModal();
      } else if (val.error) {
        this.notificacion(
          "Error",
          "Ha ocurrido un error",
          "error"
        );
        this.hideModal();
      }
    },
  },
};
</script>
