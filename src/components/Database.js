import React, {useEffect,useState} from 'react'
import SearchBar from "./SearchBar"
import NewContainer from "./NewContainer"
import NewArtworkForm from './NewArtworkForm'

function Database() {

// const [search,setSearch] = useState("")
const [newWorks, setNewWorks] = useState([])

        useEffect(() => {
            fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=Highlight`)
            .then(r=> r.json())
            .then((data) => {
                // data = data.filter(entry => entry.created > 100).slice(0, 100);
                //     console.log(data.objectIDs)
                data.objectIDs.map((id) => {
                    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
                    .then(r=> r.json()) 
                    .then (
                        (id) => {
                        setNewWorks([...newWorks, {
                            title: id.title,
                            image: id.primaryImageSmall,
                            date: id.objectDate,
                            artist: id.artist,
                            medium:id.medium,
                        }])
                        console.log(newWorks.artist)
                    })
                })
            })},[])

           
            

return (
    <div> 
    {/* <SearchBar searchTerm={search} onSearchChange={setSearch}/> */}
    <NewContainer newWorks={newWorks} />
    </div>
  )

}
export default Database