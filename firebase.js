// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAXZrehwg5uK3ZqaO-NqMfQgove47KBOU0",
  authDomain: "azarr-store.firebaseapp.com",
  databaseURL: "https://azarr-store-default-rtdb.firebaseio.com",
  projectId: "azarr-store",
  storageBucket: "azarr-store.firebasestorage.app",
  messagingSenderId: "319524986690",
  appId: "1:319524986690:web:8c4b33e7142ef98c2d72db",
  measurementId: "G-MJ5G0HKN4E"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, push };
