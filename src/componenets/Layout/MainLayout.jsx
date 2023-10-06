import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
    
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;