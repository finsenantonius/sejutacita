import styled from 'styled-components';
import CategoryCard from './CategoryCard';

const CategorySection = styled.div`
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