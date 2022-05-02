import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Ul = styled.ul`
  padding: 0;
  display: flex;
  text-align: center;
  gap: 12px;
`

const List = styled.li`
  width: 20px;
  height: 20px;
  border-radius: 8px;
  background-color: #2b46a6;
  color: #FFFFFF;
  padding: 8px;
  list-style-type: none;
  cursor: pointer;
`

export default function Pagination({ booksPerPage, totalBooks, paginate }) {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i)
  }
  
  return (
    <Container>
      <Ul>
        {pageNumbers.map((number) => (
         <List key={number} onClick={() => paginate(number)}>
            {number}
         </List> 
        ))}
      </Ul>
    </Container>
  )
}