import React from 'react';

const References = () => {
  const books = [
    {
      title: "Designing Machine Learning Systems",
      author: "Chip Huyen",
      link: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/"
    },
    {
      title: "Machine Learning Engineering",
      author: "Andriy Burkov",
      link: "http://www.mlebook.com/"
    }
  ];

  return (
    <div className="references">
      <h2 className="references-heading">References</h2>
      {books.map((book, index) => (
        <a 
          key={index} 
          href={book.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="reference-item"
        >
          <span className="book-title">{book.title}</span>
          <span className="book-author"> — {book.author}</span>
        </a>
      ))}
    </div>
  );
};

export default References;
