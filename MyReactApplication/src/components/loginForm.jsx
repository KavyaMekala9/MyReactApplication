import React, { Component } from 'react';
// import Input from './common/input';
import Joi from 'joi-browser';
import Form from './common/form';

class LoginForm extends Form {
    state={
        data:{username:'', password:''},
        errors:{}
    };
    //using Joi for validation: set schema initially
    schema = {
        username : Joi.string().required().label("Username"),
        password : Joi.string().required().label("Password")
    };
    //username= React.createRef(); // "ref" concept is used in vanilla.js
    
    // componentDidMount(){
    //     this.username.current.focus();
    // }
    // validate= ()=>{
    //     //Joi implementation:
    //     const options = {abortEarly: false}
    //     const {error}= Joi.validate(this.state.account, this.schema, options);
    //     //console.log(result); //before "result.error" object destructuring
    //     if(!error) return null;
    //     const errors = {}
    //     for (let item of error.details)
    //         errors[item.path[0]] = item.message;            
    //     return errors;
    //     //Implementation before Joi library for validation:
    //     // const errors={};
    //     // const {account}= this.state;
    //     // console.log("validate called")
    //     // if(account.username.trim()===''){
    //     //     errors.username= "Username is required";
    //     // }
    //     // if (account.password.trim()==='') {
    //     //     errors.password= "Password is required";
    //     // }
    //     // return Object.keys(errors).length === 0 ? null : errors;
    // }

    // validateProperty= ({name, value})=>{
    //     console.log("validate Property called")
    //     //Joi implementation for validation
    //     const obj = {[name]: value};
    //     const schema = {[name]: this.schema[name]};
    //     const {error} = Joi.validate(obj, schema);
    //     return error ? error.details[0].message : null;
    //     //before Joi implementation for validation
    //     // if(name === 'username') {
    //     //     if (value.trim()==='') return 'Username is required'
    //     // }
    //     // if(name === 'password') {
    //     //     if (value.trim()==='') return 'Password is required'
    //     // }
    // }
    // handleSubmit = e =>{
    //     e.preventDefault();
    //     const errors = this.validate();
    //     this.setState({errors: errors || {} });
    //     if(errors) return;
        
    // }
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
        // const {data, errors} = this.state;  
        return ( <div><h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
            {this.renderInput('username', 'UserName')}
            {this.renderInput('password', 'Password','password')}

            {/* <Input name="password" 
            value={data.password} 
            label="Password"
            onChange={this.handleChange}
            error={errors.password}/> */}

            {this.renderButton('Login')}
        </form>
        </div> );
    }
}
 
export default LoginForm;