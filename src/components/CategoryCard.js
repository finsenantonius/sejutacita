import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled.button`
  border: 1px solid grey;
  padding: 12px;
  border-radius: 8px;
  background: #FFFFFF;
  outline: none;
  cursor: pointer;
  font-size: 16px;
`

export default function CategoryCard({ data }) {
  const { id, name } = data
  return (
    <Link to={`/${id}`} state={{ category: name }}>
      <Button>{name}</Button>
    </Link>
  )
}