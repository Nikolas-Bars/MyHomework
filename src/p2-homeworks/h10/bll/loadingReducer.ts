const TOGGLE_LOADER = 'TOGGLE_LOADER'

const initState = {
    toggle: false
}

type StateType = {
    toggle: boolean
}

type ActionType = {
    type: 'TOGGLE_LOADER'
}


export const loadingReducer = (state = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case 'TOGGLE_LOADER': {
            return {
                ...state,
                toggle: !state.toggle
            }
        }
        default:
            return state
    }
}

export const loadingAC = (): any => {
} // fix any

export const toggleAC = () => ({type: TOGGLE_LOADER})