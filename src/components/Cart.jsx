import { Link } from "react-router-dom";
import CartItem from "./checkout/CartItem";
import {BsArrowLeft} from "react-icons/bs"
import { useEffect, useState } from "react";
import firestore from "../helpers/firebaseConfig";
import { collection,onSnapshot } from "firebase/firestore";
import carrito from "../assets/img/carrito.png"
import { useSelector } from "react-redux";

const Cart =()=>{
    const [cartItems, setCartItems] = useState([])
    const [total,setTotal] = useState(0)
    const [subtotal, setSubtotal] = useState(0)
    const [count, setCount] = useState(0)

    const user = useSelector((state) => state.users.currentUser);
    const collectionName =  'cart '+ user

    useEffect ( ()=>{
        const getItems = onSnapshot(collection(firestore,collectionName), snapshot =>{
            setCartItems(snapshot.docs.map(doc => 
                ({id: parseInt(doc.id.substring(12)), cantidad: doc.data().cantidad, precio: doc.data().precio})
            ))
            let items = 0
            let subtotal = 0
            snapshot.docs.map(doc => 
                items += doc.data().cantidad,
            )
            setCount(items)
            snapshot.docs.map(doc => 
                subtotal += (doc.data().cantidad * doc.data().precio)
            )
            setSubtotal(subtotal.toFixed(2))
            setTotal(subtotal.toFixed(2))
        },(error) => {
            console.log(error)
        })
        return () =>{
            if(user)
                getItems()
        }
        
    },[collectionName,user])
    

    return(
        <div className="pt-12 font-poppins">
            <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-7xl">
                <div className="sm:flex ">
                    <div className="w-full p-4 px-2 md:px-4 py-4">
                        <div className="md:grid md:grid-cols-3 gap-2 ">
                            <div className="col-span-2 p-5">
                                <div className="flex justify-between">
                                    <h1 className="text-lg sm:text-xl font-medium ">Carrito de Compras</h1>
                                    <h2 className="mr-8 text-md">Total Items: <span>{count}</span></h2>
                                </div>
                                {cartItems.length!==0 ? (
                                    <div className="md:overflow-y-auto overflow-x-hidden md:h-80">
                                        {cartItems.map(item =>(
                                            <CartItem item={item} key={item.id}  />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="mt-6 flex justify-center">
                                        <div>
                                            <h4 className="text-gray-600 font-semibold">Carrito vacío</h4>
                                            <img src={carrito} alt="carrito" className="w-32 h-32" />
                                        </div>
                                    </div>
                                )}
                                
                                <div className="flex justify-between items-center mt-12 pt-6 border-t"> 
                                    <Link to="/productos" className="flex items-center">
                                        <BsArrowLeft className="text-blue-500" />
                                        <span className="text-md ml-4 font-medium text-blue-500">Seguir Comprando</span>
                                    </Link>
                                    <div className="flex justify-center items-end">
                                        <span className="text-sm font-medium text-gray-400 mr-1">Subtotal:</span>
                                        <span className="text-md font-bold text-gray-800 "> ${subtotal}</span>
                                    </div>
                                </div>
                            </div>
                            <div className=" p-5 bg-gray-200 rounded overflow-visible">
                                <div className="flex flex-col md:h-full px-14 py-6 sm:px-4 md:py-14 justify-between overflow-y-auto">
                                    <div>
                                        <p className="text-2xl font-semibold leading-9 text-gray-800">Resumen de Compra</p>
                                        <div className="flex items-center justify-between pt-12">
                                            <p className="text-base leading-none text-gray-900">Subtotal</p>
                                            <p className="text-base leading-none text-gray-500">${subtotal}</p>
                                        </div>
                                        <div className="flex items-center justify-between pt-5">
                                            <p className="text-base leading-none text-gray-900">Envío</p>
                                            <p className="text-base leading-none text-gray-500">A calcular</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                            <p className="text-lg font-bold text-gray-800">Total</p>
                                            <p className="text-lg font-bold leading-normal text-right text-gray-800">${total}</p>
                                        </div>
                                        {cartItems.length !== 0 && (
                                            <Link to='/checkout'>
                                                <button  className="rounded-md text-base leading-none w-full py-5 bg-primary-60 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                                    Checkout
                                                </button>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Cart;