import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled.button`
  border: 1px solid grey;
  padding: 12px;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  font-size: 16px;
`

export default function CategoryCard({ data, active }) {
  const { id, name } = data
  const categoryId = parseInt(active)
  return (
    <Link to={`/${id}`} state={{ category: name }}>
      <Button 
        style={{ 
          backgroundColor: id === categoryId ? '#2b46a6' : '#FFFFFF', 
          color: id === categoryId ? "#FFFFFF" : "#000000"
        }}>
        {name}
      </Button>
    </Link>
  )
}