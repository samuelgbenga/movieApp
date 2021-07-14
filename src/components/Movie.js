import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React, { useEffect ,useState } from "react";
import MovieComponent from './MovieComponent';
import SingleMovie from './SingleMovie'
import loader from './pictures/loader.gif'


 const Movie = ({searchResult})=>{
    const [testApi, setTestApi] = useState([]);
    const [movieId, setMovieId] = useState('');
    const [movieDetails, setMovieDetails] = useState({});
    const featureApi = 'http://www.omdbapi.com/?s=aaa&apikey=e7e87ea4'
    useEffect( ()=>{
        fetch(featureApi)
        .then(res => res.json())
        .then(data => {
          setTestApi(data.Search);
        }).catch(error => console.log(error));
       }
      
    , [])

        useEffect(()=>{
            if(searchResult !== [])
            {setTestApi(searchResult)}

        } ,[searchResult])
        
        useEffect( ()=>{
        if(movieId!=='')
        {fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=e7e87ea4`)
        .then(res => res.json())
        .then(data => {
          setMovieDetails(data);
        }).catch(error => console.log(error));  
      }
      return function cleanup(){
        setMovieDetails({})
      }
      }, [movieId])
     useEffect(()=>
     localStorage.getItem('id') && setMovieId(localStorage.getItem('id'))
     , [movieId])
  return (
      
         <Router>
        <Switch>
        <Route path='/' exact>
        <div className='movie-container'>
        {(testApi)? (testApi.length > 0 ? testApi.map(item => <MovieComponent key={item.imdbID}   alt={item.Title} {...item} 
        getimdbID={(id)=> setMovieId(id)}/>):<img src={loader} alt='loading'/>):<h1 style={{color:'white'}}>No movie with such title</h1>} 
        </div>
        </Route>
        <Route path='/:Title'>
        <SingleMovie {...movieDetails}/> 
        </Route>
        </Switch>
        </Router> 
    )
}
export default Movie;