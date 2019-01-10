// This page is a hidden component that should get removed once cards have been created

import React from 'react'
import { fetchCreateCard } from './FetchCard'

export default class CardCreate extends React.Component {

  state = {
    card_name: '',
    card_suit: '',
    card_rank: 0,
    description: '',
    rev_description: '',
    keywords: [],
    rev_keywords: [],
    major_arcana: true,
    // These last two are only for the forms to add keywords
    keyword: '',
    rev_keyword: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetchCreateCard({ card: this.state })
      .then(response => console.log(response))
  }

  handleKeywordSubmit = (event) => {
    event.preventDefault()
    if (this.state.keyword.length) {
      this.setState({
        keywords: [...this.state.keywords, this.state.keyword],
        keyword: ''
      })
    }
    if (this.state.rev_keyword.length) {
      this.setState({
        rev_keywords: [...this.state.rev_keywords, this.state.rev_keyword],
        rev_keyword: ''
      })
    }

  }

  render() {
    return (
      <div>
        <h1>Hello! I pull cards from the Æther and hook them up to the cosmic machine!</h1>
        <form onSubmit={this.handleSubmit}>

          <label>Name</label>
          <input name='card_name'
          type='text'
          onChange={this.handleChange}
          value={this.state.card_name} />
          <br/>

          <label>Suit</label>
          <input name='card_suit'
          type='text'
          onChange={this.handleChange}
          value={this.state.card_suit} />
          <br/>

          <label>Description</label>
          <textarea name='description'
          onChange={this.handleChange}
          value={this.state.description} />
          <br/>

          <label>Reversal Description</label>
          <textarea name='rev_description'
          onChange={this.handleChange}
          value={this.state.rev_description} />
          <br/>

          <label>Number In Suit</label>
          <input name='card_rank'
          type='number'
          onChange={this.handleChange}
          value={this.state.card_rank} />
          <br/>

          {this.state.major_arcana ? <p>All cards are MAJOR arcana</p> : <p>All cards are MINOR arcana</p> }

          <input type='submit'/>

        </form>

        <br/>

        <form onSubmit={this.handleKeywordSubmit}>

          <h2>Add Keywords to Form</h2>

          <label>Keywords</label>
          <input name='keyword'
          type='text'
          onChange={this.handleChange}
          value={this.state.keyword} />
          <br/>

          <label>Reversal keywords</label>
          <input name='rev_keyword'
          type='text'
          onChange={this.handleChange}
          value={this.state.rev_keyword} />
          <br/>

          <input type='submit' />

        </form>

        <h4>Keywords</h4>
        {this.state.keywords.map((word, i) => (<p key={i}>{i + 1}. {word}</p>))}

        <h4>Reversal Keywords</h4>
        {this.state.rev_keywords.map((word, i) => (<p key={i}>{i + 1}. {word}</p>))}

      </div>
    )
  }
}
