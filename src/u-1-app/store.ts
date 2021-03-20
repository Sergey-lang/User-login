import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {appReducer} from './app-reducer';
import {authReducer} from '../u-3-pages/LoginPage/auth-reducer';

export const rootReducer = combineReducers({
    appState: appReducer,
    authState: authReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

