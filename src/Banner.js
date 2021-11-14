import React, { useEffect, useState } from 'react';
import './Banner.css'
import requests from './requests.js'
import axios from './axios.js'


function Banner(){

  const[movie,setMovie]=useState([])

  useEffect(()=>{
    async function fetchData(){
      const request=await axios.get(requests.fetchTrending)

      setMovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length)

      ]);
      return request;
    }
    fetchData();
  },[]);

  function truncateDesc(str,n){
    return str?.length>n?str.substr(0,n-1)+"...": str;
  }
  return(
    <header className="banner"
    style={{
      backgroundSize:"cover",
      backgroundPosition:"Center Center",
      backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`}}
    >
   
     <div className="banner_content">
       <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}
       </h1>
       <div className="banner_buttons">
        <button className="banner_button">Play</button>
        <button className="banner_button">My List</button>
       </div>
       <h1 className="banner_description">{truncateDesc(movie?.overview, 180)}</h1>
     </div>
     
    </header>
    
  )
}

export default Banner;

 //Instead of dec name the overview  is given..that why take overview.