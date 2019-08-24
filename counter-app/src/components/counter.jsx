import React, { Component } from 'react';
class Counter extends Component {
    //lecture 10-removing local state:
    //state is commented as we get rid of the local state and make counter component as controlled component which recives data via props
    // state={
    //     value: this.props.counter.value
    //     //count=0,
    //     //count= this.props.value
    // };
    // styles={
    //     fontSize: 10,
    //     fontWeight: "bold"
    // }
    //lecture 10- make this as controlled component which should only raise events but not handle them which should be done by counters.jsx
    //geting rid of button onClick={this.handleIncrement} 
    // handleIncrement= () =>{
    //     // this.props.value=0; --gives error:cannot assign to read only propert value of object--
    //     //we cannot assign any value to 'props' as it is read only
    //     this.setState({value: this.state.value+1});
    // }  
    
    // lect-17: update phase-life cycle hooks
    componentDidUpdate(prevProps, prevState){
        console.log("previousProps", prevProps);
        console.log("prevState", prevState);
        if(prevProps.counter.value !== this.props.counter.value){
            //Ajax call and get the new data from the server
        }
    }
    //Lect 18-unmount phase-life cycle hook
    componentWillUnmount(){
        console.log("'counter' component unmounted");
    }
    render() { 
        console.log("counter-rendered-life cycle hook");
        //console.log('props',this.props);
        return (
        <div className="row">
          <div className="col-1"><span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}</span></div> 
          <div className="col">
            <button onClick={()=>this.props.onIncrement(this.props.counter)}
             className="btn btn-secondary btn-sm m-2"> +</button>         
            <button onClick={()=>this.props.onDecrement(this.props.counter)}
             className="btn btn-secondary btn-sm m-2"
             disabled={this.props.counter.value=== 0 ? "disabled": ""}>-</button>  
             <i className ="fa fa-heart-o m-2"></i> 
             <i className ="fa fa-heart"></i>         
            <button onClick={()=>this.props.onDelete(this.props.counter.id)}           
             className="btn btn-danger btn-sm m-2">Delete</button> 
          </div>                      
        </div>);
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        const {value: count} =this.props.counter; //object destructuring to avoid code redundancies as in below statement
        //return this.state.count===0?'Zero':this.state.count;
        return count===0?<p>Zero</p>:count;  //we can write jsx code or normal 'zero' string
    }
}
export default Counter; 
// this is same as export default Counter extends Component

// passing arguments code changes:
//<button onClick={()=>this.handleIncrement({product})} 
// handleIncrement= product =>{
// doHandleIncrement--new method to be added and atlast this method is referred as arrow fn 
//for click event and this new method can be commented