<template>
  <div>
    <div id="form">
    <!--  <h5>Fecha</h5>
       <form>
          <input type="text" 
          class="form-control my-2" 
          placeholder="Ingresa fecha"
          v-model.trim="clase.fecha"
          >
      </form>
     <h5>Dias</h5>
      <b-form-select
        v-model="clase.dia"
        :options="options"
        size="sm"
        class="mt-3"
      ></b-form-select>
      <br /><br />
      <h5>Horas</h5> -->

      <div class="row"> 
      <p class="font-weight-bold">Fecha</p>
      <b-form-datepicker v-model="clase.fecha" size="sm" ></b-form-datepicker>
    
      <p class="font-weight-bold">Semana</p>
      <b-form-datepicker v-model="clase.Semana" size="sm" ></b-form-datepicker>

      <p class="font-weight-bold">Hora</p>
      <b-form-timepicker v-model="clase.horas"  size="sm" ></b-form-timepicker>
      </div>

      
      <p class="font-weight-bold">Tipo</p>
      <b-form-select
        v-model="clase.tipo"
        :options="optionsTipo"
        size="sm"
        class="mt-3"
      ></b-form-select>
  
      <p class="font-weight-bold">Cupos</p>
      <form>
          <input type="text" 
          class="form-control my-2" 
          placeholder="Ingresa los cupos que estarán disponibles"
          v-model.trim="clase.cupos"
          >
      </form>
       <!--<div class="mt-3">
        Selected: <strong>{{ dia }} /{{ Horario }}/{{ nombre }}</strong> 
      </div>-->
    </div>

   <!-- <div class="md-form">
      <input
        placeholder="Selected time"
        type="text"
        id="input_starttime"
        class="form-control timepicker"
      />
      <label for="input_starttime">Twelve hour clock</label>
    </div> -->

    <button type="submit" :disabled="bloquear">
      Procesar
    </button>

   
  </div>
</template>

<script>
export default {
  props: {
    clase: Object,
  },
  computed: {
    bloquear() {
      return this.clase.cupos === '' ? true : false;
    },
  },
  data() {
    return {
      timepicker:'',
      fecha:null,
      semana:null,
      horas: null,
      tipo: null,
      cupos:null,
      optionsTipo: [
        { value: null, text: "Selecciona el tipo de clase" },
        { value: "Espalda", text: "Espalda" },
        { value: "Cardio", text: "Cardio" },
        { value: "Piernas", text: "Piernas" },
        { value: "Pecho", text: "Pecho" },
        { value: "A eleccion", text: "A elección" },
      ],
    };
  },
};
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
