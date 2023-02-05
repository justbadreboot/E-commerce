import {doc, setDoc, getDoc, deleteDoc, updateDoc} from 'firebase/firestore'
import firestore from "./firebaseConfig"
import { toast } from 'react-toastify'

const collectionName = "cart "
const docId = "Id Producto "

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

export const deleteCartItem = (email, id_producto) => {
  try{
    deleteDoc(doc(firestore, collectionName + email, docId + id_producto ))
    toast.success("Producto eliminado con éxito")
  }catch(error){
    console.log(error)
    toast.error('Ocurrió un error al agregar. Intente de nuevo')
  }
}