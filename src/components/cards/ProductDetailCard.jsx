import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../store/serverApi";
import { useEffect, useState } from "react";
import { addToCart} from "../../helpers/cartActions";
import Swal from "sweetalert2";
import Loader from "../../components/main/Loader"
import RelatedProducts from "../RelatedProducts";
import {HiArrowUturnLeft} from "react-icons/hi2";
import { useSelector } from "react-redux";

const ProductDetail=()=>{

    const navigate = useNavigate()
    const params = useParams();
    const {data: detalles, isLoading, isFetching, isSuccess} = useGetProductByIdQuery(params.id)
    
    const [count, setCount] = useState(1)
    const [precio, setPrecio] = useState(0)
    const user = useSelector((state) => state.users.currentUser);

    useEffect(()=>{
        setDiscount()
    })

    const setDiscount =()=>{
       let temp = 0
        if(isSuccess){
            if(detalles.porcentajeDescuento !== null){
                temp = detalles.pvp - (detalles.pvp * (detalles.porcentajeDescuento)/100)
                temp = parseFloat(temp)
                setPrecio(temp.toFixed(2))
            }else
                setPrecio((detalles.pvp).toFixed(2))
        }
        
    }

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

    const handleOnChange = (e) =>{
        let val = parseInt(e.target.value)
        setCount(val)
    }

    const decrementClick=()=>{
        if(count > 1)
            setCount(parseInt(count) - 1)
    }

    const incrementClick=()=>{
        if(count < detalles.stock)
            setCount(parseInt(count) + 1)
    }
    
    const handleOnClick =(user,id,cant,precio,nombre)=>{
        if(user){
            if(parseInt(cant) <= detalles.stock && parseInt(cant) > 0)
                addToCart(user,id,cant,precio,nombre)
            else
                Toast.fire({ icon: 'error', title: 'Cantidad fuera de stock',background:'#FFDADA'})
        }else
            navigate("/login")
        
    }

    const handleOnCheckout =(user,id,cant,precio,nombre) =>{
        if(user){
            if(parseInt(cant) <= detalles.stock && parseInt(cant) > 0){
                addToCart(user,id,cant,precio,nombre)
                navigate("/checkout")
            }else
                Toast.fire({ icon: 'error', title: 'Cantidad fuera de stock',background:'#FFDADA'})
        }else
            navigate("/login")
        
    }

    return(
        <>
            <div className="bg-white py-6 sm:py-8">
                <div className=" font-poppins ml-10 md:ml-14 mb-6">
                    <Link to="/productos" className="text-sm inline-flex">
                        <HiArrowUturnLeft className="w-4 h-4 mr-2" />Regresar
                    </Link>
                </div>
                <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
                    {(isFetching || isLoading) && <Loader />}
                    {isSuccess && (
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="bg-gray-100 rounded-lg overflow-hidden relative">
                                    <img src={detalles.image} loading="lazy" alt={detalles.name} className="w-full h-96 object-cover object-center" />
                                    {detalles.porcentajeDescuento !== null && (
                                        <span className="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">{detalles.porcentajeDescuento}% off</span>
                                    )}
                                </div>
                            </div>
                            <div className="md:py-4">
                                <div className="mb-2 md:mb-3">
                                    <span className="inline-block text-gray-500 mb-0.5">{detalles.brand}</span>
                                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">{detalles.name}</h2>
                                </div>
                                <div className="flex items-center mb-6 md:mb-4">
                                    <div className="rating rating-sm flex gap-0.5 -ml-1">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400"  />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                    </div>
                                    <span className="text-gray-500 text-sm ml-2">{detalles.rate}</span>
                                </div>
                                <div className="mt-8 mb-6 md:mb-8 lg:mt-4">
                                    <div className="text-gray-800 text-lg font-semibold mb-3">Descripci??n</div>
                                    <p className="text-gray-500">{detalles.description}</p>
                                </div>
                                <div className="mb-4">
                                    <div className="flex items-end gap-2">
                                        {detalles.porcentajeDescuento !== null ? (
                                            <>
                                                <span className="text-gray-800 text-xl md:text-2xl font-bold">
                                                    ${precio}
                                                </span>
                                                <span className="text-red-500 text-lg line-through mb-0.5">${(detalles.pvp).toFixed(2)}</span>
                                            </>
                                        ) : (
                                            <span className="text-gray-800 text-xl md:text-2xl font-bold">${precio}</span>
                                        )}
                                    </div>
                                </div>
                                <div className={`flex mb-4 ${!user ? "hidden" : 'block'}`}>
                                    <div className="flex flex-row h-8 w-36 rounded-lg relative bg-transparent mt-1">
                                        <button onClick={decrementClick} className=" bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                            <span className="m-auto text-xl font-thin">???</span>
                                        </button>
                                        <input type="number" min={1} max={detalles.stock} className="focus:outline-none text-center w-full bg-gray-200 font-semibold text-sm hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 outline-none" value={count} onChange={handleOnChange}  />
                                        <button onClick={incrementClick} className="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                            <span className="m-auto text-xl font-thin">+</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center text-gray-500 gap-2 mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                    </svg>
                                    <span className="text-sm">2-4 d??as de env??o</span>
                                </div>
                                <div className="flex gap-2.5">
                                    <button onClick={()=> handleOnClick(user,detalles.id,count,precio, detalles.name)} className="inline-block flex-1 sm:flex-none bg-warning-100 hover:bg-warning-60 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">A??adir al carrito</button>

                                    <button onClick={()=> handleOnCheckout(user,detalles.id,count,precio, detalles.name)} className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3">
                                        Comprar ahora
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {isSuccess && (
                <RelatedProducts id={detalles.category.id} />
            )}
        </>
        
    )
}

export default ProductDetail;