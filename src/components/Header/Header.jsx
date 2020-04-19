import React from "react";

function Header() {
    return(
        <header>
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Paxodev</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="sass.html">Home</a></li>
                            <li><a href="badges.html">About</a></li>
                            <li><a href="collapsible.html">Contact</a></li>
                        </ul>
                    </div>
            </nav>
        </header>
    );
}

export default Header;