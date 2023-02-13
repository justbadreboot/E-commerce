import { addToCart } from '../../helpers/cartActions';
import { Link, useNavigate, } from 'react-router-dom';
import { useEffect, useState } from 'react';

const RelatedProductCard =({product})=>{
    
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('currentUser'))
    const [precio, setPrecio] = useState(0)
    
    useEffect(()=>{
        setDiscount()
    })

    const setDiscount =()=>{
       let temp = 0 
       if(product.porcentajeDescuento !== null){
            temp = product.pvp - (product.pvp * (product.porcentajeDescuento)/100)
            temp = parseFloat(temp)
            setPrecio(temp.toFixed(2))
        }else
            setPrecio((product.pvp).toFixed(2))
    }
    
    const handleOnClick =(user,id,cant,precio,nombre)=>{
        if(user)
            addToCart(user,id,cant,precio,nombre)
        else
            navigate("/login")
    }

    return(
        <div key={product.id} className="col-span-1 relative py-4 md:py-5 px-5 shadow-sm rounded border border-gray-200 bg-white overflow-hidden hover:shadow-lg font-poppins">
            <div className="grid grid-cols-2">
                <div className="relative z-10 flex flex-col items-start space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wide text-success-80">{product.brand}</span>
                    <h3 className="text-base lg:text-md text-gray-700 font-semibold">{product.name}</h3>
                    {product.porcentajeDescuento !== null ? (
                        <>
                            <div className='flex'>
                                <span className="lg:block w-2/3 text-sm font-bold text-info-100">
                                    ${precio}
                                </span>
                                <span className="text-red-500 text-xs line-through mt-0.5 ml-2">${(product.pvp).toFixed(2)}</span>   
                            </div>
                        </>
                    ) : (
                        <span className="lg:block w-2/3 text-sm font-bold text-info-100">${precio}</span>
                    )} 
                </div>
                <div>
                    <Link to={`/producto/${product.id}`}>
                        <img src={product.image} alt="producto" className="flex items-center opacity-80 lg:opacity-100" />
                        {product.porcentajeDescuento !== null && (
                        <span className="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute right-0 top-0 px-3 py-1.5">{product.porcentajeDescuento}% off</span>
                    )}
                    </Link>
                </div>
            </div>
            <button onClick={()=> handleOnClick(user,product.id,1, precio, product.name)} className={`bg-green-500 py-2 px-4 rounded-lg border-2 border-gray-200 text-xs text-white font-semibold hover:text-white hover:border-transparent`}>
                Añadir al carrito
            </button>
        </div>
    )

}
export default RelatedProductCard;