import { Link } from "react-router-dom";
import CartItem from "./checkout/CartItem";
import {BsArrowLeft} from "react-icons/bs"
import { addToCart, getCartItems } from "../helpers/cartActions";
import { useEffect, useState } from "react";


const Cart =()=>{
    const [cartItems, setCartItems] = useState([])

    useEffect ( ()=>{
        getCartItems('dani')
        //addToCart('jane', 101,2)
    },[])

    const productos=[
        {
            id:1,
            nombre:"Chicken momo",
            marca:'food',
            precio:10.5,
            cantidad:4,
            img:"https://i.imgur.com/EEguU02.jpg",
        },
        {
            id:2,
            nombre:"Chicken momo",
            marca:'food',
            precio:10.5,
            cantidad:2,
            img:"https://i.imgur.com/EEguU02.jpg",
        },
        {
            id:3,
            nombre:"Chicken momo",
            marca:'food',
            precio:10.5,
            cantidad:2,
            img:"https://i.imgur.com/EEguU02.jpg",
        },
    ]
    
    return(
        <div className="pt-12 font-poppins">
            <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-7xl">
                <div className="sm:flex ">
                    <div className="w-full p-4 px-2 md:px-4 py-4">
                        <div className="md:grid md:grid-cols-3 gap-2 ">
                            <div className="col-span-2 p-5">
                                <div className="flex justify-between">
                                    <h1 className="text-xl font-medium ">Carrito de Compras</h1>
                                    <h2 className="mr-8 text-md">Total Items: <span>8</span></h2>
                                </div>
                                {productos.map(producto =>(
                                    <CartItem producto={producto} key={producto.id} />
                                ))}
                                <div className="flex justify-between items-center mt-12 pt-6 border-t"> 
                                    <Link to="/productos" className="flex items-center">
                                        <BsArrowLeft className="text-blue-500" />
                                        <span className="text-md ml-4 font-medium text-blue-500">Seguir Comprando</span>
                                    </Link>
                                    <div className="flex justify-center items-end">
                                        <span className="text-sm font-medium text-gray-400 mr-1">Subtotal:</span>
                                        <span className="text-md font-bold text-gray-800 "> $24.90</span>
                                    </div>
                                </div>
                            </div>
                            <div className=" p-5 bg-gray-200 rounded overflow-visible">
                                <div className="flex flex-col md:h-full px-14 py-6 justify-between overflow-y-auto">
                                    <div>
                                        <p className="text-2xl font-semibold leading-9 text-gray-800">Resumen de Compra</p>
                                        <div className="flex items-center justify-between pt-12">
                                            <p className="text-base leading-none text-gray-800">Subtotal</p>
                                            <p className="text-base leading-none text-gray-800">$9,000</p>
                                        </div>
                                        <div className="flex items-center justify-between pt-5">
                                            <p className="text-base leading-none text-gray-800">Envío</p>
                                            <p className="text-base leading-none text-gray-800">$30</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                            <p className="text-lg font-bold text-gray-800">Total</p>
                                            <p className="text-lg font-bold leading-normal text-right text-gray-800">$10,240</p>
                                        </div>
                                        <Link to='/checkout'>
                                            <button  className="rounded-md text-base leading-none w-full py-5 bg-primary-60 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                                Checkout
                                            </button>
                                        </Link>
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