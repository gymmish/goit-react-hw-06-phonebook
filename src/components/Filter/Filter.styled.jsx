import styled from '@emotion/styled';

export const FilterForm = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: black;
  font-size: 18px;
  list-style-type: none;
  text-align: center;
  padding: 12px 18px;
  max-width: 650px;
  margin: 20px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 0px;
`;

export const FilterInput = styled.input`
  margin-left: 10px;
  padding: 5px;
  border: double 3px transparent;
  border-radius: 6px;
  background-image: linear-gradient(white, white),
    linear-gradient(to right, #de005e, #5335cf);
  background-origin: border-box;
  background-clip: padding-box, border-box;
`;
