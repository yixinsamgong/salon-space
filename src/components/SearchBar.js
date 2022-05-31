import React from 'react'

<<<<<<< HEAD
function SearchBar() {
  return (
    <div>SearchBar</div>
  )
}
=======
function SearchBar(searchTerm, onSearchChange) {

      // function handleSubmit(e) {
      //   e.preventDefault();
      //   onSearchChange(searchTerm)
      // }
      
        return (
          <div className="searchbar">
            <label htmlFor="search">Search Artworks:</label>
            <input
              type="text"
              id="search"
              placeholder="Type a name to search..."
              // value={searchTerm}
              // onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        );
      }
>>>>>>> main

export default SearchBar