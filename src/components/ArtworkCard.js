import React,{useState} from 'react'

function ArtworkCard({artwork}) {
  const [like, setLike] = useState(true)
  const {medium, artist, title, year, 
    image="https://upload.wikimedia.org/wikipedia/en/b/b9/MagrittePipe.jpg"} = artwork

  function handleToggleClick (){
    setLike((like) => !like)
}

  return (
    <li className="card">
      <img src={image} alt={artist} />
     
      {like ? (
        <button className="button"onClick={handleToggleClick}>♡</button>
      ) : (
        <button className="button" onClick={handleToggleClick}>♥</button>
      )
    }
     <div>
      <h4>{artist}</h4>
      <p className="title">{title}</p>
      <p>{year}</p>
      <p>{medium}</p>
    </div>
    </li>
  )
}



export default ArtworkCard