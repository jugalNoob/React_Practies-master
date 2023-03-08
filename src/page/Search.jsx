import React,{useState} from 'react'
import Data from "./city.json"

function Search() {

  const [sear , setSear]=useState("")
  return (
    <div>

<h1>jugal sharma </h1>

<input type="text" value={sear} onChange={(e)=>setSear(e.target.value)} name=""  id="" />
<br />


{

  Data.filter(city=>city.name.toLowerCase().includes(sear.toLowerCase())).map(city =>{

return<div>

<h5>{city.id}</h5>
  <h4>{city.name}</h4>


</div>

  })
}


    </div>
  )
}

export default Search






// import React,{useState} from 'react'

// function Search() {
 
//   const names=["jugal" , "sharma" , "knakia"]

//   const filder=names.filter(name=>name.includes("s"))

//   const arr=[10 , 20 , 30 ,60, 50 , 60]


//   const arry=arr.filter(item=>item>40)

//   return (
//     <div>
//        {/* first row class line  */}
// <h1>search</h1>

// {
//   filder.map(item=><li>{item}</li>)
// }

// {
//   arry.map(item=><li>{item}</li>)
// }



//        {/* last row class line  */}

//     </div>
//   )
// }

// export default Search