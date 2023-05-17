import styled from '@emotion/styled';

export const PhoneBook = styled.ul`
  background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: black;
  font-size: 1rem;

  list-style-type: none;
  text-align: center;
  padding: 12px 18px;
  max-width: 650px;
  margin: 0 auto;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 0px;
`;

export const NewContact = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const DelButton = styled.button`
  width: 80px;
  color: #5a5a5a;
  background-color: #fafafa;
  border-radius: 10px;
  border: none;
  height: 30px;
  margin-left: 10px;
  margin-top: 10px;
    &:hover,
    &:focus {
      box-shadow: 0 5px 10px 2px rgb(0 0 0 / 25%);
      background: linear-gradient(
        to right,
        rgb(242, 112, 156),
        rgb(255, 148, 114)
      );
      background-size: 200%;
      color: #fff;
      cursor: pointer;
`;
