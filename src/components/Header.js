import React from "react";


function Header() {
    return(
        <div className="header">
            <div className="head">

                <div className="zenbit-logo">
                    <a href="#" className="logo"> Zenbit </a>
                </div>
                
                <div className="z-links">
                    <nav>
                        <a className="header-element" 
                        href="#">Inicio</a>
                        <a className="header-element" 
                        href="#">Recompensas</a>
                        <a className="header-element" 
                        href="#">Contacto</a>
                    </nav>
                </div>

            </div>
        </div>
    )
}

export default Header
