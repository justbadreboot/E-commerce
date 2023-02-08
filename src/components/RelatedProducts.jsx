import RelatedProductCard from "./cards/RelatedProductCard"

const RelatedProducts =()=>{
    const products=[
        {
            id:1,
            name:"Enterogermina",
            image:"https://drfernandojuca.com/wp-content/uploads/2021/05/ENTEROGERMINA-2000-MILLONES-X-10-FRASCOS-BEBIBLES-600x600.jpg",
            rate:4.5,
            pvp:20,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            brand:'colgate'
        },
        {
            id:2,
            name:"Curitas translúcidas",
            image:"https://d2o812a6k13pkp.cloudfront.net/Productos/40392165_02.jpg",
            rate:4.5,
            pvp:20,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            brand:'colgate'
        },
        {
            id:3,
            name:"Bago Vital Digestivo",
            image:"https://image.offers-cdn.net/assets/uploads/offers/ec/7771294/bagovital-digest-sobre-20-g-caja-con-large.jpeg",
            rate:4.5,
            pvp:20,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            brand:'colgate'
        },
        {
            id:4,
            name:"Bloqueador Solar 120g",
            image:"https://dermasoft.com.ec/wp-content/uploads/sites/2/2022/09/UMBRELLA-PLUS-600x600-1.gif",
            rate:4.5,
            pvp:20,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            brand:'colgate'
        }
    ]

    return(
        <div className="relative mx-auto w-full max-w-7xl bg-gray-100">
            <div className="mx-auto max-w-sm sm:max-w-2xl lg:max-w-none py-6 px-6 w-full">
                <div className="flex items-center">
                    <h2 className="text-xl lg:text-xl text-gray-700 font-bold font-oswald uppercase tracking-wider">Productos<span className="text-primary-100"> Relacionados</span></h2>
                    <span className="ml-3 w-1/4 h-0.5 bg-gray-400" />
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-x-5">
                {products.map(product => (
                    <RelatedProductCard product={product} key={product.id} />
                ))}
                </div>
            </div>
        </div>
    )
}

export default RelatedProducts;