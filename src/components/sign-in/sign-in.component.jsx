import React from "react";

import FormInput from "../form-input/form-imput.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import './sign-in.styles.scss'

class Signin extends React.Component{
    constructor(props){
        super(props);
            
            this.state={
                email: '',
                password: ''
            }
        }

        handleSumbit=event=>{
            event.preventDefault();
            
            this.setState({email:'',password:''})
        }

        handleChange=event=>{
            const {value,name} = event.target;

            this.setState({[name]:value})
        }

        render(){
            return(
                <div className='sign-in'>
                    <h2> I already have an Account </h2>
                    <span> Sigin in with your email and password </span>

                    <form onSubmit={this.handleSumbit}>
                        <FormInput
                        name='email'
                        type='email'
                         handleChange={this.handleChange} 
                         value={this.state.email}  
                         label="email"
                         required

                         />
                        
                        <FormInput
                        name='password'
                        type='password'
                        value={this.state.email}  
                        handleChange={this.handleChange}
                        label="password"
                        required
                        />
                    

                        <CustomButton type='sumbit'> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle}> 
                        {' '}
                        Sign in  with Google {' '}
                        </CustomButton>
                    </form>
                </div>
            )
        }
    }

    export default Signin;