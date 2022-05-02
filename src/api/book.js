import { useState, useEffect } from "react";

export default function useFetchBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=1&size=6');
      const booksData = await response.json()
      setBooks(booksData);
    };
    fetchBooks()
  }, [])

  return {
    books
  }
}