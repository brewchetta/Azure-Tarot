import React from 'react'

const UserSpread = (props) => {

  const renderSpread = () => {
    return props.spread.card_ids.map(card_id => {
      return (<p key={card_id}>{card_id}</p>)
    })
  }


  return (
    <div>
      {renderSpread()}
    </div>
  )
}

export default UserSpread
