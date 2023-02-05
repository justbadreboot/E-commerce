import {doc, setDoc, getDoc, getDocs, deleteDoc, updateDoc, collection} from 'firebase/firestore'
import firestore from "./firebaseConfig"
import {  toast } from 'react-toastify'

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
    toast.success('Producto añadido al carrito')
  }catch(error){
    console.log(error)
    toast.error('Ocurrió un error al agregar. Intente de nuevo')
  }
}

export const updateCartQuantity = async (email,id_producto,cantidad) => {
  try{
    const cartRef = doc(firestore, collectionName + email, docId + id_producto)
      await updateDoc(cartRef, {
        cantidad: cantidad
      });
  }catch(error){
    console.log(error)
  }
}

export const deleteCartItem = async(email, id_producto) => {
  try{
    await deleteDoc(doc(firestore, collectionName + email, docId + id_producto ))
    toast.success("Producto eliminado con éxito")
  }catch(error){
    console.log(error)
    toast.error('Ocurrió un error al agregar. Intente de nuevo')
  }
}

export const getItemsCount = async (email) =>{
  try { 
    let cartCount = 0
    const items = await getDocs(collection(firestore, collectionName + email));
    items.forEach((doc) => {
      cartCount += doc.data().cantidad
    });
    return cartCount
  } catch(error) {
      console.log(error)
  }
}