import styled from '@emotion/styled';

export const Container = styled.div`
  border: 1px solid rgb(176 176 176);
  padding: 15px 30px;
  max-width: 650px;
  min-height: calc(100vh - 70px);
  margin: 0 auto;

  box-shadow: 0 0 10px 2px #787878bf;
  border-radius: 5px;
`;

export const Header = styled.header`
  padding: 10px 20px;
  margin: 20px;
  height: 40px;
    border-radius: 10px;
    box-shadow: 0 5px 10px 2px rgba(52, 51, 51, 0.25);
    background: linear-gradient(
      149deg,
      rgba(24, 187, 156, 1) 0%,
      rgba(106, 57, 175, 1) 42%,
      rgba(187, 24, 148, 1) 72%,
      rgba(115, 53, 134, 1) 100%
    );
    animation: gradient 10s infinite linear;
    background-size: 200%;
  }
`;

export const PageContainer = styled.div`
  max-width: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  min-height: 85vh;

  h1 {
    font-size: 70px;
    font-weight: 800;
    outline: none;
    text-transform: uppercase;
    background: linear-gradient(
      135deg,
      #5335cf 0%,
      #de005e 25%,
      #f66e48 50%,
      #de005e 75%,
      #5335cf 100%
    );
    background-size: 400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: animate 10s linear infinite;
  }

  h2 {
  font-size: 40px;
 
  font-weight: 800;
  outline: none;
    text-transform: uppercase;
    background: linear-gradient(
      135deg,
      #5335cf 0%,
      #de005e 25%,
      #f66e48 50%,
      #de005e 75%,
      #5335cf 100%
    );
    background-size: 250%;
     -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
  }

  p.TextAuth {
    font-size: 20px;
    padding-top: 15px;
  }

  a {
    &:hover,
    &:focus {
      color: red;
    }
  }
`;
