import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const MainSlider = () =>{
    
    const imagenes =[
        {
            id:1,
            img1:"https://www.fybeca.com/on/demandware.static/-/Sites-FybecaEcuador-Library/default/dw6b3155c0/images/homepage/hero-carousel/FY_HERO_CARROUSEL_desktop_dias_bebe_lunes_feb-min.jpg",
            img2:"https://www.fybeca.com/on/demandware.static/-/Sites-FybecaEcuador-Library/default/dwc6b8ef3b/images/homepage/hero-carousel/FY_HERO_CARROUSEL_mobile_dias_bebe_lunes_feb-min.jpg"

        },
        {
            id:2,
            img1:"https://www.fybeca.com/on/demandware.static/-/Sites-FybecaEcuador-Library/default/dwcf765275/images/homepage/hero-carousel/FY_Hero_carrousel_desktop_proyecto_dermo_feb-min.jpg",
            img2:"https://www.fybeca.com/on/demandware.static/-/Sites-FybecaEcuador-Library/default/dw897512c6/images/homepage/hero-carousel/FY_Hero_carrousel_mobile_proyecto_dermo_feb-min.jpg"
        },
    ]
    return(
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                effect={"fade"}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {imagenes.map(imagen =>(
                    <SwiperSlide key={imagen.id} className='w-full relative'>
                        <div className='w-full'>
                            <img className='object-cover w-full h-full hidden sm:block' src={imagen.img1} alt=''/>
                            <img className='object-cover w-full h-full sm:hidden' src={imagen.img2} alt=''/>
                        </div>
                        {/*<div className='absolute'>
                            <button className='text-black'>Compra ya</button>
                        </div>*/}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default MainSlider;