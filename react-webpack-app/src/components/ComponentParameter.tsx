// Built in types
// string, number, boolean, array

type TypeProps = {
  name: string
  age?: number
  isMarried?: boolean
}

export const ComponentWithParameter: React.FC<TypeProps> = ({
  name,
  age,
  isMarried,
}) => {
  console.log(isMarried)

  return (
    <>
      <div>
        name {name} age {age}
      </div>
      <div>Are you married? {isMarried ? 'YES' : 'NO'}</div>
    </>
  )
}
