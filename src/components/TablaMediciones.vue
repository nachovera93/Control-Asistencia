<template>
  
 <div class="container">
   
  <!-- <input type="text" v-model="buscar" class="form-control" placeholder="Buscar por nombre o apellido" >
   <button @click="buscar">buscar</button>
    <div class="col-md-4" v-for="item in items" v-bind:key="item.id">
    <div class="card mb-3">
        <div class="card-body">
            <h3 class="card-title mb-3"></h3>
            <p class="card-text"><strong>Nombre: </strong>{{ item.firstName }}</p>
            
        </div>
    </div>
  </div>-->
   <input type="text" class="form-control my-2" id="formulario">
   
   <button class="mb-2">search</button> 
   <br>

   <br>
    <H6>Cantidad Pliegues Cútaneos</H6>
    <br>
     <div class="container"> 
      <div>
      <p class="font-weight-bold">Fecha</p>
      <b-form-datepicker v-model="medida.fecha" size="sm" ></b-form-datepicker>
      </div>
      
      <p class="font-weight-bold">id</p>
      <form>
          <input type="text" 
          class="form-control my-2" 
          placeholder=""
          v-model.trim="medida.id"
          >
      </form>
      <p class="font-weight-bold">triceps</p>
      <form>
          <input type="text" 
          class="form-control my-2" 
          placeholder=""
          v-model.trim="medida.triceps"
          >
      </form>
      <p class="font-weight-bold">Subescapular</p>
      <form>
          <input type="text" 
          class="form-control my-2" 
          placeholder=""
          v-model.trim="medida.subescapular"
          >
      </form>
      <p class="font-weight-bold">Biceps</p>
      <form>
          <input type="text" 
          class="form-control my-2" 
          placeholder=""
          v-model.trim="medida.biceps"
          >
      </form>
      <p class="font-weight-bold">Supracrestal</p>
      <form>
          <input type="text" 
          class="form-control my-2" 
          placeholder=""
          v-model.trim="medida.supracrestal"
          >
      </form>
    
    <button type="submit">
      Procesar
    </button>
    </div>
    <br>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Triceps</th>
                <th scope="col">Subescapular</th>
                <th scope="col">Biceps</th>
                <th scope="col">Supracrestal</th>
                <th scope="col">Suma</th>
                <th scope="col">% de Grasa</th>
            </tr>
        </thead> 
        <tbody>
            <tr v-for="item in this.medidasUsuario" :key="item.id">
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

import {mapState} from 'vuex'

export default {
    props: {
    medida: Object,
    },
    //data(){
    //  return{
    //    search: ''
    //  }
    //},
   // created(){
   //  this.getMedidaUser(this.$route.params.alumnoid);
   //  console.log("medidas usuario:", this.medidasUsuario)
   // },
   // computed:{
   //  ...mapState(['usuarios','medidasUsuario']),
     
    
   //  items(){
   //    return this.usuarios.filter(item => {
    //    return item.firstName.toLowerCase().includes(this.search.toLowerCase()) 
       //item.firstName.toLowerCase().includes(this.buscar.toLowerCase());
       //return item.medidas.includes(this.buscar.toLowerCase());
   //   });
     },
    
   // profileUser(){
   //   return this.$store.state.profileId;  
   //      },

    //},
    //methods:{
    //  ...mapActions(['getMedidaUser'])
     
    //}
  }
</script>

<style lang="scss">
.create-post {
  position: relative;
  height: 100%;

  button {
    margin-top: 0;
  }

  .router-button {
    text-decoration: none;
    color: #fff;
  }

  label,
  button,
  .router-button {
    transition: 0.5s ease-in-out all;
    align-self: center;
    font-size: 14px;
    cursor: pointer;
    border-radius: 20px;
    padding: 12px 24px;
    color: #fff;
    background-color: #303030;
    text-decoration: none;

    &:hover {
      background-color: rgba(48, 48, 48, 0.7);
    }
  }

  .container {
    position: relative;
    height: 100%;
    padding: 10px 25px 60px;
  }

  // error styling
  .invisible {
    opacity: 0 !important;
  }

  .err-message {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    color: #fff;
    margin-bottom: 10px;
    background-color: #303030;
    opacity: 1;
    transition: 0.5s ease all;

    p {
      font-size: 14px;
    }

    span {
      font-weight: 600;
    }
  }

  .blog-info {
    display: flex;
    margin-bottom: 32px;

    input:nth-child(1) {
      min-width: 300px;
    }

    input {
      transition: 0.5s ease-in-out all;
      padding: 10px 4px;
      border: none;
      border-bottom: 1px solid #303030;

      &:focus {
        outline: none;
        box-shadow: 0 1px 0 0 #303030;
      }
    }

    .upload-file {
      flex: 1;
      margin-left: 16px;
      position: relative;
      display: flex;

      input {
        display: none;
      }

      .preview {
        margin-left: 16px;
        text-transform: initial;
      }

      span {
        font-size: 12px;
        margin-left: 16px;
        align-self: center;
      }
    }
  }

  .editor {
    height: 60vh;
    display: flex;
    flex-direction: column;

    .quillWrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .ql-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: scroll;
    }

    .ql-editor {
      padding: 20px 16px 30px;
    }
  }

  .blog-actions {
    margin-top: 32px;

    button {
      margin-right: 16px;
    }
  }
}
</style>
