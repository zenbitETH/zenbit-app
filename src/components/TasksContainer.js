import React from "react"
import Web3 from "web3"
import SignInComponent from "./contract_tasks/SignInComponent"
import KeysManagement from "./contract_tasks/KeysManagement"
import AssetsManagement from "./contract_tasks/AssetsManagement"
import RegisterView from "./contract_tasks/RegisterView"

let web3

class TasksContainer extends React.Component {

    constructor() {
        super()
        this.state = {

        }
        this.initComponent = this.initComponent.bind(this)
        this.initComponent()
    }

    render() {
        return(
            <div>
                <SignInComponent />
                <KeysManagement />
                <AssetsManagement />
                <RegisterView />
            </div>
    )}

    initComponent() {
        if (window.ethereum) {
            web3 = new Web3(window.ethereum);
            try { 
                window.ethereum.enable().then(function() {
                // User has allowed account access to DApp...
                });
            } catch(e) {
                // User has denied account access to DApp...
            }
       }
       // Legacy DApp Browsers
        else if (window.web3) {
            web3 = new Web3(window.web3.currentProvider);
        }
       // Non-DApp Browsers
        else {
            alert('You have to install MetaMask !');
        }
    }

}

export default TasksContainer