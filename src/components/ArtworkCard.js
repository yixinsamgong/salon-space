import React from 'react'

function ArtworkCard({artwork}) {

  const {medium, artist, title, year, image} = artwork

  return (
    <li className="card">
      <img src={image} alt={artist} />
      <h4>{artist}</h4>
      <p>{title}</p>
      <p>{year}</p>
      <p>{medium}</p>
      {true ? (
        <button className="primary">♥</button>
      ) : (
        <button>♡</button>
      )
      }
    </li>
  )
}



export default ArtworkCard