import React from 'react'
import CardComponent from '../card/CardComponent'

const SpreadPosition = (props) => {


  return (
    <div className='position-container-threecard'>
      <p>{props.position}</p>

      <div className='card-component-flip-container'>

        <CardComponent card={props.card}
        indexState={props.indexState}
        setIndexState={props.setIndexState}
        currentUser={props.currentUser} />

        <div className='card-component-back'>
        </div>

      </div>

    </div>
  )
}

export default SpreadPosition
