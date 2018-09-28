import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <React.Fragment>
            <nav>
                <div className="nav-wrapper blue darken-3">
                    &nbsp;&nbsp;
                    <Link to={'/'} className="brand-logo">React</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/posts'}>Posts</NavLink></li>
                        <li><NavLink to={'/about'}>About</NavLink></li>
                        <li><NavLink to={'/contact'}>Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default withRouter(NavBar);