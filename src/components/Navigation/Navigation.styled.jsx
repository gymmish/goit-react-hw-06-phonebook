import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavAuthBox = styled.div`
  display: flex;
  gap: 25px;
`;

export const Nav = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 25px;

  &:hover,
  &:focus {
    color: white;
    text-decoration: underline;
  }

  &.active {
    color: white;
    text-decoration: underline;
  }
`;
