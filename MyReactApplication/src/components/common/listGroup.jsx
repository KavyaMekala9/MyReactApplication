import React, { Component } from 'react';
import { getGenres } from '../../services/fakeGenreService';

// initial thought of this component- interface:
//input- list of genres , o/p: onClick- list of movies related to that genre

//stateless function:
const ListGroup = (props) => {
  const {items, valueProperty, textProperty, onItemSelect, selectedItem} = props;
  return ( <ul className="list-group">
  {items.map(item=>(<li onClick={() => onItemSelect(item)}
      key= {item[valueProperty]} 
      className={item===selectedItem ? "list-group-item active": "list-group-item" }>
      {item[textProperty]}</li>
  // <li key= {item._id} className="list-group-item">{item.name}</li>
  ))} 
  </ul>  );
}

ListGroup.defaultProps={
  textProperty: "name",
  valueProperty: "_id"
}
export default ListGroup;
// class ListGroup extends Component {
//     const {items}= props;
//     state = {  }
//     render() { 
//         return ( <ul className="list-group">
//           {items.map(item=>(<li key= {item._id} className="list-group-item">{item.name}</li>)
//             )} 
//       </ul> );
//     }
// }
 
// export default ListGroup;