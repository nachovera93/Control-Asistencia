import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import router from '../router'
import "firebase/auth";
import db from "../firebase/firebaseInit";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //tareas:[],
    clase: {
      fecha:'',
      id: '',
      tipo: '',
      horas: '',
      cupos: 0,
      espacio: 0,
      boton:null,
      alumnos:[],
    },
    horarios:[],
    //historialHorarios:[],
    medidas:[],
    medidasUsuario:[],
    usuarios:[],
    clasesCreadas:[],
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
      state.horarios.push(payload)
    },
    getclase(state,payload){
      state.clasesCreadas.push(payload)
      //console.log("clases: ", state.clasesCreadas);
    },
   /* HistorialHorarios(state,payload){
      state.historialHorarios.push(payload)
    },*/
    setHorario(state,payload){
      state.horarios = payload
      console.log("Horarios: ", state.horarios);
    },
    updateClase(state,payload){
      state.clase = state.horarios.find(item => item.id === payload.id)
      state.clase.alumnos.push(payload.userid)
      state.clase.espacio = payload.espacio + 1
      state.clase.boton = true
      //console.log("id clase: ",state.clase.espacio); 
      //console.log("id alumno: ",payload.userid);
    },
    sacarClase(state,payload){
      state.clase = state.horarios.find(item => item.id === payload.id)
      state.clase.alumnos.filter(item => item.id !== payload.userid)
      state.clase.espacio = payload.espacio - 1
      state.clase.boton = false
      //console.log("id clase: ",state.clase); 
      //console.log("id alumno: ",payload.userid);
    }, 
    EstadoBoton(state,payload){
      state.clase.boton = payload
      //console.log("Boton idenx mutacion: ", state.clase.boton);
    },
    Usuarios(state,payload){
      //state.usuarios.push(payload)
      state.usuarios = payload
      console.log("Usuarios: ", state.usuarios);
      //console.log("medidas: ", state.usuarios.medidas);
    },
    Medidas(state,payload){
      //state.usuarios.push(payload)
      state.medidas.push(payload)
      //console.log("Usuarios: ", state.usuarios);
    },
    medidaUser(state,payload){
      state.medidasUsuario = []
      state.usuarioNombre = payload.primero;
      state.usuarioApellido = payload.segundo;
      state.medidasUsuario.push(payload.med)
     // state.clase.alumnos.push(payload.userid)
      console.log("id clase: ",payload); 
      console.log(" alumno: ",state.medidasUsuario);
    },
    
  },



  actions: {  //las acciones las llamamos de las vistas
         //Horarios/HorariosID/fecha/dia/hora
         async PutHorario({commit},tar){  
              const timestamp= firebase.firestore.FieldValue.serverTimestamp()

              //console.log("tar2 :", tar)
              const dataBase = await db.collection("Horarios").doc();
              await dataBase.set({ 
                //HorarioID: tar.id,
                fecha: tar.fecha,
                tipo: tar.tipo,
                horas: tar.horas,
                cupos: tar.cupos,
                espacio: tar.espacio,
                alumnos: [],
                date: timestamp,
              });
        commit("putHorarios", tar);
       },
   
   /* async historialHorario({commit}, clase){              
              const timestamp = await Date.now();
              const dataBase = await db.collection("historialHorario").doc();
              console.log('Campo vacio2') 
              await dataBase.set({
                HorarioID: dataBase.id,
                fecha: clase.fecha,
                tipo: clase.tipo,
                horas: clase.horas,
                cupos: clase.cupos,
                espacio: clase.espacio,
                alumnos: [],
                date: timestamp,
              });
         
        commit("HistorialHorarios", clase);
    },*/

    async getCurrentUser({ commit }, user) {
      const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
      //console.log("dbResults:", dbResults);
      commit("setProfileInitials");
      const token = await user.getIdTokenResult();
      const admin = await token.claims.admin;
      commit("setProfileAdmin", admin);
    },
    async putMedidas({commit}, med){
            // const timestamp = await Date.now();
              const dataBase = await db.collection("users").doc(med.id);
              console.log("id :", med.id);
              await dataBase.set({
                //HorarioID: dataBase.id,
               medidas: { Triceps: med.triceps, Subescapular: med.subescapular,
               Biceps:med.biceps,Supracrestal: med.supracrestal}
               
              }, { merge: true });
         
        commit("Medidas", med);
    },
    
     async getHorarioSemana({commit}){
      const horarios = []
      const dataBase = await db.collection("Horarios")//.orderBy("date", "desc");
      const dbResults = await dataBase.get();
      
       dbResults.forEach((doc) => {
            let horario = doc.data()
            horario.id = doc.id   
            console.log("doc data :", doc.data())
            horarios.push(horario)
          })
         
         commit("setHorario", horarios);
        
    },

    async getMedidaUser({commit},id){ 
     var primero;
     var segundo;
     var med = [];
     var docRef = db.collection("users").doc(id);
     console.log("id :", id);
     docRef.get().then((doc) => {
       
        //const me = []
       //me.id = id
       //me.primero = doc.data().firstName
       //me.segundo = doc.data().lastName
       //med.push(me)
        primero = doc.data().firstName;
        segundo = doc.data().lastName;
        med = doc.data().medidas;
        //NombreCompleto.push(Nombre)
        //med.push(medida)
        //commit('medidaUser',{primero,segundo,med})
    //    })
     commit('medidaUser',{primero,segundo,med})
    }) 
    },

    deleteClase({commit},clase){
         commit("deleteclase", clase);
    },
    getClase({commit},clase){
         //console.log("getclase :", clase);
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
            usuarios.push(usuario)
          })
         commit("Usuarios", usuarios);
        }) 
    },

    async getBoton({commit}){
      var boton;
      db.collection("Horarios").get().then((res) => {
       res.forEach((doc) => {
             //console.log("Document data:", doc.data());
             //console.log("Boton index:", doc.data().boton);
             boton = doc.data().boton;
             commit("EstadoBoton", boton);
         });  
        }) 
    },

    
    async editarClase({commit},id){
     commit('editarClase',id)
    },
    
    
    async TomarClase({commit},{id,userid,username,userlast,espacio}){
         const dataBase = await db.collection("Horarios").doc(id);
         await dataBase.update({
           alumnos: firebase.firestore.FieldValue.arrayUnion({id : userid, name : username, apellido: userlast}),
           espacio: firebase.firestore.FieldValue.increment(1),
           boton: true,
         });
        commit("updateClase",  {id,userid,espacio})   
      },

    async DescartarClase({commit},{id,userid,username,userlast,espacio}){
         const dataBase = await db.collection("Horarios").doc(id);
         //console.log("id2", id)
         //console.log("name", username)
         //console.log("lastname", userlast)
         await dataBase.update({
           alumnos: firebase.firestore.FieldValue.arrayRemove({id : userid, name : username, apellido: userlast}),
           espacio: firebase.firestore.FieldValue.increment(-1),
           boton: false,
      });
        commit("sacarClase", {id,userid,espacio})
     },



    async deleteHorario({commit},id){
      await db.collection("Horarios").doc(id).delete()
      //await dataBase.delete(
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
