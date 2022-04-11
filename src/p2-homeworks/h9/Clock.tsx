import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>( new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)// stop
        setDate(date)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())// setDate
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)// show
    }
    const onMouseLeave = () => {
        setShow(false) // close
    }



    let Year = date.getFullYear();
    let Month = date.getMonth();
    let Day = date.getDate();
    let Hour = date.getHours();
    let Minutes = date.getMinutes();
    let Seconds = date.getSeconds();
    let fMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    const stringTime = "Текущее время: " + Hour + ":" + Minutes + ":" + Seconds // fix with date
    const stringDate = "Сегодня " + Day + " " + fMonth[Month] + " " + Year + " года" // fix with date

    return (
        <div style={{backgroundColor: 'wheat', display: "inline-flex", flexDirection:"column", margin: '15px', padding: '15px', borderRadius: "15px"}}>

          <div style={{backgroundColor: 'wheat', display: "inline-flex", }}>
            <div style={{backgroundColor: 'green', margin: '15px', padding: '15px', borderRadius: "15px", color: 'white', minWidth: '300px' }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            <div >
                {show && (
                    <div style={{backgroundColor: 'green', margin: '15px', padding: '15px', borderRadius: "15px", color: 'white', minWidth: '300px'}}>
                        {stringDate}
                    </div>
                )}
            </div>
        </div>

            <div style={{backgroundColor: 'wheat', display: "flex", justifyContent: "left"}}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>

        </div>
    )
}

export default Clock
