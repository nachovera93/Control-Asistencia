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
      alumnos:[],
    },
    horarios:[],
    blogPosts: [],
    postLoaded: null,
    blogHTML: "Write your blog title here...",
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
      console.log("id user: ",state.profileId); // id de el usuario
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
    setHorario(state,payload){
      state.horarios = payload
    },
    updateClase(state,payload){
      state.clase.alumnos.push(payload)
      state.clase.espacio++
      console.log("alumnos: ",state.clase.espacio); 
    },
    sacarClase(state,payload){
      state.clase.alumnos = state.clase.alumnos.filter(item => item.id !== payload)
      state.clase.espacio--
      console.log("alumnos: ",state.clase.espacio); 
    },
   
  },

  actions: {  //las acciones las llamamos de las vistas

    async putHorario({commit}, tar){  
       // const dataBase2 = await db.collection("Horarios").doc();  //esto integra id
              
              const timestamp = await Date.now();
              const dataBase = await db.collection("Horarios").doc();
              console.log('Campo vacio2') 
              await dataBase.set({
                HorarioID: dataBase.id,
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
   
    async getCurrentUser({ commit }, user) {
      const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
      const token = await user.getIdTokenResult();
      const admin = await token.claims.admin;
      commit("setProfileAdmin", admin);
      
 
    },
    async getHorarios({commit}){
      const horarios = []
      db.collection("Horarios").get()
      .then(res => {
       res.forEach(doc => {
            let horario = doc.data()
            horario.id = doc.id
            //console.log(doc.id)
            horarios.push(horario)
          })
         commit("setHorario", horarios);
        }) 
    },

    
    async editarClase({commit},id){
     commit('editarClase',id)
    },
    
    async TomarClase({commit},{id,userid,username,userlast}){
         const dataBase = await db.collection("Horarios").doc(id);
         console.log("usres", userid)
         console.log("name", username)
         console.log("lastname", userlast)
         //const datos=[]
         dataBase.update({
           alumnos: firebase.firestore.FieldValue.arrayUnion({id : userid, name : username, apellido: userlast}),
           espacio: firebase.firestore.FieldValue.increment(1)

      });

        commit("updateClase", userid);
      },

    async DescartarClase({commit},{id,userid,username,userlast}){
         const dataBase = await db.collection("Horarios").doc(id);
         //console.log("id2", id)
         console.log("name", username)
         console.log("lastname", userlast)
         dataBase.update({
           alumnos: firebase.firestore.FieldValue.arrayRemove({id : userid, name : username, apellido: userlast}),
           espacio: firebase.firestore.FieldValue.increment(-1)

      });
        commit("sacarClase", userid);
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
