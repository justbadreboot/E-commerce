const About =()=>{
    const info=[
        {
            id:1,
            nombre:'Misión',
            descripcion:'It provides a very simple start, no need to write a lot of code, you just import it and start the primitive components and create the ones you need.',
            img:"https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg",
        },
        {
            id:2,
            nombre:'Visión',
            descripcion:'Modify the visual appearance of your site – including colors, fonts, margins and other style-related properties – with a sophisticated style.',
            img:"https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg",
        },
    ]
    return (
        <div className="2xl:container 2xl:mx-auto lg:pt-16 lg:px-20 md:py-12 md:px-6 pt-8 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-4/12 ">
                    <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                </div>
                <div className="w-full lg:w-8/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-semibold leading-9 text-gray-800 pb-4">Sobre Nosotros</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God.</p>
                    <div className="focus:outline-none mt-10 flex flex-wrap justify-center gap-10">
                        {info.map(card=>(
                            <div key={card.id} className="focus:outline-none flex sm:w-full md:w-5/12 pb-10">
                                <div className="w-20 h-20 relative mr-5">
                                    <div className="absolute top-0 right-0 bg-secondary-40 rounded w-16 h-16 mt-2 mr-1" />
                                    <div className="absolute text-white bottom-0 left-0 bg-secondary-80  rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                        <img src={card.img} alt={card.nombre} />
                                    </div>
                                </div>
                                <div className="w-10/12">   
                                    <h2 className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">{card.nombre}</h2>
                                    <p className="focus:outline-none text-base text-gray-600 leading-normal pt-2">{card.descripcion}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

}
export default About;