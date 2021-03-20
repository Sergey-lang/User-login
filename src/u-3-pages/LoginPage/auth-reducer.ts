import {ThunkDispatch} from 'redux-thunk';
import {setAppError, setAppStatus} from '../../u-1-app/app-reducer';
import {authAPI} from '../../u-2-api/auth-api';
import {AppStateType} from '../../u-1-app/store';

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
        if (res.status === 200) {
            dispatch(setUserData(res.data.data));
            dispatch(setIsLoggedIn(true));
            dispatch(setAppStatus('succeeded'));
        } else {
            dispatch(setAppStatus('failed'));
        }
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
            if (res.status === 200) {
                localStorage.setItem('accessToken', res.data.data.accessToken);
                localStorage.setItem('refreshToken', res.data.data.refreshToken);
                await dispatch(getAuthUserData());
                dispatch(setIsLoggedIn(true));
                dispatch(setAppError(''));
                return
            } else {
                dispatch(setAppStatus('failed'));
                return
            }
        } catch (e) {
            dispatch(setAppError(e.message))
            dispatch(setAppStatus('failed'));
        }
    };

export const logout = () => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
    dispatch(setAppStatus('loading'))
    try {
        const res = await authAPI.logout()
        if (res.status === 200) {
            localStorage.clear()
            dispatch(setIsLoggedIn(false))
            dispatch(setAppError(''))
            dispatch(setAppStatus('succeeded'));
        }
    } catch (e) {
        dispatch(setAppError(e.message))
        dispatch(setAppStatus('failed'));
    }
}

