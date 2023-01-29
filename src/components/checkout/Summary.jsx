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
        <>
            <p class="text-xl font-medium">Resumen de Compra</p>
            <p class="text-gray-400">Verifica tus articulos.</p>
            <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                {productos.map(product=>(
                    <div class="flex flex-col rounded-lg bg-white sm:flex-row">
                        <>
                            <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src={product.img} alt={product.nombre} />
                            <div class="flex w-full flex-col px-4 py-4">
                                <span class="font-semibold">{product.nombre}</span>
                                <span class="float-right text-gray-400">{product.marca}</span>
                                <p class="text-lg font-bold">${product.precio}</p>
                            </div>
                        </>
                    </div>
                ))}
            </div>
        </>
    )

}
export default Summary;