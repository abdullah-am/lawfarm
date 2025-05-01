import {createBrowserRouter} from "react-router";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Errorpage/Error";
import Home from "../Pages/Home/Home";
import LawyerDtail from "../Pages/LawyerDetail/LawyerDtail";
import BlogDetail from "../Pages/BlogDetail/BlogDetail";
import Blog from "../Pages/Blog/Blog";
import BlogMain from "../Pages/BlogMain/BlogMain";
import MyBooking from "../Pages/MyBookings/MyBooking";
import ErrorWrapper from "../Pages/ErrorWrapper/ErrorWrapper";


export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
    //   errorElement:<Error></Error>,
      children:[
         {
            index:true,
            loader:()=>fetch('/lawyer.json'),
            path:"/",
            Component:Home
         },
         {
            path:'/mybookings',
            loader:()=>fetch('/lawyer.json'),
            Component:MyBooking
         },
         {
            path:'/lawyerdetail/:licenseNumber',
            loader:()=>fetch('/lawyer.json'),
            Component:LawyerDtail
         },
         {
            path:'/blogs',
            loader:()=>fetch('/blogs.json'),
            Component:BlogMain
         },
        {
            path:'*',
            Component:ErrorWrapper
        }
      ]
      
    },
  ]);