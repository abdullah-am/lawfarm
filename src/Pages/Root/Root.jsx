import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet, useRouteError} from 'react-router';
import Footer from '../../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    const error = useRouteError();
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-315px)]'>
            <Outlet></Outlet>
            </div>
            <ToastContainer
             position="top-right"
             autoClose={3000}
             hideProgressBar={false}
             newestOnTop={false}
             closeOnClick
             rtl={false}
             pauseOnFocusLoss
             draggable
             pauseOnHover
            ></ToastContainer>
            {!error && <Footer></Footer>}
        </div>
    );
};

export default Root;