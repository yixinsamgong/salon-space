import React, {useEffect,useState} from 'react'
import SearchBar from "./SearchBar"

function Database() {

const [search,setSearch] = useState("")
const [artworks, setArtworks] = useState([])

        useEffect(() => {
            fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=Highlight`)
            .then(r=> r.json())
            .then((data) => {
        // console.log(data.objectIDs)
                data.objectIDs.map((id) => {
                    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
                    .then(r=> r.json()) 
                    .then (
                        (id) => {
                        // console.log(id)
                       setArtworks(id)
                    })
                    
                })
            })},[search])

            

return (
<div> 
    <SearchBar searchTerm={search} onSearchChange={setSearch}/>
    </div>
  )

}
export default Database