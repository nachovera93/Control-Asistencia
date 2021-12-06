<template>
<div>
    <!-- Editar {{$route.params.claseid}} - {{clase}} -->
  <form @submit.prevent="UpdateClase(clase)">
       <Horario :clase="clase" />
  </form>
  <br>
 
  <br>
</div>
   

</template>

<script>
import {mapState, mapActions} from 'vuex'
import Horario from "../components/Horario.vue";
export default {
  components:{
    Horario
  },
  computed:{
    ...mapState(['clase'])
  },
  methods:{
    ...mapActions(['editarClase', 'UpdateClase'])
  },
  created(){
    this.editarClase(this.$route.params.claseid)  //aqui se manda la id de la url hacia la tienda
  }

}
</script>

<style>

</style>
