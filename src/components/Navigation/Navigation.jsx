import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';
import { NavBox, NavAuthBox, Nav } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <NavBox>
        <Nav to="/">Home</Nav>
        {isLoggedIn ? (
          <Nav to="/contacts">Contacts</Nav>
        ) : (
          <NavAuthBox>
            <Nav to="/register">Register</Nav>
            <Nav to="/login">Log In</Nav>
          </NavAuthBox>
        )}
      </NavBox>

      {isLoggedIn && <UserMenu />}
    </>
  );
};

export default Navigation;
