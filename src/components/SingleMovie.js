
import { Link } from 'react-router-dom'
import defaultImages from './pictures/defaultImage.jpg'
import loader from './pictures/loader.gif'

function SingleMovie({Poster, Plot, Title, Genre, Actors, Writer, Awards, Director, Released, Year, Production, BoxOffice, Type}) { 
  
    return (
      <>
      
      <div className='single-movie-detail-container'>
      
        <div className='movie-detail-inner-container'>
        
       <div className='detail-image'>
       {(Poster !== 'N/A')?<img src={(Poster)?Poster:loader} alt='loading'/>:<img src={defaultImages} alt='default'/>}
       </div>
       <div className='details'>
         <p><span>Title:</span> {Title}</p>
       {(Plot!=='N/A')?<p><span>Plot: </span>{Plot}</p>:<p>Plot unavailable for this movie</p>}
          <p><span>Genre: </span> {Genre}</p>
          <p><span>Actors: </span> {Actors}</p>
          <p><span>Writer: </span> {Writer}</p>
          <p><span>Director: </span> {Director}</p>
          <p><span>Year: </span> {Year}</p>
          <p><span>Released: </span> {Released}</p>
          <p><span>Production: </span> {Production}</p>
          <p><span>Awards: </span> {Awards}</p>
          <p><span>BoxOffice: </span> {BoxOffice}</p>
          <p><span>Type: </span> {Type}</p>
       </div>
    
      </div>
      <Link to='/' ><button className='go-back-button'>&#8592;  go back</button></Link>
      </div>
      
      </>
    );
  }
  
  export default SingleMovie;
  