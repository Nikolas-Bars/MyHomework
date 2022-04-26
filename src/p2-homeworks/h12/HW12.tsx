import React, {useState} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, ThemeType} from "../h10/bll/HW12Reducer";

const themes = ['dark', 'red', 'some', 'wheat'];

function HW12() {
    const theme = useSelector<AppStoreType, ThemeType>(state => state.themes.theme) // useSelector
    const dispatch = useDispatch()

    const onChangeOption = (e: ThemeType) =>{
        dispatch(changeThemeAC(e))
    }


    return (
        <div className={s[theme]}>
            <hr/>
            <div className={s.container}>
            <SuperSelect options={themes} onChangeOption={onChangeOption} value={theme}/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
        </div>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
