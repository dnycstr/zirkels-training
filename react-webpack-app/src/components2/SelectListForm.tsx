import { useState } from 'react'

const initialValue = 'blue'

const options = [
  { value: 'red', label: 'Pula' },
  { value: 'green', label: 'Berde' },
  { value: 'blue', label: 'Asul' },
  { value: 'yellow', label: 'Dilaw' },
]

export const SelectListForm = () => {
  const [color, setColor] = useState(initialValue)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(e.target.value)
  }

  console.log(color)

  return (
    <div>
      <span>Select a Color: </span> <br />
      <select onChange={handleChange} value={color}>
        {options.map((row) => (
          <option key={row.value} value={row.value}>
            {row.label}
          </option>
        ))}
      </select>
      <h1 style={{ color: color }}>This is a {color} text</h1>
    </div>
  )
}
