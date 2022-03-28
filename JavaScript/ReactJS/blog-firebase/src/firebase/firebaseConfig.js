import firebase from 'firebase/app';
import 'firebase/database'; 



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQxoZT9YLzMtH-nXQqiBJzE_xofpX6x2c",
  authDomain: "wolf-blog-9ac48.firebaseapp.com",
  databaseURL: "https://wolf-blog-9ac48-default-rtdb.firebaseio.com",
  projectId: "wolf-blog-9ac48",
  storageBucket: "wolf-blog-9ac48.appspot.com",
  messagingSenderId: "1094929912571",
  appId: "1:1094929912571:web:cbae1e2d17d9761ac0965e"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  export  {database as default}