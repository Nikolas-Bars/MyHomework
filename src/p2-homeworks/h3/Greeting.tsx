import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass// need to fix with (?:)


    return (
        <div>
            <SuperInputText value={name} onChange={setNameCallback} className={error ? s.error : s.someClass} />
          {/*  <input placeholder={'what is your name?'} value={name} onChange={setNameCallback} className={inputClass}/>*/}
            <span className={error ? s.errorSpan : ''}>{error}</span>
            {/*<span onClick={addUser} className={`${s.btnThree} ${s.btn}` }>add</span>*/}
            <div className={s.superButton}><SuperButton onClick={addUser}>add</SuperButton></div>
            <span className={s.totalUser}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
