import firebase from 'firebase'
require('@firebase/firestore')
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD4toEDAtL3zlPCKHdrrcTcleVmfMU9V9g",
    authDomain: "wily-c9f33.firebaseapp.com",
    databaseURL: "https://wily-c9f33.firebaseio.com",
    projectId: "wily-c9f33",
    storageBucket: "wily-c9f33.appspot.com",
    messagingSenderId: "807076895113",
    appId: "1:807076895113:web:3f959ad2d92818b0626958"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();