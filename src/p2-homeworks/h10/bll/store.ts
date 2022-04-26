import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";
import {HW12Reducer} from "./HW12Reducer";

const reducers = combineReducers({
    loading: loadingReducer,
    themes: HW12Reducer

})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store
