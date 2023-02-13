const OrderElement =({orden,num, onAction})=>{
    
    let colorOrden = '', colorPago = '', colorEnvio = ''
    
    switch (orden.orderState.state) {   
        case 'Finalizada':
            colorOrden = 'bg-success-100 '
            break
        case 'Cancelada':
            colorOrden = 'bg-error-100'
            break
        case 'En curso':
            colorOrden = 'bg-warning-100'
            break
        default:
            colorOrden = ''
    }

    switch(orden.deliveryState.id){
        case 3:
            colorEnvio = 'bg-success-100'
            break
        case 2:
            colorEnvio = 'bg-warning-100'
            break
        case 1:
            colorEnvio = 'bg-info-100'
            break
        default:
            colorEnvio = ''
    }

    switch(orden.paymentState.state){
        case 'Pago efectuado':
            colorPago = 'bg-success-100'
            break
        case 'Pago pendiente':
            colorPago = 'bg-error-100'
            break
        default:
            colorPago = ''
    }

    return(
        <tr>
            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <span className="font-semibold leading-tight text-sm text-slate-500">{num}</span>
            </td>
            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <span className="font-medium leading-tight text-sm text-slate-500">{orden.date.substring(0,10)}</span>
            </td>
            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <span className="font-medium leading-tight text-sm text-slate-500">${orden.total}</span>
            </td>
            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <span className={`p-3 text-white ${colorOrden} badge font-medium leading-tight text-sm border-none`}>
                    {orden.orderState.state}
                </span>
            </td>
            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <span className={`p-3 text-white ${colorEnvio} badge font-medium leading-tight text-sm border-none`}>
                    {orden.deliveryState.state}
                </span>
            </td>
            <td className="p-2 text-center align-middle bg-transparent capitalize border-b whitespace-nowrap shadow-transparent">
                <span className={`p-3 text-white ${colorPago} badge font-medium leading-tight text-sm border-none`}>
                    {orden.paymentState.state.substring(4)}
                </span>
            </td>
            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                {orden.orderState.state === 'Finalizada' ? (
                    <label htmlFor="orden" onClick={ () => onAction(orden.id,"Factura")} className="cursor-pointer leading-tight text-sm text-slate-500 font-semibold">
                        Ver Factura
                    </label>
                ) : (
                    <label htmlFor="orden" onClick={ () => onAction(orden.id,"Orden")} className="cursor-pointer font-medium leading-tight text-sm text-slate-500">
                        Ver Detalles
                    </label>
                )}
                
            </td>
        </tr>
    )

}
export default OrderElement;