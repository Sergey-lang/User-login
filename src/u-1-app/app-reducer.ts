type ActionsType = ReturnType<typeof setAppStatus>
    | ReturnType<typeof setAppError>
    | ReturnType<typeof setAppStatus>
    | ReturnType<typeof fulfilled>

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
let initializeState = {
    status: 'idle',
    error: null,
    isInitialized: false
} as InitialStateType

export type InitialStateType = {
    status: RequestStatusType
    error: string | null
    isInitialized: boolean
}

export const appReducer = (state: InitialStateType = initializeState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SP/APP/SET_STATUS':
            return {...state, status: action.status}
        case 'SP/APP/SET_ERROR':
            return {...state, error: action.error}
        case 'SP/APP/SET_INITIALIZE':
            return {...state, isInitialized: true}
        default:
            return state;
    }
};

export const setAppStatus = (status: RequestStatusType) => ({type: 'SP/APP/SET_STATUS', status} as const)
export const setAppError = (error: string | null) => ({type: 'SP/APP/SET_ERROR', error} as const)
export const fulfilled = () => ({type: 'SP/APP/SET_INITIALIZE'} as const)
