import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, fork, put, take } from "redux-saga/effects";
import { push } from 'redux-first-history';
import { authActions, LoginPayload } from "./authSlice";

/**
 * 
 * @param payload 
 */
function * handleLogin(payload: LoginPayload) {
    yield delay(1000);
    try {
        console.log('handle login', payload);
        localStorage.setItem('access_token', '1234567890');
    
        yield put(authActions.loginSuccess({
            id: 1,
            name: 'test',
        }))

        //redirect to admin page
        //push('/admin') => return object
        //put dispatch to redux store
        //routerMiddleware: receive object and redirect to new page
        yield put(push('/admin'));
    } catch (error) {
        yield put(authActions.loginFail('login error'));
    }
   
}

function* handleLogout() {
    yield delay(1000);
    console.log('handle logout');
    localStorage.removeItem('access_token')

    //redirect to login page
}

function* watchLoginFlow() {
    while(true){
        const isLoggedIn = Boolean(localStorage.getItem('access_token'));

        if(!isLoggedIn){
            //waiting user dispatch login
            const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);

            //call handle login
            //fork: none block
            yield fork(handleLogin, action.payload);
        }

        //waiting user dispatch logout
        yield take(authActions.logOut.type);

        //call(block) handle logout
        yield call(handleLogout);
    }
    
}

export function* authSaga() {
    yield fork(watchLoginFlow);    
}