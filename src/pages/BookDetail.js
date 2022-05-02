import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo.webp'
import useFetchCategories from '../api/category'
import Container from "../components/Container"
import CategoryCard from '../components/CategoryCard'
import BookCard from '../components/BookCard'
import Pagination from '../components/Pagination'

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

const Flex = styled.div`
  display: flex;
  align-items: flex-start;
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
`

const CategoryList = styled.div`
  display: flex;
  gap: 20px;
`

const BookList = styled.div`
  display: ${props => props.display};
  flex-wrap: wrap;
  gap: 60px 40px;
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
  const { data } = location.state
  console.log(data);
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
          <Flex>
            <BookCover src={data.cover_url} />
            <Box>
              <Heading>{data.title}</Heading>
              <Description>{data.authors[0]}</Description>
              <Line />
              <Heading>What's it about?</Heading>
              <Description>{data.description}</Description>
              <Divider>
                <Heading>What's inside?</Heading>
                {data.sections &&
                  data.sections.map((item) => (
                    <Section>{item.title}</Section>
                  ))
                }
              </Divider>
            </Box>
          </Flex>
        </CategorySection>
      </Container>
 
    </div>
  )
}