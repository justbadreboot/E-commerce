import Methods from '../checkout/Methods';

const Payment = ()=>{

    return(
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 font-poppins">
            <p className="text-xl font-medium">Datos de Pago</p>
            <p className="text-gray-400 mt-2">Llene los datos para completar su orden</p>
            <Methods />
            <div>
                <label className="mt-4 mb-2 block text-sm font-medium">Titular de la tarjeta</label>
                <div className="relative">
                    <input type="text" id="card-holder" name="card-holder" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Nombre Completo" />
                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                        </svg>
                    </div>
                </div>
                <label className="mt-4 mb-2 block text-sm font-medium">Número de la tarjeta</label>
                        <div className="relative flex-shrink-0">
                            <input type="text" className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                                </svg>
                            </div>
                        </div>
                <div className='grid grid-cols-1 md:grid-cols-3'>    
                    <div className='form-control max-w-xs mt-1'>
                        <label className="mt-4 mb-2 block text-sm font-medium">Fecha Venc.</label>
                        <input type="text" name="credit-expiry" className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM" />
                    </div>
                    <div className='form-control ml-2 max-w-xs mt-1'>
                    <label className="mt-4 mb-2 block text-sm font-medium">Year</label>
                        <input type="text" name="credit-expiry" className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="YY" />
                    </div>
                    <div className='form-control max-w-xs mt-1 ml-2'>
                        <label className="mt-4 mb-2 block text-sm font-medium">CVV</label>
                        <input type="text" name="credit-cvc" className="w-full flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVC" />
                    </div>
                </div>
            
                <div className="mt-8 border-t border-b py-2">
                    <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-500">Subtotal</p>
                    <p className="font-semibold text-gray-900">$399.00</p>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-500">Envío</p>
                    <p className="font-semibold text-gray-900">$8.00</p>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-900">Total</p>
                    <p className="text-2xl font-semibold text-gray-900">$408.00</p>
                </div>
            </div>
            <button className="mt-6 mb-8 w-full rounded-md bg-primary-80 px-6 py-3 font-medium text-white">Confirmar Pago</button>
        </div>
    )
}
export default Payment;