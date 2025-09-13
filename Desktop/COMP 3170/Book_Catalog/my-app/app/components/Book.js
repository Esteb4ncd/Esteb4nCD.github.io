export default function Book({ book }) {
    return (
      <div className="book-card">
        <img src={book.image} alt={book.title} />
        <h3>{book.title}</h3>
        <p>{book.authors}</p>
        <a href={book.url} target="_blank" rel="noopener noreferrer">
          View Details
        </a>
      </div>
    );
  }
  