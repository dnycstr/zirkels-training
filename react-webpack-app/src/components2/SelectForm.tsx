import { useState } from 'react'

const initialValue = 'blue'

export const SelectForm = () => {
  const [color, setColor] = useState(initialValue)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(e.target.value)
  }

  console.log(color)

  return (
    <div>
      <span>Select a Color: </span> <br />
      <select onChange={handleChange} value={color}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      <h1 style={{ color: color }}>This is a {color} text</h1>
    </div>
  )
}
