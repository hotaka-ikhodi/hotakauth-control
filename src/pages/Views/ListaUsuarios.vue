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
    <div class="row ps-3 pe-3 pt-2">
    <el-table :data="tabledata" class="col" height="543">
      <el-table-column prop="Nombre" label="Nombre" />
      <el-table-column prop="direccion" label="Direccion" />
      <el-table-column fixed="right" label="Acciones" width="90">
        <template #default="scope">
          <i
            class="el-icon-view"
            @click="empleadoDetalle(scope.row)"
          ></i>
          <i class="el-icon-delete"></i>
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
      tabledata: [
        {
          Nombre: "Tom",
          direccion: "No. 189, Grove St, Los Angeles",
        },
      ],
    };
  },
  methods: {
    nuevoUsuario(){
      this.tabledata.push({
        Nombre:"Tom"+(this.tabledata.length+1).toString(),
        direccion:"al norte"
      })
    }
  }
};
</script>
