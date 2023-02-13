const AppointmentElement = ({app,num}) =>{
    return(
        <tr>
            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <span className="font-semibold leading-tight text-sm text-slate-500">{num}</span>
            </td>
            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <span className="font-medium leading-tight text-sm text-slate-500">{app.date.substring(0,10)}</span>
            </td>
            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <span className="font-medium leading-tight text-sm text-slate-500">{app.duration}</span>
            </td>
            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <span className="font-medium leading-tight text-sm text-slate-500">{app.service.name}</span>
            </td>
            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <span className="font-medium leading-tight text-sm text-slate-500">{app.service.specialty.name}</span>
            </td>
        </tr>
    )

}
export default AppointmentElement;