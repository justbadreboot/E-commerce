import {doc, setDoc, getDoc, deleteDoc, updateDoc} from 'firebase/firestore'
import firestore from "./firebaseConfig"
import Swal from 'sweetalert2'

const collectionName = "cart "
const docId = "Id Producto "
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export const addToCart = async(email, id_producto, cantidad, precio, nombre) => {
  try{
    const cartRef = doc(firestore, collectionName + email, docId + id_producto)
    const docSnap = await getDoc(cartRef);
    if (docSnap.exists()) {
      const cantAnt = docSnap.data().cantidad
      await updateDoc(cartRef, {
        nombre: nombre,
        cantidad: cantAnt + cantidad,
        precio: precio
      });
    } else {
      await setDoc( cartRef, {
        nombre:nombre,
        cantidad: cantidad,
        precio: precio
      });
    }
    Toast.fire({ icon: 'success', title: 'Producto añadido al carrito',background:'#D3FDDD'})
  }catch(error){
    console.log(error)
    Toast.fire({ icon: 'error', title: 'Error. Intente de nuevo',background:'#FFDADA'})
  }
}
export const updateCartQuantity = async (email,id_producto,cantidad,precio, nombre) => {
  try{
    const cartRef = doc(firestore, collectionName + email, docId + id_producto)
      await updateDoc(cartRef, {
        nombre: nombre,
        cantidad: cantidad,
        precio:precio
      });
  }catch(error){
    console.log(error)
  }
}

export const deleteCartItem = (email, id_producto) => {
  try{
    deleteDoc(doc(firestore, collectionName + email, docId + id_producto ))
  }catch(error){
    console.log(error)
    Toast.fire({ icon: 'error', title: 'Ocurrió un error. Intente de nuevo', background:'#FFDADA' })
  }
}