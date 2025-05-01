import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

    const Links= <>
    <nav className='md:flex gap-5 text-lg font-medium'>
        <NavLink to='/' className={({ isActive}) =>(isActive ? "text-decoration: underline" : "")} >Home</NavLink>
        <NavLink to='/mybookings' className={({ isActive}) =>(isActive ? "text-decoration: underline" : "")} >My-Bookings</NavLink>
        <NavLink to='/blogs' className={({ isActive}) =>(isActive ? "text-decoration: underline" : "")}>Blogs</NavLink>
        <NavLink to='/contact' className={({ isActive}) =>(isActive ? "text-decoration: underline" : "")}>Contact</NavLink>
    </nav>
    </>




    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
            Links
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><span><img src="https://i.ibb.co.com/M5PYNmsq/logo.png" alt="" /></span>Law.BD</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        Links
      }
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#0EA106] rounded-full">Contact Now</a>
  </div>
</div>
    );
};

export default Navbar;