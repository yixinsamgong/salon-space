import React from 'react'
import NewCard from "./NewCard"

function NewContainer({newWorks, handleClick}) {

  const newCard = newWorks.map((newWork)=> (
      <NewCard 
        key={newWork.id}
        newWork={newWork}
        handleClick={handleClick}
      />
  ))

  return (
    <ul className="cards">
      {newCard} 
    </ul>
  )
}

export default NewContainer