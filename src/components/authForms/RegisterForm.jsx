import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { register } from '../../redux/auth/operation';
import {
  FormUser,
  ButtonUser,
  InputUser,
  LabellUser,
} from './authForms.styled';
import { Toaster } from 'react-hot-toast';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Formik>
      <FormUser autoComplete="off" onSubmit={handleSubmit}>
        <LabellUser>
          Username
          <InputUser
            type="text"
            name="name"
            placeholder="Name"
            minLength={3}
            required
          />
        </LabellUser>
        <LabellUser>
          Email
          <InputUser
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="@gmail.com"
            required
          />
        </LabellUser>
        <LabellUser>
          Password
          <InputUser
            type="password"
            name="password"
            minLength={7}
            required
            placeholder="*******"
          />
        </LabellUser>
        <ButtonUser type="submit">
          Register{' '}
          <Toaster
            toastOptions={{
              className: '',
              style: {
                padding: '16px',
                width: '30%',
                color: '#713200',
              },
            }}
          />
        </ButtonUser>
      </FormUser>
    </Formik>
  );
};
