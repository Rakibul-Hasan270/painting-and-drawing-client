import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {

    const { users, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log(users)

    const links = <div className='space-x-10'>
        <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""} to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""} to='/artItem'>Arts & Crafts Item</NavLink>
        {users && <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""} to='/addCraft'>Add Crafts</NavLink>}
        <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""} to='/login'>Login</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""} to='/register'>Register</NavLink>
    </div>

    const handelSignOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="max-w-6xl mx-auto navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Craftify</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    users ?
                        <div className='flex gap-4 items-center'>
                            <div className="avatar avatar-online cursor-pointer relative group">
                                <div className="w-10 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                                {/* <div className="absolute group-hover:opacity-100">
                                    {users.email}
                                </div> */}
                            </div>
                            <button className='btn' onClick={handelSignOut}>Sign out</button>
                        </div>
                        :
                        <div>
                            <Link to='/login' className="btn">Sign in</Link>
                            <Link to='/register' className="btn">Sign Up</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;