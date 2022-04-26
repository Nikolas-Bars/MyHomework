const CHANGE_THEME = 'CHANGE_THEME'


export type ThemeType = 'dark' | 'red' | 'some' | 'wheat'

export type ThemesStateType = { theme: ThemeType }

const initialState:ThemesStateType = {theme: 'dark'}

export const HW12Reducer = (state = initialState, action: ActionType): ThemesStateType => {
    switch (action.type) {
        case "CHANGE_THEME":
            return {...state, theme: action.theme}
        default:
            return state
    }
}

export const changeThemeAC = (theme: ThemeType) =>({type: CHANGE_THEME, theme})as const

export type ActionType = ReturnType<typeof changeThemeAC>