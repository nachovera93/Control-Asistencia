<template>
<div>
  <div>

    <h3>Fecha</h3>
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

    <!-- Horarios -->
    
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
      }

}

</script>

<style lang="scss" scoped>
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