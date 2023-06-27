// Import the functions you need from the SDKs you need
var firebase = require("firebase/app");
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIWedc5-5zAyFaeJopWa-Q_nHjnVkFu6Y",
  authDomain: "inxby-5ec1b.firebaseapp.com",
  projectId: "inxby-5ec1b",
  storageBucket: "inxby-5ec1b.appspot.com",
  messagingSenderId: "444302853124",
  appId: "1:444302853124:web:e322e2376975bcff90e151",
  measurementId: "G-DNXEKVPMX5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const addInk = () => {
  firebase.database().ref('inks/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

const addPrinter = () => {
  console.log("Adding Ink");
}

// const epson = require("../public/inks/epson.json");
// const canon = require("../public/inks/canon.json");
// const brother = require("../public/inks/brother.json");
// const hp = require("../public/inks/hp.json");
// const { json } = require('body-parser');

module.exports = { addInk, addPrinter };