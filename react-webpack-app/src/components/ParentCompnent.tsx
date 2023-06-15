interface ParentComponentProps {
  children: React.ReactNode
}

export const ParentComponent: React.FC<ParentComponentProps> = ({
  children,
}) => {
  return (
    <>
      <div>Parent Component TOP</div>
      <div>{children}</div>
      <div>Parent Component BOTTOM</div>
    </>
  )
}
