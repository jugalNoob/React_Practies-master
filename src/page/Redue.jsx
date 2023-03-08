import React,{useReducer} from 'react'

const initivalue=0;

function Redue() {

const [count ,dispatch]=useReducer(reducer , initivalue)

  return (
    <div>
   
   <button onClick={(e)=>dispatch({type:"INC"})}></button>

   <button onClick={(e)=>dispatch({type:"DIC"})}></button>
    </div>
  )
}

export default Redue
