interface Props {
  children?: React.ReactNode // Passing Component
}

export const Header: React.FC<Props> = ({ children }) => {
  return (
    <div>
      Header
      <br />
      {children}
    </div>
  )
}
