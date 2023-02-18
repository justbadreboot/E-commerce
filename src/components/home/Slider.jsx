import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from '../../assets/img/Slide1.png'
import slide2 from '../../assets/img/Slide2.png'
import slide3 from '../../assets/img/Slide3.png'
import slide12 from '../../assets/img/Slide12.png'
import slide22 from '../../assets/img/Slide22.png'
import slide32 from '../../assets/img/Slide32.png'

const MainSlider = () =>{
    
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
                <SwiperSlide className='w-full relative'>
                    <div className='w-full'>
                        <img className='object-cover w-full h-full hidden sm:block' src={slide1} alt=''/>
                        <img className='object-cover w-full h-full sm:hidden' src={slide12} alt=''/>
                    </div>
                </SwiperSlide>
                <SwiperSlide  className='w-full relative'>
                    <div className='w-full'>
                        <img className='object-cover w-full h-full hidden sm:block' src={slide2} alt=''/>
                        <img className='object-cover w-full h-full sm:hidden' src={slide22} alt=''/>
                    </div>
                </SwiperSlide>
                    <SwiperSlide  className='w-full relative'>
                    <div className='w-full'>
                        <img className='object-cover w-full h-full hidden sm:block' src={slide3} alt=''/>
                        <img className='object-cover w-full h-full sm:hidden' src={slide32} alt=''/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default MainSlider;