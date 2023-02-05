import ProductDetail from "../components/cards/ProductDetailCard";
import MainLayout from "../Layout/MainLayout";
import RelatedProducts from "../components/RelatedProducts";
import { ToastContainer } from "react-toastify";

const ProductDetailPage = ()=>{

    return(
        <MainLayout>
            <ToastContainer position='top-right' theme='colored' autoClose={3000} />
            <ProductDetail />
            <RelatedProducts />
        </MainLayout>
    )

}
export default ProductDetailPage;