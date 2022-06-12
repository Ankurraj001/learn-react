import React from 'react'
import { useRoutes} from 'react-router-dom';
import ReadFile from './ReadFile';
import About from './About';
import Data from './Data';


const Router = () => {
    const routes = useRoutes([
        { path: '/', element: <Data /> },
        { path: 'about', element: <About /> },
    ]);

    return routes;
};

export default Router