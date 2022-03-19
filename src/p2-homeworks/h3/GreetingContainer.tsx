import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import s from './Greeting.module.css'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<null | 'Field is required'>(null) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        let text = e.currentTarget.value
        setName(text)
        setError(null)// need to fix
        console.log(name)
    }
    const addUser = () => {
        if (name.trim() !== '') {
            addUserCallback(name)
            setName('')
            alert(`Hello, ${name}!`)
        } else {
            setError('Field is required')
        }

        // need to fix
    }

    const totalUsers = users.length // need to fix

    return (

        <div className={s.HW3}>
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
        </div>
    )
}

export default GreetingContainer
