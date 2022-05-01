import styled from 'styled-components'
import logo from '../assets/logo.webp'
import useFetchCategories from '../api/category'
import { useFetchBooks } from '../api/book'
import Container from "../components/Container"
import CategoryCard from '../components/CategoryCard'
import BookCard from '../components/BookCard'

const Logo = styled.img`
  height: 44px;
`

const HeaderSection = styled.div`
  padding: 1.5rem 0;
  display: flex;
`

const CategorySection = styled.div`
  padding: 1.5rem 0;
`

const BookSection = styled.div`
  padding: 1.5rem 0;
`

const SectionTitle = styled.h1`
  color: #2b46a6;
  margin: 0;
  margin-bottom: 16px;
`

const CategoryList = styled.div`
  display: flex;
  gap: 20px;
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
        <HeaderSection>
          <a href='/'>
            <Logo src={logo} />
          </a>
        </HeaderSection>
      </Container>

      <Container>
        <CategorySection>
          <SectionTitle>Explore Categories</SectionTitle>
          <CategoryList>
            {categories && 
              categories.map((item) => (
                <CategoryCard data={item} key={item.name} />
              ))
            }
          </CategoryList>
        </CategorySection>
      </Container>

      <Container color="#f7fcff">
        <BookSection>
          <SectionTitle>Popular Booku This Week</SectionTitle>
          <BookList>
            {books &&
              books.map((item) => (
                <BookCard cover={item.cover_url} title={item.title} author={item.authors[0]} key={item.id} />
              ))
            }
          </BookList>
        </BookSection>
      </Container>     
    </div>
  )
}