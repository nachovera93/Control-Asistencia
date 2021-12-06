import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import router from '../router'
import "firebase/auth";
import db from "../firebase/firebaseInit";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clase: {
      fecha:'',
      id: '',
      tipo: '',
      horas: '',
      cupos: 0,
      espacio: 0,
      alumnos:[],
      historial:null,
      boton: null
    },
    horarios:[],
    horariosTomados:[],
    historialHorarios:[],
    histo2:[],
    alumnos:[],
    medidas:[],
    medidasUsuario:[],
    usuarios:[],
    clasesCreadas:[],
    privilegio:null,
    usuarioNombre:null,
    usuarioApellido:null,
    blogPosts: [],
    postLoaded: null,
    blogHTML: "Escribe el titulo del blog aqui...",
    blogTitle: "",
    blogPhotoName: "",
    blogPhotoFileURL: null,
    blogPhotoPreview: null,
    editPost: null,
    user: null,
    profileAdmin: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
  },
  getters: {
    blogPostsFeed(state) {
      return state.blogPosts.slice(0, 2);
    },
    blogPostsCards(state) {
      return state.blogPosts.slice(2, 6);
    },
    horariosNoHistorial(state) {
      return state.horarios.filter(horario => {
        return horario.historial === false;
      });
    },
    horariosHistorial(state) {
      return state.historialHorarios;
    },
    horariosAsistidos(state) {
      return state.horariosTomados;
    },
    HorarioNoTomado(state) {
      return state.horariosTomados.map(item => {
        return state.horariosTomados.find(horariosTomados => horariosTomados.id !== item.id);
       
        })
    },
      
 /*   horariosHistorial(state) {
      console.log("Historial horarios .. : " ,state.historialHorarios)
      return state.historialHorarios.map(item => {
        const horario = state.horarios.find(horario => horario.historial === item.true);
        console.log("Historial horarios 2 .. : " ,horario)
        return {
          HorarioID: horario.id,
          fecha: horario.fecha,
          tipo: horario.tipo,
          hora: horario.horas, 
          alumnos: horario.alumnos,
        };
      });
    }*/
    
  },
  mutations: {
    newBlogPost(state, payload) {
      state.blogHTML = payload;
    },
    updateBlogTitle(state, payload) {
      state.blogTitle = payload;
    },
    fileNameChange(state, payload) {
      state.blogPhotoName = payload;
    },
    createFileURL(state, payload) {
      state.blogPhotoFileURL = payload;
    },
    openPhotoPreview(state) {
      state.blogPhotoPreview = !state.blogPhotoPreview;
    },
    toggleEditPost(state, payload) {
      state.editPost = payload;
    },
    setBlogState(state, payload) {
      state.blogTitle = payload.blogTitle;
      state.blogHTML = payload.blogHTML;
      state.blogPhotoFileURL = payload.blogCoverPhoto;
      state.blogPhotoName = payload.blogCoverPhotoName;
    },
    filterBlogPost(state, payload) {
      state.blogPosts = state.blogPosts.filter((post) => post.blogID !== payload);
    },
    updateUser(state, payload) {
      state.user = payload;
    },
    setProfileAdmin(state, payload) {
      state.profileAdmin = payload;
     //console.log("profile id : ");
     // console.log(state.profileAdmin);   //True o False
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUsername = doc.data().username;
     // console.log("id user: ",state.profileId); // id de el usuario
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") + state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeUsername(state, payload) {
      state.profileUsername = payload;
    },
    //set(state, payload){
    //state.horarios.push(payload)
   
    //},
    eliminar(state,payload){
      state.horarios=state.horarios.filter(item => item.id !== payload)
    },
    eliminardeHistorial(state,payload){
      state.historialHorarios=state.historialHorarios.filter(item => item.id !== payload)
      state.botonhisto=false
    },
    deleteclase(state,payload){
      state.clasesCreadas=state.clasesCreadas.filter(item => item.id !== payload)
    },
    editarClase(state, payload){
      if (!state.horarios.find(item => item.id === payload)){
        router.push('/horario')
        return
      }
      state.clase = state.horarios.find(item => item.id === payload)
    },
    update(state,payload){
      state.horarios = state.horarios.map(item => item.id === payload.id ? payload : item)
      router.push('/horarios')  //para emppujar al usuario a la pagina de crear horario
    },
    putHorarios(state,payload){
      //console.log("botonHistorial1.5: ", payload.historial);
      state.horarios.push(payload)
      //state.clase.botonHistorial = payload.botonHistorial
    },
    getclase(state,payload){
      state.clasesCreadas.push(payload)
      //console.log("clases: ", state.clasesCreadas);
    },
    HistorialHorarios(state,clase){
      clase.historial=true;
      state.historialHorarios.push(clase);
      console.log("historialHorarios: ", clase);
    },
    Historial(state,payload){
      state.historialHorarios=payload
      console.log("Horarios: ", state.historialHorarios);
    },
    HistorialTomados(state,payload){
      state.historialTomados=payload
      console.log("Historial tomados: ", state.historialTomados);
    },
    setHorario(state,payload){
      state.horarios = payload;
    },
    updateClase(state,payload){
      state.clase = state.horarios.find(item => item.id === payload.id)
      const horarioTomado = state.clase
      console.log("horarioTomado :", horarioTomado);
      state.clase.alumnos.push(payload.userid)
      state.clase.espacio = payload.espacio + 1
      state.horariosTomados.push(horarioTomado)
    },
    sacarClase(state,payload){
      state.clase = state.horarios.find(item => item.id === payload.id)
      state.clase.alumnos.filter(item => item.id !== payload.userid)
      state.clase.espacio = payload.espacio - 1
    }, 
    EstadoBoton(state,payload){
      state.clase.boton = payload
    },
    Usuarios(state,payload){
      state.usuarios = payload
    },
    Medidas(state,payload){
      state.medidas.push(payload)
    },
    medidaUser(state,payload){
      state.medidasUsuario = []
      state.usuarioNombre = payload.primero;
      state.usuarioApellido = payload.segundo;
      state.medidasUsuario.push(payload.med)
    },
    privilegio(state,payload){
      //state.usuarios.push(payload)
      state.privilegios=payload
      //console.log("Usuarios: ", state.usuarios);
    },
   
  },

  actions: {  
    async Privilegios({commit}, {id}){
               const dataBase = await db.collection("users").doc(id);
               await dataBase.update({
               privilegios: true
               });
               commit("privilegios", true);
            },
         
    async SacarPrivilegios({commit}, {id}){
               const dataBase = await db.collection("users").doc(id);
               await dataBase.update({
               privilegios: false
               
              }); 
               commit("privilegios", false);
            },

    async PutHorario({commit},tar){  
              const timestamp= firebase.firestore.FieldValue.serverTimestamp()
              console.log("historial ..  :", tar.historial);
              const dataBase = await db.collection("Horarios").doc();
              await dataBase.set({ 
                HorarioID: dataBase.id,
                fecha: tar.fecha,
                tipo: tar.tipo,
                horas: tar.horas,
                cupos: tar.cupos,
                espacio: tar.espacio,
                alumnos: [],
                date: timestamp,
                historial: tar.historial,
                boton: tar.boton
              });
        commit("putHorarios", tar);
       },
   
    async putHistorial({commit}, clase){ 
                //if (clase.historial === true) return;
                const timestamp = await Date.now();
                console.log("clase id :", clase.id);
                const dataBase = await db.collection("historialHorario").doc(clase.id); 
                await dataBase.set({
                HorarioID: clase.id,
                date: timestamp,
                fecha: clase.fecha,
                tipo: clase.tipo,
                hora: clase.horas, 
                alumnos: clase.alumnos,
                historial: clase.historial
                });
               commit("HistorialHorarios", clase);   
              
  
               const dataBase2 = await db.collection("Horarios").doc(clase.id); 
               await dataBase2.update({ 
               historial: true,
              }); 
              // commit("HistorialHorario",true);
    },
    
    async getHistorial({commit}){              
              
      const horariosSemana = []
      const dataBase = await db.collection("historialHorario");//.orderBy("date", "desc");
      const dbResults = await dataBase.get();
      
       dbResults.forEach((doc) => {
            let horario = doc.data()
            horario.id = doc.id 
            horario.alumnos = doc.data().alumnos
            horario.fecha = doc.data().fecha
            horario.horas = doc.data().horas
            horario.tipo = doc.data().tipo
            horariosSemana.push(horario)
          })
        commit("Historial", horariosSemana);
    },

    async getHisto({commit}){                  
        commit("Histo");
    },


     async getHorarioSemana({commit}){
      const horarios = []
      const dataBase = await db.collection("Horarios")//.orderBy("date", "desc");
      const dbResults = await dataBase.get();
      
       dbResults.forEach((doc) => {
            let horario = doc.data()
            horario.id = doc.id 
            horario.alumnos = doc.data().alumnos
            horario.fecha = doc.data().fecha
            horario.horas = doc.data().horas
            horario.cupos = doc.data().cupos
            horario.espacio = doc.data().espacio
            horario.tipo = doc.data().tipo
            horario.historial = doc.data().historial
           // console.log("botonHistorial1 :",  horario.historial);  
            horarios.push(horario)
          })
         commit("setHorario", horarios);
    },

    async getCurrentUser({ commit }, user) {
      const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
      const token = await user.getIdTokenResult();
      const admin = await token.claims.admin;
      commit("setProfileAdmin", admin);
    },
    async putMedidas({commit}, med){
      const dataBase = await db.collection("users").doc(med.id);
      await dataBase.set({
      medidas: { Triceps: med.triceps, Subescapular: med.subescapular,
      Biceps:med.biceps,Supracrestal: med.supracrestal}    
      }, { merge: true });     
      commit("Medidas", med);
    },
    async getPrivilegios({commit}, id) {
     var privi;
     var docRef = db.collection("users").doc(id);
     console.log("privilegios0 :", id);
     docRef.get().then((doc) => {
        privi = doc.data().privilegios;
        console.log("privilegios :", privi);
     commit('privilegio',privi)
      }) 
    },
    async getMedidaUser({commit},id){ 
     var primero;
     var segundo;
     var med = [];
     var docRef = db.collection("users").doc(id);
     console.log("id :", id);
     docRef.get().then((doc) => {
        primero = doc.data().firstName;
        segundo = doc.data().lastName;
        med = doc.data().medidas;
     commit('medidaUser',{primero,segundo,med})
      }) 
    },

    deleteClase({commit},clase){
         commit("deleteclase", clase);
    },
    getClase({commit},clase){
         commit("getclase", clase);
      
    },
    async getUser({commit}){
     const usuarios = []
      db.collection("users").get()
      .then(res => {
       res.forEach(doc => {
            const usuario = []
            usuario.id = doc.id
            usuario.firstName = doc.data().firstName,
            usuario.lastName = doc.data().lastName,
            usuario.medidas = doc.data().medidas,
            usuario.email = doc.data().email,
            usuario.privilegios = doc.data().privilegios,
            usuarios.push(usuario)
          })
         commit("Usuarios", usuarios);
        }) 
    },

    async getBoton({commit}){
      var boton;
      db.collection("Horarios").get().then((res) => {
       res.forEach((doc) => {
             boton = doc.data().boton;
             commit("EstadoBoton", boton);
         });  
        }) 
    },

    async getBotonHistorial({commit}){
      var boton2;
      db.collection("Horarios").get().then((res) => {
       res.forEach((doc) => {
             boton2 = doc.data().Historial;
             //console.log("boton historial 1:", boton2);
             commit("EstadoBotonHistorial", boton2);
         });  
        }) 
    },

    async editarClase({commit},id){
     commit('editarClase',id)
    },    
    
    async TomarClase({commit},{id,userid,username,userlast,espacio,fecha,tipo,hora}){
         const dataBase = await db.collection("Horarios").doc(id);
         await dataBase.set({
           alumnos: firebase.firestore.FieldValue.arrayUnion({id : userid, name : username, apellido: userlast}),
           espacio: firebase.firestore.FieldValue.increment(1),
         })
         
         const dataBase2 = await db.collection("HorariosTomados").doc(userid);
         await dataBase2.set({
           //const timestamp = await Date.now();
           claseTomadas: firebase.firestore.FieldValue.arrayUnion({tipo : tipo, fecha : fecha, hora: hora})       
         }),{ merge: true };
        commit("updateClase",  {id,userid,username,userlast,espacio})   
      },

    async DescartarClase({commit},{id,userid,username,userlast,espacio}){
         const dataBase = await db.collection("Horarios").doc(id);
         await dataBase.update({
           alumnos: firebase.firestore.FieldValue.arrayRemove({id : userid, name : username, apellido: userlast}),
           espacio: firebase.firestore.FieldValue.increment(-1),
           //boton: true,
      });
        commit("sacarClase", {id,userid,espacio})
     },

    async getHorarioTomados({commit},id){  
     // console.log("id0 :",id);            
      const horariosTomados = []
      const dataBase = await db.collection("HorariosTomados").doc(id);
      const dbResults = await dataBase.get()
      dbResults.forEach(doc => {
            let horario = doc;
            console.log("ClasesAsistidas :",doc);
            //horario.fecha = doc.fecha
            //horario.tipo = doc.data().tipo
            //horario.hora = doc.data().hora
            horariosTomados.push(horario)
          })
        commit("HistorialTomados", horariosTomados);
    },

    async deleteHorarioHistorial({commit},tar){
      await db.collection("historialHorario").doc(tar.id).delete()
      const dataBase2 = await db.collection("Horarios").doc(tar.id);
      await dataBase2.update({ 
          Historial: false
        });
      commit('eliminardeHistorial',tar.id)
    },
    async deleteHorario({commit},id){
      await db.collection("Horarios").doc(id).delete()
      commit('eliminar',id)
    },
    async UpdateClase({commit}, clase){
      const timestamp = await Date.now();
      const dataBase = await db.collection("Horarios").doc(clase.id)
      console.log(clase.id)
      await dataBase.update({
                HorarioID: dataBase.id,
                fecha: clase.fecha,
                tipo: clase.tipo,
                horas: clase.horas,
                cupos: clase.cupos,
                espacio: clase.espacio,
                date: timestamp,
              });
      
      commit('update', clase)
        
    },

    async getPost({ state }) {
      const dataBase = await db.collection("blogPosts").orderBy("date", "desc");
      const dbResults = await dataBase.get();
      dbResults.forEach((doc) => {
        if (!state.blogPosts.some((post) => post.blogID === doc.id)) {
          const data = {
            blogID: doc.data().blogID,
            blogHTML: doc.data().blogHTML,
            blogCoverPhoto: doc.data().blogCoverPhoto,
            blogTitle: doc.data().blogTitle,
            blogDate: doc.data().date,
            blogCoverPhotoName: doc.data().blogCoverPhotoName,
          };
          state.blogPosts.push(data);
        }
      });
      state.postLoaded = true;
    },
    async updatePost({ commit, dispatch }, payload) {
      commit("filterBlogPost", payload);
      await dispatch("getPost");
    },
    async deletePost({ commit }, payload) {
      const getPost = await db.collection("blogPosts").doc(payload);
      await getPost.delete();
      commit("filterBlogPost", payload);
    },
    async updateUserSettings({ commit, state }) {
      const dataBase = await db.collection("users").doc(state.profileId);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUsername,
      });
      commit("setProfileInitials");
    },
    
    
    
  },
  modules: {}
})
