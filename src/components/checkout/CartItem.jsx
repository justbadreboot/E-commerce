import { MdDelete } from "react-icons/md"
import { useState, useEffect } from "react";
import { useGetProductByIdQuery } from '../../store/serverApi'
import { deleteCartItem, updateCartQuantity } from "../../helpers/cartActions";

const CartItem =({item}) =>{
    const {data: producto, isSuccess} = useGetProductByIdQuery(item.id);

    const [count, setCount] = useState(0)

    useEffect(()=>{
        setCount(item.cantidad)
    },[item.cantidad])

    const handleOnChange = (e) =>{
        setCount(e.target.value)
        //updateCartQuantity('dani', producto.id, parseInt(count))
    }

    const decrementClick=()=>{
        let cant = parseInt(count) 
        if(cant > 1){
            setCount(cant - 1)
            updateCartQuantity('dani', producto.id, cant -1)
        }
    }

    const incrementClick=()=>{
        let cant = parseInt(count) 
        if(cant < producto.stock){
            setCount(cant + 1)
            updateCartQuantity('dani', producto.id, cant +1 )
        }
    }

    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center mt-5 pt-5 border-t font-poppins">
            {isSuccess && (
                <>
                    <div className="flex items-center ">
                        <img src={producto.image} width="60" className="rounded-md" alt={producto.name} />
                        <div className="flex flex-col ml-3">
                            <span className="md:text-md font-medium">{producto.name}</span>
                            <span className="text-xs font-light text-gray-400">{producto.brand}</span>
                        </div>
                    </div>
                    <div className="flex mt-6 md:mt-0 justify-center items-center">
                        <div className="flex px-6 ">
                            <div className="flex flex-row h-8 w-36 rounded-lg relative bg-transparent mt-1">
                                <button onClick={decrementClick} className=" bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span className="m-auto text-xl font-thin">−</span>
                                </button>
                                <input type="number" min={1} max={producto.stock} className="focus:outline-none text-center w-full bg-gray-200 font-semibold text-sm hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 outline-none" value={count} onChange={handleOnChange}  />
                                <button onClick={incrementClick} className="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span className="m-auto text-xl font-thin">+</span>
                                </button>
                            </div>
                        </div>
                        <div className="pr-4">
                            <span className="text-md font-base">${producto.pvp}</span>
                        </div>
                        <div className="pr-4">
                            <span className="text-md font-base">${(producto.pvp * count).toFixed(2)}</span>
                        </div>
                        <button onClick={()=> deleteCartItem("dani", item.id)} className="px-4">
                            <MdDelete className="h-5 w-5 text-red-500" />
                        </button>
                    </div>
                </>
            )}
        </div>
    )

}
export default CartItem;