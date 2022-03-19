import React from 'react'
import s from "./Message.module.css"

type messagePropsType = {
    avatar: string
    name: string,
    message: string,
    time: string,
}

function Message(props: messagePropsType) {
    return (
        <div className={s.message}>

          <div className={s.avatar}><img src={props.avatar} alt={'some ava'}/></div>

            <div className={s.data}>
                <div className={s.name}> {props.name}</div>
                <span className={s.messageText}>{props.message}</span>
                <div className={s.blockTime}><span className={s.time}>{props.time}</span></div>
            </div>

        </div>
    )
}

export default Message
