import React from "react";
import Card from "./Card";
import {useEffect} from "react";
import { useState } from "react";
import { API } from "./global";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";


function Movies() {
    const[movieList,setMovieList]=useState([])
    const navigate=useNavigate()

    const getMovies=()=>{
        fetch(`${API}/movies`,{method: "GET",})
        .then(data=>data.json())
        .then((mvs)=>setMovieList(mvs))
    }

    useEffect(()=>getMovies(),[])
    
    return (
   
        <div>
           
            <div className="row row-cols-1 row-cols-md-3 g-4">
            
            {movieList.map((movie,index,id)=>(
              
             <Card 
             key={movie.id}
             id={movie.id}
             image={movie.image}
             title={movie.title}
              rating={movie.rating}
              description={movie.description}
              deleteButton={
                <IconButton
                onClick={()=>{
                    fetch(`${API}/movies/${movie.id}`,{method: "DELETE",})
                    .then(()=>getMovies())
                    
                }}
                >
                    <DeleteIcon color="error"/>
                </IconButton>
              }
              editButton={
                <IconButton
                onClick={()=>{
                    navigate(`/movies/edit/${movie.id}`)
                    // fetch(`${API}/movies/${movie.id}`,{method: "POST",})
                    // .then(()=>getMovies())
                    
                }}
                >
                    <EditIcon color="primary"/>
                </IconButton>
              }
             />
            ))}
         </div>
         </div>  
        
    );

}

export default Movies;