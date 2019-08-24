import React, { Component } from 'react';
import Input from './input'; //imported bcoz of renderInput method
import Joi from 'joi-browser';

class Form extends Component {
    state = {  
        data:{},
        errors:{}
    }
    validate= ()=>{
        //Joi implementation:
        const options = {abortEarly: false}
        const {error}= Joi.validate(this.state.data, this.schema, options);
        //console.log(result); //before "result.error" object destructuring
        if(!error) return null;
        const errors = {}
        for (let item of error.details)
            errors[item.path[0]] = item.message;            
        return errors;
    }
    validateProperty= ({name, value})=>{
        console.log("validate Property called")
        //Joi implementation for validation
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    }
    handleSubmit = e =>{
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {} });
        if(errors) return;
        this.doSubmit();
    }   
    renderButton=(label)=>{       
        return <button disabled={this.validate()}
        className="btn btn-primary">{label}</button>
    }
    renderInput=(name, label, type='text')=>{
        const {data, errors} = this.state;  
        return <Input 
            name={name} 
            type={type}
            value={data[name]} 
            label={label}
            onChange={this.handleChange}
            error={errors[name]}/>
    }
}
 
export default Form;