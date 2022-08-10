import React from "react";
import {useState} from "react";

function AddColor(){
    // const color="crimson";
  
    const[color,setColor]=useState("skyblue")
    const[colorList,setColorList]=useState(["skyblue","pink","red","yellow"])
    // const colorList=["skyblue","pink","red","yellow"]
  
    const styles={
      fontSize:"25px",
      backgroundColor: color,
      textAlign: "center",
      margin: "10px"
    }
    return(
    <div>
      <div className="add-color">
        <input onChange={(event)=>setColor(event.target.value)}
        style={styles} type="text"
        value={color}
        />
        <button onClick={()=> setColorList([...colorList,color])}>
          Add color
          </button>
      </div>
      {colorList.map((clr)=>(
          <ColorBox color={clr} />
        ))}
      
        
    </div>
      
    )
  }
  
  
  function ColorBox({color}){
    const sty={
      backgroundColor: color,
      height: "35px",
      width: "300px",
      margin:"10px"
    }
    return(
      <div style={sty}>
      </div>
    )
  }

  export default AddColor;