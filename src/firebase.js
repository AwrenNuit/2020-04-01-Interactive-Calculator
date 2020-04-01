import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCpNcI3On0iTx23iZXlgwXVWHWTosd_Uyo",
  authDomain: "hackathon-calculator.firebaseapp.com",
  databaseURL: "https://hackathon-calculator.firebaseio.com",
  projectId: "hackathon-calculator",
  storageBucket: "hackathon-calculator.appspot.com",
  messagingSenderId: "772483015763",
  appId: "1:772483015763:web:3fb9b6979d3fc68ef512a6",
  measurementId: "G-5MV3EGKKL9"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
