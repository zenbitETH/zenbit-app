import React from "react"
import Web3 from "web3"
import SignInComponent from "./contract_tasks/SignInComponent"
import KeysManagement from "./contract_tasks/KeysManagement"
import AssetsManagement from "./contract_tasks/AssetsManagement"
import RegisterView from "./contract_tasks/RegisterView"

let web3;
let accounts;

class TasksContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            buttonVisibility: "none"
        }
        this.initComponent = this.initComponent.bind(this)
        //this.initComponent();
        this.enableMetamask = this.enableMetamask.bind(this)
        this.initComponent()
    }

    render() {
        return(
            <div>
                <button type="submit"
                style={{display: this.state.buttonVisibility}}
                onClick={this.enableMetamask}
                className="button-submit">
                    Conectar Metamask
                </button>
                <SignInComponent />
                <KeysManagement />
                <AssetsManagement />
                <RegisterView />
            </div>
    )}

    async initComponent() {
        if (window.ethereum) {
            web3 = new Web3(window.ethereum);
       }
       // Legacy DApp Browsers
        else if (window.web3) {
            web3 = new Web3(window.web3.currentProvider);
        }
       // Non-DApp Browsers
        else {
            alert('You have to install MetaMask !');
        }

        if(typeof web3 === "undefined") {
            return 0
        }

        accounts = await web3.eth.getAccounts()
        if(accounts.length === 0) {
            this.setButtonVisibility("initial")
        } else {
            this.setButtonVisibility("none")
        }
    }

    async enableMetamask() {
        accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        this.setButtonVisibility("none")
    }

    setButtonVisibility(isVisible) {
        this.setState({
            buttonVisibility: isVisible
        })
    }

}

export default TasksContainer