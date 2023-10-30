import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8ScD7uCbCXt7mjr8W4JV4n9X8ew611_I",
  authDomain: "myblog-93708.firebaseapp.com",
  projectId: "myblog-93708",
  storageBucket: "myblog-93708.appspot.com",
  messagingSenderId: "296720839957",
  appId: "1:296720839957:web:c2ef5bfcd95edb6c33251c",
};

const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDb, auth, storage };
