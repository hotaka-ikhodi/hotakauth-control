<template>
  <modal @hide="hideModal">
    <template v-slot:header>
      <h5 class="modal-title">{{titulo}}</h5>
    </template>
    <template v-slot:body>
      <div class="contenedor">
        <p class="title">
          {{mensaje}}
        </p>
      </div>
    </template>
    <template v-slot:footer>
      <button type="button" class="btn btn-secondary" @click="hideModal">
        Cancelar
      </button>
      <button type="button" class="btn btn-primary" @click="aceptar()">
        Aceptar
      </button>
    </template>
  </modal>
</template>

<script>
import Modal from '@/components/ModalExnat.vue';

export default {
  name: 'destruir-modal',
  components: { Modal },
  props: {
    titulo: {
      type: String,
      default: '',
    },
    mensaje: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
    };
  },
  mounted() {},
  methods: {
    hideModal() {
      this.$emit('hide');
    },
    aceptar() {
      this.$emit('accepted', this.type);
    },
  },
};
</script>
<style lang="scss">
.modal-container {
  width: 500px;
}
</style>
