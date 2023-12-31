import React,{useEffect, useState} from 'react';
import './App.css';
import MovieBox from './MovieBox';
import Header from './Header';
import Trending from './Trending';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=29a377f6797c05c477c5f757a77ce70e&query";
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=29a377f6797c05c477c5f757a77ce70e";

function App() {
  const [movies,setMovies] = useState([]);
  const [query,setQuery] = useState('');
    

    useEffect(()=>{
        fetch(API_URL)
        .then((res)=>res.json())
        .then(data=>{
          console.log(data);
          setMovies(data.results)
        })
      },[])

    

    const searchMovie = async(e,history) => {
      e.preventDefault();
      console.log("Searching");
      try{
        const url = `https://api.themoviedb.org/3/search/movie?api_key=29a377f6797c05c477c5f757a77ce70e&query=${query}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setMovies(data.results);
        
      }
      catch(e) {
        console.log(e);
      }
    }

    const changeHandler = (e) => {
      if (e && e.target) {
        setQuery(e.target.value);
      }
    }
    
  
  return (
    <>
    <Router>
        <Header query={query} searchMovie={searchMovie} changeHandler={changeHandler} />
        <Routes>
          <Route exact path="/Trending" element={<Trending setMovies={setMovies} movies={movies} MovieBox={MovieBox}/>}/>
          <Route exact path="/" element={<div>
            {movies.length > 0 ?
              <div className="container">
                <div className="grid">
                  {movies.map((movieReq) => <MovieBox key={movieReq.id} {...movieReq} />)}
                </div>
              </div>
              : <h2>Sorry! No movies found</h2>}
          </div>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;