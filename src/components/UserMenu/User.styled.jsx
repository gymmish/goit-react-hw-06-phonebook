import styled from '@emotion/styled';

export const UserItem = styled.div`
  display: flex;
  gap: 20%;
  align-items: center;
  margin: 20px;

  p {
    font-size: 22px;
  }

  button {
    border-radius: 10px;
    padding: 10px;
    width: 150px;
    border: none;
    background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);

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
    }
  }
`;
