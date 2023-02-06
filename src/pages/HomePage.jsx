import Brands from "../components/home/Brands";
import Cta from "../components/home/Cta";
import MainServices from "../components/home/MainServices";
import Categories from "../components/home/Categories";
import MainProducts from "../components/home/MainProducts";
import MainMedServices from '../components/home/MainMedServices'
import Slider from "../components/home/Slider";
import MainLayout from "../Layout/MainLayout";

const HomePage = () => {
    return(
        <>
            <MainLayout>
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