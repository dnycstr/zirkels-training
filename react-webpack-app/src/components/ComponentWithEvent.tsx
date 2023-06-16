interface IProps {
  callEvent2: () => void
}

export const ComponentWithEvent: React.FC<IProps> = ({ callEvent2 }) => {
  const Event1 = () => {
    alert('Event 1')
  }

  return (
    <>
      <button onClick={Event1}>Call Event 1</button>
      <button onClick={callEvent2}>Call Event 2</button>
    </>
  )
}
