// React
import React from 'react'

export default class LessonWriteForm extends React.Component {

  state = {
    user_description: ''
  }

  handleChange = event => {
    this.setState({ user_description: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    console.log(this.state.user_description)
  }

  render() {
    return (
      <div className='lesson-text'>

        <p>Now that you've read a little bit about the card, think about what it does. Write your own version of the card that'll be part of your deck. There are no wrong answers and you can always edit the description later.</p>

        <p>Once you've written something click the button below to add it to your deck!</p>

        <form onSubmit={this.handleSubmit}>

          <textarea className='lesson-form-text'
          value={this.state.user_description}
          onChange={this.handleChange}
          maxLength='300' />

          <br/>

          <input type='submit' />

        </form>

      </div>
    )
  }
}
