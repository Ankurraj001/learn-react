import React from 'react'
import { useRoutes} from 'react-router-dom';
import ReadFile from './ReadFile';
import About from './About';
import Data from './Data';
import Tables from './Tables';


const Router = () => {
    const routes = useRoutes([
        { path: '/', element: <Tables /> },
        { path: 'about', element: <About /> },
    ]);

    return routes;
};

export default Router