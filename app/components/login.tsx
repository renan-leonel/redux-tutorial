'use client';

import { login, logout } from '@/app/redux/features/userSlice';
import { useEffect, useState } from 'react';
import { AppDispatch, useAppDispatch } from '../redux/store';

interface LoginProps {}

export type User = {
  name: string;
  isAdmin: boolean;
  email: string;
};

const Login = ({}: LoginProps) => {
  const [user, setUser] = useState<User>({
    name: '',
    isAdmin: false,
    email: '',
  });
  const dispatch = useAppDispatch();

  const doLogin = () => {
    dispatch(login(user));
  };

  const doLogout = () => {
    dispatch(logout());
  };

  return (
    <div className='flex flex-col justify-center gap-2'>
      <p>name</p>
      <input
        type='text'
        placeholder='name'
        className='w-full text-zinc-600'
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <p>email</p>
      <input
        type='text'
        placeholder='email'
        className='w-full text-zinc-600'
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <p>isAdmin</p>
      <div className='flex justify-between gap-2'>
        <button
          className='bg-zinc-700 rounded-lg py-2 w-full'
          onClick={() =>
            setUser({
              ...user,
              isAdmin: true,
            })
          }
        >
          true
        </button>
        <button
          className='bg-zinc-700 rounded-lg py-2 w-full'
          onClick={() =>
            setUser({
              ...user,
              isAdmin: false,
            })
          }
        >
          false
        </button>
      </div>
      <button className='bg-zinc-700 rounded-lg py-2 mt-10' onClick={doLogin}>
        Login
      </button>

      <button className='bg-zinc-700 rounded-lg py-2' onClick={doLogout}>
        Logout
      </button>
    </div>
  );
};

export default Login;
