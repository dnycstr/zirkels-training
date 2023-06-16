import { useState } from 'react'

export const BasicForm = () => {
  const [name, setName] = useState('')

  const handleChange = (element: React.ChangeEvent<HTMLInputElement>) => {
    setName(element.target.value)
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  )
}
