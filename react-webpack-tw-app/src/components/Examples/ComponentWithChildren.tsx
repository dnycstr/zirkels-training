interface IProps {
  name: string;
  children: React.ReactNode;
}

export const ComponentWithChildren: React.FC<IProps> = ({ name, children }) => {
  return (
    <>
      <div>
        <h1>{name}</h1>
      </div>
      <div>Table Header</div>
      <div>{children}</div>
      <div>Table Footer</div>
    </>
  );
};
