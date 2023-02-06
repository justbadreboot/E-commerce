import { Link } from "react-router-dom";
import ServiceCard from "../cards/ServiceCard";
import ViewMore from "../main/ViewMore";

const MainMedServices = () =>{

    const services=[
        {
            id:1,
            nombre:"Tomografías",
            img:"https://images.unsplash.com/photo-1666214276389-393fb7dbc75c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8Mjl8fGhlYWx0aGNhcmV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            especialidad:"General",
        },
        {
            id:2,
            nombre:"Consultas Médicas",
            img:"https://medicinaysaludpublica.blob.core.windows.net.optimalcdn.com/images/2022/10/15/consulta-medica-1f0d2819.jpg",
            especialidad:"General",
        },
        {
            id:3,
            nombre:"Exámenes de Laboratorio",
            img:"https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/BUOGLU5M4VCSJPSIM2PUHWIIZM.jpg",
            especialidad:"General",
        },
        {
            id:4,   
            nombre:"Consultas Generales",
            img:"https://eresmama.com/wp-content/uploads/2019/04/bebe-revision-pediatra-que-es-la-pediatria.jpg",
            especialidad:"Pediatría",
        },
    ]

    return(
        <div className="bg-white py-6 sm:py-8 lg:py-12 font-poppins mt-8 md:mt-4">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div className="mb-10 md:mb-16">
                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Servicios <span className="text-primary-100">Médicos</span></h2>
                    <p className="mt-2 max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">Nuestros servicios están diseñados para satisfacer sus necesidades de atención médica y ayudarlo a mantener un estilo de vida saludable.</p>
                </div>
                <div className='mb-2 md:mb-4 md:mr-20'>
                    <Link to='/servicios'>
                        <ViewMore />
                    </Link>    
                </div>
                <div 
                    data-aos="fade-up"
                    data-aos-duration="1500" 
                    className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
                    {services.map( service =>(
                        <ServiceCard service={service} key={service.id} />
                    ))}
                </div>
            </div>
        </div>
    )

}

export default MainMedServices;