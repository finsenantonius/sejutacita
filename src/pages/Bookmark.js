import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Container from "../components/Container"
import Header from '../components/Header'
import BookCard from '../components/BookCard'

const BookSection = styled.div`
  padding: 1.5rem 0;
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`

const SectionTitle = styled.h1`
  color: #2b46a6;
  margin: 0;
  margin-bottom: 16px;
`

const BookList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px 40px;
  @media (max-width: 768px) {
    gap: 30px 40px;
  }
`

export default function Bookmark() {
  const [userBook, setUserBook] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("_user_books")
    setUserBook(localData ? JSON.parse(localData) : [] )
  }, [])

  return (
    <div>
      <Container border="1px solid" borderColor="#e5e7eb">
        <Header />
      </Container>

      <Container color="#f7fcff">
        <BookSection>
          <SectionTitle>My Library</SectionTitle>
          <BookList>
            {userBook &&
              userBook.map((item) => (
                <Link to={`/book/${item.id}`} state={{ data: item }} key={item.id}>
                  <BookCard cover={item.cover_url} title={item.title} author={item.authors[0]} />
                </Link>
              ))
            }
          </BookList>
        </BookSection>
      </Container>
    </div>
  )
}