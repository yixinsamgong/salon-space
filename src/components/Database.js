import React, {useEffect,useState} from 'react'
import NewContainer from "./NewContainer"
import SearchBar from "./SearchBar"


function Database({handleClick}) {

const [newWorks, setNewWorks] = useState([])
const [search, setSearch] = useState("")

//useEffect 2. when ids state gets updated, start fetching each individual id
//useEffect 1. gets ids when search term changes
useEffect(() => {
        if (!search) return;
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=${search}`)                                            
            .then(r=> r.json())
            .then((data) => {
                // console.log('Data', data)
                // let list = data.objectIDs.filter(entry => entry.created > 100).slice(0, 99);
                let idList = data.objectIDs.slice(0,10)
                // console.log(list)
                // setIds(list)
                // do the search functionality right here
                let artList = []
                idList.forEach(async (id) => {
                    let req = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
                    let res = await req.json()
                    let art = {
                        title: res.title,
                        image: res.primaryImageSmall,
                        date: res.objectDate,
                        artist: res.artistDisplayName,
                        medium: res.medium,
                        reference: res.objectURL
                    }
                    console.log('Work of art', art)
                    artList.push(art)
                    console.log('Art list', artList)
                    setNewWorks(artList)
                })
            })
        } // eslint-disable-next-line react-hooks/exhaustive-deps
,[search])

//   const displayArtworks = newWorks.filter((newWork) => 
//   Object.values(newWork).join(" ").toLowerCase().includes(search.toLowerCase())
//   )
//   console.log(newWorks)

return (
    <div>     
    <SearchBar searchTerm={search} onSearchChange={setSearch}/>
    <NewContainer newWorks={newWorks} handleClick={handleClick} />
    </div>
  )
}
export default Database

