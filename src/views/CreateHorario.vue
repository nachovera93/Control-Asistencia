<template>
  <div class="Title">

    <h1 class="Title">Horarios y Clases</h1>

    <form @submit.prevent="procesarFormulario">
      <Horario :tarea="tarea" />
    </form>
    <br />
    <hr />
    {{ tarea }}
   <br />
    <br />
    <hr />
    <br />
    <ListaHorarios />
    
  </div>
</template>

<script>
import Horario from "../components/Horario.vue";
import ListaHorarios from "../components/ListaHorarios.vue";
import { mapActions } from "vuex";
const shortid = require("shortid");
//import firebase from "firebase/app";
import "firebase/storage";
//import db from "../firebase/firebaseInit";


export default {
  name: "CreateHorario",
  components: {
    Horario,
    ListaHorarios,
  },
  data() {
    return {
      tarea: {
        fecha:'',
        id: '',
        tipo: '',
        horas: '',
        cupos: 0,
        espacio: 0,
      },
    };
  },
 

  methods: {
    ...mapActions(["setTareas","getHorario"]),

    procesarFormulario() {
     
      this.tarea.id = shortid.generate();
      this.getHorario(this.tarea)
      this.setTareas(this.tarea);
        
      this.tarea = {
        fecha: "",
        id: "",
        tipo: "",
        dia: "",
        horario: "",
        cupos: 0,
        espacio: 0,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
div#Title {
  background-color: gray;
}
</style>
