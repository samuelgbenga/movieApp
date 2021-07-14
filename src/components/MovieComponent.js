import defaultImages from './pictures/defaultImage.jpg'
import { Link } from 'react-router-dom'

 const MovieComponent = ({ alt, Title, Type, Poster, getimdbID, imdbID})=>{
     const handleOnclick = ()=>{
        localStorage.setItem('id', imdbID)
        return getimdbID(imdbID)
     }
  return (
      
        <div className='movie-box'>
            <Link to={`/${Title}`}>
            <div className='inner-movie-box'>
           <img src={Poster === 'N/A'? defaultImages: Poster} alt={alt} onClick={()=>handleOnclick()}/>
           </div>
           </Link>
           <div className='movie-box-bottom'>
           <h4>{Title}</h4>
           <span>{Type}</span>
           </div> 
        </div>
    )
}
export default MovieComponent;