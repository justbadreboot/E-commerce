const Appointment = () =>{
    return(
        <>
            <input type="checkbox" id="cita" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-10/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="cita" className="btn bg-error-100">Cancelar</label>
                        <label htmlFor="cita" className="btn bg-green-600">Agendar</label>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Appointment;