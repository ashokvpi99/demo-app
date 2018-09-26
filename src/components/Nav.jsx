import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <React.Fragment>
            <nav>
                <div className="nav-wrapper">
                    <Link to={'/'} className="brand-logo">React</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/about'}>About</NavLink></li>
                        <li><NavLink to={'/contact'}>Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default NavBar;