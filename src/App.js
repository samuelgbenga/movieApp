import Movie from './components/Movie';
import Search from './components/Search';
import React, {useState } from "react";

import './App.css';


function App() {
 
  const [inputVal, setInputVal] = useState('');
  const [ search, setSearch] = useState([]);
 
  const setInputChange = (e)=>{
    setInputVal(e.target.value);
    
}
const handleOnSubmit = (e)=>{
   e.preventDefault();
    if(inputVal){ 
      fetch(`http://www.omdbapi.com/?s=${inputVal}&apikey=e7e87ea4`)
        .then(res => res.json())
        .then(data => {
          setSearch(data.Search);
        }).catch(error => console.log(error));
    }
    setInputVal('');
}
  return (
    
    <div className="App">
      <header> 
        <Search handleOnSubmit={handleOnSubmit} onChange={setInputChange} inputVal={inputVal}/> 
      </header>
      <h2 className='movie-zone'>Movie zone</h2>
      <Movie searchResult={search}/>
      </div>
    
  );
}

export default App;
