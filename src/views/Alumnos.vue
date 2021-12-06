<template>
  <div class="blog-card-wrap">
    <H1>Alumnos</H1>
    <div class="blog-cards container">
     <table class="table">
        <thead>
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Avances</th>
                <th scope="col">Email</th>
                <th scope="col">Privilegios</th>
            </tr>
        </thead> 
        <tbody>
            <tr v-for="item in usuarios" :key="item.id">
                <th>{{item.firstName}}</th>
                <td>{{item.lastName}}</td>    
                <td v-if="profileAdmin">
                <router-link class=" ml-2 "
                           :to="{
                            name: 'Avances',
                             params:{
                            alumnoid: item.id
                          }
                          }"
                          >
                          Editar
               </router-link>
               </td>
             <td>{{item.id}}</td> 
             <td>
                        <button @click="Privilegios({id: item.id})" v-if="!item.privilegios"> Privilegios </button>
                        <button  @click="SacarPrivilegios({id: item.id})" v-else> Sacar Privilegios </button>
                        
                </td> 
            </tr>
        </tbody>
    </table>
     
    </div>
  </div>
</template>


<script>

import {mapState, mapActions} from 'vuex'

export default {
   
    created(){
     this.getUser()
    // this.verPrivilegios()
    },
    computed:{
     ...mapState(['usuarios']), 
    profileAdmin() {
      return this.$store.state.profileAdmin;   
         }
    },
     
    methods:{
      ...mapActions(['getUser','Privilegios','SacarPrivilegios']),
     
    }
  
  
}
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
