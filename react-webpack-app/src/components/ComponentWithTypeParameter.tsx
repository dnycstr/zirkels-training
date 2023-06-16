type IProps = {
  name: string
}

export const ComponentWithTypeParameter: React.FC<IProps> = ({ name }) => {
  return <div>name {name}</div>
}
