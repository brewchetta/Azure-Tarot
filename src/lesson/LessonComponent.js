//React
import React from 'react'
// Components
import CardIllustration from '../card/CardIllustration'
import LessonDescription from './LessonDescription'
import LessonWriteForm from './LessonWriteForm'

class LessonComponent extends React.Component {

  state = {
    form: false
  }

  exitLesson = () => {
    this.props.setIndexState({ cardLesson: null })
  }

  paginateLesson = () => {
    this.setState({ form: !this.state.form })
  }

  unlockLesson = (user_description) => {
    this.props.unlockCard(this.props.card, user_description)

    this.exitLesson()
  }

  render(){
    const card = this.props.card
    const form = this.state.form

    return (
      <div className='lesson-container' style={{ top: `${window.pageYOffset - 100}px` }} >

        <h4>{card.card_name}</h4>

        {/* Lesson Description if not on form */}
        { form === false ? <LessonDescription card={card} /> : <LessonWriteForm unlockLesson={this.unlockLesson} /> }

        {/* Card Illustration */}
        <div className='lesson-image'>
          <CardIllustration card={card} />
        </div>

        {/* Button to next or previous page of lesson */}
        <p className='lesson-next-button'
        style={form === false ? { left: '90%' } : null }
        onClick={this.paginateLesson}>
          {form === false ? 'Next' : 'Previous'}
        </p>

        {/* Exit Button */}
        <p className='lesson-exit-button' onClick={this.exitLesson}>X</p>

      </div>
    )
  }
}

export default LessonComponent
