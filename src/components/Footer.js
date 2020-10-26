import React from "react"
import zl from "../assets/zl.png"


function Footer() {
    return(
        <div>
            <div className="image-section">
                <img src={zl} height="400em"
                className="logo-footer"/>
            </div>
            <div className="footer">
                    <div className="zenbit-rights">
                        <p>
                            Zenbit 2020. Todos los derechos reservados
                        </p>
                    </div>
                    <div className="contact-container">
                        <div className="contact-view">
                            <p>
                            <a href="https://docs.zenbit.city">Docs</a>
                            </p>
                        </div>
                        <div className="contact-view">
                            <p>
                            <a href="https://github.com/zenbitMX">GitHub</a>
                            </p>
                        </div>
                        <div className="contact-view">
                            <p>
                            <a href="https://twitter.com/zenbitMX">Twitter</a>    
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Footer