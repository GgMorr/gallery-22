import React from 'react';
import Nav from './Nav';



const Header = () => {
    return (
        <>
            <header id="intro">
                <article className="fullheight">
                    <div className="hgroup">
                        <h1>The Humphrey Hotel</h1>
                        <h2>Humphrey Corner</h2>
                        <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow" /></a></p>
                    </div>
                </article>
                <Nav />
            </header>
        </>
    )
}

export default Header;