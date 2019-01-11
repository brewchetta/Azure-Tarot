import React from 'react'
import { fetchGetAllCards } from '../card/FetchCard'

export default class SpreadTable {

  state = {
    cards: []
  }

  render() {
    return (
      <div>
        <p>I am Spread Table</p>
      </div>
    )
  }

}
