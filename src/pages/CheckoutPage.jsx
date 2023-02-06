import { useState, useEffect,createContext } from "react";
import CheckoutSteps from "../components/checkout/CheckoutSteps";
import Status from "../components/checkout/Status";
import Summary from "../components/checkout/OrderSummary";
import MainLayout from "../Layout/MainLayout";
import firestore from "../helpers/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

export const FormContext = createContext();

const Checkout =()=>{

    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({});
    const [cartItems, setCartItems] = useState([])
    const [total,setTotal] = useState(0)
    const [subtotal, setSubtotal] = useState(0)
    const [valorEnvio, setValorEnvio] = useState(0)

    const email= "dani"
    const collectionName =  'cart '+ email

    useEffect ( ()=>{
        const getItems = onSnapshot(collection(firestore,collectionName), snapshot =>{
            setCartItems(snapshot.docs.map(doc => 
                ({id: parseInt(doc.id.substring(12)), cantidad: doc.data().cantidad, precio: doc.data().precio})
            ))
            let subtotal = 0
            snapshot.docs.map(doc => 
                subtotal += (doc.data().cantidad * doc.data().precio)
            )
            setSubtotal(subtotal.toFixed(2))
        },(error) => {
            console.log(error)
        })
        return () =>{
            getItems()
        }
    },[collectionName])

    return(
        <FormContext.Provider value={{activeStep, setActiveStep, formData, setFormData}}>
            <MainLayout>
                <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32 font-poppins">
                    <p className="text-2xl font-semibold text-gray-800">Checkout</p>
                    <Status />
                </div>
                <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                    <CheckoutSteps />
                    <div className="px-4 pt-8 font-poppins">
                        <p className="text-xl font-medium">Resumen de Compra</p>
                        <p className="text-gray-400">Verifica tus articulos.</p>
                        <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
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