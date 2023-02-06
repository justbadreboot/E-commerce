import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { FormContext } from "../../pages/CheckoutPage"

const Status =()=>{

    const { activeStep} = useContext(FormContext);

    useEffect(() => {
        const stepperItems = document.querySelectorAll(".stepper-item");
        stepperItems.forEach((step, i) => {
        if (i <= activeStep) {
            step.classList.remove("bg-gray-400");
            step.classList.add("bg-primary-40", "ring-primary-40");
        } else {
            step.classList.remove("bg-primary-40", "ring");
            step.classList.add("bg-gray-400");
        }
        });
    }, [activeStep]);

    return(
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base font-poppins">
            <div className="relative">
                <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                    {/** 1 */}
                    <li className=" flex items-center space-x-3 text-left sm:space-x-4">
                        <Link className="stepper-item flex h-7 w-7 items-center justify-center rounded-full bg-primary-40 text-sm font-semibold text-white ring ring-primary-40 ring-offset-2" >1</Link>
                        <span className="font-semibold text-gray-700">Datos del Cliente</span>
                    </li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    {/** 2 */}
                    <li className="flex items-center space-x-3 text-left sm:space-x-4">
                        <Link className="stepper-item flex h-7 w-7 items-center justify-center rounded-full bg-primary-40 text-sm font-semibold text-white ring ring-primary-40 ring-offset-2" to="/">2</Link>                        
                        <span className="font-semibold text-gray-700">Envío</span>
                    </li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg> 
                    {/**  3*/}
                    <li className="flex items-center space-x-3 text-left sm:space-x-4">
                        <Link className="stepper-item  flex h-7 w-7 items-center justify-center rounded-full bg-primary-40 text-sm font-semibold text-white ring ring-primary-40 ring-offset-2" to="/">3</Link>
                        <span className="font-semibold text-gray-700">Pago</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Status;