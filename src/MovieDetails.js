import React from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";
import { NotFoundPage } from "./NotFoundPage";
import { useState } from "react";
import { useEffect } from "react";

export function MovieDetails({ movieList }) {
  const { id } = useParams();
  console.log(id);
  // const movie = movieList[movieid];
  // console.log(movieList);

   const[movie,setMovie]=useState({})
   useEffect(()=>{
    fetch(`https://62f4b522ac59075124c21aa9.mockapi.io/movies/${id}`,{method: "GET",})
    .then(data=>data.json())
    .then((mvs)=>setMovie(mvs))
  }, [])

  const navigate=useNavigate()
  if(!movie){
    return(<NotFoundPage />)
  }
  
  return (
    <div>
      <iframe width="100%" height="500" src={movie.trailer} title="RRR Trailer (Telugu) - NTR, Ram Charan, Ajay Devgn, Alia Bhatt | SS Rajamouli | 25th March 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
      <div className="movie-detail">
      
            <div className="card m-4 border-0">
                    <div className="card-body bg-dark text-light">
                    <div className="d-flex justify-content-between">
                     <h5 className="card-title me-3 fs-4">{movie.name}</h5>
                       
                    <span className="p-1 w-auto fs-6">⭐{movie.rating}</span>
                        </div>
                        <p className="card-text text-start mt-3">{movie.summary}</p>
                        <Button onClick={()=> navigate(-1)}
                        variant="contained" startIcon={<ArrowBackIosIcon />}>
                        Back
                        </Button>
                        </div>
                        </div>
      
            </div>


    </div>

  );
}
