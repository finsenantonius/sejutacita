import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useFetchCategories from '../api/category'
import Container from "../components/Container"
import BookCard from '../components/BookCard'
import Pagination from '../components/Pagination'
import Header from '../components/Header'
import Categories from '../components/Categories'

const BookSection = styled.div`
  padding: 1.5rem 0;
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`

const PaginationSection = styled.div`
  padding: 1.5rem 0;
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`

const Flex = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`

const SectionTitle = styled.h1`
  color: #2b46a6;
  margin: 0;
  margin-bottom: 16px;
`

const SearchInput = styled.input`
  width: 300px;
  height: 38px;
  padding-left: 8px;
  background: #FFFFFF;
  border: 1px solid #2b46a6;
  border-radius: 8px;
  outline: none;
  margin-right: 12px;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 12px;
    margin-right: 0;
    padding: 0;
  }
`

const SeachButton = styled.button`
  width: 60px;
  height: 42px;
  background-color: #2b46a6;
  border-radius: 8px;
  border: none;
  outline: none;
  color: #FFFFFF;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`

const BookList = styled.div`
  display: ${props => props.display};
  flex-wrap: wrap;
  gap: 60px 40px;
  @media (max-width: 768px) {
    gap: 30px 40px;
  }
`

export default function Book() {
  let params = useParams();
  let location = useLocation();
  let id = params.category
  const { category } = location.state
  const { categories } = useFetchCategories();

  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(18);
  const [search, setSearch] = useState("");
  const [onSearch, setOnSearch] = useState(false);
  const [bookResult, setBookResult] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(`https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${id}`);
      const booksData = await response.json()
      setBooks(booksData);
      setCurrentPage(1);
    };
    fetchBooks()
  }, [category])

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const searchBooks = () => {
    if (search !== "") {
      let bookArray = []
      let data = books.find(e => e.title.toLowerCase() === search.toLowerCase() || e.authors[0].toLowerCase() === search.toLowerCase())

      if (data) {
        bookArray.push(data)
        setBookResult(bookArray)
        setOnSearch(true)
      } else {
        setOnSearch(false)
      }
    } else {
      setOnSearch(false)
    }
  }

  return (
    <div>
      <Container border="1px solid" borderColor="#e5e7eb">
        <Header />
      </Container>

      <Container>
        <Categories categories={categories} active={id} />
      </Container>

      <Container color="#f7fcff">
        <BookSection>
          <Flex>
            <SectionTitle>{category}</SectionTitle>
            <Flex>
              <SearchInput 
                type="text" 
                placeholder='Search Books' 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
              />
              <SeachButton onClick={searchBooks}>Search</SeachButton>
            </Flex>
          </Flex>
          <BookList display={onSearch ? "none" : "flex"} >
            {books &&
              currentBooks.map((item) => (
                <Link to={`/book/${item.id}`} state={{ data: item }} key={item.id}>
                  <BookCard cover={item.cover_url} title={item.title} author={item.authors[0]} />
                </Link>
              ))
            }
          </BookList>
          <BookList display={onSearch ? "flex" : "none"}>
            {books &&
              bookResult.map((item) => (
                <Link to={`/book/${item.id}`} state={{ data: item }} key={item.id}>
                  <BookCard cover={item.cover_url} title={item.title} author={item.authors[0]} />
                </Link>
              ))
            }
          </BookList>
        </BookSection>

        <Container>
          <PaginationSection>
            <div style={{ display: onSearch ? 'none' : 'block' }}>
              <Pagination booksPerPage={booksPerPage} totalBooks={books.length} paginate={paginate} />
            </div>
          </PaginationSection>
        </Container>
      </Container>     
    </div>
  )
}