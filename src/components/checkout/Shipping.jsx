import { Link } from "react-router-dom";

const Shipping = ()=>{
    return(
        <div class="mt-4 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p class="text-xl font-medium">Datos para el Envío</p>
            <p class="text-gray-400 mt-2">Completa tu orden llenando los datos para el envío de tus productos.</p>
            <div>
                <div className="py-2">
                    <div class='grid grid-cols-1 md:grid-cols-2'>
                        <div class="form-control w-full md:w-10/12 max-w-sm mt-1">
                            <label class="label">
                                <span class="label-text">Ciudad</span>
                            </label>
                            <input type="text" placeholder="Type here" class="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 " />
                        </div>
                        <div class="form-control w-full md:w-10/12 max-w-sm mt-1">
                            <label class="label">
                                <span class="label-text">Provincia</span>
                            </label>
                            <input type="text" placeholder="Type here" class="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500  " />
                        </div>
                    </div>
                    <div class="form-control w-full max-w-sm mt-1">
                        <label class="label">
                            <span class="label-text">Calle Principal</span>
                        </label>
                        <input type="text" placeholder="Type here" class="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 w-full" />
                    </div>
                    <div class="form-control w-full max-w-sm mt-1">
                        <label class="label">
                            <span class="label-text">Calle Secundaria</span>
                        </label>
                        <input type="text" placeholder="Type here" class="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 w-full" />
                    </div>
                    <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                        <div class="form-control w-full md:w-10/12 max-w-sm mt-1">
                            <label class="label">
                                <span class="label-text">Sector</span>
                            </label>
                            <input type="text" placeholder="Type here" class="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 w-full" />
                        </div>
                        <div class="form-controlw-full md:w-10/12 max-w-xs mt-1">
                            <label class="label">
                                <span class="label-text">Zip</span>
                            </label>
                            <input type="text" placeholder="Type here" class="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full md:w-8/12 max-w-xs mt-1">
                            <label class="label">
                                <span class="label-text"># Casa</span>
                            </label>
                            <input type="text" placeholder="Type here" class="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 w-full max-w-xs" />
                        </div>
                    </div>
                    
                </div>                
                <div class="mt-8 border-t border-b py-4">
                    <div class="flex items-center justify-between">
                        <p class="text-sm font-medium text-gray-900">Subtotal</p>
                        <p class="font-semibold text-gray-900">$399.00</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-sm font-medium text-gray-900">Envío</p>
                        <p class="font-semibold text-gray-900">$8.00</p>
                    </div>
                </div>
                <div class="mt-6 flex items-center justify-between">
                    <p class="text-sm font-medium text-gray-900">Total</p>
                    <p class="text-2xl font-semibold text-gray-900">$408.00</p>
                </div>
            </div>
            <Link to='/pago'>
                <button class="mt-6 mb-8 w-full rounded-md bg-primary-80 px-6 py-3 font-medium text-white">Continuar con el pago</button>
            </Link>
        </div>
    )

}

export default Shipping;