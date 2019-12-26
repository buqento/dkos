import firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyBqRXdujEyntqELywL7ln47T9pbPPmrNKk",
    authDomain: "manggurebe-3df09.firebaseapp.com",
    databaseURL: "https://manggurebe-3df09.firebaseio.com",
    projectId: "manggurebe-3df09",
    storageBucket: "manggurebe-3df09.appspot.com",
    messagingSenderId: "36274700802",
    appId: "1:36274700802:web:7bfa9f6f910b6c1b76dd1b",
    measurementId: "G-0LY4J9BS8K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;