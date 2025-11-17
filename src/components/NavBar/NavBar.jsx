import React from "react";
import { NavLink } from "react-router-dom"; // *** Use NavLink instead of Link for active styling ***
import { Home, Plus, List, Settings } from 'lucide-react'; // Example: Import icons for visual aid

const NavBar = () => {
 
 const linkClasses = ({ isActive }) =>
  `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
    isActive
      ? // ACTIVE STATE STYLES (Fuchsia Accent)
        "text-fuchsia-600 bg-fuchsia-100 border-b-2 border-fuchsia-400 " +
        // Dark Mode Safety Check: Ensures visibility if dark mode is later introduced on a dark background
        "dark:text-black-800 dark:bg-fuchsia-900/40 dark:border-fuchsia-400"
      : // INACTIVE & HOVER STATE STYLES
        "text-gray-600 hover:text-fuchsia-500 hover:bg-fuchsia-50 " +
        // Dark Mode Safety Check
        "dark:text-gray-500 dark:hover:text-fuchsia-300 dark:hover:bg-gray-700"
  }`;

  return (
    <div className="flex fixed top-0 w-full bg-transparent shadow-none p-2 z-50 lg:px-8">
      <div className="navbar-start">
        
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-52 p-2 shadow-lg"
          >
            <li><NavLink to="/" className={linkClasses}><Home size={16} /> Home</NavLink></li>
            <li><NavLink to="/add-habit" className={linkClasses}><Plus size={16} /> Add Habit</NavLink></li>
            <li><NavLink to="/my-habits" className={linkClasses}><List size={16} /> My Habits</NavLink></li>
            
          </ul>
        </div>
        
        
        <div className="flex items-center space-x-2 ml-2">
            
            <a className="text-xl font-bold text-orange-500 tracking-tight"><span>HABITO</span></a>
        </div>
      </div>

      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-1">
          <li><NavLink to="/" className={linkClasses}>Home</NavLink></li>
          <li><NavLink to="/add-habit" className={linkClasses}>Add Habit</NavLink></li>
          <li><NavLink to="/my-habits" className={linkClasses}>My Habits</NavLink></li>
          
        </ul>
      </div>

      <div className="navbar-end">
        
        <button className="btn btn-sm md:btn-md bg-orange-500 text-white hover:bg-orange-600 rounded-full border-none shadow-md shadow-green-500/50">
           SignIn
        </button>
      </div>
    </div>
  );
};

export default NavBar;