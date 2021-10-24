<template>
<div class="Title">
 
 <h1 class="Title">Horarios y Clases</h1>
  
    <form @submit.prevent="procesarFormulario">    
    <Horario :tarea="tarea" />
    </form>
    <br>
    <hr>
    {{tarea}}
    <br>
     <hr>
     <br>
    <ListaHorarios />
    
</div>
  
 
</template>


<script>
import Horario from '../components/Horario.vue'
import ListaHorarios from '../components/ListaHorarios.vue'
import {mapActions} from 'vuex'
const shortid = require('shortid');

export default {
  name: 'Home',
  components: {
    Horario, ListaHorarios
  },
  data() {
    return {
       tarea: {
      fecha:'',
      id: '',
      nombre: '',
      dia:'',
      horario: '',
      cupos: 0,
      espacio: 0
    },
    }
  },
   methods:{
     ...mapActions(['setTareas']),
      procesarFormulario(){
        //console.log(this.tarea)
        //if(this.tarea.fecha.trim()==""){
        //  console.log('Campo vacio')
         // return
        //}

        this.tarea.id = shortid.generate()

        this.setTareas(this.tarea)
        this.tarea={
          fecha:'',
          id: '',
          nombre: '',
          dia:'',
          horario: '',
          cupos: 0,
          espacio: 0
            }
      }
   
},
}
</script>

<style lang="scss" scoped>

div#Title{
  background-color: gray;
}


</style>
