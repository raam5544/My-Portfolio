import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import Hamburger from 'hamburger-react'
import { useState } from 'react'


function Navbar() {
    const [isOpen, setOpen] = useState(false)
    return (isOpen ?
        <div className='navBody'>
            <NavLink to='/'><img className='homeLogo' src='/home.png' /></NavLink>
            <NavLink to='/' className='navLink'>Home</NavLink>
            <NavLink to='/about_me' className='navLink'>About Me</NavLink>
            <NavLink to='/projects' className='navLink'>Projects</NavLink>
            <Hamburger toggled={isOpen} toggle={setOpen} />
        </div> : <div className='navHumbPar'>
            <img className='homeLogo' src='/home.png' />
            <div className='searchBar'>
                <input type='text' placeholder='Type to Search'></input>
                <button style={{ backround: 'red', padding: '1px' }}><img className='searchLogo' src='./searchLogo.png'></img></button>
            </div>
            <Hamburger toggled={isOpen} toggle={setOpen} /></div>
    )
}


export default Navbar
