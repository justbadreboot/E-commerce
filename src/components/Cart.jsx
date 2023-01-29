import { Link } from "react-router-dom";

const Cart =()=>{
    return(
        <div class="h-screen">
            <div class="py-12">
                <div class="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-6xl">
                    <div class="md:flex ">
                        <div class="w-full p-4 px-5 py-5">
                            <div class="md:grid md:grid-cols-3 gap-2 ">
                                <div class="col-span-2 p-5">
                                    <h1 class="text-xl font-medium ">Shopping Cart</h1>
                                    <div class="flex justify-between items-center mt-6 pt-6">
                                        <div class="flex  items-center">
                                            <img src="https://i.imgur.com/EEguU02.jpg" width="60" class="rounded-full" alt=""/>
                                            <div class="flex flex-col ml-3">
                                                <span class="md:text-md font-medium">Chicken momo</span>
                                                <span class="text-xs font-light text-gray-400">#41551</span>
                                            </div>
                                        </div>
                                        <div class="flex justify-center items-center">
                                            <div class="pr-8 flex ">
                                                <span class="font-semibold">-</span>
                                                <input type="text" class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="1"/>
                                                <span class="font-semibold">+</span>
                                            </div>
                                            <div class="pr-8 ">
                                                <span class="text-xs font-medium">$10.50</span>
                                            </div>
                                            <div>
                                                <i class="fa fa-close text-xs font-medium"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center pt-6 mt-6 border-t">
                                        <div class="flex  items-center">
                                            <img src="https://i.imgur.com/Uv2Yqzo.jpg" width="60" class="rounded-full" alt=""/>
                                            <div class="flex flex-col ml-3 ">
                                                <span class="text-md font-medium w-auto">Spicy Mexican potatoes</span>
                                                <span class="text-xs font-light text-gray-400">#66999</span>
                                            </div>
                                        </div>
                                        <div class="flex justify-center items-center">
                                            <div class="pr-8 flex">
                                                <span class="font-semibold">-</span>
                                                <input type="text" class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="1"/>
                                                <span class="font-semibold">+</span>
                                            </div>
                                            <div class="pr-8">
                                                
                                                <span class="text-xs font-medium">$10.50</span>
                                            </div>
                                            <div>
                                                <i class="fa fa-close text-xs font-medium"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center mt-12 pt-6 border-t"> 
                                        <div class="flex items-center">
                                            <i class="fa fa-arrow-left text-sm pr-2"></i>
                                            <span class="text-md  font-medium text-blue-500">Continue Shopping</span>
                                        </div>
                                        <div class="flex justify-center items-end">
                                            <span class="text-sm font-medium text-gray-400 mr-1">Subtotal:</span>
                                            <span class="text-lg font-bold text-gray-800 "> $24.90</span>
                                        </div>
                                    </div>
                                </div>
                                <div class=" p-5 bg-gray-300 rounded overflow-visible">
                                    <span class="text-xl font-medium text-gray-100 block pb-3">Card Details</span>
                                    <Link to='/checkout'>
                                        <button class="h-12 w-full bg-primary-80 rounded focus:outline-none text-white hover:bg-blue-600">Checkout</button>
                                    </Link>
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