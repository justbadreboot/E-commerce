import { useContext } from "react";
import { FormContext } from "../../pages/CheckoutPage"
import Billing from "./Billing";
import Payment from "./Payment";
import Shipping from "./Shipping";

const CheckoutSteps = () =>{

    const {activeStep} =useContext(FormContext)
    let stepContent;
    switch(activeStep){
        case 0:
            stepContent = <Billing />
            break;
        case 1:
            stepContent = <Shipping />
            break;
        case 2:
            stepContent = <Payment />
            break;
        default:
            break;
    }
    return stepContent;
}
export default CheckoutSteps;