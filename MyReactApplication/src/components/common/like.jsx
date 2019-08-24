import React, { Component } from 'react';

//initial thinking to build this component:
//interface of this 'Like' component: input- liked which is boolean and output- onClick

//we make this component as "stateless functional component" as we only have one render method and no other methods
//pass 'props' as parameter and remove all this.props
const Like = (props) => {   
    let classes= "fa fa-heart";
    if(!props.liked){
        classes +="-o";
    }
    return (<i onClick={props.onClick} style={{cursor:"pointer"}}
        className ={classes} aria-hidden="true"></i>);
}
 
export default Like;

// class like extends Component {
//     render() { 
//     }
    
// }
 
//export default like;