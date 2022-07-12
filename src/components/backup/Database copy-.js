import React, {useEffect,useState} from 'react'
// import SearchBar from "./SearchBar"
import NewContainer from "../NewContainer"
import SearchBar from "../SearchBar"


function Database({handleClick}) {

const [newWorks, setNewWorks] = useState([])
const [ids, setIds] = useState([])
const [search, setSearch] = useState("s")

let arr =[]

//useEffect 2. when ids state gets updated, start fetching each individual id
useEffect(() => {
    let arr = []
    ids.map((id) => {
        console.log(id)
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
        .then(r=> r.json())
        .then ((id) => {
            // arr.push({
            //     title: id.title,
            //     image: id.primaryImageSmall,
            //     date: id.objectDate,
            //     artist: id.artistDisplayName,
            //     medium:id.medium,
            //     reference:id.objectURL
            // })
            let newArt = {
                title: id.title,
                image: id.primaryImageSmall,
                date: id.objectDate,
                artist: id.artistDisplayName,
                medium:id.medium,
                reference:id.objectURL
            }
            arr.push(newArt)
            
        })
        
    })
    setNewWorks(arr)
}, [ids])
//useEffect 1. gets ids when search term changes
useEffect(() => {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=${search}`)                                            
            .then(r=> r.json())
            .then((data) => {
                data = data.filter(entry => entry.created > 100).slice(0, 99);
                setIds(data.objectIDs)
                console.log(data.objectIDs)
            })
        } // eslint-disable-next-line react-hooks/exhaustive-deps
,[search])


// console.log(newWorks)

return (
    <div> 
    <SearchBar searchTerm={search} onSearchChange={setSearch}/>
    <NewContainer newWorks={newWorks} handleClick={handleClick} />
    </div>
  )


}
export default Database

