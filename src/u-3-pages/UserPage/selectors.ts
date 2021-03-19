import {AppStateType} from '../../u-1-app/store';

export const selectorUserData= (state: AppStateType) => state.authState.user
export const selectorIsLogged = (state: AppStateType) => state.authState.isLoggedIn
export const selectorRequestStatus= (state: AppStateType) => state.app.status
export const selectorAppError= (state: AppStateType) => state.app.error