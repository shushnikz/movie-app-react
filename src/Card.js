import React from "react";
import Counter from "./Counter";
import {useState} from "react"
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';


const Card=({
    id,
    poster,
    name,
    rating,
    summary,
    deleteButton,
    editButton
})=>{
    const styles={
        color: rating>=8?"green":"red"
    }

    const[show,setShow]=useState(true)
const descriptionStyle={
    display: show?"block":"none"
}

const navigate=useNavigate();



   return(
    
    <div className="col">
                <div className="card m-4 border-0">
              
                     <img src={poster} className="card-img-top image" alt=""></img>
                     <div className="card-body bg-dark text-light">
                     <div className="d-flex justify-content-between">
                         <h5 className="card-title me-3 fs-4">{name}
                         <IconButton onClick={()=>setShow(!show)} 
                         aria-label="Toggle description"
                         color="primary">
                            {show? <ExpandLessIcon />: <ExpandMoreIcon />}
                         </IconButton>
                         <IconButton onClick={()=> navigate(`/movies/${id}`)}
                         color="primary">
                         <InfoIcon />
                         </IconButton>
                         </h5>
                        
                         <span style={styles} className="p-1 w-auto fs-6">⭐{rating}</span>
                         </div>
                         
                        
                         {/* {show?<p className="card-text text-start mt-3">{description}</p>:null} */}
                         <p style={descriptionStyle} className="card-text text-start mt-3">{summary}</p>
                         <div className="d-flex justify-content-between">
                         <Counter />
                         <span>{deleteButton}{editButton}</span>
                         </div>
                         
                     
                     </div>
                 
                </div>
            </div>

   )
}

export default Card;