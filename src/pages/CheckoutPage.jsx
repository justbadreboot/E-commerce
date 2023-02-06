import { useState, createContext } from "react";
import CheckoutSteps from "../components/checkout/CheckoutSteps";
import Status from "../components/checkout/Status";
import Summary from "../components/checkout/OrderSummary";
import MainLayout from "../Layout/MainLayout";

export const FormContext = createContext();

const Checkout =()=>{

    const [activeStep, setActiveStep] = useState(0);

    return(
        <FormContext.Provider value={{activeStep}}>
            <MainLayout>
                <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
                    <p className="text-2xl font-semibold text-gray-800">Checkout</p>
                    <Status />
                </div>
                <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                    <CheckoutSteps />
                    <div className="px-4 pt-8">
                        <Summary />
                    </div>
                </div>
        </MainLayout>
        </FormContext.Provider>
    )

}

export default Checkout;