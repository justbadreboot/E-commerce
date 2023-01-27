import Brands from "../components/home/Brands";
import Cta from "../components/home/Cta";
import MainServices from "../components/home/MainServices";
import MainCategories from "../components/home/MainCategories";
import MainProducts from "../components/home/MainProducts";
import Slider from "../components/Slider";
import MainLayout from "../Layout/MainLayout";

const HomePage = () => {
    return(
        <>
            <MainLayout>
                <Slider />
                <MainServices />
                <MainCategories />
                <MainProducts />
                <Cta />
                <Brands />
            </MainLayout>
        </>
    )
}

export default HomePage;