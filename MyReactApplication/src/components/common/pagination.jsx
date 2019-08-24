import React, { Component } from 'react';
import _ from 'lodash'; //import lodash from 'lodash';--can also be imported like this
import propTypes from 'prop-types';

// initial thought of this component- interface:
// input: some movies- number of movies, size- movies in each page, output: onClick
const Pagination = (props) => {
    const {itemsCount, pageSize, onPageChange, currentPage}= props;
    const pagesCount = Math.ceil(itemsCount/pageSize);
    const pages= _.range(1, pagesCount+1) //range includes only numbers between- so add +1 for pagesCount

    if (pagesCount===1) return null;
    return ( <nav><ul className="pagination" >
            {pages.map(page=>(<li key= {page} className={page===currentPage?'page-item active':'page-item'}>
                <a className="page-link" onClick={()=>onPageChange(page)}
                href="#">{page}</a></li>)
            )}          
            </ul></nav>
    );
}

// refer typechecking with propTypes in react.js documentation: 
// https://reactjs.org/docs/typechecking-with-proptypes.html
Pagination.propTypes={
    itemsCount: propTypes.number.isRequired, 
    pageSize: propTypes.number.isRequired, 
    currentPage: propTypes.number.isRequired, 
    onPageChange : propTypes.func.isRequired,
}
export default Pagination;
// class Pagination extends Component {
//     state = {  }
//     render() { 
//     }
// }
 
//export default Pagination;