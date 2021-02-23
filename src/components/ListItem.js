import './ListItem.css'

export default function ListItem({ text, onClick, isSelected }) {
  return (
    <li
      onClick={onClick}
      className="List__item"
      style={{
        textDecoration: `${isSelected && 'line-through'}`,
      }}
    >
      {text}
    </li>
  )
}
