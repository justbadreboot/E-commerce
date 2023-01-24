import Brands from "../components/Brands";
import Offers from "../components/Offers";
import MainLayout from "../Layout/MainLayout";

const HomePage = () => {
    return(
        <>
            <MainLayout>
                <Offers />
                <Brands />
            </MainLayout>
        </>
    )
}

export default HomePage;