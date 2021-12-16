import React from "react";
import SignIn from "../../components/sign-in/signin-component";
import VmsLogo from "../../components/vms-logo/vmslogo-component";

import "./loginpage-styles.scss"

const LoginPage = () => (
    <div className="login">
        <VmsLogo/>
        <SignIn/>       
    </div>
)

export default LoginPage;