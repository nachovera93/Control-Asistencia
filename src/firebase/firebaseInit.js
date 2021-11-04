import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDeQb834MUYBRti9Jdy9r8DPefNxZqETKQ",
    authDomain: "skull-gyms.firebaseapp.com",
    projectId: "skull-gyms",
    storageBucket: "skull-gyms.appspot.com",
    messagingSenderId: "497558350411",
    appId: "1:497558350411:web:e8dd78d588c0602c39fbce"
  };


  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  

  export { timestamp };
  export default firebaseapp.firestore();
