import React, { useEffect, useState } from 'react';
import './Resultas';
import VideoCard from './VideoCard';
import "./Resultas.css"
import axios from './axios';
import FlipMove from "react-flip-move";

function Resultas({ selectedOption }) {
    const [movies, setmovies] = useState([]);
   useEffect(() => {
     async function fetchData() {
       const request = await axios.get(selectedOption); 
       setmovies(request.data.Resultas);
       return request;
     }
      fetchData(); 
   }, [selectedOption]);

    return (
        <div className="resultas">
          <FlipMove>
          {movies.map((movie) => (
           <VideoCard key={movie.id} movie={movie}/> 
           ))}
          </FlipMove>  
        </div>
    );
}

export default Resultas;
