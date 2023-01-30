import ProductDetail from "../components/cards/ProductDetail";
import MainLayout from "../Layout/MainLayout";
import ProductCard from '../components/cards/ProductCard';

const ProductDetailPage = ()=>{

    const products=[
        {
            id:1,
            nombre:"Enterogermina",
            img:"https://drfernandojuca.com/wp-content/uploads/2021/05/ENTEROGERMINA-2000-MILLONES-X-10-FRASCOS-BEBIBLES-600x600.jpg",
            rate:4.5,
            precio:20,
        },
        {
            id:2,
            nombre:"Curitas translúcidas",
            img:"https://d2o812a6k13pkp.cloudfront.net/Productos/40392165_02.jpg",
            rate:4.5,
            precio:20,
        },
        {
            id:3,
            nombre:"Bago Vital Digestivo",
            img:"https://img.offers-cdn.net/assets/uploads/offers/ec/7771294/bagovital-digest-sobre-20-g-caja-con-large.jpeg",
            rate:4.5,
            precio:20,
        },
        {
            id:4,
            nombre:"Bloqueador Solar 120g",
            img:"https://dermasoft.com.ec/wp-content/uploads/sites/2/2022/09/UMBRELLA-PLUS-600x600-1.gif",
            rate:4.5,
            precio:20,
        }
    ]

    return(
        <MainLayout>
            <ProductDetail />
            <h1 className="mt-6 mb-4 text-center font-sans text-2xl font-bold text-gray-900">
                Productos<span className="text-primary-100"> Relacionados</span>
            </h1>
            <div className=" mx-auto grid max-w-screen-xl grid-cols-2 gap-6 p-6 md:grid-cols-3 lg:grid-cols-4">
                {products.map( product =>(
                    <ProductCard product={product}/>
                ))}
            </div>
        </MainLayout>
    )

}
export default ProductDetailPage;