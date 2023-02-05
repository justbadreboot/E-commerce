import { MdDelete } from "react-icons/md"
import { useState, useEffect } from "react";
import { useGetProductByIdQuery } from '../../store/serverApi'
import { deleteCartItem, updateCartQuantity } from "../../helpers/cartActions";
import Swal from "sweetalert2";

const CartItem =({item}) =>{
    const {data: producto, isSuccess} = useGetProductByIdQuery(item.id);

    const [count, setCount] = useState(0)
    const [price,setPrice] = useState(item.precio*item.cantidad)

    useEffect(()=>{
        setCount(item.cantidad)
        setPrice((item.precio * count).toFixed(2))
    },[item.cantidad, item.precio,count])

    const handleDelete = (email,id) =>{
        Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás revertir esta acción",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Continuar',
            cancelButtonText:'Cancelar',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed)
                deleteCartItem(email,id)
          })
    }

    const handleOnChange = (e) =>{
        let val = parseInt(e.target.value)
        setCount(val)
        updateCartQuantity('dani', producto.id, val , item.precio)
    }

    const decrementClick=()=>{
        let cant = parseInt(count) 
        if(cant > 1){
            setCount(cant - 1)
            updateCartQuantity('dani', producto.id, cant -1, item.precio)
        }
    }

    const incrementClick=()=>{
        let cant = parseInt(count) 
        if(cant < producto.stock){
            setCount(cant + 1)
            updateCartQuantity('dani', producto.id, cant +1 , item.precio)
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
                            <span className="text-md font-base">${(producto.pvp).toFixed(2)}</span>
                        </div>
                        <div className="pr-4">
                            <span className="text-md font-base">${price}</span>
                        </div>
                        <button onClick={()=>handleDelete('dani',producto.id)} className="px-4">
                            <MdDelete className="h-5 w-5 text-red-500" />
                        </button>
                    </div>
                </>
            )}
        </div>
    )

}
export default CartItem;