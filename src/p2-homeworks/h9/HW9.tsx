import React from 'react'
import Clock from './Clock'

function HW9() {
    return (
        <div style={{width: '400px', margin: '10px', backgroundColor: 'wheat', padding: '20px', borderRadius: '15px'}}>
            <hr/>


            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr/>
        </div>
    )
}

export default HW9
