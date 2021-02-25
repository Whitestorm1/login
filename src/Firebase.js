import firebase from "firebase"
var firebaseConfig = {
    apiKey: "AIzaSyBWs6ZemvO_F_sV5YRGJWID1FFfXey-Cs0",
    authDomain: "api-3dc9a.firebaseapp.com",
    projectId: "api-3dc9a",
    storageBucket: "api-3dc9a.appspot.com",
    messagingSenderId: "562369219021",
    appId: "1:562369219021:web:11bac6f1d38dddee06dc84",
    measurementId: "G-2F6VDBP5B4"
 }
 const firebaseapp = firebase.intialization(firebaseConfig);
 const auth =firebase.auth()
 const provider=new firebase.auth.GoogleAuthProvider()

 export {auth,provider}
