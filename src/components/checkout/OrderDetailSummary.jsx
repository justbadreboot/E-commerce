import axios from "axios"
import { useEffect, useState } from "react"


const OrderDetailSummary = ({item})=>{
    
    const[imagen, setImagen] = useState('')

    useEffect(()=>{
        getProductInfo(item.name)
    },[item.name])

    const getProductInfo = async(name) =>{
        await axios.get(`https://api-gateway-production-d841.up.railway.app/api/public/product/filter/${name}`)
        .then(response => {
            setImagen(response.data[0].image)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return(
        <div key={item.id} className="flex rounded-lg bg-white sm:flex-row">
            <img className="m-1 my-1 h-20 w-24 rounded-md border object-cover object-center" src={imagen} alt={item.name} />
            <div className="flex w-full flex-col px-2 py-4">
                <span className="text-sm font-semibold">{item.name}</span>
                <span className="text-sm">Cant. {item.amount}</span>
                <p className="text-sm font-bold">${item.price}</p>
            </div>
        </div>
    )

}
export default OrderDetailSummary;