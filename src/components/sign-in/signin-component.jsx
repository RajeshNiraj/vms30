import { React , Component } from "react";
import FormInput from "../form-input/form-input-component";
import CustomButton from "../custom-button/custom-button-component";
import bcrypt from "bcryptjs/dist/bcrypt";
import "./signin-styles.scss"


class SignIn extends Component {
    
    constructor(props){
        super();

        this.state ={
            username:"",
            password:""
        }
    }

    handleChange = event =>{
        const { value, name } = event.target;
        this.setState({ [name]: value }  )
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { username, password } = this.state;
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)
        var formBody = [];
        var uname = "username";
        var pass = "password";
        formBody.push(uname + "=" + username);
        formBody.push(pass + "=" + password);
        formBody = formBody.join("&");
        console.log(formBody);
        
        try{
            const accessResponse = 
                    await fetch('http://localhost:9190/api/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: formBody
                
                });               
                 const token = await accessResponse.json()
                 console.log(token);
                 this.setState( { username:"" , password:""})
            }catch(err){
                console.log(err);
            }
    } 

    render(){
        const { username, password } = this.state
        return (
            <div className="sign-in">
                <p className="title">Sign in with your username and password</p>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="username" 
                      handleChange={this.handleChange} value={username} 
                       label="username" required/>
                    <FormInput type="password" name="password" 
                       handleChange={this.handleChange} value={password} label="password" required/>
                    
                    <div className="buttons">
                        <CustomButton  
                             type="submit">Sign in</CustomButton>
                    </div>

                </form>
            </div>
        )
    }

}

export default SignIn;