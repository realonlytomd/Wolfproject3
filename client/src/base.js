import Rebase from 're-base';
import firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDhxsDmLx--BUrRFYOzV20eVyWeKxF3yt8",
    authDomain: "sign-in-c2502.firebaseapp.com",
    databaseURL: "https://sign-in-c2502.firebaseio.com",
    projectId: "sign-in-c2502",
    storageBucket: "sign-in-c2502.appspot.com",
    messagingSenderId: "588409422899"
  };

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())
  
  export { app, base }