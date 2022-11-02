import React, { useState, useEffect } from 'react';
import '../stylesheets/Quote.css';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const getQuote = () => {
    fetch('https://random-math-quote-api.herokuapp.com/')
      .then((res) => res.json())
      .then(
        (quote) => {
          setQuote(quote.quote);
          setAuthor(quote.author);
        },
      );
  };

  useEffect(() => {
    getQuote();
  }, []);

  const NewQuote = () => {
    getQuote();
  };

  return (
    <>
      <section className="quote-container">
        <h2 className="quote">
          {`"${quote}"`}
          <span className="author">
            {' '}
            -
            {' '}
            {author}
          </span>
        </h2>
        <button type="button" className="generate" onClick={NewQuote}>Generate Quote</button>
      </section>
    </>
  );
};

export default Quote;
