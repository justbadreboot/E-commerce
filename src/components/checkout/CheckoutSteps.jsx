import { useContext } from "react";
import { FormContext } from "../../pages/CheckoutPage"
import Billing from "./Billing";
import Payment from "./Payment";
import Shipping from "./Shipping";

const CheckoutSteps = ({envio,total,subtotal}) =>{

    const {activeStep} =useContext(FormContext)
    let stepContent;
    switch(activeStep){
        case 0:
            stepContent = <Billing subtotal={subtotal} envio={envio} total={total} />
            break;
        case 1:
            stepContent = <Shipping subtotal={subtotal} envio={envio} total={total} />
            break;
        case 2:
            stepContent = <Payment subtotal={subtotal} envio={envio} total={total} />
            break;
        default:
            break;
    }
    return stepContent;
}
export default CheckoutSteps;