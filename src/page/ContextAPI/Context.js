import React, { createContext, useState } from 'react'


export const LoginContext = createContext("");

const Context = ({children}) => {

    const [logindata,setLoginData] = useState("green");

  return (
    <>
    <LoginContext.Provider value={{appcolor:logindata}}>
        {children}
    </LoginContext.Provider>
    </>
  )
}

export default Context