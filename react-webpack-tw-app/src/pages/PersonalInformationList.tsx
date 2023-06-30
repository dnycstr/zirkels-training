import { useEffect, useState } from 'react';

interface PersonalInformationModel {
  firstname: string;
  lastname: string;
  birthDate?: Date;
  email: string;
  phone?: string;
}

interface PersonalInformationList {
  contacts: PersonalInformationModel[];
}

const initialPersonalInfoList: PersonalInformationList = {
  contacts: [],
};

const id = 10;

export const PersonalInformationList: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [personalInfoList, setPersonalInfoList] =
    useState<PersonalInformationList>(initialPersonalInfoList);

  useEffect(() => {
    loadPersonalInformation();
  }, [id]);

  const loadPersonalInformation = () => {
    const URL = `https://zirkels-redfalcon-app.dscodelab.com/api/contacts/`;

    fetch(URL, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      }),
    })
      .then((response) => response.json() as Promise<PersonalInformationList>)
      .then((data) => {
        setPersonalInfoList(data);
        console.log(data);
        setIsLoading(false);
      });
  };

  console.log(personalInfoList);

  if (isLoading) {
    return <div>Is Loading....</div>;
  } else {
    return (
      <>
        <div className="flex flex-col">
          {personalInfoList.contacts.map((row, index) => (
            <div key={index}>
              {row.firstname} - {row.lastname}
            </div>
          ))}
        </div>
      </>
    );
  }
};
