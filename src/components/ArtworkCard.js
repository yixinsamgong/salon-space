import React from 'react'

function ArtworkCard() {
  return (
    <li className="card">
      <img src={"https://via.placeholder.com/400"} alt={"plant name"} />
      <h4>{"plant name"}</h4>
      <p>Price: {"plant price"}</p>
      {true ? (
        <button className="primary">♥</button>
      ) : (
        <button>♥</button>
      )}
    </li>
  )
}
export default ArtworkCard