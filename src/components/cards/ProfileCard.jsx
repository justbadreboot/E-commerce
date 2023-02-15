import Swal from "sweetalert2";
import { FaEdit} from "react-icons/fa"
import { useEffect, useState } from "react"
import { useUpdateClientMutation } from "../../store/serverApi";
import { MdClose } from "react-icons/md"
import { useSelector } from "react-redux";
import axios from "axios";
import Loader from "../main/Loader";

const ProfileCard = () =>{

    const id = useSelector((state) => state.users.currentUser);
    const [editClient] = useUpdateClientMutation()
    const [isEditar, setIsEditar] = useState(false)
    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [ident,setident] = useState("")
    const [telf,setTelf] = useState("")
    const [user,setUser] = useState("")
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        getClient(id)
    })

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 2000);
    },[])

    const getClient = async(id) =>{
        await axios.get(`https://client-production-d410.up.railway.app/api/private/client/${id}`)
        .then(response => {
            setNombre(response.data.firstName)
            setApellido(response.data.lastName)
            setident(response.data.document)
            setTelf(response.data.phone)
            setUser(response.data.userId)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const handleOnChange = (e) =>{
        console.log(e.target.value)
    }
    const handleOnSubmit = async (e)=>{
        e.preventDefault()
        const res = await editClient({ 
            document: ident,
            firstName: nombre,
            lastName: apellido,
            phone: telf,
            userId: user,
            id: id,
        })
        if(res.data){
            Toast.fire({ icon: 'success', title: 'Datos actualizados',background:'#D3FDDD'})
            setIsEditar(false)
        }
        else
            Toast.fire({ icon: 'error', title: 'Ocurrió un error. Intente de nuevo', background:'#FFDADA' })
    }
    
    return(
        <div className="font-poppins w-full max-w-full px-4 py-3 bg-gray-100 rounded-2xl ">
            <div className="relative flex flex-col h-full min-w-0 shadow-soft-xl rounded-2xl ">
                <div className="px-6 pt-3 pb-0 mb-0 rounded-t-2xl">
                    <div className="flex ">
                        <div className="flex items-center max-w-full px-3 w-11/12 flex-none">
                            <h6 className="mb-0 text-lg font-semibold">Datos Personales</h6>
                        </div>
                        <div className="w-full max-w-full px-3 md:w-2/12 ">
                            <FaEdit onClick={()=> {setIsEditar(true)}} className={`w-5 h-5 cursor-pointer ${isEditar ? "hidden" : "block"}`} />
                            <MdClose onClick={()=> {setIsEditar(false)}} className={`w-5 h-5 cursor-pointer ${!isEditar ? "hidden" : "block"}`}/>
                        </div>
                    </div>
                </div>
                <div className="flex-auto px-6 mt-3 mb-3">
                    {loading ? <Loader /> : (
                        <form onSubmit={handleOnSubmit}>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div className="form-control w-full md:w-10/12 max-w-sm mt-1">
                                <label className="label">
                                    <span className="label-text">Nombre</span>
                                </label>
                                {isEditar ? (
                                    <input type="text" name="nombre" placeholder="Nombre" className={`px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none  focus:border-green-400 focus:ring-green-400`} 
                                     onChange={handleOnChange} />
                                ) : (
                                    <p className={`px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none bg-gray-200`}>{nombre}</p>
                                )}
                            </div>
                            <div className="form-control w-full md:w-10/12 max-w-sm mt-1">
                                <label className="label">
                                    <span className="label-text">Apellido</span>
                                </label>
                                {isEditar ? (
                                    <input type="text" name="apellido" placeholder="Apellido" className={`px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none  focus:border-green-400 focus:ring-green-400`} 
                                    value={apellido} onChange={(e) =>setApellido(e.target.value)} />
                                ) : (
                                    <p className={`px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none bg-gray-200`}>{apellido}</p>
                                )}
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div className="form-control w-full md:w-10/12 max-w-sm mt-1">
                                <label className="label">
                                    <span className="label-text">Identificación</span>
                                </label>
                                {isEditar ? (
                                    <input type="text" name="ident" placeholder="Identificación" className={`px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none  focus:border-green-400 focus:ring-green-400`} 
                                    value={ident} onChange={(e) =>setident(e.target.value)} />
                                ) : (
                                    <p className={`px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none bg-gray-200`}>{ident}</p>
                                )}
                            </div>
                            <div className="form-control w-full md:w-10/12 max-w-sm mt-1">
                                <label className="label">
                                    <span className="label-text">Teléfono</span>
                                </label>
                                {isEditar ? (
                                    <input type="text" name="telf" placeholder="Teléfono" className={`px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none  focus:border-green-400 focus:ring-green-400`} value={telf} onChange={(e) =>setTelf(e.target.value)} />
                                ) : (
                                    <p className={`px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none bg-gray-200`}>{telf}</p>
                                )}
                            </div>
                        </div>
                        {isEditar && (
                            <div className='grid sm:grid-cols-2 gap-4'>
                                <button onClick={handleOnSubmit} type="submit" className="mt-6 mb-8 w-full sm:w-11/12 rounded-md bg-primary-80 px-6 py-3 font-medium text-white">
                                    Actualizar
                                </button>
                            </div>
                        )}
                    </form> 
                    )}
                </div>
            </div>
        </div>
    )
}
export default ProfileCard;