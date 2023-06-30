import { Formik, FormikHelpers } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';

import { DateInput } from 'src/components/Forms/DateInput';
import { Input } from 'src/components/Forms/Input';

const PersonalInformationValidation = Yup.object().shape({
  firstname: Yup.string()
    .max(20, 'Sobra ang Pangalan')
    .required('First Name is Required'),
  lastname: Yup.string().max(21, 'Sobra ang Apelyido').nullable(),
  email: Yup.string().email('Invalid Email').required('Email is Required'),
  birthDate: Yup.date()
    .max(new Date(), 'Must least than today')
    .required('Birth Date is Required'),
  phone: Yup.string().required('Phone is Required'),
});

interface PersonalInformationModel {
  firstName: string;
  lastName: string;
  birthDate?: Date;
  email: string;
  phone?: string;
}

const initialValues: PersonalInformationModel = {
  firstName: '',
  lastName: '',
  email: '',
  birthDate: undefined,
  phone: '',
};

const id = 10;

export const PersonalInformationEdit: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [personalInfo, setPersonalInfo] =
    useState<PersonalInformationModel>(initialValues);

  useEffect(() => {
    loadPersonalInformation();
  }, [id]);

  const loadPersonalInformation = () => {
    const URL = `https://zirkels-redfalcon-app.dscodelab.com/api/contacts/${id}`;

    fetch(URL, {
      method: 'GET',
    })
      .then((response) => response.json() as Promise<PersonalInformationModel>)
      .then((data) => {
        setPersonalInfo(data);
        setIsLoading(false);
      });
  };

  const handleUpdate = (
    values: PersonalInformationModel,
    action: FormikHelpers<PersonalInformationModel>
  ) => {
    const URL = `https://zirkels-redfalcon-app.dscodelab.com/api/contacts/${id}`;

    fetch(URL, {
      method: 'PUT',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      }),
      body: JSON.stringify(values),
    }).then((response) => {
      if (response.status == 204) {
        alert('Successfully Updated');
        action.resetForm();
      }
    });
  };

  const handleDelete = () => {
    const URL = `https://zirkels-redfalcon-app.dscodelab.com/api/contacts/${id}`;

    fetch(URL, {
      method: 'DELETE',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      }),
    }).then((response) => {
      if (response.status == 204) {
        alert('Successfully Deleted');
      }
    });
  };

  if (isLoading) {
    return <div>Is Loading....</div>;
  } else {
    return (
      <>
        <div className="flex flex-col">
          <Formik
            validationSchema={PersonalInformationValidation}
            validateOnChange={true}
            validateOnBlur={true}
            initialValues={personalInfo}
            onSubmit={(values, action) => {
              handleUpdate(values, action);
            }}
          >
            {(formikProps) => {
              return (
                <div className="max-w-lg mx-40">
                  <form method="POST" onSubmit={formikProps.handleSubmit}>
                    <Input name="firstname" label="First Name" />
                    <Input name="lastname" label="Last Name" />
                    <Input name="email" label="Email" />
                    <DateInput name="birthDate" label="Birth Date" />
                    <Input name="phone" label="Phone Number" />
                    <button
                      type="button"
                      className="border mt-4 p-2 rounded-md bg-red-500"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                    <button
                      type="submit"
                      className="border mt-4 p-2 rounded-md bg-slate-500"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              );
            }}
          </Formik>
        </div>
      </>
    );
  }
};
