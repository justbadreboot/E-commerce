import Brands from "../components/home/Brands";
import Cta from "../components/home/Cta";
import MainServices from "../components/home/MainServices";
import Categories from "../components/home/Categories";
import MainProducts from "../components/home/MainProducts";
import MainMedServices from '../components/home/MainMedServices'
import Slider from "../components/Slider";
import MainLayout from "../Layout/MainLayout";
import { ToastContainer } from "react-toastify";

const HomePage = () => {
    return(
        <>
            <MainLayout>
                <ToastContainer position='top-right' theme='colored' autoClose={3000} />
                <Slider />
                <MainServices />
                <Categories />
                <MainProducts />
                <Cta />
                <MainMedServices />
                <Brands />
            </MainLayout>
        </>
    )
}

export default HomePage;