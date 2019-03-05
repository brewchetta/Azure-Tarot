import React from 'react'

export default function CardIndexSelectSuit({suit, handleSuitChange}) {
  return (
    <select className='card-index-select' value={suit} onChange={handleSuitChange}>
      <option value='majorArcana'>Major Arcana</option>
      <option value='cups'>Cups</option>
      <option value='pentacles'>Pentacles</option>
      <option value='swords'>Swords</option>
      <option value='wands'>Wands</option>
    </select>
  )
}
