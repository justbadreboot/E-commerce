import Status from "../components/checkout/Status";
import Summary from "../components/checkout/Summary";
import MainLayout from "../Layout/MainLayout";
import Payment from "../components/checkout/Payment";

const PaymentPage = () =>{
    return(
        <MainLayout>
            <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
                <p className="text-2xl font-semibold text-gray-800">Checkout</p>
                <Status prev={2} act={3} />
            </div>
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <Payment />
                <div className="px-4 pt-8">
                    <Summary />
                </div>
            </div>
        </MainLayout>
    )

}

export default PaymentPage;