import { NavLink} from 'react-router-dom';
import ViewMore from './ViewMore'

const MainProducts = () =>{

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
        },
        {
            id:5,
            nombre:"Enterogermina",
            img:"https://dermasoft.com.ec/wp-content/uploads/sites/2/2022/09/UMBRELLA-PLUS-600x600-1.gif",
            rate:4.5,
            precio:20,
        },
        {
            id:6,
            nombre:"Bago Vital Digestivo",
            img:"https://img.offers-cdn.net/assets/uploads/offers/ec/7771294/bagovital-digest-sobre-20-g-caja-con-large.jpeg",
            rate:4.5,
            precio:20,
        },
        {
            id:7,
            nombre:"Bloqueador Solar 120g",
            img:"https://dermasoft.com.ec/wp-content/uploads/sites/2/2022/09/UMBRELLA-PLUS-600x600-1.gif",
            rate:4.5,
            precio:20,
        },
        {
            id:8,
            nombre:"Enterogermina",
            img:"https://drfernandojuca.com/wp-content/uploads/2021/05/ENTEROGERMINA-2000-MILLONES-X-10-FRASCOS-BEBIBLES-600x600.jpg",
            rate:4.5,
            precio:20,
        },
    ]

    return(
        <section className="py-10">
            <h1 className="mb-8 text-center font-sans text-4xl font-bold text-gray-900">
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
                    <article key={product.id} className="rounded-lg bg-gray-100 p-4 shadow-lg hover:shadow-xl">
                        <NavLink to="/">
                            <div className="relative flex items-end overflow-hidden rounded-xl">
                                <img src={product.img} alt={product.nombre}/>
                                <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="text-slate-400 ml-1 text-sm">{product.rate}</span>
                                </div>
                            </div>
                            <div className="mt-1 p-2">
                                <h2 className="text-ternary-60 text-lg capitalize font-semibold">{product.nombre}</h2>  
                                <div className="mt-1 flex items-end justify-between">
                                    <p><span className="text-lg font-bold text-info-80">${product.precio}</span> </p>
                                    <div class="tooltip" data-tip="Añadir al carrito">
                                        <button class=" gap-2 group inline-flex rounded-xl bg-warning-40 p-2 hover:bg-orange-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:text-orange-400 h-5 w-5 text-warning-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default MainProducts;