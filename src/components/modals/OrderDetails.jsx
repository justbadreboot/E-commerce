const OrderDetails = () =>{
    return(
        <>
            <input type="checkbox" id="orden" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-10/12 sm:w-7/12 lg:w-5/12 max-w-5xl">
                    <div className="text-center text-2xl font-semibold capitalize text-gray-600">
                        <h2>Agendar nueva cita</h2>
                    </div>
                    <div className="grid grid-cols-1">
                       
                    </div>
                    <div className="modal-action">
                        <label htmlFor="orden" className="btn btn-sm bg-error-100 border-none">Cerrar</label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OrderDetails;