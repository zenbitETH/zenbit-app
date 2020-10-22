import React from "react"


function RegisterView() {
    return(
        <div className="task-container-register ">
            <div className="info-view">
                <div className="info-container">
                    <h3 className="head-register">
                        ES EL TIEMPO
                    </h3>
                    <p className="p-desc-register">
                        Es el tiempo de reducir la brecha digital, financiera y laboral. 
                        Es el tiempo de darle el justo valor a cada trabajo. 
                        Es el tiempo de construir un mundo sin fronteras.
                        Pre-registrate o escribenos para construir una nueva forma de usar, 
                        obtener y acumular criptomonedas en las ciudades. 
                    </p>
                </div>
            </div>
            
            <div className="google-form-container">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSffKTPH9pO4KCINyKrHTcihekYN2kytVj_ZJGqGmh-CQIWeag/viewform?embedded=true"
            className="google-form-frame"
 f          rameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
            </div>
            
        </div>
    )
}

export default RegisterView
