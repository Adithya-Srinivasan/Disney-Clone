import firebase from "firebase";
  
  const firebaseConfig = {
    apiKey: "AIzaSyBlWXz59VRv6D3f5DsLiVR7E9uydEt_0j4",
    authDomain: "hotstar-clone-17fd6.firebaseapp.com",
    projectId: "hotstar-clone-17fd6",
    storageBucket: "hotstar-clone-17fd6.appspot.com",
    messagingSenderId: "459115344815",
    appId: "1:459115344815:web:a64bfe188006121c3bf55a",
    measurementId: "G-XHWTMD74S7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;