const Brands =() =>{
    return(
        <div className="py-16 bg-gray-100">
            <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
                <div className="m-auto text-center lg:w-7/12">
                    <h2 className="text-2xl text-gray-700 font-bold md:text-4xl">Trabajamos con  las mejores marcas</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                    <div className="p-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pfizer_logo.svg/2560px-Pfizer_logo.svg.png" className="w'32" alt=""/>
                    </div>
                    <div className="p-4">
                        <img src="images/clients/client-8.png" className="w-32" alt=""/>
                    </div>
                    <div className="p-4">
                        <img src="images/clients/client-3.png" className="w-32 " alt=""/>
                    </div>
                    <div className="p-4">
                        <img src="images/clients/client-1.png" className="w-32 " alt=""/>
                    </div>
                    <div className="p-4">
                        <img src="images/clients/tailus.svg" className="w-32" alt=""/>
                    </div>
                    <div className="p-4">
                        <img src="images/clients/microsoft.svg" className="w-32" alt=""/>
                    </div>
                </div>
            </div>
        </div>                             
    )
}
export default Brands;