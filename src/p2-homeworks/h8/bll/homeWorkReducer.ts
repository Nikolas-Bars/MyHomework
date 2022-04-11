export type UserType = {_id: number, name: string, age: number}
export type StateType = Array<UserType>

export type ActionType = {
    type: 'sort'
    payload: string
}



export const homeWorkReducer = (state: StateType, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let stateCopy = [...state]
            return action.payload === 'up' ? stateCopy.sort((a, b)=> a.age <= b.age ? -1 : 1) : stateCopy.sort((a, b)=> a.age >= b.age ? -1 : 1)
        }
        case 'check': {

            return state.filter(el => el.age >= 18)
        }
        default: return state
    }
}