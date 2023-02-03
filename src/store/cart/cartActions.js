import db from "../../helpers/firebaseConfig"

import { doc, setDoc, getDoc, deleteDoc, updateDoc } from 'firebase/firestore'

async function getCartItems(db) {
    try {
        const cartUserRef = doc(db, 'carts', "i9zBuJ8SZpcSk7ZsuFvY")
        const cartSnap = await getDoc(cartUserRef)   
        if(cartSnap.exists){
            const cartList = cartSnap.data()
            console.log(cartSnap.data());
            return cartList
        }else{
            console.log("Documento no existe")
        }
        
    } catch(error) {
        console.log(error)
    }
}

export const listCartItems = () => async (dispatch) => {
    let cartData = []
    try {
      cartData = await getCartItems(db)
      console.log("si")
      dispatch({ type: "CART_LIST_REQUEST" })
      dispatch({ type: "CART_LIST_SUCCESS", payload: cartData })
    } catch (error) {
      dispatch({
        type: "CART_LIST_FAIL",
        payload:
          error.response && error.response.data.message ? error.response.data.message : error.message
      })
    }
}

export const addProductToCart = (new_cart_item) => async (dispatch) => {
    const newCartProduct = {}
    const newItemId = 1
    try {
      dispatch({
        type: "CART_ITEM_ADD_REQUEST"
      })
  
      const cartItemRef = doc(db, 'carts', newItemId)
      const docSnap = await getDoc(cartItemRef)

      if (docSnap.exists()) {
        const existItem = docSnap.data()
        alert(existItem.title + ' already in cart')
        dispatch({
          type: "CART_ITEM_ADD_SUCCESS",
          payload: existItem
        })
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!')
        await setDoc(doc(db, 'cartItems', newItemId), {
          id: newItemId,
          title: new_cart_item.title,
          price: new_cart_item.price,
          image: new_cart_item.image,
          qtyInCart: 1
        })
        alert('Item' + new_cart_item.title + ' successfully added')
  
        dispatch({
          type: "CART_ITEM_ADD_SUCCESS",
          payload: newCartProduct
        })
      }
    } catch (error) {
      //alert('Error al agregar ' + new_cart_item.title + error)
      dispatch({
        type: "CART_ITEM_ADD_FAIL",
        payload:
          error.response && error.response.data.message ? error.response.data.message : error.message
      })
    }
  }