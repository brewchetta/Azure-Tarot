// This page is a hidden component that should get removed once cards have been created

import React from 'react'

export default class CardCreate extends React.Component {

  state = {
    card_name: '',
    card_suit: '',
    description: '',
    rev_description: '',
    keywords: [],
    rev_keywords: [],
    major_arcana: true
  }

  render() {
    return (
      <div>
        <p>I am card builder</p>
      </div>
    )
  }
}
