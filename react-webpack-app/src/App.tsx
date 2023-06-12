import './styles.css'
import { Header } from './components/Header'

export const App = () => {
  return (
    <>
      <Header>
        <Child>
          <GrandChild></GrandChild>
        </Child>
      </Header>
    </>
  )
}

interface Props {
  children?: React.ReactNode
}

const Child: React.FC<Props> = ({ children }) => {
  return (
    <div>
      Child <br />
      {children}
    </div>
  )
}

const GrandChild = () => {
  return <div>I am Grand Child</div>
}
