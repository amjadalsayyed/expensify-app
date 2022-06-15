import * as firebase from "firebase";

const Config = {
  apiKey: "AIzaSyB2eDv5dvER1zkjbp_N5LBYln2J3jzLOM4",
  authDomain: "expensify-8d94b.firebaseapp.com",
  databaseURL: "https://expensify-8d94b-default-rtdb.firebaseio.com",
  projectId: "expensify-8d94b",
  storageBucket: "expensify-8d94b.appspot.com",
  messagingSenderId: "1070574053229",
  appId: "1:1070574053229:web:5e6a3826471ab29f0e1c64",
  measurementId: "G-WT6F2GZ556",
};

firebase.initializeApp(Config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// database.ref("expenses").push({
//   description: "rent",
//   note: "must pay",
//   amount: 300,
//   craetedAt: 332,
// });
// database.ref("expenses").push({
//   description: "phone bill",
//   note: "must pay",
//   amount: 455,
//   craetedAt: 33567,
// });
// database.ref("expenses").push({
//   description: "gas bill",
//   note: "must pay",
//   amount: 30054,
//   craetedAt: 33267,
// });
// const onValue = database.ref().on(
//   "value",
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//   (e) => {
//     console.log("erorr", e);
//   }
// );

// setTimeout(() => {
//   database.ref("age").set(29);
// }, 3500);
// setTimeout(() => {
//   database.ref().off(onValue);
// }, 7000);
// setTimeout(() => {
//   database.ref("age").set(30);
// }, 10500);
// database
//   .ref()
//   .set({
//     name: "amjad alsayyed",
//     age: 26,
//     isSingle: true,
//     location: {
//       city: "zarqa",
//       country: "jordan",
//     },
//   })
//   .then(() => {
//     console.log("data is saved!");
//   })
//   .catch((e) => {
//     console.log("this failed", e);
//   });

// // database.ref().set("this is my date");

// // database.ref("age").set(27);
// // database.ref("location/city").set("amman");

// database
//   .ref("attributes")
//   .set({
//     hieght: 187,
//     weight: 94,
//   })
//   .then(() => {
//     console.log("data is saved!");
//   })
//   .catch((e) => {
//     console.log("this failed", e);
//   });
