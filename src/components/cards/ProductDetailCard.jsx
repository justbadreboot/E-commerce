import { Link } from "react-router-dom";

const ProductDetail=()=>{
    const detalles ={
        marca:'Fancy Brand',
        nombre:'Pullover with pattern',
        descripcion:'This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.',
        precio:15.00,
        rate:4.2,
        img:"https://images.unsplash.com/flagged/photo-1571366992942-be878c7b10c0?auto=format&q=75&fit=crop&w=600"
    }
    return(
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="bg-gray-100 rounded-lg overflow-hidden relative">
                            <img src={detalles.img} loading="lazy" alt={detalles.nombre} className="w-full h-96 object-cover object-center" />
                            <span className="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">sale</span>
                        </div>
                    </div>
                    <div className="md:py-4">
                        <div className="mb-2 md:mb-3">
                            <span className="inline-block text-gray-500 mb-0.5">{detalles.marca}</span>
                            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">{detalles.nombre}</h2>
                        </div>
                        <div className="flex items-center mb-6 md:mb-4">
                            <div className="rating rating-sm flex gap-0.5 -ml-1">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                            </div>
                            <span className="text-gray-500 text-sm ml-2">{detalles.rate}</span>
                        </div>
                        <div className="mt-8 mb-6 md:mb-8 lg:mt-4">
                            <div className="text-gray-800 text-lg font-semibold mb-3">Descripción</div>
                            <p className="text-gray-500">{detalles.descripcion}</p>
                        </div>
                        <div className="mb-4">
                            <div className="flex items-end gap-2">
                                <span className="text-gray-800 text-xl md:text-2xl font-bold">${detalles.precio}</span>
                                <span className="text-red-500 line-through mb-0.5">$30.00</span>
                            </div>
                        </div>
                        <div className="flex items-center text-gray-500 gap-2 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                            </svg>
                            <span className="text-sm">2-4 días de envío</span>
                        </div>
                        <div className="flex gap-2.5">
                            <button className="inline-block flex-1 sm:flex-none bg-warning-100 hover:bg-warning-60 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Añadir al carrito</button>

                            <Link to="" className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3">
                                Comprar ahora
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;