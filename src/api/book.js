import { useState, useEffect } from "react";

export function useFetchBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=1&size=6');
      const booksData = await response.json()
      console.log(booksData);
      setBooks(booksData);
    };
    fetchBooks()
  }, [])

  return {
    books
  }
}

export function useFetchBooksByCategory(id, category) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(`https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${id}`);
      const booksData = await response.json()
      console.log(booksData);
      setBooks(booksData);
    };
    fetchBooks()
  }, [category])

  return {
    books
  }
}