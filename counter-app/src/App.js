import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters'; 

//function App() {
class App extends Component{
  state = {  
    counters:[
        {id:1, value:4},
        {id:2, value:0},
        {id:3, value:2},
        {id:4, value:0},
        {id:5, value:0},
    ]
  };
  //life cycle hooks: Mounting phase:
  constructor(){
    super(); // why to use super in react constructor??
    console.log("App-constructor- life cycle hook");
    //console.log(this.props.something); //pass props as parameter to constructor and super(props) while using this.props
  }
  // this method is called after component is rendered into the DOm and is a perfect place to make Ajax calls to the server
  componentDidMount(){
    //Ajax calls
    console.log("App-componentDidMount- life cycle hook");
  }
  handleDelete=counterId=>{
      const counters=this.state.counters.filter(c=>c.id!=counterId);
      this.setState({counters});
  };
  handleReset=()=>{
      const counters= this.state.counters.map(c =>{
          c.value =0;
          return c;
      })
      this.setState({counters});
  };
  //added since the local state of counter.jsx is removed and it is made as controlled component
  handleIncrement=counter=>{
      console.log(counter);
      const counters=[...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index]={...counter};
      counters[index].value++;
      this.setState({counters});
      //console.log(this.state.counters[0]);
      //console.log(counters[index].value);
  };
  handleDecrement=counter=>{
    console.log(counter);
    const counters=[...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value--;
    this.setState({counters});
    //console.log(this.state.counters[0]);
    //console.log(counters[index].value);
};
  render() {
    console.log("App-render life cycle hook")
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
      <main className="container">
        <Counters 
        counters= {this.state.counters}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}/>
      </main>
      </React.Fragment>
  
    
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  };

}

export default App;
