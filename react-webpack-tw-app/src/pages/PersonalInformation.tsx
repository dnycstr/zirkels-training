import { Formik } from 'formik';
import * as Yup from 'yup';

import { DateInput } from 'src/components/Forms/DateInput';
import { Input } from 'src/components/Forms/Input';

const PersonalInformationValidation = Yup.object().shape({
  firstName: Yup.string()
    .max(5, 'Sobra ang Pangalan')
    .required('First Name is Required'),
  lastName: Yup.string().max(5, 'Sobra ang Apelyido').nullable(),
  email: Yup.string().email('Invalid Email').required('Email is Required'),
  startDate: Yup.date()
    .min(new Date(), 'Must not least than today')
    .required('Start Date is Required'),
  endDate: Yup.date().required('End Date is Required'),
});

interface PersonalInformationModel {
  firstName: string;
  lastName: string;
  email: string;
  startDate?: Date;
  endDate?: Date;
}

const initialValues: PersonalInformationModel = {
  firstName: '',
  lastName: '',
  email: '',
  startDate: undefined,
  endDate: undefined,
};

export const PersonalInformation: React.FC = () => {
  const handleFormSubmit = (values: PersonalInformationModel) => {
    console.log(values);
  };

  return (
    <>
      <div className="flex flex-col">
        <Formik
          validationSchema={PersonalInformationValidation}
          validateOnChange={true}
          validateOnBlur={true}
          initialValues={initialValues}
          onSubmit={(values) => {
            handleFormSubmit(values);
          }}
        >
          {(formikProps) => {
            return (
              <div className="max-w-lg mx-40">
                <form method="POST" onSubmit={formikProps.handleSubmit}>
                  <Input name="firstName" label="First Name" />
                  <Input name="lastName" label="Last Name" />
                  <Input name="email" label="Email" />
                  <DateInput name="startDate" label="Start Date" />
                  <DateInput name="endDate" label="End Date" />
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
