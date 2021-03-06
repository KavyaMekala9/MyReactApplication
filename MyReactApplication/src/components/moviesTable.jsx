import React, { Component } from 'react';
import Like from "./common/like";

class MoviesTable extends Component {
    // state = {  } //no need as we are not setting the state
    raiseSort=path=>{
        const sortColumn= {...this.props.sortColumn};
        if (sortColumn.path === path)
        sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
        else{
        sortColumn.path = path;
        sortColumn.order = "asc";
        }
        this.props.onSort(sortColumn);
    }
    render() { 
        const {movies, onLike, onDelete }= this.props; // for sfc--we write =props only, for class we need to write =this.props as we dont pass props as parameter
        return ( <table className="table">
        <thead>
          <tr>
            <th className="clickable" onClick={()=>this.raiseSort('title')}>Title </th>
            <th className="clickable" onClick={()=>this.raiseSort('genre.name')}>Genre</th>
            <th className="clickable" onClick={()=>this.raiseSort('numberInStock')}>Stock</th>
            <th className="clickable" onClick={()=>this.raiseSort('dailyRentalRate')}>Rate</th> 
            <th></th>
          </tr>
        </thead>
        <tbody> {movies.map(movie => 
        <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td><Like liked={movie.liked} onClick={()=>onLike(movie)}/></td>        
            <td><button onClick={()=>onDelete(movie)} 
            className="btn btn-danger btn-sm m-2">
              Delete</button></td>
          </tr>)}       
        </tbody>
      </table> );
    }
}
 
export default MoviesTable;

// const MoviesTable = (props) => {
//     const {movies, onLike, onDelete, onSort }= props;
//     return (  );
// }
// export default MoviesTable;