<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header"> Warning </slot>
        </div>

        <div class="modal-body">
          <slot name="body"> Seguro desea realizar esta acción </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn btn-danger" @click="$emit('hide')">Cancelar</button>
            <button type="button"
            class="btn btn-primary" @click="$emit('accepted')">Aceptar</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hideModal() {
      this.$emit('hide');
    },
  },
};
</script>

<style>
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
