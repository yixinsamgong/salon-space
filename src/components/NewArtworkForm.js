//set controlled form
//add onSubmit to capture event 
//set router 
//use param hook
//push method to push new info to app
{/* <Route path="/:id/edit">
  <NewArtworkForm onAddArtwork={onAddArtwork} />

<Home />
</Route> */}

import React, { useState } from 'react'

function NewArtworkForm({ onAddArtwork }) {
  //declare state-medium, artist, title, year, image
  const [medium, setMedium] = useState("");
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState();
  const [image, setImage] = useState("");

  //handle submit
  //POST method

  function handleSubmit(e) {
    e.preventDefault(); //prevent page from refreshing
//fetch request with POST
    fetch("http://localhost:3004/artworks", {
      method: "POST",
      header: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        medium: medium,
        artist: artist,
        title: title,
        year: year,
        image: image,
      }),
    })
      .then((response)  => response.json())
      .then((newArtwork) => onAddArtwork(newArtwork));

    //add new artwork to page
  }


  return (
//include text input area with states
//target input value for users to enter information
    <div className="new-artwork-form">
      <h2>Add Artwork</h2>
       <form onSubmit={handleSubmit}>
          <input
         type="text"
         name="medium"
         placeholder="Artwork Medium"
         value={medium}
         onChange={(e) => setMedium(e.target.value)}
         />
           <input
            type="text"
            name="artist"
            placeholder="Artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
           <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
          <input
           type="number"
           name="year"
           placeholder="Year"
           value={year}
           onChange={(e) => setYear(e.target.value)}
         />
         <input 
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
         />
           <button type="submit">Add Artwork</button>
        </form>
    </div>
  );
}

export default NewArtworkForm;