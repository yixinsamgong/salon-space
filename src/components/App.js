
// switch statement
//import component from react router dom
//leave header out of switch statement 
{/* <Route path="/:id/edit">
  <NewArtworkForm onAddArtwork={onAddArtwork} />

<Home />
</Route> */}

import React, {useState, useEffect} from 'react'
import Header from "./Header"
import About from "./About"
import NavBar from "./NavBar"
import SearchBar from "./SearchBar"
import ArtworkContainer from "./ArtworkContainer"
import { Route, Switch } from "react-router-dom";

function App() {

  const [artworks, setArtworks] = useState([]) 
  
  useEffect(() => {
    fetch (`http://localhost:3004/artworks`)
    .then (r=>r.json())
    .then (data => setArtworks(data))
  }, [])


  function handleAddArtwork(newArtwork) {
    const updatedArtworkArray = [...artworks, newArtwork];
    setArtworks(updatedArtworkArray);

  }

  return (
    <div classname="app">
      <Header />
      <NavBar />
      <SearchBar />
      <NewPlantForm onAddArtwork={handleAddArtwork} />
        <Switch>
          < Route exact path="/">
              <ArtworkContainer artworks={artworks}/>
           </Route>
           <Route exact path="/about">
              <About />
          </Route>
        </Switch>
    </div>

  )
}

export default App


























