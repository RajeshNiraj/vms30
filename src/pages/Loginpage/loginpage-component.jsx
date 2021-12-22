import React from "react";
import SignIn1 from "../../components/sign-in/signin1-component"
//import SignIn from "../../components/sign-in/signin-component"
import VmsLogo from "../../components/vms-logo/vmslogo-component";

import "./loginpage-styles.scss"

const LoginPage = () => (
    <div className="login">
        <VmsLogo/>
        <SignIn1/>
    </div>
)

export default LoginPage;