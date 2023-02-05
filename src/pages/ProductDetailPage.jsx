import ProductDetail from "../components/cards/ProductDetailCard";
import MainLayout from "../Layout/MainLayout";
import RelatedProducts from "../components/RelatedProducts";

const ProductDetailPage = ()=>{

    return(
        <MainLayout>
            <ProductDetail />
            <RelatedProducts />
        </MainLayout>
    )

}
export default ProductDetailPage;