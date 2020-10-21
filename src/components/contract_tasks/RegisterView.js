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
            
            <div className="form">
                <div className="form-view">
                    <div className="form-container">
                        <h3 >
                            Pre-registro a Zenbit
                        </h3>
                        <p className="form-text">
                            Zenbit es una start-up de blockchain establecida en Querétaro, México. 
                            Desarrollamos un sistema de recompensas que otorga cripto a cambio generar 
                            o verificar información urbana, realizar microtrabajos dentro de las 
                            ciudades y mejorar las habilidades digitales de sus usuarios.
                        </p>
                        <div>
                            <form>
                                <div className="name-input">
                                    <label>
                                        ¿Cómo te llamas? *
                                    </label>
                                    <div className="spaced-input">
                                        <input type="text"
                                        placeholder="Nombre"
                                        className="input-form">
                                        </input>
                                        <input type="text"
                                        placeholder="Apellido"
                                        className="input-form">
                                        </input>
                                    </div>
                                </div>
                                <div className="name-input">
                                    <label>
                                        Correo electrónico *
                                    </label>
                                    <div className="spaced-input">
                                        <input type="email"
                                        style={{width:"100%"}} 
                                        placeholder="Correo electrónico"
                                        className="input-form">
                                        </input>
                                    </div>
                                </div>
                                <div className="name-input">
                                    <label>
                                        Ciudad donde vives *
                                    </label>
                                    <div
                                        className="spaced-input">
                                        <input type="text"
                                        style={{width:"100%"}} 
                                        placeholder="Guadalajara, Jalisco"
                                        className="input-form">
                                        </input>
                                        <button type="submit"
                                        className="button-submit">
                                            Bienvenido a Zenbit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterView
