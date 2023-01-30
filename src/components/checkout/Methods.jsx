const Methods = () =>{
    return(
        <>
            <p className="mt-8 text-md font-medium font-poppins">Métodos de pago</p>
            <form className="mt-5 grid gap-6 grid-cols-1 sm:grid-cols-2">
                <div className="relative w-full">
                    <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
                    <span className="peer-checked:border-secondary-100 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label className="peer-checked:border-2 peer-checked:border-secondary-100 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
                        <div className="ml-5">
                            <span className="mt-2 font-semibold">Tarjeta de Crédito</span>
                        </div>
                    </label>
                </div>
                <div className="relative w-full">
                    <input className="peer hidden" id="radio_2" type="radio" name="radio"  />
                    <span className="peer-checked:border-secondary-100 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label className="peer-checked:border-2 peer-checked:border-secondary-100 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
                        <div className="ml-5">
                            <span className="mt-2 font-semibold">Efectivo</span>
                        </div>
                    </label>
                </div>
            </form>
        </>
    )

}
export default Methods;