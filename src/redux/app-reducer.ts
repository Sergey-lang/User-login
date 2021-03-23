type ActionsType = ReturnType<typeof setAppStatus>
    | ReturnType<typeof setAppError>
    | ReturnType<typeof setAppStatus>

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
let initializeState = {
    status: 'idle',
    error: null,
} as InitialStateType

export type InitialStateType = {
    status: RequestStatusType
    error: string | null
}

export const appReducer = (state: InitialStateType = initializeState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SP/APP/SET_STATUS':
            return {...state, status: action.status}
        case 'SP/APP/SET_ERROR':
            return {...state, error: action.error}
        default:
            return state;
    }
};

export const setAppStatus = (status: RequestStatusType) => ({type: 'SP/APP/SET_STATUS', status} as const)
export const setAppError = (error: string | null) => ({type: 'SP/APP/SET_ERROR', error} as const)
