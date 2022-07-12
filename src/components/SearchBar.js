
import React,{useEffect} from 'react'

function SearchBar({searchTerm,onSearchChange}) {
  

      function handleSubmit(e) {
        e.preventDefault();
        onSearchChange(searchTerm)
      }
            
            useEffect(() => {
              const delayDebounceFn = setTimeout(() => {
                console.log(searchTerm)
                onSearchChange(searchTerm)
                onSearchChange("")
                // Send Axios request here
              }, 1500)
          
              return () => clearTimeout(delayDebounceFn)
            }, [searchTerm])
            

            // useEffect(() => {
            //   const keyDownHandler = event => {
            //     console.log('User pressed: ', event.key);
          
            //     if (event.key === 'Enter') {
            //       event.preventDefault();
          
            //       // 👇️ call submit function here
            //       handleSubmit();
 
            //     }
            //   };
          
            //   document.addEventListener('keydown', keyDownHandler);
          
            //   return () => {
            //     document.removeEventListener('keydown', keyDownHandler);
            //   };
            // }, [searchTerm]);

        return (
          <div className="searchbar" onSubmit={handleSubmit}>
            <label htmlFor="search">Search Artworks:</label>
            <input
              type="text"
              id="search"
              placeholder="Type to search..."
              // value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              autoComplete="off"
            />
          </div>
        )
      }

export default SearchBar