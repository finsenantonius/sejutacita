import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Container from "../components/Container"
import Header from '../components/Header'

const BookDetailSection = styled.div`
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
    flex-direction: column;
  }
`

const BookmarkButton = styled.button`
  height: 45px;
  background-color: #2b46a6;
  border-radius: 8px;
  border: none;
  outline: none;
  color: #FFFFFF;
  cursor: pointer;
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`

const BookmarkButtonMobile = styled.button`
  height: 45px;
  background-color: #2b46a6;
  border-radius: 8px;
  border: none;
  outline: none;
  color: #FFFFFF;
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    width: 100%;
    display: block;
  }
`

const CoverContainer = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-bottom: 12px;
  }
`

const BookCover = styled.img`
  width: 250px;
  border-radius: 10px;
`

const Heading = styled.h1`
  margin: 0;
  margin-bottom: 8px;
`

const Description = styled.p`
  font-size: 18px;
  margin: 0;
`

const Box = styled.div`
  width: 100%;
  margin-left: 36px;
  @media (max-width: 768px) {
    margin: 0;
  }
`

const Line = styled.hr`
  border-width: 0.5px;
  border-color: lightgrey;
  margin: 16px 0;
`

const Divider = styled.div`
  margin: 16px 0;
`

const Section = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #2b46a6;
`

export default function BookDetail() {
  let location = useLocation();
  const { data } = location.state;
  const [userBook, setUserBook] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("_user_books")
    if (!localData) {
      localStorage.setItem("_user_books", JSON.stringify(userBook))
    } else {
      setUserBook(localData ? JSON.parse(localData) : [] )
    }
  }, [])

  const BookmarkBook = (data) => {
    let newData = [...userBook, data]
    localStorage.setItem("_user_books", JSON.stringify(newData))
    alert('Success Save Book')
  }

  return (
    <div>
      <Container border="1px solid" borderColor="#e5e7eb">
        <Header />
      </Container>

      <Container>
        <BookDetailSection>
          <Flex>
            <CoverContainer>
              <BookCover src={data.cover_url} />
            </CoverContainer>
            <Box>
              <Flex>
                <Heading>{data.title}</Heading>
                <BookmarkButton onClick={() => BookmarkBook(data)}>Bookmark</BookmarkButton>
              </Flex>
              <Description>{data.authors[0]}</Description>
              <Line />
              <Heading>What's it about?</Heading>
              <Description>{data.description}</Description>
              <Divider>
                <Heading>What's inside?</Heading>
                {data.sections &&
                  data.sections.map((item) => (
                    <Section key={item.title}>{item.title}</Section>
                  ))
                }
              </Divider>
            </Box>
            <BookmarkButtonMobile onClick={() => BookmarkBook(data)}>Bookmark</BookmarkButtonMobile>
          </Flex>
        </BookDetailSection>
      </Container>
    </div>
  )
}