import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${props => props.backgroundColor};
  border-top: ${props => props.border};
  border-bottom: ${props => props.border};
  border-color: ${props => props.borderColor};
  width: 100%;
  margin: 0 auto;
  padding: 0 0;
`

const ContainerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1280px;
`

export default function Container({ children, color, border, borderColor }) {
  return (
    <Wrapper backgroundColor={color} border={border} borderColor={borderColor}>
      <ContainerWrapper>
        {children}
      </ContainerWrapper>
    </Wrapper>
  )
}