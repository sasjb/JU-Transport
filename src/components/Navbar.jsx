import React, {useState} from 'react';
import "./Navbar.css";
import DrawerAppBar from './DrawerAppBar.jsx';
import {RxHamburgerMenu} from 'react-icons/rx';
import {Link} from 'react-router-dom';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
         <a href='/home' className='title'>Home</a>
         
      <ul className={menuOpen? "open": ""}>
        <li>
           <a href='/about'>About</a> 
        </li>
        <li>
           <a href='/transport'>Transport</a>
        </li>
        <li>
           <a href='/trips'>Trips</a>
        </li>
        <li>
           <a href='/employees'>Employees</a>
        </li>
        <li>
           <a href='/profile'>Profile</a>
        </li>
      </ul>
      <div>
         <DrawerAppBar/>
      </div>
    </nav>
  );
};

export default Navbar

