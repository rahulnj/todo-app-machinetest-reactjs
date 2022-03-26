import React, { useEffect, useRef, useState } from 'react'
import './_TodoScreen.scss'

import {
    AddTimeAndDateButton,
    CircularSlider,
    MenuButton
} from '../../components'



const TodoScreen = ({
    setToggleCalendar,
    taskDetails,
    setTaskDetails,
    setToggleTaskList,
    taskError,
    setTaskError,
    setTimerError,
    timerError }) => {

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
                <input className={taskError ? 'todoscreen_inputwrapper_inputerror' : 'todoscreen_inputwrapper_input'}
                    type="text" placeholder='Type task'
                    ref={taskInputRef}
                    value={taskDetails.task}
                    onChange={(e) => setTaskDetails({ ...taskDetails, task: e.target.value })} />
                {
                    taskError && <div className='todoscreen_inputwrapper_svg'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokewidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Add a Task</span>
                    </div>
                }
            </div>
            <CircularSlider
                taskDetails={taskDetails}
                setTimerError={setTimerError}
                setTaskDetails={setTaskDetails}
            />
            {
                timerError && <div className='todoscreen_inputwrapper_svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokewidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Add Time</span>
                </div>
            }
            <AddTimeAndDateButton
                setToggleCalendar={setToggleCalendar}
                setToggleTaskList={setToggleTaskList}
                taskDetails={taskDetails}
                setTaskError={setTaskError}
                setTimerError={setTimerError}
                taskInputRef={taskInputRef}
            />
        </div>
    )
}

export default TodoScreen