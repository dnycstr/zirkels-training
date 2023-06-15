// Built in types
// string, number, boolean, array

interface InterfaceProps {
  name: string
}

export const ComponentWithParameter2: React.FC<InterfaceProps> = ({ name }) => {
  return (
    <>
      <div>name {name}</div>
    </>
  )
}
