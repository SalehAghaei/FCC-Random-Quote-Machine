import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[quote , setQuote] = useState("");
  const[author, setAuthor] = useState("");

  useEffect(()=> {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };
  

  return (
    <div id="quote-box">
      <p id="text">{quote}</p>
      <h5 id="author">— {author}</h5>
      <button id="new-quote" onClick={fetchQuote}>New Quote</button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet
      </a>
    </div>
  )
}

export default App
