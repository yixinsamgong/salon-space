import React from 'react'
import NewCard from "./NewCard"

function NewContainer({newWorks}) {

  const newCard = newWorks.map((newWork)=> (
      <NewCard 
        key={newWork.id}
        newWork={newWork}
      />
  ))

  return (
    <ul className="cards">
      {newCard} 
    </ul>
  )
}

export default NewContainer