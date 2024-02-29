import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBz2h7JopTAmYwmFg08Yu13U-tTJG51ivA",
  authDomain: "dog-app-21181.firebaseapp.com",
  projectId: "dog-app-21181",
  storageBucket: "dog-app-21181.appspot.com",
  messagingSenderId: "295608765160",
  appId: "1:295608765160:web:42d6dae222a1116b93175d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//ADD FUNCTIONALITY LATER

async function addDog() {
  try {
    const docRef = await addDoc(collection(db, "dogs"), {
      name: "Ada",
      age: 151,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getDogs() {
  const querySnapshot = await getDocs(collection(db, "dogs"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

export { addDog, getDogs };
