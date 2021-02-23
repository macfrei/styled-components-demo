import styled from 'styled-components/macro'

export default function ListItem({ text, onClick, isSelected }) {
  return (
    <Item
      onClick={onClick}
      style={{
        textDecoration: `${isSelected && 'line-through'}`,
      }}
    >
      {text}
      <span>Hello</span>
    </Item>
  )
}

const Item = styled.li`
  color: white;

  &::marker {
    content: '🐲';
  }

  span {
    color: hotpink;
  }
`
