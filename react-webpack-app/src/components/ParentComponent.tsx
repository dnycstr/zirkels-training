interface IProps {
  children: React.ReactNode
}

// string, number, html tag, React Component

export const ParentComponent: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <div>Parent TOP</div>
      <div>{children}</div>
      <div>Parent FOOTER</div>
    </>
  )
}
