import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'; // Add this import for regular routing

const NavLinks = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200 ) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let navbarClasses=['px-4 text-2xl font-extrabold'];
    scrolled ? navbarClasses.push('text-blue-900 hover:text-blue-900 ') : navbarClasses.push('text-blue-900 hover:text-blue-800');
    
    return (
        <>
            <HashLink className={navbarClasses.join(" ")} smooth to="/#hero">
                About
            </HashLink>
            <HashLink className={navbarClasses.join(" ")} smooth to="/#services">
                Services
            </HashLink>
            <HashLink className={navbarClasses.join(" ")} smooth to="/#gallery">
                Gallery
            </HashLink>
            <HashLink className={navbarClasses.join(" ")} smooth to="/#contact">
                Contact Us
            </HashLink>
        </>
    )
}

export default NavLinks;