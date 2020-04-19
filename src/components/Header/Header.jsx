import React from "react";

function Header() {
    return(
        <header>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Paxodev</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="sass.html">Home</a></li>
                            <li><a href="badges.html">About</a></li>
                            <li><a href="collapsible.html">Contact</a></li>
                        </ul>
                        <ul className="sidenav" id="mobile-demo">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">Javascript</a></li>
                            <li><a href="mobile.html">Mobile</a></li>
                         </ul>
                    </div>
            </nav>
        </header>
    );
}


export default Header;