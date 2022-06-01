import React, {useEffect,useState} from 'react'

function Database() {

const [search,setSearch] = useState("Los Angeles")


        useEffect(() => {
            fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=${search}`)
            .then(r=> r.json())
            .then((data) => {
        console.log(data.objectIDs)
                data.objectIDs.map((id) => {
                    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
                    .then(r=> r.json()) 
                    .then ((id) => {
                        console.log(id);
                    })
                })
            })},[search])


    

return (
<div>Database</div>
  )

}
export default Database