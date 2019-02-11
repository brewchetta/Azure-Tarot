// React
import React from 'react'
// Components
import CardComponent from '../card/CardComponent'
import UserSpreadNoteForm from '../spread/SpreadNoteForm'
//Toolbox
import { parseDate } from '../general/Toolbox'

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
          <p style={{ textAlign: 'right' }}>{note.content} <br/><br/> written on {parseDate(note.created_at)}</p>
        </div>
      )
    })
  }

  render() {
    const date = parseDate(this.props.spread.created_at)

    return (
      <div style={this.props.finalSpread ? null : { borderBottom: 'solid white 3px', paddingBottom: '1em', paddingTop: '1em', marginBottom: '1em' }}>

        <div className='profile-spread-card-container'>

        {this.renderCards()}

        <p>{date}</p>

        </div>

        <div className='profile-notes-container'>

          {this.renderNotes()}

          <img className='profile-note-create' alt='Write New Note' onClick={this.handleToggleForm}
          src='https://www.charbase.com/images/glyph/9997' style={{ float: 'left' }} />

          {!this.props.spread.notes.length && !this.state.noteFormVisible ?
          <p style={{ float: 'left', marginLeft: '0.5em' }}>You haven't written notes for this reading! <br/>Click the button to write your first!</p>
          : null}

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
