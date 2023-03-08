import React,{useContext} from 'react'
import { LoginContext } from './ContextAPI/Context';
function Context() {
  const {appcolor}=useContext(LoginContext);
  return (
    <div>
      <h1 style={{color:appcolor}}>jugal shrma</h1>
    </div>
  )
}

export default Context
