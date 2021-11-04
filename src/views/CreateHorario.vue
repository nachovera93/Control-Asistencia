<template>
  <div class="Title">

    <h1 class="Title">Horarios y Clases</h1>

    <form @submit.prevent="procesarFormulario">
      <Horario :clase="clase" />
    </form>
    <br />
    <hr />
    {{ clase }}
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
      clase: {
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
    ...mapActions(["putHorario"]),

    procesarFormulario() {
     
      this.clase.id = shortid.generate();
      this.putHorario(this.clase)
     
        
      this.clase = {
        fecha: "",
        id: "",
        tipo: "",
        horas: "",
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
