const PriceSummary =({envio,total,subtotal}) =>{
    return(
        <>
            <div className="mt-6 border-t border-b py-4">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-500">Subtotal</p>
                    <p className="font-semibold text-gray-600">${subtotal}</p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-500">Envío</p>
                    <p className="font-semibold text-gray-600">${envio}</p>
                </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-900">Total</p>
                <p className="text-lg font-semibold text-gray-900">${total}</p>
            </div>  
        </> 
    )
}
export default PriceSummary;