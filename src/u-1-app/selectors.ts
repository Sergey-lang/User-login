import {AppStateType} from './store';

export const selectorRequestStatus= (state: AppStateType) => state.app.status
export const selectorAppError= (state: AppStateType) => state.app.error
export const selectorInInitialized= (state: AppStateType) => state.app.isInitialized
