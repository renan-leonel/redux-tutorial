import { User } from '@/app/components/login';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  value: UserState;
};

type UserState = {
  name: string;
  isAdmin: boolean;
  email: string;
};

const initialState = {
  value: { name: '', isAdmin: false, email: '' } as UserState,
} as initialStateType;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      return {
        value: action.payload,
      };
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
