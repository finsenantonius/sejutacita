import styled from 'styled-components'
import logo from '../assets/logo.webp'
import useFetchCategories from '../api/category'
import { useFetchBooksByCategory } from '../api/book'
import Container from "../components/Container"
import CategoryCard from '../components/CategoryCard'
import BookCard from '../components/BookCard'
import { useParams, useLocation } from 'react-router-dom'

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

export default function Book() {
  let params = useParams();
  let location = useLocation();
  const { category } = location.state
  const { categories } = useFetchCategories();
  const { books } = useFetchBooksByCategory(params.category, category);

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
          <SectionTitle>{category}</SectionTitle>
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