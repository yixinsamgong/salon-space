import React, {useEffect,useState} from 'react'
import SearchBar from "../SearchBar"
import NewContainer from "../NewContainer"
import NewArtworkForm from '../NewArtworkForm'

function Database() {

// const [search,setSearch] = useState("")
const [newWorks, setNewWorks] = useState([])
const [ids, setIds] = useState([])
let arr =[]

useEffect(() => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&?isOnView=true&q=Love`)
            .then(r=> r.json())
            .then((data) => {
                // data = data.filter(entry => entry.created > 100).slice(0, 100);
                    console.log(data.objectIDs)
                data.objectIDs.map((id) => {
                    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
                    .then(r=> r.json()) 
                    .then (
                        (id) => {
                        arr.push(id)
                        console.log(id)
                    })
                }
                
                )
                setNewWorks(arr)
                console.log(newWorks, ' hfdjhfkuyg kuyfuyfkuy kutfkuy')
    })
    .then(setNewWorks(ids))
        } 
        , 
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

           
            

return (
    <div> 
    {/* <SearchBar searchTerm={search} onSearchChange={setSearch}/> */}
    <NewContainer newWorks={newWorks} />
    
    </div>
  )

}
export default Database