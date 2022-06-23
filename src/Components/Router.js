import React from 'react'
import { useRoutes} from 'react-router-dom';
import ReadFile from './ReadFile';
import About from './About';
import Data from './Data';
import Table from './Table';


const Router = () => {
    const routes = useRoutes([
        { path: '/', element: <Table /> },
        { path: 'about', element: <About /> },
    ]);

    return routes;
};

export default Router