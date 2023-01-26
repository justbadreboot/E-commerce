import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const mainSlider = () =>{
    
    const imagenes =[
        {
            id:1,
            img:"https://www.fybeca.com/on/demandware.static/-/Sites-FybecaEcuador-Library/default/dw91a1c598/images/homepage/hero-carousel/FY_HERO_CARROUSEL_desktop_dias_bebe_miercoles_ene.jpg",
        },
        {
            id:2,
            img:"https://www.fybeca.com/on/demandware.static/-/Sites-FybecaEcuador-Library/default/dw2e5c1deb/images/homepage/hero-carousel/FY_Hero_carrousel_desktop_proyecto_dermo_ene.jpg",
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
                    <SwiperSlide key={imagen.id}>
                        <img src={imagen.img} alt=''/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default mainSlider;