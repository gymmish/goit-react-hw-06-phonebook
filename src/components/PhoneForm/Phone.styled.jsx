import { Form as FormikForm } from 'formik';
import styled from '@emotion/styled';

export const FormPhone = styled(FormikForm)`
  background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: black;
  font-size: 1.5rem;
  list-style-type: none;
  list-style-type: none;
  text-align: center;
  padding: 12px 18px;
  max-width: 650px;
  margin: 0 auto;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 0px;
`;

export const AddButton = styled.button`
  width: 100px;
  color: black;
  border-radius: 10px;
  border: none;
  height: 30px;
  margin-left: 20px;
  background: #d8d8d8;
  :hover {
    color: white;
    box-shadow: 0 5px 10px 2px rgb(0 0 0 / 25%);
    background: linear-gradient(-225deg, #b7f8db 0%, #50a7c2 100%);
  }
`;
