import React from 'react'

interface IProps {
  name: string
  age?: number
  isActive?: boolean
}

export const ComponentWithParameter: React.FC<IProps> = ({
  name,
  age,
  isActive,
}) => {
  console.log(isActive)

  return (
    <>
      <div>name {name}</div>
      <div>age {age}</div>
      <div>
        Are you Active?
        {isActive == undefined ? 'Walang sagot' : isActive ? 'YES' : 'NO'}
      </div>
    </>
  )
}
