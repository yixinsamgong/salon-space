import React, {useState}from 'react'



function NewCard({newWork, handleClick}) {
  
  
 const [addWork, setAddWork] = useState([])

  const   {
          id,
          medium, 
          artist, 
          title, 
          date, 
          image,
          reference}= newWork

function handleClick(){
  // console.log(artist)
  fetch("http://localhost:4000/artworks", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id:id,
      medium: medium,
      artist: artist,
      title: title,
      year: date,
      image: image,
    }),
  })
  .then(r => r.json())
.then((addWork) => 
    console.log(addWork),
    setAddWork(addWork));
    
}

  return (
    <li className="card" >
      {image === "" ? 
      <a target="_blank" href="https://en.wikipedia.org/wiki/The_Treachery_of_Images" >
      <img src={"https://upload.wikimedia.org/wikipedia/en/b/b9/MagrittePipe.jpg"} alt={"MagrittePipe"}/>
      </a>
      : 
      <img src={image} alt={artist}/> }
      {artist === "" ? <h4>Unknown Artist</h4> : <h4>{artist}</h4> }
      <a href={reference} target="_blank">
          <p className="title">{title}</p>
      </a>
      <p>{date}</p>
      <p>{medium}</p>
      <button className="button" onClick={handleClick}>➕</button>
    </li>
  )
}



export default NewCard