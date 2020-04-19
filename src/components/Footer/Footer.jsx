import React from "react";

function Footer() {
    return (
        <footer className={`footer`}>
            <h5>&copy; {new Date().getFullYear()}. All rights reserved.</h5>
            <h5>Paxodev.in</h5>
        </footer>
    );
}

export default Footer;