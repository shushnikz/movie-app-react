import React from "react";
import Card from "./Card";


function Movies({ movieList,setmovieList}) {
    
    return (
   
        <div>
           
            <div className="row row-cols-1 row-cols-md-3 g-4">
            
            {movieList.map((movie,index,id)=>(
              
             <Card 
             key={index}
             id={index}
             image={movie.image}
             title={movie.title}
              rating={movie.rating}
              description={movie.description}
             />
            ))}
         </div>
         </div>  
        
    );

}

export default Movies;