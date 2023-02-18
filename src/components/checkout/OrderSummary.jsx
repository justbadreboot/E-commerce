import { useGetProductByIdQuery } from '../../store/serverApi'
import Loader from "../../components/main/Loader"

const OrderSummary =({item})=>{
    const {data: product, isSuccess, isLoading} = useGetProductByIdQuery(item.id)

    return(
        <>
            {isLoading && <Loader /> }
            {isSuccess &&(
                <div key={product.id} className="flex rounded-lg bg-white sm:flex-row">
                    <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={product.image} alt={product.name} />
                    <div className="flex w-full flex-col px-4 py-4">
                        <span className="font-semibold">{product.name}</span>
                        <span className="float-right text-gray-400">{product.brand}</span>
                        <span className="text-sm">Cant. {item.cantidad}</span>
                        <p className="text-md font-bold">${product.pvp}</p>
                    </div>
                </div>
            )}
        </>
        
    )

}
export default OrderSummary;