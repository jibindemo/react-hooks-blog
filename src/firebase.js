import firebase from "firebase/app";
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBv6P-wYOtR8G5j3YqGngBz2PUkSJivgPI",
authDomain: "react-hooks-blog-72fa3.firebaseapp.com",
projectId: "react-hooks-blog-72fa3",
storageBucket: "react-hooks-blog-72fa3.appspot.com",
messagingSenderId: "190962476556",
appId: "1:190962476556:web:d1264fe90ce3a4cb893029"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();