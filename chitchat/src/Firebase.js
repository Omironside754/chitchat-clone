import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
//import {getAuth } from "firebase/auth"
//import { GoogleAuthProvider , signInWithPopup } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCKv8RnOFW-yq1Kjs9jCELv7IVUsMAkd1Y",
    authDomain: "chit-chatmern.firebaseapp.com",
    databaseURL: "https://chit-chatmern-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chit-chatmern",
    storageBucket: "chit-chatmern.appspot.com",
    messagingSenderId: "388176201504",
    appId: "1:388176201504:web:82c3b504f3c3d715dc3945",
    measurementId: "G-PFFR5QTTNX"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

//lets see this afterwards

// export function WriteMssg({ chatName, timestamp, chatBody }) {
//     const postData = {
//         name: { chatName },
//         body: { chatBody },
//         time: { timestamp },
//     };

//     const newPostKey = push(child(ref(db), 'posts')).key;

//     const updates = {};

//     updates['/posts/' + newPostKey] = postData;

//     console.log(chatBody);
//     update(ref(db), updates);
// };
// function updateStarCount(postElement, count) {
//     postElement.innerText = `Star Count: ${count}`;
// }

// export function ReadData() {

//     const dbRef = ref(getDatabase());
//     get(child(dbRef, `/posts/`)).then((snapshot) => {
//         if (snapshot.exists()) {
//             console.log(snapshot);
//         } else {
//             console.log("No data available");
//         }  
//     }).catch((error) => {
//         console.error(error);
//     });

//     console.log("hellp")
// };

// const auth= getAuth(app);
// const provider = new GoogleAuthProvider();
// export {auth , provider} ;