import {doc, setDoc, getDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import firestore from "../../helpers/firebaseConfig"

export async function getCartItems() {
  try {
    const cartUserRef = doc(firestore, 'carts', 'i9zBuJ8SZpcSk7ZsuFvY')
    const cartSnap = await getDoc(cartUserRef)   
    if(cartSnap.exists){
      console.log(cartSnap.data());
    }else{
      console.log("Documento no existe")
    }
  } catch(error) {
      console.log(error)
  }
}


