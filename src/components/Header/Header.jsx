import React from "react";

function Header() {
    return(
        <header>
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Paxodev</a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="sass.html">Home</a></li>
                            <li><a href="badges.html">About</a></li>
                            <li><a href="collapsible.html">Contact</a></li>
                        </ul>
                        <ul class="sidenav" id="mobile-demo">
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