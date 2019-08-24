import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class Register extends Form {
    state = { 
        data:{username:'', password:'',name:''},
        errors:{}
    }
    schema = {
        username : Joi.string().email().required().label("Username"),
        password : Joi.string().min(5).required().label("Password"),
        name : Joi.string().required().label("Name")
    };
    doSubmit=()=>{
        //const username= this.username.current.value;
        console.log("submitted");
    }
    handleChange= ({currentTarget:input}) =>{
        //handle errors for tab change and only for particular input instead of returning errors for entire form submission
        const errors= {...this.state.errors}
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name]=errorMessage;
        else delete errors[input.name];
        //save input values in the state
        const data= {...this.state.data};
        // account.username = e.currentTarget.value; //use as below to access 'data' obj properties (username, password) dynamically
        data[input.name] = input.value;
        this.setState({data, errors});
    }
    render() { 
        return ( <div><h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
            {this.renderInput('username', 'UserName')}
            {this.renderInput('password', 'Password','password')}
            {this.renderInput('name', 'Name')}
            {this.renderButton('Register')}
        </form>
        </div> );
    }
}
 
export default Register;