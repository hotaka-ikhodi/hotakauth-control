<template>
  <div>
    <div class="row">
      <nav class="col-10" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item fs-3" aria-current="page">
            Lista de tokens
          </li>
        </ol>
      </nav>
      <div class="col-2">
        <button
          type="button"
          class="btn btn-outline-primary ms-3"
          @click="generarToken"
        >
          Generar token
        </button>
      </div>
    </div>

    <div class="row ps-3 pe-3 pt-2">
      <el-table
        :data="tabledata"
        :cell-class-name="classChecker"
        class="col"
        height="543"
      >
        <el-table-column prop="nombres" label="Usuario" />
        <el-table-column prop="token" label="Token" />
        <el-table-column fixed="right" label="Acciones" width="90">
          <template #default="scope">
            <i
              class="el-icon-edit hand m-l"
              @click="verToken(scope.row)"
            ></i>
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
      allTokens: [],
      loading: true,
      tabledata: [
        {
          nombres: "Juan Ramon",
          password: "123456",
          token: "dcserjhmyufj12laksie",
        },
        {
          nombres: "Juan Ramon",
          password: "123456",
          token: "dcserjhmyufj12laksie",
        },
        {
          nombres: "Juan Ramon",
          password: "123456",
          token: "dcserjhmyufj12laksie",
        },
      ],
    };
  },
  mounted() {
    /* this.getTokens(); */
  },
  computed: {
    tokens() {
      return this.$store.state.token.list.status;
    },
  },
  methods: {
    classChecker({ row, column }) {
      if (column.property === "token") {
        const val = row[column.property];
        return "redClass";
      }
    },
    generarToken() {
    },
    verToken(token) {
      console.log(token);
    },
    getTokens() {
      this.$store.dispatch("token/getTokens");
      this.loading = true;
    },
  },
  watch: {
    tokens() {
      if (this.tokens.loaded) {
        if (this.$store.state.tokens.list.data) {
          this.allTokens = this.$store.state.tokens.list.data.items;
          this.loading = false;
        }
      }
    },
  },
};
</script>
<style>
.m-l {
  margin-left: 25px;
}
.redClass {
  color: red;
}
</style>
