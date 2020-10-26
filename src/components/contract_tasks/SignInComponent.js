import React from "react"


class SignInComponent extends React.Component {

    constructor(props) {
        super()
        this.state = props.connector
        
        this.mintCSToken = this.mintCSToken.bind(this)
        this.renderOpposite = this.renderOpposite.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    async mintCSToken() {
        if(this.state._accounts[0] !== this.state.public_key) {
            window.alert("Llave pública no es la misma que se autorizó con Metamask")
            this.setState({
                _hash: ""
            })
            return null
        }
        let hash = await this.state._instance.mintBatch(
            this.state._accounts[0],
            [1, 2],
            [45, 1],
            [],
            {from: this.state._accounts[0]}
        )
        this.props.hash(hash)
    }

    componentWillReceiveProps(props) {
        this.setState(props.connector)
    }

    handleChange({target}) {
        this.setState({
            public_key: target.value
        })
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
                        Tarea 1: Gestión de llaves públicas y privadas con Metamask
                        </h3>
                        <p className="p-desc">
                        Mira el video y pega tu dirección pública de metamask para obtener:
                        </p>
                        <p className="chd">
                        50 zNBT y un certificado de Ciber Seguridad Nivel 1 CS1
                        </p>
                        <div className="general-input">
                            <input type="text"
                            placeholder="Pega tu llave pública de metamask"
                            className="input-form"
                            onChange={this.handleChange}
                            >
                            </input>
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
                </div>
                
                <div className="videos">
                    <iframe  
                    src="https://www.youtube.com/embed/lI2wMFjLR0Q">
                    </iframe>
                </div>
                
            </div>
        )
    }
}

export default SignInComponent
