import Payment from "../components/checkout/Payment";
import Status from "../components/checkout/Status";
import Methods from "../components/checkout/Methods"
import Summary from "../components/checkout/Summary";
import MainLayout from "../Layout/MainLayout";
import Shipping from "../components/checkout/Shipping";

const ShippingPage =() =>{
    return(
        <MainLayout>
            <div class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
                <a href="#" class="text-2xl font-semibold text-gray-800">Checkout</a>
                <Status />
            </div>
            <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <Shipping />
                <div class="px-4 pt-8">
                    <Summary />
                    <Methods />
                </div>
            </div>
        </MainLayout>
    )
}

export default ShippingPage;