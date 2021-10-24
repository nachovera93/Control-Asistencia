<template>

<div>
  <div id="form" >
    

    <h5>Dias</h5>
    <b-form-select v-model="dias" :options="options" size="sm" class="mt-3"></b-form-select>
    <br><br>
    <h5>Horas</h5>
      <b-form-select v-model="Horas" :options="optionsHoras" size="sm" class="mt-3"></b-form-select>
          <br><br>
    <h5>Tipo</h5>
      <b-form-select v-model="tipo" :options="optionsTipo" size="sm" class="mt-3"></b-form-select>
    <div class="mt-3">Selected: <strong>{{ dias  }} /{{Horas}}/{{tipo}}</strong></div>
  </div>  

<div class="md-form">
  <input placeholder="Selected time" type="text" id="input_starttime" class="form-control timepicker">
  <label for="input_starttime">Twelve hour clock</label>
</div>





<!--
     <form>
          <input type="text" 
          class="form-control my-2" 
          placeholder="Ingresa fecha"
          v-model.trim="tarea.fecha"
          >
          
      </form>

    <div class="form-check form-check-inline">
      <input 
        type="radio"
        id="check-1"
        class="form-check-input"
        v-model="tarea.dia"
        value="Lunes"
      >
      <label for="check-1" class="form-check-label">Lunes</label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        type="radio"
        id="check-2"
        class="form-check-input"
        v-model="tarea.dia"
        value="Martes"
      >
      <label for="check-2" class="form-check-label">Martes</label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        type="radio"
        id="check-3"
        class="form-check-input"
        v-model="tarea.dia"
        value="Miercoles"
      >
      <label for="check-3" class="form-check-label">Miercoles</label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        type="radio"
        id="check-4"
        class="form-check-input"
        v-model="tarea.dia"
        value="Jueves"
      >
      <label for="check-4" class="form-check-label">Jueves</label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        type="radio"
        id="check-5"
        class="form-check-input"
        v-model="tarea.dia"
        value="Viernes"
      >
      <label for="check-5" class="form-check-label">Viernes</label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        type="radio"
        id="check-6"
        class="form-check-input"
        v-model="tarea.dia"
        value="Sabado"
      >
      <label for="check-6" class="form-check-label">Sabado</label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        type="radio"
        id="check-7"
        class="form-check-input"
        v-model="tarea.dia"
        value="Domingo"
      >
      <label for="check-7" class="form-check-label">Domingo</label>
    </div>
  </div>
  <hr>

   Horarios 
     </div>
  <div>
    <h3>Hora</h3>
     <div class="form-check form-check-inline">
      <input 
        type="radio"
        id="check-5"
        class="form-check-input"
        v-model="tarea.horario"
        value="7:15 AM"
      >
      <label for="check-1" class="form-check-label">7:15 AM</label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        type="radio"
        id="check-6"
        class="form-check-input"
        v-model="tarea.horario"
        value="8:30 AM"
      >
      <label for="check-1" class="form-check-label">8:30 AM</label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        type="radio"
        id="check-7"
        class="form-check-input"
        v-model="tarea.horario"
        value="8:40 AM"
      >
      <label for="check-1" class="form-check-label">8:40 AM</label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        type="radio"
        id="check-8"
        class="form-check-input"
        v-model="tarea.horario"
        value="10:00 AM"
      >
      <label for="check-1" class="form-check-label">10:00 AM</label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        type="radio"
        id="check-9"
        class="form-check-input"
        v-model="tarea.horario"
        value="6:00 PM"
      >
      <label for="check-1" class="form-check-label">6:00 PM</label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        type="radio"
        id="check-10"
        class="form-check-input"
        v-model="tarea.horario"
        value="7:15 PM"
      >
      <label for="check-2" class="form-check-label">7:15 PM</label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        type="radio"
        id="check-11"
        class="form-check-input"
        v-model="tarea.horario"
        value="8:30 PM"
      >
      <label for="check-2" class="form-check-label">8:30 PM</label>
    </div>
  </div>
  <hr>

   
   <div>
     <h3>Clase</h3>
    <div class="form-check form-check-inline">
      <input 
        type="radio"
        id="check-8"
        class="form-check-input"
        v-model="tarea.nombre"
        value="Espalda"
      >
      <label for="check-8" class="form-check-label">Espalda</label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        type="radio"
        id="check-9"
        class="form-check-input"
        v-model="tarea.nombre"
        value="Cardio"
      >
      <label for="check-9" class="form-check-label">Cardio</label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        type="radio"
        id="check-10"
        class="form-check-input"
        v-model="tarea.nombre"
        value="Piernas"
      >
      <label for="check-10" class="form-check-label">Piernas</label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        type="radio"
        id="check-11"
        class="form-check-input"
        v-model="tarea.nombre"
        value="Pecho"
      >
      <label for="check-11" class="form-check-label">Pecho</label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        type="radio"
        id="check-12"
        class="form-check-input"
        v-model="tarea.nombre"
        value="A Elección"
      >
      <label for="check-12" class="form-check-label">A Elección</label>
    </div>
  </div>
  <hr>
  
  
  <div class="mt-2">
    <h3>Cupos</h3>
      <input 
        type="number"
        class="form-control"
        v-model.number="tarea.cupos"
      >
    </div>
    <button type="submit" :disabled="bloquear">
      Procesar
    </button>
</div>-->
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
        dias: null,
        Horas: null,
        tipo:null,
        options: [
          { value: null, text: 'Selecciona el dia' },
          { value: 'Lunes', text: 'Lunes' },
          { value: 'Martes', text: 'Martes' },
          { value: 'Miercoles', text: 'Miércoles' },
          { value: 'Jueves', text: 'Jueves' },
          { value: 'Viernes', text: 'Viernes' },
          { value: 'Sabado', text: 'Sábado' },
          { value: 'Domingo', text: 'Domingo' },                    
          //{ value: { C: '3PO' }, text: 'This is an option with object value' },
          //{ value: 'd', text: 'This one is disabled', disabled: true }
        ], 
        optionsHoras: [
          { value: null, text: 'Selecciona la hora' },
          { value: '07:17 AM', text: '07:17 AM' },
          { value: '08:40 AM', text: '08:40 AM' },
          { value: '10:00 AM', text: '10:00 AM' },
          { value: '18:00 PM', text: '18:00 PM' },
          { value: '19:15 PM', text: '19:15 PM' },
          { value: '20:30 PM', text: '20:30 PM' },
                           
          //{ value: { C: '3PO' }, text: 'This is an option with object value' },
          //{ value: 'd', text: 'This one is disabled', disabled: true }
        ],
         optionsTipo: [
          { value: null, text: 'Selecciona el tipo de clase' },
          { value: 'Espalda', text: 'Espalda' },
          { value: 'Cardio', text: 'Cardio' },
          { value: 'Piernas', text: 'Piernas' },
          { value: 'Pecho', text: 'Pecho' },
          { value: 'A eleccion', text: 'A elección' },
           ]
      }
    }
}

</script>



<style lang="scss" scoped>

div#form{
margin: auto;
padding: 50px 25px;
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