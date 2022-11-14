import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "models/user";

export interface LoginPayload {
    username: string;
    password: string;
}

export interface AuthState {
    isLoggedIn: boolean;
    isLogging?: boolean;
    currentUser?: User;
}

const initialState: AuthState = {
    isLoggedIn: false,
    isLogging: false,
    currentUser: undefined,

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<LoginPayload>) => {
            state.isLogging = true;
        },
        loginSuccess: (state, action: PayloadAction<User>) => {
            state.isLoggedIn = true;
            state.isLogging = false;
            state.currentUser = action.payload;
        },
        loginFail: (state, action: PayloadAction<string>) => {
            state.isLogging = false;
        },
        logOut: (state) => {
            state.isLoggedIn = false;
            state.isLogging = false;
            state.currentUser = undefined;
        },

    },
});

// export:
// 1. Actions
export const authActions = authSlice.actions;

// 2. Selectors
//state => root state
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.isLogging;

// 3. Reducer
const authReducer = authSlice.reducer;
export default authReducer;