import { Link } from "react-router-dom";

const Status =(props)=>{
    return(
        <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
            <div class="relative">
                <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                    {/** */}
                    <li class="flex items-center space-x-3 text-left sm:space-x-4">
                        {props.act===1 ? (
                            <Link class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-40 text-xs font-semibold text-white ring ring-primary-40 ring-offset-2" >1</Link>
                        ) : (
                            <Link class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
                            </Link>
                        )}
                        <span class="font-semibold text-gray-700">Datos del Cliente</span>
                    </li>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    {/** */}
                    <li class="flex items-center space-x-3 text-left sm:space-x-4">
                    {props.act===2 ? (
                        <Link class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-40 text-xs font-semibold text-white ring ring-primary-40 ring-offset-2" to="/">2</Link>
                    ) :(
                            props.next ===3 || props.prev ===2 ? (
                                <Link class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" to="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
                                </Link>
                            ):(
                                <Link class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" to="/">2</Link>
                            )
                    ) }                        
                        <span class="font-semibold text-gray-700">Envío</span>
                    </li>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    
                    <li class="flex items-center space-x-3 text-left sm:space-x-4">
                        {props.act===3 ? (
                            <Link class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-40 text-xs font-semibold text-white ring ring-primary-40 ring-offset-2" to="/">3</Link>
                        ):(
                            <Link class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" to="/">3</Link>
                        )}
                        <span class="font-semibold text-gray-700">Pago</span>
                    </li>
                </ul>
            </div>
        </div>
    )

}
export default Status;