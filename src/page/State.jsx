import React,{useState,useEffect} from 'react'
import {NavLink} from "react-router-dom"

function State() {

      ////////useStateCss

      const [col, setCol] = useState({
        color:"red",
        backgroundColor:"blue",
      
        
      })

      //////////ender clas

    const [name , setName]=useState("jugal fuck sharma")
    const Change=()=>{
        let a=name;
        if(a=== "jugal fuck sharma"){
            setName("kanika sharma")
        }else{
          setName("jugal fuck sharma")
      }
    }
   
    //// user get info about

    const [user , setUser]=useState({
     name:"jugal sharma",
        rollno:22,
        age:22,
    })
        const Date=()=>{
           setUser({...user,name:"kanika sharma" , rollno:23}) 
        }

//////////////search api function inputs///

const [names , setNames]=useState("");

const [email , setEmail]=useState("");

const [allEnter , setAllEnter]=useState([]);

const Clicks=(e)=>{
e.preventDefault();

const newEnter={names,email }

setAllEnter([...allEnter , newEnter])

console.log(allEnter)

}


  return (
    <div>
    {/* css useSattae */}

<h1 style={col}>red</h1>

<h1>{name}</h1>

{/* <button onClick={(e)=>setName("kanika sharma")}> click</button> */}
<button onClick={Change}>onClick</button>
{/* ///user get  */}

<h1>name:{user.name}</h1>
<h1>{user.rollno}</h1>

<button onClick={Date}>click</button>

{/* inputs api user start */}

<form action="" >
<center>
<input type="text" name="" value={names} onChange={(e)=>setNames(e.target.value)} id=""  />
<br />
<br />
<input type="email" name="" value={email}  onChange={(e)=>setEmail(e.target.value)}id="" />
<br />
<br />
<input type="submit" name="" id="" value="submit"  onClick={Clicks}/>
</center>
</form>


<div>
  {
    allEnter.map((elemnt ,arr , inde)=>{

return(
  <>
<h1>{elemnt.names}</h1>
<h1>{elemnt.email}</h1>
  </>
)

    })
  }
</div>

<NavLink to="/ref">ref</NavLink>
<br />

<NavLink to="/memo">memo</NavLink>

{/* last row class line started */}

    </div>
  )
}

export default State
