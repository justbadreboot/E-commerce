import ProductCard from '../cards/ProductCard';
import ViewMore from '../ViewMore'
const MainProducts = () =>{


    const products=[
        {
            id:1,
            name:"Enterogermina",
            img:"https://drfernandojuca.com/wp-content/uploads/2021/05/ENTEROGERMINA-2000-MILLONES-X-10-FRASCOS-BEBIBLES-600x600.jpg",
            rate:4.5,
            pvp:20,
        },
        {
            id:2,
            name:"Curitas translúcidas",
            img:"https://d2o812a6k13pkp.cloudfront.net/Productos/40392165_02.jpg",
            rate:4.5,
            pvp:20,
        },
        {
            id:3,
            name:"Bago Vital Digestivo",
            img:"https://img.offers-cdn.net/assets/uploads/offers/ec/7771294/bagovital-digest-sobre-20-g-caja-con-large.jpeg",
            rate:4.5,
            pvp:20,
        },
        {
            id:4,
            name:"Bloqueador Solar 120g",
            img:"https://dermasoft.com.ec/wp-content/uploads/sites/2/2022/09/UMBRELLA-PLUS-600x600-1.gif",
            rate:4.5,
            pvp:20,
        },
        {
            id:5,
            name:"Enterogermina",
            img:"https://dermasoft.com.ec/wp-content/uploads/sites/2/2022/09/UMBRELLA-PLUS-600x600-1.gif",
            rate:4.5,
            pvp:20,
        },
        {
            id:6,
            name:"Bago Vital Digestivo",
            img:"https://img.offers-cdn.net/assets/uploads/offers/ec/7771294/bagovital-digest-sobre-20-g-caja-con-large.jpeg",
            rate:4.5,
            pvp:20,
        },
        {
            id:7,
            name:"Bloqueador Solar 120g",
            img:"https://dermasoft.com.ec/wp-content/uploads/sites/2/2022/09/UMBRELLA-PLUS-600x600-1.gif",
            rate:4.5,
            pvp:20,
        },
        {
            id:8,
            name:"Enterogermina",
            img:"https://drfernandojuca.com/wp-content/uploads/2021/05/ENTEROGERMINA-2000-MILLONES-X-10-FRASCOS-BEBIBLES-600x600.jpg",
            rate:4.5,
            pvp:20,
        },
    ]

    return(
        <section className="py-10 font-poppins">
            <h1 className="mb-6 text-center text-4xl font-bold text-gray-900">
                <span className="text-primary-100">Nuevos </span>Productos
            </h1>
            <div className='mb-2 md:mb-0 md:mr-20'>
                <ViewMore />    
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="1200" 
                className="mx-auto grid max-w-screen-xl grid-cols-2 gap-6 p-6 md:grid-cols-3 lg:grid-cols-4">
                    {products.map( product =>(
                        <ProductCard product={product} key={product.id} />
                    ))}
            </div>
        </section>
    )
}

export default MainProducts;