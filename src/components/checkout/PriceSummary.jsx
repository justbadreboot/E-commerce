const PriceSummary =() =>{
    return(
        <>
            <div className="mt-8 border-t border-b py-4">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-500">Subtotal</p>
                    <p className="font-semibold text-gray-600">$399.00</p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-500">Envío</p>
                    <p className="font-semibold text-gray-600">$8.00</p>
                </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-900">Total</p>
                <p className="text-lg font-semibold text-gray-900">$408.00</p>
            </div>  
        </> 
    )
}
export default PriceSummary;