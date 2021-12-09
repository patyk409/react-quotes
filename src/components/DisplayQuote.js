import React from 'react'

const DisplayQyote = ({ randomQuote }) => {
  // jsx
  return (
    <figure className="Quote">
      <blockquote className="Quote-content">
        <q>{randomQuote.quote}</q>
      </blockquote>
      <figcaption className="Quote-author">{randomQuote.author}</figcaption>
    </figure>
  )
}

export default DisplayQyote
