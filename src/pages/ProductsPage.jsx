import { ToastContainer } from "react-toastify";
import MainLayout from "../Layout/MainLayout";

const ProductsPage = () => {
    return(
        <>
            <MainLayout>
                <ToastContainer position='top-right' theme='colored' autoClose={3000} />
            </MainLayout>
        </>
    )
}

export default ProductsPage;