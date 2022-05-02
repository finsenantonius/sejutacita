import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useFetchCategories from '../api/category'
import useFetchBooks from '../api/book'
import Container from "../components/Container"
import BookCard from '../components/BookCard'
import Header from '../components/Header'
import Categories from '../components/Categories'

const BookSection = styled.div`
  padding: 1.5rem 0;
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
`

export default function Home() {
  const { categories } = useFetchCategories();
  const { books } = useFetchBooks();

  return (
    <div>
      <Container border="1px solid" borderColor="#e5e7eb">
        <Header />
      </Container>

      <Container>
        <Categories categories={categories} />
      </Container>

      <Container color="#f7fcff">
        <BookSection>
          <SectionTitle>Popular Booku This Week</SectionTitle>
          <BookList>
            {books &&
              books.map((item) => (
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