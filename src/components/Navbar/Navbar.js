import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link  } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth );
 
  const [signOut, loading, error] = useSignOut(auth);
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  const signOutHandler =()=>{
    signOut(auth);
  }

    const menuItem = <> 
    <li><Link  to='/'>Home</Link ></li>
    <li><Link  to='/about'>About</Link ></li>
    <li><Link  to='/appointment'>Appointment</Link ></li>
    <li><Link  to='/reviews'>Reviews</Link ></li>
    <li><Link  to='/contacts'>Contacts Us</Link ></li>
    <li>{user ? <Link  onClick={signOutHandler} >Log Out</Link >:<Link  to='/login'>Login</Link >}</li>
         </> 
     return (
        <div className="navbar bg-base-100 sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-third lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItem} 
            </ul>
          </div>
         
          <Link to='/' className="btn btn-ghost normal-case text-xl">Doctor Portal</Link>
        </div>
        <div className="navbar-center hidden lg:flex sticky">
          <ul className="menu menu-horizontal px-1">
          {menuItem} 
          </ul>
        </div>
        
      </div>
    );
};

export default Navbar;