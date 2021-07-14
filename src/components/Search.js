

function Search({handleOnSubmit, onChange, inputVal}) { 
  return (
    <div className='inputForm'>
      <form onSubmit={handleOnSubmit}>
          <input type='search' value={inputVal} 
          onChange={onChange}/>
      </form>
    </div>
  );
}

export default Search;
