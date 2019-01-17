import React from 'react'
import CardComponent from '../card/CardComponent'

const UserSpread = (props) => {

  const renderSpread = () => {
    return props.spread.card_ids.map(card_id => {
      const card = props.indexState.cards.find(card => card.id === card_id)
      return (<CardComponent key={Math.random()} indexState={props.indexState} setIndexState={props.setIndexState} card={card} currentUser={props.currentUser} />)
    })
  }

  const date = props.spread.created_at.split('T')[0]
  const time = props.spread.created_at.split('T')[1].split('.')[0]

  return (
    <div>
      <p>{date} {time}</p>
      {renderSpread()}
    </div>
  )
}

export default UserSpread
