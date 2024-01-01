import React, { useState } from 'react';
import './loremIpsumNavbar.css';
import { SlArrowDown } from 'react-icons/sl';
import { SlMagnifier } from 'react-icons/sl';

const LoremIpsumNavbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className='navbar'>
            <div className='navbarLogo'>
                <h2>LOGO</h2>
            </div>
            <div className={`navbarItem ${showMenu ? 'show' : ''}`}>
                <p className='navbarText'>Qualifications<SlArrowDown className='downArrowIcon' /></p>
                <p className='navbarText'>Organizations<SlArrowDown className='downArrowIcon' /></p>
                <p className='navbarText'>Research & Analysis<SlArrowDown className='downArrowIcon' /></p>
                <p className='navbarText'>Lorem ipusm<SlArrowDown className='downArrowIcon' /></p>
                <p className='navbarText'>Lorem ipsum<SlArrowDown className='downArrowIcon' /></p>
                <SlMagnifier className='navbarSearchIcon' />
                <button className='navbarButton'>Enrolment</button>
            </div>
            <div className='menuButton' onClick={toggleMenu}>
                <div className='menuIcon'></div>
                <div className='menuIcon'></div>
                <div className='menuIcon'></div>
            </div>
        </nav>
    );
};

export default LoremIpsumNavbar;
