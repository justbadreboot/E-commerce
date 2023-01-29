import ServiceCard from "../ServiceCard";

const MainMedServices = () =>{

    const services=[
        {
            id:1,
            nombre:"Consulta Médica",
            img:"https://images.unsplash.com/photo-1666214276389-393fb7dbc75c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8Mjl8fGhlYWx0aGNhcmV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            especialidad:"Oncología",
        },
        {
            id:2,
            nombre:"Consulta Médica",
            img:"https://medicinaysaludpublica.blob.core.windows.net.optimalcdn.com/images/2022/10/15/consulta-medica-1f0d2819.jpg",
            especialidad:"Oncología",
        },
        {
            id:3,
            nombre:"Consulta Médica",
            img:"https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/BUOGLU5M4VCSJPSIM2PUHWIIZM.jpg",
            especialidad:"Oncología",
        },
        {
            id:4,   
            nombre:"Consulta Médica",
            img:"https://eresmama.com/wp-content/uploads/2019/04/bebe-revision-pediatra-que-es-la-pediatria.jpg",
            especialidad:"Oncología",
        },
    ]

    return(
        <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div class="mb-10 md:mb-16">
                    <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Servicios <span className="text-primary-100">Médicos</span></h2>
                    <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                </div>
                <div 
                    data-aos="fade-up"
                    data-aos-duration="1500" 
                    class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
                    {services.map( service =>(
                        <ServiceCard service={service} />
                    ))}
                </div>
            </div>
        </div>
    )

}

export default MainMedServices;