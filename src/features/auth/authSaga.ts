import { PayloadAction } from '@reduxjs/toolkit';
import { fork, take } from "redux-saga/effects";
import { authActions, LoginPayload } from "./authSlice";

function * handleLogin(payload: LoginPayload) {
    console.log('handle login', payload);
    
}

function* handleLogout() {
    console.log('handle logout');
}

function* watchLoginFlow() {
    while(true){
        //waiting user dispatch login
        const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);

        //call handle login
        yield fork(handleLogin, action.payload);

        //waiting user dispatch logout
        yield take(authActions.logOut.type);

        //call handle logout
        yield fork(handleLogout);
    }
    
}

export function* authSaga() {
    yield fork(watchLoginFlow);    
}