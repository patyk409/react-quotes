import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../style/Quote.css'

// components
import RandomQuote from './RandomQuote'
import PreviousQuote from './PreviousQuote'

const Quote = () => {
  // states of quote list and random quote
  const [quoteList, setQuoteList] = useState([])
  const [randomQuote, setRandomQuote] = useState([])

  // gets data from api and assigns to states
  useEffect(() => {
    axios
      .get(
        'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json',
        JSON.stringify(),
      )
      .then((res) => {
        setQuoteList(res.data)
        setRandomQuote(res.data[Math.floor(Math.random() * res.data.length)])
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  // jsx
  return (
    <main>
      <figure className="Quote">
        <blockquote className="Quote-content">
          <q>{randomQuote.quote}</q>
        </blockquote>
        <figcaption className="Quote-author">{randomQuote.author}</figcaption>
      </figure>
      <div className="Quote-button-box">
        <PreviousQuote randomQuote={randomQuote} setRandomQuote={setRandomQuote} />
        <RandomQuote quoteList={quoteList} setRandomQuote={setRandomQuote} />
      </div>
    </main>
  )
}

export default Quote
