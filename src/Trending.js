import { useEffect } from "react";
import React  from "react";
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=29a377f6797c05c477c5f757a77ce70e";

function Trending (props){
  useEffect(()=>{
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      props.setMovies(data.results)
    })
  },[])

    return(
        <>
          <div>
            {props.movies.length > 0 ?
              <div className="container">
                <div className="grid">
                  {props.movies.map((movieReq) => <props.MovieBox key={movieReq.id} {...movieReq} />)}
                </div>
              </div>
              : <h2>Sorry! No movies found</h2>}
          </div>
          </>
    );
}

export default Trending;