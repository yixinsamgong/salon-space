import React from 'react'
import ArtworkCard from "./ArtworkCard"

function ArtworkContainer({artworks}) {

  const artworkCard = artworks.map((artwork)=> (
      <ArtworkCard 
        key={artwork.id}
        artwork={artwork}
      />
  ))

  return (
    <ul className="cards">
      {artworkCard} 
    </ul>
  )
}

export default ArtworkContainer;



