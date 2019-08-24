import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    render() { 
        console.log("counters-rendered-life cycle hook")
        const {onReset, counters, onDelete, onIncrement, onDecrement} = this.props; //object destructuring- lect 14
        return (<div>
            <button 
            // onClick={this.props.onReset} //object destructuring- lect 14, this.props reference can be removed
            onClick={onReset}
            className="btn btn-primary btn-sm m-2">Reset</button>
            {counters.map(counter=>(
            <Counter 
            key={counter.id} 
            onDelete={onDelete}   
            onIncrement={onIncrement}  
            onDecrement={onDecrement}   
            counter={counter} />
            ))} 
        </div> );
    }
}
export default Counters;