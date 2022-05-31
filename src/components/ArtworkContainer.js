import React from 'react'
import ArtworkCard from "./ArtworkCard"

function ArtworkContainer({artworks}) {
  return (
    <ul classname="cards">
      {/* {artworks.map((artwork)=> */}
      <ArtworkCard 
        // key={artwork.id}
        // artwork={artwork}
      />
    {/* )} */}
    </ul>
  )
}

export default ArtworkContainer