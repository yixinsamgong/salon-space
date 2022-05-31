import React from 'react'

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

export default SearchBar