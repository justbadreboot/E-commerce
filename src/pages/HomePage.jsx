import Brands from "../components/Brands";
import Cta from "../components/Cta";
import MainServices from "../components/mainServices";
import Slider from "../components/Slider";
import MainLayout from "../Layout/MainLayout";

const HomePage = () => {
    return(
        <>
            <MainLayout>
                <Slider />
                <MainServices />
                <Cta />
                <Brands />
            </MainLayout>
        </>
    )
}

export default HomePage;