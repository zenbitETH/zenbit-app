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
                            Zenbit. Todos los derechos reservados
                        </p>
                    </div>
                    <div className="contact-container">
                        <div className="contact-view">
                            <p>
                                Medium
                            </p>
                        </div>
                        <div className="contact-view">
                            <p>
                                Twitter
                            </p>
                        </div>
                        <div className="contact-view">
                            <p>
                                Facebook
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Footer