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

  function addNewArtwork(newArtwork) {
    console.log("In ShoppingList:", newArtwork)
    const updatedArtworkArray = [...artworks, newArtwork];
    setArtworks(updatedArtworkArray);
    console.log(updatedArtworkArray)
  }



  const displayArtworks = artworks.filter((artwork) => 
      Object.values(artwork).join("_").toLowerCase().includes(search.toLowerCase())
  )



  return (
    <div>

      <Header />
      <NavBar />
        <Switch>      
          <Route path="/about">
              <About />
          </Route>
          <Route  path="/database">
              <Database  
              search={search} onSearch={setSearch}
              handleClick={addNewArtwork} 
              />
          </Route>
          <Route  path="/form">
              <NewArtworkForm onAddArtwork={addNewArtwork} />
          </Route>
          < Route exact path="/">
              <SearchBar searchTerm={search} onSearchChange={setSearch}/>
              <ArtworkContainer artworks={displayArtworks}/>
           </Route>
      </Switch>
    </div>
  )
}

export default App