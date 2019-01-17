import React from 'react'
import CardComponent from '../card/CardComponent'
import UserSpreadNoteForm from './UserSpreadNoteForm'

const UserSpread = (props) => {

  const renderCards = () => {
    return props.spread.card_ids.map(card_id => {
      const card = props.indexState.cards.find(card => card.id === card_id)
      return (
        <CardComponent
        key={Math.random()}
        indexState={props.indexState}
        setIndexState={props.setIndexState}
        card={card} currentUser={props.currentUser} />
      )
    })
  }

  const renderNotes = () => {
    return props.spread.notes.map(note => {
      return (
        <div>
          <p>Note Goes Here</p>
        </div>
      )
    })
  }

  const date = props.spread.created_at.split('T')[0]
  const time = props.spread.created_at.split('T')[1].split('.')[0]

  console.log(props.spread)

  return (
    <div>

      <p>{date} {time}</p>

      {renderCards()}

      <div>

        {renderNotes()}

        <UserSpreadNoteForm />

      </div>

    </div>
  )
}

export default UserSpread
