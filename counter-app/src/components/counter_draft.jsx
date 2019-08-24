import React, { Component } from 'react';
class Counter extends Component {
    state={
        value: this.props.counter.value
        //value: this.props.value,--changed to above after counter={counter} object
        //count: this.props.value, renamed count as value above
        // tags: ['tag1','tag2'],
        // address:{
        //     street:'huron'
        // }
    };
    styles={
        fontSize: 10,
        fontWeight: "bold"
    }
    // constructor(){
    //     super(); //base constructor
    //     this.handleIncrement=this.handleIncrement.bind(this);
    //     //handleIncrement function has "bind" method
    //     //console.log("constructor",this);
    // }
    
    // handleIncrement(){
    //     console.log('Increment clicked1',this.state.count)
    //     // this is undefined here, so we need to call constructor of the parent class
    // }
    
    //arrow functions dont rebind 'this' keyword, they rebind it
    //so, comment constructor and above funtion block, use arrow
    //function as below instead to bind the 'this' keywork i.e. to bind event handlers
    handleIncrement= () =>{
        //console.log('Increment clicked',this.state.count)
        // this is undefined above, so we need to call constructor of the parent class
        //this.state.count++; count ++ doesnt increment here, we should use setState() as below
        //this functionality is different in React compared to Angular 
        this.setState({value: this.state.value+1});
        //this.setState({count: this.state.count+1});
        //renaming count to value here and in 'state' property
        //setState() method is inherited from components base method
    }
    //below 'doHandleIncrement' method is to pass arguments:
    //Code changes needed:
    //handleIncrement=product=>{--passing product as argument
    //onClick={this.doHandleIncrement}
    
    // doHandleIncrement= ()=>{
    //     this.handleIncrement({id:1});
    //     }
    //but instead of writing separate funtion like above, we can just write 
    //above arrow function inline for onClick event as below
    renderTags(){
        // if(this.state.tags.length=== 0){
        //     return <p>There are no tags!!</p>
        // }
        // return <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>;
    }   
    
    render() { 
        console.log('props',this.props);

        //let classes = this.getBadgeClasses(); code refactoring to make render method simple instead of bloating it
        // let classes="badge m-2 badge-";
        // classes+= (this.state.count===0)?"warning":"primary";
        // let classes="badge m-2";
        // classes+= (this.state.count===0)?"badge-warning":"badge-primary";
        return (
        <div>
            {/* {this.props.children} */}
            <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}</span>
            <button onClick={this.handleIncrement} 
             className="btn btn-secondary btn-sm">
            Increment</button>
            <button 
            onClick={()=>this.props.onDelete(this.props.counter.id)} 
            className="btn btn-danger btn-sm m-2">Delete</button>            
             
            {/* {this.state.tags.length===0 && "Please create a new tag!"}
            {this.renderTags()}                */}
        </div>);
    }
    // key={tag} is used to define uniqueness of each tag element
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        const {value: count} =this.state; //object destructuring to avoid code redundancies as in below statement
        //return this.state.count===0?'Zero':this.state.count;
        return count===0?<p>Zero</p>:count;  //we can write jsx code or normal 'zero' string
    }
}
 // React.Fragment -- to avoid extra unused div, React has child called Fragment
export default Counter; 
// this is same as export default Counter extends Component

// passing arguments code changes:
//<button onClick={()=>this.handleIncrement({product})} 
// handleIncrement= product =>{
// doHandleIncrement--new method to be added and atlast this method is referred as arrow fn 
//for click event and this new method can be commented