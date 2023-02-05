import { ToastContainer } from "react-toastify";
import Cart from "../components/Cart";
import MainLayout from "../Layout/MainLayout";

const ShoppingCart = () => {
    return(
        <>
            <MainLayout>
            <ToastContainer position='top-right' theme='colored' autoClose={3000} />
                <Cart />
            </MainLayout>
        </>
    )
}

export default ShoppingCart;