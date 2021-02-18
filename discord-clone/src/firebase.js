import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCrq-ab6z7vypMPX9xdf9IhYN7FNI8s5UU",
  authDomain: "discord-clone-ab949.firebaseapp.com",
  projectId: "discord-clone-ab949",
  storageBucket: "discord-clone-ab949.appspot.com",
  messagingSenderId: "931708224513",
  appId: "1:931708224513:web:7aa3dc661da1f0f2142c00"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db 