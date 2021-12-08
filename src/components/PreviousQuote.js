import React, { useRef, useEffect } from 'react'

const PreviousQuote = ({ randomQuote, setRandomQuote }) => {
  // previous state reference
  const prevQuoteRef = useRef()

  // keeps the current state and assigns it to reference
  useEffect(() => {
    prevQuoteRef.current = randomQuote
  })
  const prevQuote = prevQuoteRef.current

  // assigns previous state value to random quote state
  const getPreviousQuote = () => {
    setRandomQuote(prevQuote)
  }

  // jsx
  return (
    <button className="Previous-quote-button" onClick={getPreviousQuote}>
      previous quote
    </button>
  )
}

export default PreviousQuote
