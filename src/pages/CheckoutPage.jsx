import Billing from "../components/checkout/Billing";
import Status from "../components/checkout/Status";
import Summary from "../components/checkout/Summary";
import MainLayout from "../Layout/MainLayout";

const Checkout =()=>{
    return(
        <MainLayout>
            <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
                <p className="text-2xl font-semibold text-gray-800">Checkout</p>
                <Status act={1} />
            </div>
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <Billing />
                <div className="px-4 pt-8">
                    <Summary />
                </div>
            </div>
        </MainLayout>
    )

}

export default Checkout;