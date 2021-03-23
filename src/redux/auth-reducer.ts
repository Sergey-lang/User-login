import {ThunkDispatch} from 'redux-thunk';
import {setAppError, setAppStatus} from './app-reducer';
import {authAPI} from '../API/auth-api';
import {AppStateType} from './store';

export type UserType = {
    name: string,
    email: string,
}

type ActionsType = ReturnType<typeof setAppStatus>
    | ReturnType<typeof setIsLoggedIn>
    | ReturnType<typeof setUserData>
    | ReturnType<typeof setAppError>

let initializeState = {
    isLoggedIn: false,
    user: {} as UserType
};

export type InitialStateType = typeof initializeState
export const authReducer = (state: InitialStateType = initializeState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SP/AUTH/SET_IS_LOGGED':
            return {...state, isLoggedIn: action.value}
        case 'SP/AUTH/SET_USER_DATA':
            return {...state, user: action.user}
        default:
            return state;
    }
};

export const setIsLoggedIn = (value: boolean) => ({type: 'SP/AUTH/SET_IS_LOGGED', value} as const)
export const setUserData = (user: UserType) => ({type: 'SP/AUTH/SET_USER_DATA', user} as const)

export const getAuthUserData = () => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
    dispatch(setAppStatus('loading'))
    try {
        const res = await authAPI.getUser()
        dispatch(setUserData(res.data.data));
        dispatch(setIsLoggedIn(true));
        dispatch(setAppStatus('succeeded'));
    } catch (e) {
        dispatch(setAppError(e.message))
        dispatch(setAppStatus('failed'));
    }
};

export const login = (clientId: number, email: string, password: string) =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
        dispatch(setAppStatus('loading'))
        try {
            const res = await authAPI.login(clientId, email, password)
            localStorage.setItem('accessToken', res.data.data.accessToken);
            localStorage.setItem('refreshToken', res.data.data.refreshToken);
            dispatch(setIsLoggedIn(true));
            dispatch(setAppError(''));
        } catch (e) {
            dispatch(setAppError(e.message))
            dispatch(setAppStatus('failed'));
        }
    };

export const logout = () => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
    dispatch(setAppStatus('loading'))
    try {
        await authAPI.logout()
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        dispatch(setAppStatus('succeeded'));
        dispatch(setIsLoggedIn(false))
        dispatch(setAppError(''))
    } catch (e) {
        dispatch(setAppError(e.message))
        dispatch(setAppStatus('failed'));
    }
}

