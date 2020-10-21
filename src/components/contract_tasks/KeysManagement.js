import React from "react"


function KeysManagement() {
    return(
        <div className="task-container">
            <div className="info-view">
                <div className="info-container">
                    <h3 className="head3">
                        TALLER DE GESTIÓN DE LLAVES PÚBLICAS Y PRIVADAS
                    </h3>
                    <p className="p-desc">
                        Mira el video y envía tu llave pública aquí para obtener:
                    </p>
                    <p className="chd">
                        Certificado de Habilidad Digital
                    </p>
                </div>
            </div>
            
            <div className="videos">
                <iframe  
                src="https://www.youtube.com/embed/Abzogd_3VBA">
                </iframe>
            </div>
        </div>
    )
}

export default KeysManagement