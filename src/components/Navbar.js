import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
   <nav className='nav'>
    <Link to='/' className='site-title'>Dashboard</Link>
    <ul>
        <li className='active'>
            <Link to ='/page1'>Page 1</Link>
        </li>
        <li>
            <Link to='/page2'>Page 2</Link>
        </li>
    </ul>
    
    </nav>
  )
}
 