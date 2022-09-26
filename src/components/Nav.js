import React from 'react';
import menuLinksData from './data/menu_links.json';

const Nav = () => {
    return (

            <nav id="nav">
                <div className="navbar">
                    <div className="brand"><a href="#welcome">Our <span> Hotel</span></a></div>
                    <ul>
                        {
                            menuLinksData.map((link) =>
                                <li><a className={`icon ${link.class}`} href={link.href}><span>{link.text}</span></a></li>
                       )
                     }

                    </ul>
                </div>
            </nav>
    
    )
}

export default Nav;