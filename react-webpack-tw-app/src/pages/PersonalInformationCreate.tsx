import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { DateInput } from 'src/components/Forms/DateInput';
import { Input } from 'src/components/Forms/Input';

const PersonalInformationValidation = Yup.object().shape({
  firstName: Yup.string()
    .max(20, 'Sobra ang Pangalan')
    .required('First Name is Required'),
  lastName: Yup.string().max(21, 'Sobra ang Apelyido').nullable(),
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

export const PersonalInformationCreate: React.FC = () => {
  const handleFormSubmit = (
    values: PersonalInformationModel,
    action: FormikHelpers<PersonalInformationModel>
  ) => {
    const URL = 'https://zirkels-redfalcon-app.dscodelab.com/api/contacts';

    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((response) => {
      if (response.status == 201) {
        alert('Successfully Added');
        action.resetForm();
      }
    });
  };

  return (
    <>
      <div className="flex flex-col">
        <Formik
          validationSchema={PersonalInformationValidation}
          validateOnChange={true}
          validateOnBlur={true}
          initialValues={initialValues}
          onSubmit={(values, action) => {
            handleFormSubmit(values, action);
          }}
        >
          {(formikProps) => {
            return (
              <div className="max-w-lg mx-40">
                <form method="POST" onSubmit={formikProps.handleSubmit}>
                  <Input name="firstName" label="First Name" />
                  <Input name="lastName" label="Last Name" />
                  <Input name="email" label="Email" />
                  <DateInput name="birthDate" label="Birth Date" />
                  <Input name="phone" label="Phone Number" />
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
};
