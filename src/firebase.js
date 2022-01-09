import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDNfwQDYXvJ2n1zDO3O1JL9ytdMTeU3AWE",
    authDomain: "not-my-tube.firebaseapp.com",
    projectId: "not-my-tube",
    storageBucket: "not-my-tube.appspot.com",
    messagingSenderId: "661253088248",
    appId: "1:661253088248:web:8e792a808d8896c9dfac0d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();