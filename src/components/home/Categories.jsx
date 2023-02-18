import Loader from "../../components/main/Loader"
import { useGetCategoriesQuery } from "../../store/serverApi";

const MainCategories = () =>{
    const {data: categorias, isLoading, isFetching, isSuccess} = useGetCategoriesQuery();

    return(
        <div className="pb-1 font-poppins">
            <div className="flex justify-center items-center">
                <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                    <div className="flex flex-col jusitfy-center items-center space-y-6">
                        <div className="flex flex-col justify-center items-center mb-2">
                            <h1 className="text-2xl xl:text-3xl font-semibold leading-7 xl:leading-9 text-gray-800 ">Explora Nuestras 
                                <span className="text-primary-100 "> Categorías</span>
                            </h1>
                        </div>
                        {((isLoading || isFetching)) && <Loader />}
                        {isSuccess && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 md:gap-x-4 w-full px-8 md:px-20 xl:px-48">
                                {categorias.map(categoria =>(
                                    <div 
                                        data-aos="fade-up" data-aos-duration="1200"
                                        key={categoria.id}
                                        className="flex flex-col space-y-2 md:space-y-8 mt-2">
                                        <div className="relative group flex justify-center items-center h-full w-full">
                                            <img className="object-center object-cover w-full h-full" src={categoria.image} alt={categoria.name} />
                                            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-sm font-semibold leading-none text-gray-600 py-3 w-36 bg-white">{categoria.name}</button>
                                            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MainCategories;