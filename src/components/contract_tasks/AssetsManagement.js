import React from "react"


class AssetsManagement extends React.Component {

    constructor(props) {
        super()
        this.state = props.connector
        this.mintCSToken = this.mintCSToken.bind(this)
        this.renderOpposite = this.renderOpposite.bind(this)
    }

    mintCSToken() {
        console.log(this.state)
    }

    componentWillReceiveProps(props) {
        this.setState(props.connector)
      }

      renderOpposite(visibility) {
        if(visibility === "initial") {
            return "none"
        } else {
            return "initial"
        }
    }

    render() {
        return(
            <div className="task-container">

                <div className="info-view">
                    <div className="info-container">
                        <h3 className="head3">
                            TALLER DE GESTIÓN AVANZADA DE ACTIVOS DIGITALES
                        </h3>
                        <p className="p-desc">
                            Mira el video y envía tu llave pública aquí para obtener:
                        </p>
                        <p className="chd">
                            Certificado de Habilidad Digital
                        </p>
                        <button type="submit"
                            style={{
                                display: this.renderOpposite(this.state.buttonVisibility)
                            }}
                            onClick={this.mintCSToken}
                            className="button-submit-contract">
                                Obtener certificado
                        </button>
                    </div>
                </div>
                
                <div className="videos">
                    <iframe  
                    src="https://www.youtube.com/embed/3UE_WRFNhJE">
                    </iframe>
                </div>

            </div>
        )
    }
}

export default AssetsManagement
