<template>
    <div>
     {{clasesCreadas}}
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Fecha</th>
                <th scope="col">Clase</th>
                <th scope="col">Horario</th>
                <th scope="col">Cupos </th>
                <th scope="col">Eliminar/Editar</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in clasesCreadas" :key="item.id">
                <th scope="row">{{item.fecha}}</th>
                <td>{{item.tipo}}</td>
                <td>{{item.horas}}</td>
                <td>{{item.espacio}} / {{item.cupos}}</td>
                <td>
                     <!--   <button @click="deleteClase(item.id)"> Eliminar </button>
                        <router-link class="router-button ml-2 btn-warning"
                        :to="{
                          name: 'EditarClase',
                          params:{
                            claseid: item.id
                          }
                          }"
                        >
                          Editar
                        </router-link>-->
                </td>
            </tr>
        </tbody>
    </table>
    
  <!--  <button @click="CrearSemana"> Crear Nueva Semana </button>-->
   </div>
</template>
s
<script>
import {mapState,mapActions} from 'vuex'
export default {
    created(){
     //this.getClase()
     
    },
    computed:{
        ...mapState(['clasesCreadas'])   
         },
         methods:{
             ...mapActions(['deleteClase']),

       //  CrearSemana() {
       //    this.PutHorario(this.clasesCreadas)
       //  },
    
},  
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
