interface AddressModel {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface IProps {
  name?: string;
  age: number;
  isActive: boolean;
  address?: AddressModel;
}

export const ComponentWithProps: React.FC<IProps> = ({
  name,
  age,
  isActive,
  address,
}) => {
  return (
    <>
      <div>{name && name}</div>
      <div>{age}</div>
      <div>{isActive ? 'YES' : 'NO'}</div>
      <div>{address && address.city}</div>
    </>
  );
};
