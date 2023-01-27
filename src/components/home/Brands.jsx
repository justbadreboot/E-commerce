const Brands =() =>{

    const marcas=[
        {
            id:1,
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pfizer_logo.svg/2560px-Pfizer_logo.svg.png",
            nombre:'pfizer',
        },
        {
            id:2,
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Eucerin_logo.svg/2560px-Eucerin_logo.svg.png",
            nombre:'Eucerin',
        },
        {
            id:3,
            img:"https://1000marcas.net/wp-content/uploads/2021/05/Logo-Bioderma-1.png",
            nombre:'Bioderma',
        },
        {
            id:4,
            img:"https://www.bago.com.ec/wp-content/uploads/2022/03/Logo-T-Bago-2.png",
            nombre:'Bago',
        },
        {
            id:5,
            img:"https://greenlife.com.ec/wp-content/uploads/2021/02/logo_new-greenlife.png",
            nombre:'Green Life',
        },
        {
            id:6,
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Nexcare_logo.svg/800px-Nexcare_logo.svg.png",
            nombre:'Nexcare',
        },
        {
            id:7,
            img:"https://grupofarma.com/wp-content/uploads/2021/10/HEPALIVE_ADVANCE_ECU.png",
            nombre:'HepaLive',
        },
        {
            id:8,
            img:"https://naturesgarden.com.ec/wp-content/uploads/2022/05/LOGO_NG.png",
            nombre:'NatureGarden',
        },
        
    ]
    return(
        <div className="pt-12">
            <div className="container m-auto px-6 space-y-12 md:px-12 lg:px-56">
                <div className="m-auto text-center lg:w-7/12">
                    <h2 className="text-2xl text-gray-700 font-bold md:text-3xl">Trabajamos con  las <span className="text-primary-100">mejores</span> marcas</h2>
                </div>
                <div 
                data-aos="fade-up"
                data-aos-duration="1000"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
                {marcas.map( marca =>{
                    return(
                        <div key={marca.id} className="p-4">
                            <img src={marca.img} className="w-32" alt={marca.nombre} />
                        </div>
                    )
                })}
                </div>
            </div>
        </div>                             
    )
}
export default Brands;