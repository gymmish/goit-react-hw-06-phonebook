import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operation';
import { UserItem } from './User.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <UserItem>
        <h1>Welcome, {user.name}</h1>
        <button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </button>
      </UserItem>
    </>
  );
};

export default UserMenu;
