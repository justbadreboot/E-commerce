import Brands from "../components/Brands";
import MainServices from "../components/mainServices";
import MainLayout from "../Layout/MainLayout";

const HomePage = () => {
    return(
        <>
            <MainLayout>
                <MainServices />
                <Brands />
            </MainLayout>
        </>
    )
}

export default HomePage;