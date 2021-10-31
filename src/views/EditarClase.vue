<template>
<div>
    Editar {{$route.params.claseid}} - {{clase}}
  <form @submit.prevent="UpdateHorario(tarea)">
       <Horario :clase="clase" />
  </form>
  <br>
  {{clase}}
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
    ...mapActions(['editarHorario', 'UpdateHorario'])
  },
  created(){
    this.editarHorario(this.$route.params.claseid)  //aqui se manda la id de la url hacia la tienda
  }

}
</script>

<style>

</style>
