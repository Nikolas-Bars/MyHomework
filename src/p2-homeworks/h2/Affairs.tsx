import React, {useState} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Affairs.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    text: string
    setText: (text: string) => void
    setAffairs: (affairs: Array<AffairType>) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
      <div key={a._id} >
        <Affair // should work
            // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}

            deleteAffairCallback={props.deleteAffairCallback}
        />
      </div>
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }
    const onChangeInput = (event: any) => {
        let someText = event.currentTarget.value
        props.setText(someText)
        setError(null)
    }

    const addAffair = () => {
        if (props.text.trim() === '') {
            setError('error')

            return
        } else {
            props.setAffairs([{_id: props.data.length + 1, name: props.text, priority: 'high'}, ...props.data])
            setError(null)
            props.setText('')
        }
    }

    let [error, setError] = useState<null | 'error'>(null)

    const style = {
        border: '1px solid red',

    }
    const styleTextError = {
        color: 'red'
    }

    return (
        <div>

            <div className={s.affairInputButton}>
                {error ? <div><SuperInputText style={style} value={props.text} onChange={onChangeInput}/>
                        <button onClick={addAffair}>Add</button>
                        <br/>
                        <div style={styleTextError}>Обязательно для заполнения</div>
                    </div>
                    : <div><SuperInputText value={props.text} onChange={onChangeInput}/>
                        <SuperButton onClick={addAffair}>Add</SuperButton>
                    </div>

                }
            </div>

            {mappedAffairs}
            <div className={s.buttons}>
                <SuperButton onClick={setAll}>All</SuperButton>
                <SuperButton onClick={setHigh}>High</SuperButton>
                <SuperButton onClick={setMiddle}>Middle</SuperButton>
                <SuperButton onClick={setLow}>Low</SuperButton>
            </div>

        </div>
    )
}

export default Affairs
