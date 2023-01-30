const Summary =()=>{

    const productos=[
        {
            id:1,
            img:"https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            nombre:"Nike Air Max Pro 8888 - Super Light",
            precio:138.99,
            marca:"Nike"
        },
        {
            id:2,
            img:"https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            nombre:"Nike Air Max Pro 8888 - Super Light",
            precio:138.99,
            marca:"Nike"
        },
        {
            id:3,
            img:"https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            nombre:"Nike Air Max Pro 8888 - Super Light",
            precio:138.99,
            marca:"Nike"
        },
    ]

    return(
        <div className='font-poppins'>
            <p className="text-xl font-medium">Resumen de Compra</p>
            <p className="text-gray-400">Verifica tus articulos.</p>
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                {productos.map(product=>(
                    <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                        <>
                            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={product.img} alt={product.nombre} />
                            <div className="flex w-full flex-col px-4 py-4">
                                <span className="font-semibold">{product.nombre}</span>
                                <span className="float-right text-gray-400">{product.marca}</span>
                                <p className="text-lg font-bold">${product.precio}</p>
                            </div>
                        </>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default Summary;