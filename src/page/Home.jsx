import React,{useState} from 'react'
import {NavLink} from "react-router-dom"


function Home() {

const [user ,setUser]=useState({
name:"jugal  shrma",
roll:23,
})



    const Change=()=>{
        setUser({...user,name:"jugal kanika" , roll:22})
       }
       
       const [color , setColor]=useState({
        color:"red",
      
        
       })



       const Data=()=>{

     setColor({
            color:"blue",
            backgroundColor:"black", 
            
           })

       }




  return (
    <div>
    <NavLink to="search">search</NavLink>
    <br />
    <br />
    <NavLink to="/own">own</NavLink>
    <br />
    <br />
    <NavLink to="/dow">dow</NavLink>
    <br />
    <br />
    <NavLink to="/lc">lc</NavLink>
    <br />
    <br />
    <NavLink to="/api">Api</NavLink>


    {/* row clasds line start */}
<h1>{user.name}</h1>
<h1>{user.roll}</h1>

<button onClick={Change}>click</button>

<br />
<br />
<h1 style={color}>jugal sahrma</h1>

<button onClick={Data}>click</button>



{/* 
    last row class line start */}

    </div>
  )
}

export default Home