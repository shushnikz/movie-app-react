import React from "react";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { API } from "./global"
import { useParams } from "react-router-dom";
import { useEffect } from "react";


export function EditMovie(){

  const { id } = useParams();
  // const movie = movieList[movieid];
  // console.log(movieList);

   const[movie,setMovie]=useState(null)
   useEffect(()=>{
    fetch(`${API}/movies/${id}`,{method: "GET",})
    .then(data=>data.json())
    .then((mvs)=>setMovie(mvs))
  },[])

    
    return(
        
          movie ? <EditMovieForm movie={movie}/> : "Loading.."
        
    )
}

function EditMovieForm({movie}){

  const[title,setTitle]=useState(movie.title)
  const[image,setImage]=useState(movie.image)
  const[rating,setRating]=useState(movie.rating)
  const[description,setDescription]=useState(movie.description)
  const[trailer,setTrailor]=useState(movie.trailer)
  const Navigate=useNavigate()

  return(
    <div className="add-movie">
    <TextField value={title} onChange={(event)=> setTitle(event.target.value)} label="Title" variant="standard" />

    <TextField value={image} onChange={(event)=> setImage(event.target.value)} label="Poster" variant="standard" />

    <TextField value={rating} onChange={(event)=> setRating(event.target.value)} label="Rating" variant="standard" />

    <TextField value={description} onChange={(event)=> setDescription(event.target.value)} label="Summary" variant="standard" />

    <TextField value={trailer} onChange={(event)=> setTrailor(event.target.value)} label="Trailor" variant="standard" />
     
    <Button 
    onClick={()=>{
        const updatedMovie={
              image:image,
              title:title,
              rating:rating,
              description:description,
              trailer:trailer
        }
    //   setmovieList([...movieList,newMovie])
    fetch(`${API}/movies/${movie.id}`,{method: "PUT",
       body: JSON.stringify(updatedMovie),
       headers: {
        "Content-Type": "application/json",
       }
     })
    .then(data=>data.json())
     .then(()=>Navigate("/movies")) 
    }
    }
    variant="outlined">Save</Button>
</div>
  )
}
