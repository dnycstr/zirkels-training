interface IProps {
  deleteEvent: (recordId: number) => void;
}

export const ComponentWithEventProps: React.FC<IProps> = ({ deleteEvent }) => {
  const handleEvent1Click = () => {
    alert('Hello World!');
  };
  return (
    <>
      <button onClick={handleEvent1Click}>Call Internal</button>
      <button onClick={() => deleteEvent(2)}>Call External</button>
    </>
  );
};
