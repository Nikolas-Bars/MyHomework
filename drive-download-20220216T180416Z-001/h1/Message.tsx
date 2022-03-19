import React from 'react'

type messagePeopsType = {
    avatar: string
    name: string
    message: string
    time: string
}


let styleBlockMessage = {
    backgroundColor: 'green',
    maxWidth: '300px',
    margin: '20px',
    border: '2px solid yellow',
    borderRadius: '15px',
    padding: '15px'
}

let styleImg = {
    width: '40px',
    height: '40px',
    borderRadius: '25px',

}

let styleBlockImg = {
    display: 'inline-block',
    verticalAlign: 'bottom'
}

let styleBlockText = {
    backgroundColor: 'gray',
    padding: '15px',
    display: 'inline-block',
    borderRadius: '5px',
}

function Message(props: messagePeopsType) {
    return (
        <div style={styleBlockMessage}>
            <div style={styleBlockImg}><img style={styleImg} src={props.avatar} /></div>
          <div style={styleBlockText}>
            <div>{props.name}</div>
            <div>{props.message}</div>
            <div>{props.time}</div>
        </div>
</div>
    )
}

export default Message
