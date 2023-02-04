import { async } from '@firebase/util'
import {doc, setDoc, getDoc, getDocs, deleteDoc, updateDoc, collection} from 'firebase/firestore'
import firestore from "./firebaseConfig"

const collectionName = "cart "
const docId = "Id Producto "

export const getCartItems = async(email) => {
  try { 
    const cartItems = []
    const items = await getDocs(collection(firestore, collectionName + email));
    items.forEach((doc) => {
      const item={
        id: parseInt(doc.id.substring(12)),
        cantidad: doc.data().cantidad
      }
      cartItems.push(item)
    });
    return cartItems
  } catch(error) {
      console.log(error)
  }
} 

export const addToCart = async(email, id_producto, cantidad) => {
  try{
    const cartRef = doc(firestore, collectionName + email, docId + id_producto)
    const docSnap = await getDoc(cartRef);
    if (docSnap.exists()) {
      const cantAnt = docSnap.data().cantidad
      await updateDoc(cartRef, {
        cantidad: cantAnt + cantidad
      });
    } else {
      await setDoc( cartRef, {
        cantidad: cantidad
      });
    }
  }catch(error){
    console.log(error)
  }
}

export const updateCartQuantity = async (email,id_producto,cantidad) => {
  try{
    const cartRef = doc(firestore, collectionName + email, docId + id_producto)
    const docSnap = await getDoc(cartRef);
    const cantAnt = docSnap.data().cantidad
      await updateDoc(cartRef, {
        cantidad: cantAnt + cantidad
      });
  }catch(error){
    console.log(error)
  }
}

export const deleteCartItem = async(email, id_producto) => {
  try{
    await deleteDoc(doc(firestore, collectionName + email, docId + id_producto ))
  }catch(error){
    console.log(error)
  }
}

export const getTotalItems = async (email) =>{
  try { 
    const cartItems = []
    const items = await getDocs(collection(firestore, collectionName + email));
    items.forEach((doc) => {
      cartItems.push(doc)
    });
    console.log(cartItems.length)
    return cartItems.length
  } catch(error) {
      console.log(error)
  }
}