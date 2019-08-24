import React, {Component} from "react";
import {getMovies} from "../services/fakeMovieService";
// import Like from "./common/like";
import Pagination from "./common/pagination";
import {paginate} from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from 'lodash';

//import {deleteMovie} from "../services/fakeMovieService";
class Movies extends Component {
  state={
      //movies:getMovies(), //lect-9: this doesnt make backend server call, so we set state in componentDidMount 
      // and initialize this to empty array else we get undefined error if not defined
      movies: [],
      pageSize: 3,
      currentPage: 1,
      genres: [], //genres: getGenres()--use this if we dont setState in componentDidMount and we get the same output
      allGenres:[],
      sortColumn: {path:'title', order: 'asc'}
    };
  //lect-9: same as how we do backend server call
  componentDidMount(){
    const genres=[{_id:"", name:"All Genres"},... getGenres()]
    this.setState({movies: getMovies(), genres})
  }
  handleDelete = movie =>{
      const movies=this.state.movies.filter(m=>m._id!==movie._id);
      this.setState({movies:movies});
      //this.setState({movies});
  }
  //in future we need to call http services and make the below changes reflect in database
  handleLike = (movie) =>{
      console.log('on click', movie);
      const movies= [...this.state.movies];
      const index= movies.indexOf(movie);
      movies[index]={...movies[index]}
      movies[index].liked = !movies[index].liked;
      this.setState({movies});
  }
  handlePageChange = (page) =>{
    console.log('pagination:',page);
    this.setState({currentPage: page}) //setting current page property to the actual page
    //console.log('currentPage:',currentPage); //gives error
  }
  handleGenreSelect= genre =>{
    console.log('selectedGenre:',genre);
    this.setState({selectedGenre: genre, currentPage : 1}) // naviagte through pages: filter doent work, so set "currentPage:1"
  }
  handleSort = sortColumn =>{ //handleSort = path --before raising the sorting logic in movies.jsx component
    //console.log(path);
    // this.setState({sortColumn: {path, order: 'Asc'}}); // before 'Dsc' order of sorting
    this.setState({sortColumn});
  }
  // constructor(){

  // };
  // getMovies(){

  // }
  render(){
    //const {length }= this.state.movies 
    //below line object destructuring--to above line
    //if (this.state.movies.length===0)
    // length:count is written for understanding purpose, the 1st line is also correct
    const {length:count}= this.state.movies;
    const {pageSize, currentPage, movies: allMovies, selectedGenre, sortColumn}= this.state; //pagination:lect-5
    if (count===0)
      return <p>There are no movies in the database</p>;
      //filering:
      const filtered= selectedGenre && selectedGenre._id ? 
      allMovies.filter((m)=>m.genre._id===selectedGenre._id):allMovies;
      //sorting:
      const sorted = _.orderBy(filtered, sortColumn.path, sortColumn.order)
      //pagination:
      //const movies= paginate(filtered, currentPage, pageSize); -- before sorting is done
      const movies = paginate(sorted, currentPage, pageSize);

    return(
      <React.Fragment>
      <div className="row">
        <div className="col-3">
          <ListGroup 
          items={this.state.genres} 
          onItemSelect={this.handleGenreSelect}
          selectedItem={selectedGenre}
          //valueProperty= "_id" //lect-10: to make listGroup flexible, we declare the properties(id,name) of items here itself
          //textProperty = "name"
          />
        </div>
        <div className="col">
        <p>Showing {filtered.length} movies in the database</p>
        <MoviesTable 
          movies={movies}
          onSort={this.handleSort}
          onLike={this.handleLike}
          onDelete={this.handleDelete}
          sortColumn={sortColumn} // sortColumn={this.sortColumn}--we dont get desc order
        />
        <Pagination 
          itemsCount={filtered.length} 
          pageSize={pageSize} //if const is not used: pageSize={this.state.pageSize}
          onPageChange= {this.handlePageChange}
          currentPage= {currentPage}/> 
          </div>          
      </div> </React.Fragment>)
  }
}
export default Movies;