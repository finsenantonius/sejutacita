import styled from 'styled-components';
import CategoryCard from './CategoryCard';

const CategorySection = styled.div`
  padding: 1.5rem 0;
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`

const SectionTitle = styled.h1`
  color: #2b46a6;
  margin: 0;
  margin-bottom: 16px;
`

const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 768px) {
    gap: 10px;
  }
`

export default function Categories({ categories, active }) {
  return (
    <CategorySection>
      <SectionTitle>Explore Categories</SectionTitle>
      <CategoryList>
        {categories && 
          categories.map((item) => (
            <CategoryCard data={item} key={item.name} active={active} />
          ))
        }
      </CategoryList>
    </CategorySection>
  )
}