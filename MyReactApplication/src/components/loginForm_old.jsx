import React, { Component } from 'react';
class LoginForm extends Component {
    state={
        account:{username:'', password:''}
    }
    username= React.createRef();
    
    // componentDidMount(){
    //     this.username.current.focus();
    // }
    handleSubmit = e =>{
        e.preventDefault();
        //const username= this.username.current.value;
        console.log("submitted");
    }
    handleChange= ({currentTarget:input}) =>{
        const account= {...this.state.account};
        // account.username = e.currentTarget.value; //use as below to access 'account' obj properties (username, password) dynamically
        account[input.name] = input.value;
        this.setState({account});
    }
    render() { 
        return ( <div><h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group"><label htmlFor="username">UserName</label>
            <input 
                id="username" 
                onChange={this.handleChange}
                name="username"
                value={this.state.account.username} 
                ref={this.username} 
                type="text" autoFocus 
                className="form-control"/></div>
            <div className="form-group"><label htmlFor="password">Password</label>
            <input id="password" 
                   onChange={this.handleChange}
                   name= "password"
                   value={this.state.account.password}
                   type="text" 
                   className="form-control"/></div>
            <button className="btn btn-primary">Login</button>
        </form>
        </div> );
    }
}
 
export default LoginForm;