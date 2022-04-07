
import React, {Component} from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Paginations extends Component{
  constructor(props) {
    super(props);
    this.state = {
      startIndex : 0, endIndex : 4,
      
    }
}
prevPageList = () => {
  if(this.state.startIndex-4<0){
this.setState({
  startIndex:0,endIndex:4
})
  }else{
    this.setState(prevState => ({
      startIndex : prevState.startIndex - 4,
      endIndex : prevState.endIndex - 4
  }));
  }
 
}
nextPagesList = () => {
  if(this.state.endIndex+4>Math.ceil(this.props.totalPosts /this.props.postsPerPage)){
    this.setState({
      startIndex:Math.ceil(this.props.totalPosts /this.props.postsPerPage)-4,
      endIndex:Math.ceil(this.props.totalPosts /this.props.postsPerPage)
    })
      }else{
  this.setState(prevState => ({
      startIndex : prevState.startIndex + 4,
      endIndex : prevState.endIndex + 4
  }));}
}
nextPage=()=>{
  this.setState(prevState => ({
    startIndex : prevState.startIndex + 1,
    endIndex : prevState.endIndex + 1
}));
}
prevPage=()=>{
  this.setState(prevState => ({
    startIndex : prevState.startIndex - 1,
    endIndex : prevState.endIndex - 1
}));
}
render(){
  const  {postsPerPage, totalPosts, paginate}=this.props;
  let url = window.location.href.split("/");
  let currentPageNumber = parseInt(url[url.length - 1]);
  const {startIndex,endIndex}=this.state;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (<Pagination  aria-label="Page navigation example" className="pagination">
     <PaginationItem disabled={startIndex===0?true:false}>
       <PaginationLink first  onClick={this.prevPageList}  />
     </PaginationItem>
     <PaginationItem disabled={startIndex===0?true:false}>
       <PaginationLink previous onClick={this.prevPage} />
     </PaginationItem >{pageNumbers.slice(startIndex, endIndex).map(number =>( 
 
     <PaginationItem active={currentPageNumber===number?true:false} key={number}>
       <PaginationLink onClick={() => paginate(number)} href={`/Image_gallery/${number}`} >
       {number}
       </PaginationLink>
     </PaginationItem>))}
     <PaginationItem disabled={endIndex===pageNumbers[pageNumbers.length-1]?true:false}>
       <PaginationLink next onClick={this.nextPage} />
     </PaginationItem>
     <PaginationItem disabled={endIndex===pageNumbers[pageNumbers.length-1]?true:false}>
       <PaginationLink last  onClick={this.nextPagesList} />
     </PaginationItem>
   </Pagination>
  );
    }
};

export default Paginations;