import React,{useEffect,useState} from 'react'

function LC() {

    //side-effect in function components useEffect()
const [data , setData]=useState(0)
  
    useEffect(()=>{

        

    // alert("jugal sharma")

    },[data])

  return (
    <div>LC
    
    <h1>{data}</h1>
    <button onClick={()=>setData(data + 1)}>update counter</button>
    </div>
  )
}

export default LC