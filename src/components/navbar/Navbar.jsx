import React from 'react'
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {


  return (
    <div className = "navigation ">

        <div className="container-fluid flex ai-c jc-sb margin-inline-auto">
        <div className="logo">
                <Link to='/login'><img src = {logo}/></Link>
            </div>
            <div className="primary-nav ">
                <ul className="underline-indicators">
                    <li><Link className='text-white' to = '/'>Home</Link></li>
                    <li><Link className='text-white' to = '/portfolio'>Portfolio</Link></li>
                    <li><Link className='text-white' to = '/contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
  
</div>
  )
}

export default Navbar