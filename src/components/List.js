import ListItem from './ListItem'
import './List.css'

export default function List({ data, onClick, selected }) {
  console.log(selected)
  return (
    <ul className="List">
      {data.map((item, index) => (
        <ListItem
          key={index}
          isSelected={selected === index}
          text={item}
          onClick={() => onClick(index)}
        />
      ))}
    </ul>
  )
}
