import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCgEEoUDBustUBFq43Mh1uNmCGTD9G-fxg",
    authDomain: "msg-otp-37b13.firebaseapp.com",
    projectId: "msg-otp-37b13",
    storageBucket: "msg-otp-37b13.appspot.com",
    messagingSenderId: "115865269589",
    appId: "1:115865269589:web:84131de9521ac3ec65ebdc"
};

firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const firestore = firebase.firestore();
 
export{auth,firestore}
