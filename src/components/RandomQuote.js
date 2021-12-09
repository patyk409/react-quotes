import React from 'react'

const RandomQuote = ({ drawRandomQuote }) => {
  // jsx
  return (
    <button className="Random-quote-button" onClick={drawRandomQuote}>
      random quote
    </button>
  )
}

export default RandomQuote
