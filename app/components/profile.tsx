'use client';

import { useAppSelector } from '../redux/store';

interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  const { name, email, isAdmin } = useAppSelector(
    (state) => state.userReducer.value
  );

  return (
    <div>
      <h1>username: {name}</h1>
      <h1>email: {email}</h1>
      <h1>isAdmin: {isAdmin ? 'true' : 'false'}</h1>
    </div>
  );
};

export default Profile;
