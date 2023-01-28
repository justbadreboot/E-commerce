import ViewMore from '../ViewMore'

const MainCategories = () =>{

    const categorias=[
        {
            id:1,
            nombre:'Vitaminas',
            img:'https://cdn.shopify.com/s/files/1/0312/1355/1754/collections/e4-multi-1_1200x1200.jpg?v=1663038570',
            delay:""
        },
        {
            id:2,
            nombre:'Cuidado Facial',
            img:'https://www.neutrogena.es/sites/neutrogena_es/files/taco-images/hydroboost_0_0.jpg',
            delay:"100"
        },
        {
            id:3,
            nombre:'Cuidado Personal',
            img:'https://st.depositphotos.com/1155723/1347/i/450/depositphotos_13471300-stock-photo-personal-hygiene-items-accessories-for.jpg',
            delay:"200"
        },
        {
            id:4,
            nombre:'Bebés y niños',
            img:'https://http2.mlstatic.com/D_NQ_NP_719837-MCO49474711019_032022-V.jpg',
            delay:"300"
        },
        {
            id:5,
            nombre:'Jarabes',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTwFKe5FuIyyk1bD6te2RXIOTxpGrAWV_3clKA_R4RQ-ST_rbHCnvcIhFPn4jyuyms_VA&usqp=CAU',
            delay:"400"
        },
        {
            id:6,
            nombre:'Bioseguridad',
            img:'https://www.rr-industrial.com/wp-content/uploads/2020/12/Bio-image.jpg',
            delay:"500"
        },
    ]

    return(
        <div className="pb-1">
            <div className="flex justify-center items-center">
                <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                    <div className="flex flex-col jusitfy-center items-center space-y-10">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">Explora Nuestras 
                            <span className="text-primary-100"> Categorías</span>
                            </h1>
                        </div>
                        <ViewMore />
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 md:gap-x-4 w-full px-8">
                            {categorias.map(categoria =>(
                                <div 
                                    data-aos="fade-right" data-aos-duration="1200" data-aos-delay={categoria.delay}
                                    key={categoria.id}
                                    className="flex flex-col space-y-2 md:space-y-8 mt-2">
                                    <div className="relative group flex justify-center items-center h-full w-full">
                                        <img className="object-center object-cover w-full h-full" src={categoria.img} alt={categoria.nombre} />
                                        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">{categoria.nombre}</button>
                                        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MainCategories;