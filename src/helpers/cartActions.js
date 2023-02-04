import {doc, setDoc, getDoc, deleteDoc, updateDoc, addDoc, arrayUnion, arrayRemove} from 'firebase/firestore'
import firestore from "./firebaseConfig"

const collectionName = "carts";

export const addToCart = async(email, item_id,cantidad) =>{
  try{
    const item = {
      cantidad: cantidad,
      id_producto: item_id
    }
    const cartRef = doc(firestore, collectionName, email)
    
      try {
        await setDoc(doc(firestore,collectionName, email), item);
        console.log("Nuevo carrito agregado");
      } catch (e) {
        console.error("Error al agregar un carrito: ", e);
      }
   
    const cartSnap = await getDoc(cartRef) 
    if(cartSnap.exists){
      console.log("Carrito existe y tiene items")
      await updateDoc(cartRef, {
        items: arrayUnion(item)
      });
    }else{
      console.log("Carrito existe pero vacio")
      await setDoc(cartRef, {
        items: arrayUnion(item)
      });
    }
  }catch(error){
    console.log(error)
  }
}

export const getCartItems = async(email) => {
  try {
    const cartRef = doc(firestore, collectionName, email)
    const cartSnap = await getDoc(cartRef)
    if(cartSnap.exists){
      const cartItems = cartSnap.data().items;
      return cartItems
    }else{
      console.log("Documento no existe")
    }
  } catch(error) {
      console.log(error)
  }
} 

export const updateCartQuantity = async (email) => {
  const cartRef = doc(firestore, collectionName, email)
  await updateDoc(cartRef, {
    item:{cantidad:1, id_producto:2}
  });
}


