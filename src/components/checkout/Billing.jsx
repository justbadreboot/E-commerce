import { Link } from "react-router-dom";

const Billing =( )=>{
    return(
        <div className="mt-4 bg-gray-50 px-4 pt-8 lg:mt-0">
        <p className="text-xl font-medium">Datos para la Factura</p>
        <p className="text-gray-400 mt-2">Completa los datos para la generación de la factura</p>
        <div>
            <div className="py-2">
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className="form-control w-full md:w-10/12 max-w-sm mt-1">
                        <label className="label">
                            <span className="label-text">Nombre</span>
                        </label>
                        <input type="text" placeholder="Type here" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 " />
                    </div>
                    <div className="form-control w-full md:w-10/12 max-w-sm mt-1">
                        <label className="label">
                            <span className="label-text">Apellido</span>
                        </label>
                        <input type="text" placeholder="Type here" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500  " />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className="form-control w-full md:w-10/12 max-w-sm mt-1">
                        <label className="label">
                            <span className="label-text">Identificación</span>
                        </label>
                        <input type="text" placeholder="Type here" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 " />
                    </div>
                    <div className="form-control w-full md:w-10/12 max-w-sm mt-1">
                        <label className="label">
                            <span className="label-text">Teléfono</span>
                        </label>
                        <input type="text" placeholder="Type here" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500  " />
                    </div>
                </div>
            </div>                
            <div className="mt-8 border-t border-b py-4">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-500">Subtotal</p>
                    <p className="font-semibold text-gray-900">$399.00</p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-500">Envío</p>
                    <p className="font-base text-xs text-gray-600">A calcular en el siguiente paso</p>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">$408.00</p>
            </div>
        </div>
        <Link to='/envio'>
            <button className="mt-6 mb-8 w-full rounded-md bg-primary-80 px-6 py-3 font-medium text-white">Continuar con el envío</button>
        </Link>
        
    </div>
    )

}

export default Billing;