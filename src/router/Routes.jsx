import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import ShoppingCart from '../pages/ShoppingCart';
import Checkout from '../pages/CheckoutPage';
import FilterProductsPage from '../pages/FilterProductsPage';
import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import ServicesPage from '../pages/ServicesPage';
import SearchServicesPage from '../pages/SearchServicesPage';

const routes = () =>{
    return(
        <>
            <Routes>
                <Route path='/' element={<HomePage />}> </Route>
                <Route path='/nosotros' element={<AboutPage />}> </Route>
                <Route path='/contacto' element={<ContactPage />}> </Route>
                <Route path='/buscarProductos' element={<FilterProductsPage />}></Route>
                <Route path='/productos' element={<ProductsPage />} ></Route>
                <Route path='/producto/:id' element={<ProductDetailPage />}></Route>
                <Route path='/buscarServicios' element={<SearchServicesPage />}></Route>
                <Route path='/servicios' element={<ServicesPage />} ></Route>
                <Route path='/carrito' element={<ShoppingCart />}> </Route>
                <Route path='/checkout' element={<Checkout />}> </Route>
                <Route path='/login' element={<LoginPage />} ></Route>
            </Routes>
        </>
    )

}

export default routes;
