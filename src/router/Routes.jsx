import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import ProductDetailPage from '../pages/ProductDetailPage';

const routes = () =>{
    return(
        <>
            <Routes>
                <Route path='/' element={<HomePage />}> </Route>
                <Route path='/nosotros' element={<AboutPage />}> </Route>
                <Route path='/contacto' element={<ContactPage />}> </Route>
                <Route path='/producto/:id' element={<ProductDetailPage />}> </Route>
            </Routes>
        </>
    )

}

export default routes;
