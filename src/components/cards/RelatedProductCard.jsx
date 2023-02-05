const RelatedProductCard =({product})=>{
    return(
        <div key={product.id} className="col-span-1 relative py-4 md:py-6 px-5 shadow-sm rounded border border-gray-200 bg-white overflow-hidden hover:shadow-lg font-poppins">
            <div className="grid grid-cols-2">
                <div className="relative z-10 flex flex-col items-start space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wide text-success-80">{product.brand}</span>
                    <h3 className="text-base lg:text-md text-gray-700 font-semibold">{product.name}</h3>
                    <p className="lg:block w-2/3 text-sm font-bold text-info-100">${product.pvp}</p>    
                </div>
                <div>
                    <img src={product.image} alt="" className="flex items-center opacity-80 lg:opacity-100" />
                </div>
            </div>
            <a href={product.href} className={`bg-green-500 py-2 px-5 rounded-lg border-2 border-gray-200 text-xs text-white font-semibold hover:text-white hover:border-transparent`}>Añadir al carrito</a>
        </div>
    )

}
export default RelatedProductCard;