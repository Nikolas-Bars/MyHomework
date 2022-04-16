import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {toggleAC} from "./bll/loadingReducer";
import loader from './img/p2.gif'

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType>(state => state.loading.toggle)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(toggleAC())
        setTimeout(() => {
            dispatch(toggleAC())
        }, 3000)
        console.log('loading...')
    };

    return (
        <div style={{width: '400px', margin: '10px', backgroundColor: 'wheat', padding: '20px', borderRadius: '15px'}}>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img src={loader}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
