import React from 'react'
import { Route} from "react-router-dom"
import Home from "./page/Home"
import Search from "./page/Search"
import Own from "./page/Own"
import Dow from "./page/Dow"
import LC from "./page/LC"
import Api from "./page/Api"

function App() {
  return (
    <div>
<Route exact path="/">
  <Home/>
</Route>

<Route path="/search">
<Search/>
</Route>


<Route path="/own">
<Own/>

</Route>


<Route path="/dow">
<Dow/>

</Route>

<Route path="/lc">

  <LC/>
</Route>
<Route pat="/api">

  <Api/>
</Route>



    </div>
  )
}

export default App
