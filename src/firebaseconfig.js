import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBFhmyWJz3E10Ip-jAksi6z79TK9KqQFGg",
    authDomain: "login-auth-b54d9.firebaseapp.com",
    projectId: "login-auth-b54d9",
    storageBucket: "login-auth-b54d9.appspot.com",
    messagingSenderId: "263542056488",
    appId: "1:263542056488:web:0dc85882d5c5962054f71d"
  };

  const app=firebase.initializeApp(firebaseConfig)

  export const db=app.firestore()

  export default app
  