import { Link } from "react-router-dom";
import CartItem from "./checkout/CartItem";

const Cart =()=>{
    
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
        <div class="pt-12">
            <div class="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-7xl">
                <div class="sm:flex ">
                    <div class="w-full p-4 px-2 md:px-4 py-4">
                        <div class="md:grid md:grid-cols-3 gap-2 ">
                            <div class="col-span-2 p-5">
                                <div class="flex justify-between">
                                    <h1 class="text-xl font-medium ">Carrito de Compras</h1>
                                    <h2 class="mr-8 text-md">Total Items: <span>8</span></h2>
                                </div>
                                {productos.map(producto =>(
                                    <CartItem producto={producto} />
                                ))}
                                <div class="flex justify-between items-center mt-12 pt-6 border-t"> 
                                    <div class="flex items-center">
                                        <i class="fa fa-arrow-left text-sm pr-2"></i>
                                        <span class="text-md  font-medium text-blue-500">Continue Shopping</span>
                                    </div>
                                    <div class="flex justify-center items-end">
                                        <span class="text-sm font-medium text-gray-400 mr-1">Subtotal:</span>
                                        <span class="text-md font-bold text-gray-800 "> $24.90</span>
                                    </div>
                                </div>
                            </div>
                            <div class=" p-5 bg-gray-200 rounded overflow-visible">
                                <span class="text-xl font-medium text-gray-700 block pb-3">Resumen de Compra</span>
                                
                                <Link to='/checkout'>
                                    <button class="h-12 w-full bg-primary-80 rounded focus:outline-none text-white hover:bg-blue-600">Checkout</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Cart;