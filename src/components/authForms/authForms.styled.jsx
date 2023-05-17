import { Form as FormikForm } from 'formik';
import styled from '@emotion/styled';

export const FormUser = styled(FormikForm)`
  color: black;
  font-size: 1.5rem;
  list-style-type: none;
  
  padding: 12px 18px;
  max-width: 650px;
  margin: 0 auto;
  border-radius: 6px;
    display: inline-grid;
}
`;

export const ButtonUser = styled.button`
  background-image: linear-gradient(
    to right,
    #5c258d 0%,
    #4389a2 51%,
    #5c258d 100%
  );
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 15px;
  border: none;
  &:hover,
  &:focus {
    box-shadow: 0 5px 10px 2px rgb(0 0 0 / 55%);
  }
`;

export const LabellUser = styled.label`
  margin: 20px;
  display: flex;
  justify-content: space-between;
`;

export const InputUser = styled.input`
  margin: 0px 30px 0px 15px;
  padding: 0.5rem;
  border: double 3px transparent;
  border-radius: 6px;
  background-image: linear-gradient(white, white),
    linear-gradient(to right, #de005e, #5335cf);
  background-origin: border-box;
  background-clip: padding-box, border-box;
`;
// linear-gradient(
//       135deg,
//       #5335cf 0%,
//       #de005e 25%,
//       #f66e48 50%,
//       #de005e 75%,
//       #5335cf 100%
//     );
