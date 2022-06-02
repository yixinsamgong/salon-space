import React from 'react'

function NewCard({newWork}) {
  const   {medium, 
          artist="Unknown Artist", 
          title, 
          date, 
          image="https://upload.wikimedia.org/wikipedia/en/b/b9/MagrittePipe.jpg"} = newWork

  return (
    <li className="card">
      <img src={image} alt={artist} />
      <h4>{artist}</h4>
      <p className="title">{title}</p>
      <p>{date}</p>
      <p>{medium}</p>
    </li>
  )
}



export default NewCard