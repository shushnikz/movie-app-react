import React from "react";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function AddMovie({movieList,setmovieList}){
    const[title,setTitle]=useState("")
    const[image,setImage]=useState("")
    const[rating,setRating]=useState("")
    const[description,setDescription]=useState("")
    const[trailor,setTrailor]=useState("")
    const Navigate=useNavigate()
    return(
        <div>
             <div className="add-movie">
            <TextField onChange={(event)=> setTitle(event.target.value)} label="Title" variant="standard" />

            <TextField onChange={(event)=> setImage(event.target.value)} label="Poster" variant="standard" />

            <TextField onChange={(event)=> setRating(event.target.value)} label="Rating" variant="standard" />

            <TextField onChange={(event)=> setDescription(event.target.value)} label="Summary" variant="standard" />

            <TextField onChange={(event)=> setTrailor(event.target.value)} label="Trailor" variant="standard" />
             
            <Button 
            onClick={()=>{
                const newMovie={
                      image:image,
                      title:title,
                      rating:rating,
                      description:description,
                      trailor:trailor
                }
              setmovieList([...movieList,newMovie])
              Navigate("/movies")
            }
            }
            variant="outlined">Add Movie</Button>
        </div>
        </div>
    )
}

export default AddMovie;