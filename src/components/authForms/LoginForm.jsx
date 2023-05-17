import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/operation';
import { Formik } from 'formik';
import {
  FormUser,
  ButtonUser,
  InputUser,
  LabellUser,
} from './authForms.styled';

import { Toaster } from 'react-hot-toast';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const errorLogin = useSelector(state => state.error);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <>
      {errorLogin && <Toaster />}
      <Formik>
        <FormUser autoComplete="off" onSubmit={handleSubmit}>
          <LabellUser>
            Email
            <InputUser
              type="email"
              name="email"
              placeholder="****@gmail.com"
              required
            />
          </LabellUser>
          <LabellUser>
            Password
            <InputUser
              type="password"
              name="password"
              placeholder="*******"
              required
            />
          </LabellUser>
          <ButtonUser type="submit">
            Log In
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
    </>
  );
};
