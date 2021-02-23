import styled from 'styled-components/macro'

export default styled.button`
  border: 1px solid black;
  background-color: ${(props) => (props.bgColor ? props.bgColor : 'lightgray')};
  padding: 8px;
`
