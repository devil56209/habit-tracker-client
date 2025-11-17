import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='max-w-100% mx-auto'>
            <NavBar></NavBar>
            <div className="max-w-full">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;