import {useEffect} from "react";
import './App.css'
import SearchIcon from './search.svg'
// const API_KEY = process.env.apikey;
const API_url = 'http://www.omdbapi.com?apikey=26e820ef';
const movie1={
    "Title": "Spider-Man Title Reveal",
    "Year": "2021",
    "imdbID": "tt14122734",
    "Type": "movie",
    "Poster": "N/A"
}

const App = () => {
  const searchMovie=async(title)=>{
    // console.log(API_KEY)
    const response=await fetch(`${API_url}&s={title}`);
    const data=await response.json();
    console.log(data.Search);
  }
  useEffect(()=>{
    
    searchMovie('Spiderman');
  });
  return (
    <div className="app">
      <h1>Movies</h1>
      <div className="search">
        <input placeholder="Search for movies" value="Superman" onChange={()=>{}}></input>
        <img src={SearchIcon} alt="search" onClick={()=>{}}/>
      </div>

      <div className='container'>
        <div className='movie'>
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img src= {movie1.Poster !=='N/A' ? movie1.Poster :'https://via.placeholder.com/400'} alt={movie1.Title}/>
          </div>

        </div>
      </div>
      
    </div>
  )
};

export default App;
 