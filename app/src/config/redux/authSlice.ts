import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../types'

interface AuthSlice {
    token: string | null
    user: IUser | null
}

const initialAuthState: AuthSlice = {
    token: null,
    user: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        }
  },
})

// Action creators are generated for each case reducer function
export const { login } = authSlice.actions

export default authSlice.reducer