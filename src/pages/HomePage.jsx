import Brands from "../components/Brands";
import MainServices from "../components/mainServices";
import Slider from "../components/Slider";
import MainLayout from "../Layout/MainLayout";

const HomePage = () => {
    return(
        <>
            <MainLayout>
                <Slider />
                <MainServices />
                <Brands />
            </MainLayout>
        </>
    )
}

export default HomePage;