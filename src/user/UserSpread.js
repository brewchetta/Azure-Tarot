import React from 'react'
import CardComponent from '../card/CardComponent'

const UserSpread = (props) => {

  const renderSpread = () => {
    return props.spread.card_ids.map(card_id => {
      const card = props.indexState.cards.find(card => card.id === card_id)
      return (<CardComponent key={card.id} indexState={props.indexState} card={card} />)
    })
  }


  return (
    <div>
      {renderSpread()}
    </div>
  )
}

export default UserSpread
