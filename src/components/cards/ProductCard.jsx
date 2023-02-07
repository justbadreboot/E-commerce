import { Link} from 'react-router-dom';
import { addToCart } from '../../helpers/cartActions';

const ProductCard = ({product}) =>{

    return(
        <article className="rounded-lg bg-gray-100 p-4 shadow-lg hover:shadow-xl">
            <div className="relative flex items-end overflow-hidden rounded-xl">
                <Link to={`/producto/${product.id}`}>
                    <img src={product.image} alt={product.name}  />
                    <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-slate-400 ml-1 text-sm">{product.rate}</span>
                    </div>
                </Link>
            </div>
            <div className="mt-1 p-2">
                <h2 className="text-ternary-60 text-md capitalize font-semibold">{product.name}</h2>  
                <div className="mt-1 flex items-end justify-between">
                    <p><span className="text-lg font-bold text-info-80">${product.pvp}</span> </p>
                    <div className="tooltip" data-tip="Añadir al carrito">
                        <button onClick={()=> addToCart('dani',product.id,1, product.pvp, product.name)} className=" gap-2 group inline-flex rounded-xl bg-warning-100 p-2 hover:bg-orange-20">
                            <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:text-orange-400 h-5 w-5 text-orange-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )

}

export default ProductCard;