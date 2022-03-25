import React, { useEffect, useRef, useState } from 'react'
import './_TodoScreen.scss'

import {
    AddTimeAndDateButton,
    CircularSlider,
    MenuButton
} from '../../components'



const TodoScreen = ({ setToggleCalendar, taskDetails, setTaskDetails, setToggleTaskList }) => {

    const taskInputRef = useRef()

    useEffect(() => {
        taskInputRef.current.focus()
    }, [])

    return (
        <div className='todoscreen'>
            <div className='todoscreen_header'>
                <h3>Todo</h3>
                <MenuButton
                    setToggleTaskList={setToggleTaskList}
                    setToggleCalendar={setToggleCalendar}
                />
            </div>
            <div className='todoscreen_inputwrapper'>
                <input type="text" placeholder='Type task'
                    ref={taskInputRef}
                    value={taskDetails.task}
                    onChange={(e) => setTaskDetails({ ...taskDetails, task: e.target.value })} />
            </div>
            <CircularSlider
                taskDetails={taskDetails}
                setTaskDetails={setTaskDetails}
            />
            <AddTimeAndDateButton
                setToggleCalendar={setToggleCalendar}
                setToggleTaskList={setToggleTaskList}
            />
        </div>
    )
}

export default TodoScreen