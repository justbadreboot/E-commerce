import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const mainSlider = () =>{
    
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
                <SwiperSlide>
                    <img src='https://farmaenlace.vtexassets.com/assets/vtex.file-manager-graphql/images/fdb00c6d-88f5-4b87-81f0-4d249d609c8b___3374c306a0b1141fd6b36333df6c66d3.jpg' alt=''/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://farmaenlace.vtexassets.com/assets/vtex.file-manager-graphql/images/aac4e9e8-e2d4-4b1a-b2db-929bb01d3de9___c110088998d113272840f9606f896471.jpg" alt=''/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default mainSlider;