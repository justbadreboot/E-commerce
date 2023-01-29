import {MdDelete} from "react-icons/md"
import { useState, useEffect } from "react";

const CartItem =({producto}) =>{
    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        setCount(producto.cantidad)
    },[producto.cantidad])
    const handleOnChange = (e) =>{
        setCount(e.target.value);
    }
    const decrementClick=()=>{
        setCount(count - 1)
    }
    const incrementClick=()=>{
        setCount(count + 1)
    }

    return(
        <div class="flex justify-between items-center mt-6 pt-6 border-t">
            <div class="flex items-center">
                <img src={producto.img} width="60" class="rounded-full" alt={producto.nombre} />
                <div class="flex flex-col ml-3">
                    <span class="md:text-md font-medium">{producto.nombre}</span>
                    <span class="text-xs font-light text-gray-400">{producto.marca}</span>
                </div>
            </div>
            <div class="flex justify-center items-center">
                <div class="flex px-6 ">
                    <div class="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1">
                        <button onClick={decrementClick} class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                            <span class="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input type="number" min={1} class="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 outline-none" value={count} onChange={handleOnChange}  />
                        <button onClick={incrementClick} class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                            <span class="m-auto text-2xl font-thin">+</span>
                        </button>
                    </div>
                </div>
                <div class="pr-4">
                    <span class="text-sm font-base">${producto.precio}</span>
                </div>
                <div>
                    <MdDelete class="text-red-500"/>
                </div>
            </div>
        </div>
    )

}
export default CartItem;