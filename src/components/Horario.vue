<template>

<div>
     
  <div id="form" >
    
    <div class="row"> 
<p class="font-weight-bold">Dia</p>
    <b-form-datepicker v-model="dias" :options="options" size="sm" ></b-form-datepicker>

<p class="font-weight-bold">Hora</p>
      <b-form-timepicker v-model="Horas"  size="sm" ></b-form-timepicker>

    </div>
   
  
    <p class="font-weight-bold" >Tipo</p>
     <div class="container parent">
    <div class="row">
        <div class='col text-center'>
        <input type="radio" name="tipo" id="img1" class="d-none imgbgchk" value="Espalda" v-model="tipo">
          <label for="img1">
            <img src="https://mhunters.com/wp-content/uploads/2020/09/mejores-ejercicios-para-espalda-musculatura-de-la-espalda.jpg" alt="Image 1">
            <div class="tick_container">
              <div class="tick"><i class="fa fa-check"></i></div>
            </div>
            </label>
            <div class="text-justify">Espalda</div>
        </div>
        <div class='col text-center'>
        <input type="radio" name="imgbackground" id="img2" class="d-none imgbgchk" value="Cardio" v-model="tipo">
          <label for="img2">
            <img src="https://www.enlineainformativa.com.mx/wp-content/uploads/2018/10/ejercicio.jpg" alt="Image 2" >
            <div class="tick_container">
              <div class="tick"><i class="fa fa-check"></i></div>
            </div>
          </label>
          <div class="text-justify">Cardio</div>
        </div>
        <div class='col text-center'>
        <input type="radio" name="imgbackground" id="img3" class="d-none imgbgchk" value="Piernas" v-model="tipo">
          <label for="img3">
            <img src="https://rutinasentrenamiento.com//wp-content/uploads/ejercicios-de-elongacion-piernas-istock-600x400.jpg" alt="Image 3">
            <div class="tick_container">
              <div class="tick"><i class="fa fa-check"></i></div>
            </div>
          </label>
          <div class="text-justify">Piernas</div>
        </div>
        <div class='col text-center'>
        <input type="radio" name="imgbackground" id="img4" class="d-none imgbgchk" value="Pectorales" v-model="tipo">
            <label for="img4">
              <img src="https://t1.uc.ltmcdn.com/images/4/8/7/img_47784_apa_295700_600.jpg" alt="Image 4">
              <div class="tick_container">
                <div class="tick"><i class="fa fa-check"></i></div>
              </div>
            </label>
            <div class="text-justify">Pectorales</div>
        </div>
        <div class='col text-center'>
        <input type="radio" name="imgbackground" id="img5" class="d-none imgbgchk" value="A elección" v-model="tipo">
            <label for="img5">
              <img src="https://www.esmacentremedic.com/wp-content/uploads/2019/08/beneficios-de-la-eliptica-600x400.jpg" alt="Image 5">
              <div class="tick_container">
                <div class="tick"><i class="fa fa-check"></i></div>
              </div>
            </label>
            <div class="text-justify">A elección</div>
        </div>
      </div>
    </div>

    
  </div>  
    <div class="mt-3">Seleccionado: <strong>{{dias}} /{{Horas}}/{{tipo}}</strong></div>





</div>
</template>





<script>
export default {
  
    props: {
        tarea: Object
    },
    computed:{
      bloquear(){
        return this.tarea.horario.trim() === "" ? true : false
      }
      },
      
          data() {
      return {
        
        timepicker:'',
        dias: null,
        Horas: null,
        tipo:'',
  
      
  
      }
    }
}

</script>



<style lang="scss" scoped>
html,body{
            min-height: 10vh;
            min-width: 10vw;
        }
        .parent{
            height: 10vh;
        }
        .parent>.row{
            display: flex;
            align-items: center;
            height: 50%;
        }
        .col img{
            height:100px;
            width: 100%;
            cursor: pointer;
            transition: transform 1s;
            object-fit: cover;
        }
        .col label{
            overflow: hidden;
            position: relative;
        }
        .imgbgchk:checked + label>.tick_container{
            opacity: 1;
        }
/*         aNIMATION */
        .imgbgchk:checked + label>img{
            transform: scale(1.25);
            opacity: 0.3;
        }
        .tick_container {
            transition: .5s ease;
            opacity: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            cursor: pointer;
            text-align: center;
        }
        .tick {
            background-color: #808080;
            color: white;
            font-size: 16px;
            padding: 6px 12px;
            height: 40px;
            width: 40px;
            border-radius: 100%;
        }
div#form{
margin: auto;
padding: 60px 120px;
width: 10;
height: 10;
background-color:gray;


}
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>