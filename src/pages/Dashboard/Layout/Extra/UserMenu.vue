<template>
  <div class="user">
    <div class="photo">
      <img src="static/img/user.png" alt="avatar"/>
    </div>
    <div class="info">
      <a data-toggle="collapse" :aria-expanded="!isClosed" @click.stop="toggleMenu" href="#">
           <span>
             {{user.user}}
             <b class="caret"></b>
          </span>
      </a>
      <div class="clearfix"></div>
      <div>
        <el-collapse-transition>
          <ul class="nav" v-show="!isClosed">
            <slot>
              <li>
                <a class="profile-dropdown">
                  <i class="nc-icon nc-button-power mb-2"></i>
                  <span class="sidebar-normal" @click="cerrarSesion">Cerrar Sesiòn</span>
                </a>
              </li>
            </slot>
          </ul>
        </el-collapse-transition>
      </div>
    </div>
  </div>
</template>
<script>
  import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

  export default {
    components: {
      [CollapseTransition.name]: CollapseTransition
    },
    props: {
      title: {
        type: String,
        default: 'Tania Andrew'
      }
    },
    data () {
      return {
        isClosed: true,
        user: null,
      }
    },
    mounted() {
      this.user = JSON.parse(localStorage.getItem('user'));
    },
    methods: {
      cerrarSesion() {
      localStorage.removeItem('user');
      this.$router.push({ name: 'Login' });
    },
      toggleMenu () {
        this.isClosed = !this.isClosed
      }
    }
  }
</script>
<style>
  .collapsed {
    transition: opacity 1s;
  }
</style>
