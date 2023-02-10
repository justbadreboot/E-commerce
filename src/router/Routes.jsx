import ShoppingCart from '../pages/ShoppingCart';
import Checkout from '../pages/CheckoutPage';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import SearchProductsPage from '../pages/SearchProductsPage';
import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import ServicesPage from '../pages/ServicesPage';
import SearchServicesPage from '../pages/SearchServicesPage';
import DoctorsPage from "../pages/DoctorsPage"
import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';


const MainRouter = () =>{

    return(
        <Routes>
            <Route path='/' element={<HomePage />}> </Route>       
            <Route path='/nosotros' element={<AboutPage />}> </Route>
            <Route path='/contacto' element={<ContactPage />}> </Route>
            <Route path='/buscarProductos' element={<SearchProductsPage />}></Route>
            <Route path='/productos' element={<ProductsPage />} ></Route>
            <Route path='/producto/:id' element={<ProductDetailPage />}></Route>
            <Route path='/buscarServicios' element={<SearchServicesPage />}></Route>
            <Route path='/servicios' element={<ServicesPage />} ></Route>
            <Route path='/doctores' element={<DoctorsPage />} ></Route>
            <Route path='/login' element={<LoginPage />} ></Route>
            <Route path='/*' element={<HomePage />} ></Route>
            <Route element={<ProtectedRoutes />}>
                <Route path='/carrito' element={<ShoppingCart />}> </Route>
                <Route path='/checkout' element={<Checkout />}> </Route>
            </Route>
        </Routes>
    )
}

export default MainRouter;
