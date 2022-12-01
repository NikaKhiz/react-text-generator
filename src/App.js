import React, { useEffect, useState } from 'react';
import data from './data';
function App() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(value);
    if (amount <= 0) {
      amount = 1;
    }
    if (amount >= data.length) {
      amount = data.length;
    }
    setText(data.slice(0, amount));
  }
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum textes?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs : </label>
        <input type="number" name='amount' id="amount" value={value} onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='btn'>generate</button>
      </form>
      <article className="lorem-text">
        {text.map((txt, index) => {
          return <p key={index}>{txt}</p>
        })}
      </article>
    </section>
  )
}

export default App;
