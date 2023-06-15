// Event Handler Parameter
// Callback function parameter (proper term)

interface EventComponentProps {
  mayNagClick: () => void
}

export const EventComponent: React.FC<EventComponentProps> = ({
  mayNagClick,
}) => {
  const event1 = () => {
    alert('Event 1')
  }

  return (
    <>
      <div>Event Component</div>
      <button onClick={mayNagClick}>May Nag Click</button>
      <button onClick={event1}>Event 1 Click</button>
    </>
  )
}
