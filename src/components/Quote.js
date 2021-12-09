import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import '../style/Quote.css'

// components
import DisplayQyote from './DisplayQuote'
import RandomQuote from './RandomQuote'
import PreviousQuote from './PreviousQuote'

const Quote = () => {
  // states of quote list and random quote
  const [quoteList, setQuoteList] = useState([])
  const [randomQuote, setRandomQuote] = useState([])

  // previous state reference
  const prevQuoteRef = useRef()

  // gets data from api and assigns to states
  useEffect(() => {
    axios
      .get(
        'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json',
      )
      .then((res) => {
        setQuoteList(res.data)
        setRandomQuote(res.data[Math.floor(Math.random() * res.data.length)])
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  // keeps the current state and assigns it to reference
  useEffect(() => {
    prevQuoteRef.current = randomQuote
  })
  const prevQuote = prevQuoteRef.current

  // assigns previous state value to random quote state
  const getPreviousQuote = () => {
    setRandomQuote(prevQuote)
  }

  // generates random value and assigns to state
  const drawRandomQuote = () => {
    setRandomQuote(quoteList[Math.floor(Math.random() * quoteList.length)])
  }

  // jsx
  return (
    <main>
      <DisplayQyote randomQuote={randomQuote} />
      <div className="Quote-button-box">
        <PreviousQuote getPreviousQuote={getPreviousQuote} />
        <RandomQuote drawRandomQuote={drawRandomQuote} />
      </div>
    </main>
  )
}

export default Quote
