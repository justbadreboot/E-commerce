import { ToastContainer } from "react-toastify";
import Products from "../components/Products";
import MainLayout from "../Layout/MainLayout";

const ProductsPage = () => {
    return(
        <>
            <MainLayout>
                <ToastContainer position='top-right' theme='colored' autoClose={3000} />
                <Products />
            </MainLayout>
        </>
    )
}

export default ProductsPage;