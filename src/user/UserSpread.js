import React from 'react'
import CardComponent from '../card/CardComponent'
import UserSpreadNoteForm from '../spread/SpreadNoteForm'

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
        <div key={Math.random()} className='profile-note'>
          <p>{note.content} <br/> {note.created_at.split('T')[0]}</p>
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

      <div className='profile-notes-container'>

        {renderNotes()}

        {!props.spread.notes.length ?
          <p style={{ float: 'left', marginLeft: '0.5em' }}>You haven't written notes for this reading! <br/>Click the button to write your first!</p>
          : null}

        <img className='profile-note-create' alt='Write New Note'
        src='https://www.fileformat.info/info/unicode/char/270d/writing_hand.png'/>

        <UserSpreadNoteForm
        spreadId={props.spread.id}
        updateSpread={props.updateSpread} />

      </div>

    </div>
  )
}

export default UserSpread
