import styled from 'styled-components';
import logo from '../assets/logo.webp'

const Logo = styled.img`
  height: 44px;
`

const HeaderSection = styled.div`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`

const BookmarkButton = styled.button`
  width: 100px;
  height: 45px;
  background-color: #2b46a6;
  border-radius: 8px;
  border: none;
  outline: none;
  color: #FFFFFF;
  cursor: pointer;
`

export default function Header() {
  return (
    <HeaderSection>
      <a href='/'>
        <Logo src={logo} />
      </a>
      <a href='/bookmark'>
        <BookmarkButton>My Library</BookmarkButton>
      </a>
    </HeaderSection>
  )
}