import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Initialize Firebase
const app = firebase.initializeApp({
    apiKey: "AIzaSyDdM6xwWVCGCFfT2Nr_JLygoyz2EBN1NSY",
    authDomain:"dental-care-fbfa3.firebaseapp.com",
    projectId: "dental-care-fbfa3",
    storageBucket: "dental-care-fbfa3.appspot.com",
    messagingSenderId: "46288407874",
    appId: "1:46288407874:web:784122ac596503ee1dccdb"
});

export const auth = app.auth()
export default app