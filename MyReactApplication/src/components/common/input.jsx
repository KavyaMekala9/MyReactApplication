import React from 'react';

const Input = ({name, label, error, ...rest}) => {
    return ( <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input 
            {...rest}
            id={name}
            name={name}            
            className="form-control"/>
            {error && <div className="alert alert-danger">{error}</div> }
            </div>);
}

//before implementing 'rest' spread operator for "value, type, OnChange" values--after implementing is the above code
// const Input = ({type, name, id, onChange, value, label, error}) => {
//     return ( <div className="form-group">
//         <label htmlFor={name}>{label}</label>
//         <input 
//             id={id}
//             onChange={onChange}
//             name={name}
//             value={value}  
//             type={type}  
//             className="form-control"/>
//             {error && <div className="alert alert-danger">{error}</div> }
//             </div>);
// }

//making below code better by destructuring 'props' as above
// const Input = (props) => {
//     return ( <div className="form-group">
//         <label htmlFor={props.name}>{props.label}</label>
//         <input 
//             id={props.id}
//             onChange={props.onChange}
//             name={props.name}
//             value={props.value}  
//             type="text" autoFocus 
//             className="form-control"/></div> );
// }
 
export default Input;