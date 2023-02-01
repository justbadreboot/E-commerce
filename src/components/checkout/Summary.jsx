const Summary =()=>{

    const productos=[
        {
            id:1,
            img:"https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            name:"Nike Air Max Pro 8888 - Super Light",
            pvp:138.99,
            brand:"Nike"
        },
        {
            id:2,
            img:"https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            name:"Nike Air Max Pro 8888 - Super Light",
            pvp:138.99,
            brand:"Nike"
        },
        {
            id:3,
            img:"https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            name:"Nike Air Max Pro 8888 - Super Light",
            pvp:138.99,
            brand:"Nike"
        },
    ]

    return(
        <div className='font-poppins'>
            <p className="text-xl font-medium">Resumen de Compra</p>
            <p className="text-gray-400">Verifica tus articulos.</p>
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                {productos.map(product=>(
                    <div key={product.id} className="flex flex-col rounded-lg bg-white sm:flex-row">
                        <>
                            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={product.img} alt={product.name} />
                            <div className="flex w-full flex-col px-4 py-4">
                                <span className="font-semibold">{product.name}</span>
                                <span className="float-right text-gray-400">{product.brand}</span>
                                <p className="text-lg font-bold">${product.pvp}</p>
                            </div>
                        </>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default Summary;