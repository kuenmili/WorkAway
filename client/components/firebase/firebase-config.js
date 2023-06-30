import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBqf7-u4PK4M4kJS3aHbmiCy9pwUzHDEhg",
    authDomain: "workaway-23f70.firebaseapp.com",
    projectId: "workaway-23f70",
    storageBucket: "workaway-23f70.appspot.com",
    messagingSenderId: "52955397982",
    appId: "1:52955397982:web:ba47ebdebf8562713959cf"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }

 export default firebaseConfig;