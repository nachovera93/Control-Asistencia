<template>
  
    <div class="container-fluid">
        <H1>Avances de  {{usuarioNombre}} {{usuarioApellido}}</H1>
  <!--   <form @submit.prevent="procesarMedidas">
      <TablaMediciones :medida="medida" />
     </form>-->
     <table class="table">
        <thead>
            <tr>
                <th scope="col">Triceps</th>
                <th scope="col">Subescapular</th>
                <th scope="col">Biceps</th>
                <th scope="col">Supracrestal</th>
              <!--  <th scope="col">Suma</th>
                <th scope="col">% de Grasa</th>-->
            </tr>
        </thead> 
        <tbody>
            <tr v-for="item in medidasUsuario" :key="item.id">
                <th>{{item.Triceps}}</th>
                <td>{{item.Subescapular}}</td>
                <td>{{item.Biceps}}</td>
                <td>{{item.Supracrestal}}</td>
              <!--  <td>{item.Suma}}</td>
                <td>{item.Grasa}}</td>     
                </td>  
                <td v-if="profileAdmin">
                        <button @click="deletePliegues(item.id)"> Eliminar </button>
                 </td>
                 <td v-if="profileAdmin">
                       <router-link class="router-button ml-2 btn-warning"
                           :to="{
                            name: 'EditarPliegues',
                           params:{
                            claseid: item.id
                          }
                          }"
                        >
                          Editar
                        </router-link>
                </td>-->
            </tr>
        </tbody>
    </table>
    </div>
 
</template>


<script>
//import TablaMediciones from "../components/TablaMediciones";
import { mapActions, mapState } from "vuex";
export default {
  name: "Avance",
  //components: { TablaMediciones },
  data() {
    return {
      medida: {
        id:'',
        Triceps:0,
        Subescapular: 0,
        Biceps: 0,
        Supracrestal: 0,
      },
    };
  },
  created(){
     this.getUserMed(this.$store.state.profileId),  
     this.getMedidaUser(this.$route.params.alumnoid)  //aqui se manda la id de la url hacia la tienda
     console.log("medidas usuario:", this.$store.state.profileId)
    },
    computed:{
     ...mapState(['usuarioNombre','usuarioApellido','medidasUsuario']),
     profileUser(){
      return this.$store.state.profileId;  
       },
    },
  methods: {
    ...mapActions(["getMedidaUser","getUserMed"]),

    procesarMedidas() {
      
      this.putMedidas(this.medida)
  
      this.medida = {
        id: '',
        Triceps: 0,
        Subescapular: 0,
        Biceps: 0,
        Supracrestal: 0,
      };
    },
  }
};
</script>


<style lang="scss" scoped>
.blog-cards {
  position: relative;
  .toggle-edit {
    display: flex;
    align-items: center;
    position: absolute;
    top: -70px;
    right: 0;
    span {
      margin-right: 16px;
    }
    input[type="checkbox"] {
      position: relative;
      border: none;
      -webkit-appearance: none;
      background: #fff;
      outline: none;
      width: 80px;
      height: 30px;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    input[type="checkbox"]:before {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 20px;
      top: 0;
      left: 0;
      background: #303030;
      transform: scale(1.1);
      transition: 750ms ease all;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    input:checked[type="checkbox"]:before {
      background: #fff;
      left: 52px;
    }
  }
}
</style>
