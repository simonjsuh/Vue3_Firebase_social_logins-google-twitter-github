import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfigData = {
  apiKey: "AIzaSyC61LOwmDxIqSr9KpVqRFpuDJNuhNSGT3U",
  authDomain: "vue-social-logins.firebaseapp.com",
  projectId: "vue-social-logins",
  storageBucket: "vue-social-logins.appspot.com",
  messagingSenderId: "11471906314",
  appId: "1:11471906314:web:88f56d6e710b443453a1f3",
  measurementId: "G-R855W28FHP"
};

const firebaseApp = firebase.initializeApp(firebaseConfigData);

export default firebaseApp