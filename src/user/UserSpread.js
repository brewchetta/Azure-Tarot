import React from 'react'
import CardComponent from '../card/CardComponent'
import UserSpreadNoteForm from '../spread/SpreadNoteForm'

class UserSpread extends React.Component {

  state = {
    noteFormVisible: false
  }

  handleToggleForm = (event) => {
    this.setState({ noteFormVisible: !this.state.noteFormVisible })
  }

  renderCards = () => {
    return this.props.spread.card_ids.map(card_id => {
      const card = this.props.indexState.cards.find(card => card.id === card_id)
      return (
        <CardComponent
        key={Math.random()}
        indexState={this.props.indexState}
        setIndexState={this.props.setIndexState}
        card={card} currentUser={this.props.currentUser} />
      )
    })
  }

  renderNotes = () => {
    return this.props.spread.notes.map(note => {
      return (
        <div key={Math.random()} className='profile-note'>
          <p>{note.content} <br/> {note.created_at.split('T')[0]}</p>
        </div>
      )
    })
  }


  render() {
    const date = this.props.spread.created_at.split('T')[0]
    const time = this.props.spread.created_at.split('T')[1].split('.')[0]

    return (
      <div style={this.props.finalSpread ? null : { borderBottom: 'solid white 3px', paddingBottom: '1em' }}>

        <p>{date} {time}</p>

        {this.renderCards()}

        <div className='profile-notes-container'>

          {this.renderNotes()}

          {!this.props.spread.notes.length ?
            <p style={{ float: 'left', marginLeft: '0.5em' }}>You haven't written notes for this reading! <br/>Click the button to write your first!</p>
            : null}

            <img className='profile-note-create' alt='Write New Note' onClick={this.handleToggleForm}
            src='https://www.charbase.com/images/glyph/9997'/>

            <UserSpreadNoteForm
            noteFormVisible={this.state.noteFormVisible}
            handleToggleForm={this.handleToggleForm}
            spreadId={this.props.spread.id}
            updateSpread={this.props.updateSpread} />

        </div>

      </div>
    )
  }
}

export default UserSpread
