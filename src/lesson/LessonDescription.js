import React from 'react'

export default function LessonDescription(props) {

  const card = props.card

  const renderKeywords = () => {
    return card.keywords.map(keyword => {
      return (<li key={keyword}>{keyword}</li>)
    })
  }

  return (
    <div className='lesson-text'>

      <p>{card.description}</p>

      <p>Keywords:</p>

      <ul>
        {renderKeywords()}
      </ul>

      <p>Things to think about:</p>

      <p>{card.rev_description}</p>

    </div>
  )
}
