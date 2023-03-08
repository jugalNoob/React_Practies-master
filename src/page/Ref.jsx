import React,{useRef} from 'react'

function Ref() {
    const inputref=useRef(null)

    const Clicks=()=>{

        console.log("fvfgd")
        inputref.current.value=100;
        // inputref.current.focus();
        inputref.current.style.color="red"
        


    }

  return (
    <div>
    {/* useRef Hook line start row class */}
    
    <input type="text" ref={inputref} name="" id="" />

<button onClick={Clicks}>handinput</button>
    </div>
  )
}

export default Ref
