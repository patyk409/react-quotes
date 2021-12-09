import React from 'react'

const PreviousQuote = ({ getPreviousQuote }) => {
  // jsx
  return (
    <button className="Previous-quote-button" onClick={getPreviousQuote}>
      previous quote
    </button>
  )
}

export default PreviousQuote
