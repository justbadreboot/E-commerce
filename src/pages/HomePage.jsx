import Brands from "../components/Brands";
import Cta from "../components/Cta";
import MainServices from "../components/MainServices";
import MainCategories from "../components/MainCategories";
import MainMedServices from "../components/MainMedServices";
import MainProducts from "../components/MainProducts";
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