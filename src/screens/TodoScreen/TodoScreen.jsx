import React, { useState } from 'react'
import { AddTimeAndDateButton, CircularSlider, MenuButton } from '../../components'

import './_TodoScreen.scss'


const TodoScreen = ({ setToggleCalendar }) => {

    const [taskDetails, setTaskDetails] = useState({ task: '', timer: '', time: '', date: '' })

    return (
        <div className='todoscreen'>
            <div className='todoscreen_header'>
                <h3>Todo</h3>
                <MenuButton />
            </div>
            <div className='todoscreen_inputwrapper'>
                <input type="text" placeholder='Type task'
                    value={taskDetails.task}
                    onChange={(e) => setTaskDetails({ ...taskDetails, task: e.target.value })} />
            </div>
            <CircularSlider
                taskDetails={taskDetails}
                setTaskDetails={setTaskDetails}
            />
            <AddTimeAndDateButton
                setToggleCalendar={setToggleCalendar}
            />
        </div>
    )
}

export default TodoScreen