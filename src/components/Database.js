import React, {useEffect,useState} from 'react'
// import SearchBar from "./SearchBar"
import NewContainer from "./NewContainer"
import SearchBar from "./SearchBar"


function Database() {

// const [search,setSearch] = useState("")
const [newWorks, setNewWorks] = useState([])
const [ids, setIds] = useState([])
let arr =[]


useEffect(() => {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=highlight`)                                            
            .then(r=> r.json())
            .then((data) => {
                setIds([...data.objectIDs])
                // console.log(ids) 
              ids.map((id) => {
                fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
                .then(r=> r.json())
                .then ((id) => {
                    arr.push({
                    title: id.title,
                    image: id.primaryImageSmall,
                    date: id.objectDate,
                    artist: id.artistDisplayName,
                    medium:id.medium
                })
                    setNewWorks([...arr])
                })
            }
        )
    })} // eslint-disable-next-line react-hooks/exhaustive-deps
,[])

// console.log(search)
console.log(newWorks)

           
// const displayArtworks = newWorks.filter((newWork) => 
//             newWork.artist.toLowerCase().includes(search.toLowerCase())
//             )

return (
    <div> 
    {/* <SearchBar searchTerm={search} onSearchChange={setSearch}/> */}
    <NewContainer newWorks={newWorks} />
    </div>
  )


}
export default Database

