import { RotatingLines } from 'react-loader-spinner';
import styled from '@emotion/styled';

const Loader = () => {
  return (
    <Box>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        strokeColor="#5c258d"
      />
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: center;
`;

export default Loader;
