import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const routes = () =>{
    return(
        <>
            <Routes>
                <Route path='/' element={<HomePage />}> </Route>
            </Routes>
        </>
    )

}

export default routes;