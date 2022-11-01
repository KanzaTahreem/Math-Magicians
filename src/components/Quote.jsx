import React, { useState, useEffect } from 'react';

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
      <section className="quote">
        <h2>{quote}</h2>
        <p>
          {author}
        </p>
      </section>
      <button type="button" className="btn" onClick={NewQuote}>Generate New Quote</button>
    </>

  );
};

export default Quote;
