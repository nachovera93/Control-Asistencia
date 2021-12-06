<template>
  <div class="Title">

    <h1 class="Title">Horarios y Clases</h1>

    <form @submit.prevent="procesarFormulario">
      <Horario :clase="clase" />
    </form>
    <br />
    <hr />
   <br />
    <br />
    <hr />
    <TablaHorarios />
    <br />
    <Historial />
    
  </div>
</template>

<script>
import Horario from "../components/Horario.vue";
import Historial from "../components/Historial.vue";
import TablaHorarios from "../components/TablaHorarios.vue";
import { mapActions } from "vuex";
const shortid = require("shortid");
//import firebase from "firebase/app";
import "firebase/storage";
//import db from "../firebase/firebaseInit";


export default {
  name: "CreateHorarios",
  components: {
    Horario,
    TablaHorarios, Historial
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
        alumnos:[],
        historial: false,
        boton: false
      },
    };
  },
 

  methods: {
    ...mapActions(["PutHorario"]),

    procesarFormulario() {
     
      this.clase.id = shortid.generate();
      this.PutHorario(this.clase);
      // console.log("tar1 :", this.clase)
      //this.historialHorario(this.clase);
      //this.getClase(this.clase);
      this.clase = {
        fecha: "",
        id: "",
        tipo: "",
        horas: "",
        cupos: 0,
        espacio: 0,
        alumnos:[],
        historial: false,
        boton: false
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
