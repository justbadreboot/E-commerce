import { useGetLandingQuery } from "../store/serverApi";

const About =()=>{

    const {data: info, isSuccess} = useGetLandingQuery();
    return (
        <div className="2xl:container 2xl:mx-auto lg:pt-16 lg:px-20 md:py-12 md:px-6 pt-8 px-4 font-poppins">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-4/12 ">
                    <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                </div>
                <div className="w-full lg:w-8/12 flex flex-col justify-center">
                    <h1 className="text-2xl lg:text-3xl font-semibold leading-9 text-ternary-60 pb-4">Sobre Nosotros</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God.</p>
                    {isSuccess && (
                        info.map(card=>(
                            <div key={card.id}>
                                <div className="focus:outline-none mt-10 flex flex-wrap justify-center gap-10">
                                    <div className="focus:outline-none flex sm:w-full md:w-5/12 pb-10">
                                        <div className="w-20 h-20 relative mr-5">
                                            <div className="absolute top-0 right-0 bg-secondary-40 rounded w-16 h-16 mt-2 mr-1" />
                                            <div className="absolute text-white bottom-0 left-0 bg-secondary-80  rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="w-10/12">   
                                            <h2 className="focus:outline-none text-md font-semibold leading-tight text-ternary-100">Misión</h2>
                                            <p className="focus:outline-none text-sm text-gray-600 leading-normal pt-2">{card.mission}</p>
                                        </div>
                                    </div>
                                    <div className="focus:outline-none flex sm:w-full md:w-5/12 pb-10">
                                        <div className="w-20 h-20 relative mr-5">
                                            <div className="absolute top-0 right-0 bg-secondary-40 rounded w-16 h-16 mt-2 mr-1" />
                                            <div className="absolute text-white bottom-0 left-0 bg-secondary-80  rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="w-10/12">   
                                            <h2 className="focus:outline-none text-md font-semibold leading-tight text-ternary-100">Visión</h2>
                                            <p className="focus:outline-none text-sm text-gray-600 leading-normal pt-2">{card.vision}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );

}
export default About;