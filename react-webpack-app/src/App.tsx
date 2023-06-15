import { EventComponent } from './components/EventComponent'
import { ParentComponent } from './components/ParentCompnent'
import './styles.css'

export const App = () => {
  const event2 = () => {
    alert('Event 2')
  }

  return (
    <>
      <ParentComponent>
        <EventComponent mayNagClick={event2} />
      </ParentComponent>
    </>
  )
}
