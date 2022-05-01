import styled from 'styled-components'

const Container = styled.div`
  width: 180px;
`

const BookCover = styled.img`
  width: 180px;
  border-radius: 10px;
`

const BookTitle = styled.p`
  font-weight: bold;
  margin: 6px 0;
`

const BookAuthor = styled.p`
  margin: 0;
  font-size: 14px;
`

export default function BookCard({ cover, title, author }) {
  return (
    <Container>
      <BookCover src={cover} alt={title} />
      <BookTitle>{title}</BookTitle>
      <BookAuthor>{author}</BookAuthor>
    </Container>
  )
}