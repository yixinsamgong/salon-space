import React, {useState, useEffect} from 'react'
import Header from "./Header"
import About from "./About"
import NavBar from "./NavBar"
import SearchBar from "./SearchBar"
import ArtworkContainer from "./ArtworkContainer"
import NewArtworkForm from "./NewArtworkForm"
import Database from "./Database"
import { Route, Switch } from "react-router-dom";

function App() {

  const [artworks, setArtworks] = useState([]) 
  const [search, setSearch] = useState("") 

  
  useEffect(() => {
    fetch ("http://localhost:4000/artworks")
    .then ((r) => r.json())
    .then (setArtworks)
  }, [])


  const displayArtworks = artworks.filter((artwork) => 
      Object.values(artwork).join(" ").toLowerCase().includes(search.toLowerCase())
  )

  function addNewArtwork(newArtwork) {
    const updatedArtworkArray = [...artworks, newArtwork];
    setArtworks(updatedArtworkArray);
  }



  return (
    <div>
      <Header />
      <NavBar />
        <Switch>
          < Route exact path="/home">
              <SearchBar searchTerm={search} onSearchChange={setSearch}/>
              <ArtworkContainer artworks={displayArtworks}/>
           </Route>
           <Route exact path="/about">
              <About />
          </Route>
          <Route exact path="/database">
              <SearchBar searchTerm={search} onSearchChange={setSearch}/>
              <Database />
          </Route>
          <Route exact path="/form">
              <NewArtworkForm onAddArtwork={addNewArtwork} />
          </Route>
      </Switch>
    </div>
  )
}

export default App