import {doc, setDoc, getDoc,getDocs, deleteDoc, updateDoc, addDoc,collection} from 'firebase/firestore'
import firestore from "./firebaseConfig"

const collectionName = "cart "
const docId = "Id Producto "

export const addToCart = async(email, id_producto, cantidad) =>{
  try{
    const cartRef = doc(firestore, collectionName + email, docId + id_producto)
    const docSnap = await getDoc(cartRef);
    if (docSnap.exists()) {
      //ya existe el producto se debe aumentar la cantidad
      const cantAnt = docSnap.data().cantidad
      await updateDoc(cartRef, {
        cantidad: cantAnt + cantidad
      });
    } else {
      //agregar nuevo producto
      await setDoc( cartRef, {
        cantidad: cantidad
      });
    }
  }catch(error){
    console.log(error)
  }
  /*try{
    const item = {
      cantidad: cantidad,
      id_producto: item_id
    }
    const cartRef = doc(firestore, collectionName, email)
    const cartSnap = await getDoc(cartRef) 
    if(cartSnap.exists){
      console.log("Carrito existe")
      const cartItems = cartSnap.data()
      if(cartItems){
        console.log("Ya tiene items")
        //verificar si ya existe el item en el carrito
        cartItems.items.forEach(async i => {
          if(i.id_producto == item.id_producto){
            console.log("aumenta cantidad")
            console.log(i.cantidad)
            i.cantidad+=1;
            console.log(i.cantidad)
          }else{
            await updateDoc(cartRef, {
              items: arrayUnion(item)
            });
          }
        });
      }else{
        console.log("No tiene items")
        await setDoc(cartRef, {
          items: arrayUnion(item)
        });
      }
    }else{
      console.log("carrito no existe")
      try {
        await setDoc(doc(firestore,collectionName, email), item);
      } catch (e) {
        console.error("Error al agregar un nuevo carrito: ", e);
      }
    }
  }catch(error){
    console.log(error)
  }*/
}

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

export const updateCartQuantity = async (email) => {
 
}


