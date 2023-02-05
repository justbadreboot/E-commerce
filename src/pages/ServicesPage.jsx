import { ToastContainer } from "react-toastify";
import Services from "../components/Services";
import MainLayout from "../Layout/MainLayout";

const ServicesPage = () => {
    return(
        <>
            <MainLayout>
                <ToastContainer position='top-right' theme='colored' autoClose={3000} />
                <Services />
            </MainLayout>
        </>
    )
}

export default ServicesPage;