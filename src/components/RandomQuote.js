import React from 'react'

const RandomQuote = ({ quoteList, setRandomQuote }) => {
  // generates random value and assigns to state
  const drawRandomQuote = () => {
    setRandomQuote(quoteList[Math.floor(Math.random() * quoteList.length)])
  }

  // jsx
  return (
    <button className="Random-quote-button" onClick={drawRandomQuote}>
      random quote
    </button>
  )
}

export default RandomQuote
