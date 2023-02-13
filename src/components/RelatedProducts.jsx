import { useGetRelatedProductsQuery } from "../store/serverApi"
import RelatedProductCard from "./cards/RelatedProductCard"
import Loader from "./main/Loader"

const RelatedProducts =({id})=>{

    const {data: products, isSuccess, isLoading} = useGetRelatedProductsQuery(id)

    return(
        <div className="relative mx-auto w-full max-w-7xl mt-2 bg-gray-100">
            <div className="mx-auto max-w-sm sm:max-w-2xl lg:max-w-none py-6 px-6 w-full">
                <div className="flex items-center">
                    <h2 className="text-xl lg:text-xl text-gray-700 font-bold font-oswald uppercase tracking-wider">Productos<span className="text-primary-100"> Relacionados</span></h2>
                    <span className="ml-3 w-1/4 h-0.5 bg-gray-400" />
                </div>
                {isLoading && <Loader />}
                {isSuccess && (
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-x-5">
                        {products.map(product => (
                            <RelatedProductCard product={product} key={product.id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default RelatedProducts;