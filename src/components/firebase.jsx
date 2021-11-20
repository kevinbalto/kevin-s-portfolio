import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import swal from 'sweetalert';

// eslint-disable-next-line
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyDkAW1_4Hpkh52dc7VOPIXBI8HHVA1LDQM",
  authDomain: "kevin-s-portfolio-4f98b.firebaseapp.com",
  projectId: "kevin-s-portfolio-4f98b",
  storageBucket: "kevin-s-portfolio-4f98b.appspot.com",
  messagingSenderId: "872189135088",
  appId: "1:872189135088:web:1f222a36fc3814075ada35"
});

const db = getFirestore();

const addContact = async (name, email, subject, message) => {
  try {
    // eslint-disable-next-line
    const docRef = await addDoc(collection(db, "contactos"), {
      name: name,
      email: email,
      subject: subject,
      message: message
    }).then(() =>{
      swal("Message has been submitted!","We'll contact you soon!","success")
    })
  } catch (e) {
    swal("An error has occurred",e.message,"error");
  }
}

export {addContact};