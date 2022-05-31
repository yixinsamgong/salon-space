import React from 'react'
import Header from "./Header"
import About from "./About"
import NavBar from "./NavBar"
import SearchBar from "./SearchBar"
import ArtworkContainer from "./ArtworkContainer"
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <SearchBar />
        <Switch>
          < Route exact path="/">
              <ArtworkContainer />
           </Route>
           <Route exact path="/about">
              <About />
          </Route>
        </Switch>
    </div>
  )
}

export default App