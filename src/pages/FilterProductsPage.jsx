import { ToastContainer } from "react-toastify";
import Filter from "../components/Filter";
import MainLayout from "../Layout/MainLayout";

const FilterProductsPage = () =>{
    return(
        <MainLayout>
            <ToastContainer position='top-right' theme='colored' autoClose={3000} />
            <Filter />
        </MainLayout>
    )

}
export default FilterProductsPage;