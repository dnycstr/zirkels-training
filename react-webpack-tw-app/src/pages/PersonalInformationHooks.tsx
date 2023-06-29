import { useFormik } from 'formik';
import * as Yup from 'yup';

const PersonalInformationValidation = Yup.object().shape({
  firstName: Yup.string().max(5, 'Sobra ang Pangalan').required('Required'),
  lastName: Yup.string().max(5, 'Sobra ang Apelyido').nullable(),
});

interface PersonalInformationModel {
  firstName: string;
  lastName: string;
  email: string;
}

const initialValues: PersonalInformationModel = {
  firstName: '',
  lastName: '',
  email: '',
};

export const PersonalInformationHooks: React.FC = () => {
  const personalInformationForm = useFormik({
    validationSchema: PersonalInformationValidation,
    validateOnChange: true,
    validateOnBlur: true,
    initialValues: initialValues,
    onSubmit: (values: PersonalInformationModel) => {
      handleFormSubmit(values);
    },
  });

  const handleFormSubmit = (values: PersonalInformationModel) => {
    console.log(values);
  };

  return (
    <>
      <div className="flex flex-col">
        <form onSubmit={personalInformationForm.handleSubmit}>
          <label htmlFor="firstName">First Name</label> <br />
          <input
            id="firstName"
            name="firstName"
            placeholder="Jane"
            onChange={personalInformationForm.handleChange}
            value={personalInformationForm.values.firstName}
            className={
              personalInformationForm.errors.firstName
                ? 'border-2 border-red-500'
                : 'border-2 border-slate-500'
            }
          />
          <div className="text-red-400">
            {personalInformationForm.errors.firstName}
          </div>
          <br />
          <br />
          <label htmlFor="lastName">Last Name</label> <br />
          <input
            id="lastName"
            name="lastName"
            placeholder="Doe"
            onChange={personalInformationForm.handleChange}
            value={personalInformationForm.values.lastName}
          />
          <br />
          <br />
          <label htmlFor="email">Email</label> <br />
          <input
            id="email"
            name="email"
            placeholder="John.Doe@email.com"
            onChange={personalInformationForm.handleChange}
            value={personalInformationForm.values.email}
          />
          <br />
          <br />
          <br />
          <button type="button" className="border bg-gray-500">
            Submit
          </button>
          <br />
          <button type="submit" className="border bg-red-500">
            Submit
          </button>
          <br />
        </form>
      </div>
    </>
  );
};
