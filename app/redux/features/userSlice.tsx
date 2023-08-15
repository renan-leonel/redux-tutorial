import { User } from '@/app/components/login';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  value: AuthState;
};

type AuthState = {
  name: string;
  isAdmin: boolean;
  email: string;
};

const initialState = {
  value: { name: '', isAdmin: false, email: '' } as AuthState,
} as initialStateType;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      console.log(action.payload)
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
