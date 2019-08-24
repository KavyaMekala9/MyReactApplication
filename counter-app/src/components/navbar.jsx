import React, { Component } from 'react';

//stateless functional components
const NavBar = ({totalCounters}) =>{
    console.log("navBar-rendered-life cycle hook"); // life cycle hooks can't be used with stateless functions as they only contain single return, we need to use class componnets with life cycle hooks
    return ( <nav className="navbar navbar-light bg-light">
         <a className="navbar-brand" href="#">
             Navbar <span className="badge badge-pill secondary">{totalCounters}</span></a>
       </nav> );
}

// class NavBar extends Component {
//      render() { 
//          return ( <nav class="navbar navbar-light bg-light">
//          <a class="navbar-brand" href="#">
//              Navbar <span className="badge badge-pill secondary">{this.props.totalCounters}</span></a>
//        </nav> );
//      }
//  }
  
 export default NavBar;