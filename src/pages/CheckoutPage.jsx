import { useState, useEffect,createContext } from "react";
import CheckoutSteps from "../components/checkout/CheckoutSteps";
import Status from "../components/checkout/Status";
import Summary from "../components/checkout/OrderSummary";
import MainLayout from "../Layout/MainLayout";
import firestore from "../helpers/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import {HiArrowUturnLeft} from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const FormContext = createContext();

const Checkout =()=>{

    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({});
    const [cartItems, setCartItems] = useState([])
    const [total,setTotal] = useState(0)
    const [subtotal, setSubtotal] = useState(0)
    const [envio, setEnvio] = useState(0)

    const user = useSelector((state) => state.users.currentUser);
    const collectionName =  'cart '+ user

    useEffect ( ()=>{
        const getItems = onSnapshot(collection(firestore,collectionName), snapshot =>{
            setCartItems(snapshot.docs.map(doc => 
                ({id: parseInt(doc.id.substring(12)), cantidad: doc.data().cantidad, precio: doc.data().precio, nombre: doc.data().nombre})
            ))
            let subtotal = 0
            snapshot.docs.map(doc => 
                subtotal += (doc.data().cantidad * doc.data().precio)
            )
            setSubtotal(subtotal.toFixed(2))
            if(activeStep > 0)
                setEnvio(3.5)
            else
                setEnvio(0)
            let temp = (subtotal + envio).toFixed(2)
            setTotal(temp)
        },(error) => {
            console.log(error)
        })
        return () =>{
            getItems()
        }
    },[collectionName, activeStep,envio])

    return(
        <FormContext.Provider value={{activeStep, setActiveStep, formData, setFormData, cartItems}}>
            <MainLayout>
                <div className=" font-poppins ml-10 mt-4">
                    <Link to="/carrito" className="sm:hidden text-sm inline-flex">
                        <HiArrowUturnLeft className="w-4 h-4 mr-2" />Regresar al carrito
                    </Link>
                </div>
                <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32 font-poppins">
                    <div className="tooltip" data-tip="Regresar al carrito">
                        <Link to="/carrito" className="hidden sm:block">
                            <HiArrowUturnLeft className="w-5 h-5 mr-6" />
                        </Link>
                    </div>
                    <p className="text-2xl font-semibold text-gray-800">Checkout</p>
                    <Status />
                </div>
                <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                    <CheckoutSteps subtotal={subtotal} envio={envio} total={total} />
                    <div className="px-4 pt-8 font-poppins ">
                        <p className="text-xl font-medium">Resumen de Compra</p>
                        <p className="text-gray-400">Verifica tus articulos.</p>
                        <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6 md:overflow-y-auto md:max-h-[28rem]">
                            {cartItems.map( item =>
                                <Summary item={item} key={item.id} />
                            )}
                        </div>
                    </div>
                </div>
            </MainLayout>
        </FormContext.Provider>
    )
}

export default Checkout;