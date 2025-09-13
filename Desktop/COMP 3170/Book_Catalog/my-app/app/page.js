"use client";
import { useEffect, useState } from "react";
import Book from "./components/Book";
import "./globals.css";

export default function Home() {
  const [books, setBooks] = useState([]);


  const isbnList = ["9781617294136", "9781492051138"];

  useEffect(() => {
    async function fetchBooks() {
      const results = [];
      for (const isbn of isbnList) {
        const res = await fetch(`https://api.itbook.store/1.0/books/${isbn}`);
        const data = await res.json();
        results.push(data);
      }
      setBooks(results);
    }
    fetchBooks();
  }, []);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>📚 My Book Catalog</h1>
      </header>

      {/* Content Area */}
      <main className="content">
        {books.map((book) => (
          <Book key={book.isbn13} book={book} />
        ))}

        {/* Add Button */}
        <button className="add-button">+ Add</button>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 My Book Catalog</p>
      </footer>
    </div>
  );
}
