import { React , Component } from "react";
import { connect } from "react-redux";
//import { useNavigate } from 'react-router-dom';
import FormInput from "../form-input/form-input-component";
import CustomButton from "../custom-button/custom-button-component";

import { setCurrentUser } from "../../redux/user/user-actions";
//import { selectCurrentUser } from "../../redux/user/user-selectors";
//import bcrypt from "bcryptjs/dist/bcrypt";
import "./signin-styles.scss"

//connect is an higher order component that lets us modify
//our compnent to have access to the things related to the
//redux
//higher order components are functions that take components
//as argments and return you a new sooped up component.

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
        var formBody = [];
        var uname = "username";
        var pass = "password";
        formBody.push(uname + "=" + username);
        formBody.push(pass + "=" + password);
        formBody = formBody.join("&");
        console.log(formBody);  
        const { setCurrentUser } = this.props;     
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
                 //this.props.navigation.navigate("/homepage");
                 setCurrentUser
                        ({uname:username , pass:password})
            }catch(err){
                setCurrentUser({ username:"" , password:""})
                console.log(err);
            }
    } 

    render(){
        
        const { username, password } = this.state             
        return (
            <div className="sign-in">
                <p className="title">
                    Sign in with your username and password
                 </p>
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

//function that allows us to access the state
//with the state being our root reducer.
//state is the root reducer
// const mapStateToProps = ({ state }) =>({
//     currentUser : selectCurrentUser(state)
// })

//this is a function which gets dispatch property and return 
//an object 
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(SignIn);
