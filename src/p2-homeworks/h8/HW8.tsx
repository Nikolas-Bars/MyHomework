import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

// export type UserType =

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<any>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: any) => (
        <div key={p._id} style={{display: "flex",justifyContent: 'space-between', backgroundColor: 'gray', padding: '10px', marginRight: '15px', marginBottom: '15px', borderRadius: '15px'}}>
           <div> {p.name}</div>  <div>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const sort18 = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 's18'}))

    return (
        <div style={{display: 'inline-block',width: '414px', marginLeft: '15px', backgroundColor: 'wheat',  borderRadius: '15px', padding: '10px', marginTop: '15px'}}>
            <hr/>

            {/*should work (должно работать)*/}
         <div style={{ marginLeft: '30px' }}>
            {finalPeople}
        </div>
         <div style={{display: 'inline-flex', backgroundColor: 'wheat', borderRadius: '15px', padding: '10px', marginTop: '15px'}}>   <SuperButton onClick={sortUp}>sort up</SuperButton>
            <SuperButton onClick={sortDown}>sort down</SuperButton>
            <SuperButton onClick={sort18}>check 18</SuperButton>
        </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
