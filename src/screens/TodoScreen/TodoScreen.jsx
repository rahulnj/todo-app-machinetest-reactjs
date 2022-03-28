import React, { useEffect, useRef } from 'react'
import './_TodoScreen.scss'
import {
    AddTimeAndDateButton,
    CircularSlider,
    MenuButton
} from '../../components'
import Moment from 'react-moment'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from '../../state/actions/index'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoScreen = ({
    setToggleCalendar,
    taskDetails,
    setTaskDetails,
    setToggleTaskList,
    taskError,
    setTaskError,
    setDurationError,
    durationError,
    disableDurationSlider,
    setShowAddButton,
    setDisableDurationSlider }) => {

    const { taskList } = useSelector((state) => state.taskReducer)

    const taskInputRef = useRef()

    const dispatch = useDispatch()

    useEffect(() => {
        setTaskDetails({ task: '', duration: 0, time: '', date: '', isComplete: false, isExeeded: false, isPending: true })
        setDisableDurationSlider(true)
    }, [taskList])

    useEffect(() => {
        dispatch(updateTask())
        taskInputRef.current.focus()
    }, [])

    useEffect(() => {
        const { task, duration, time, date } = taskDetails;
        if (task && duration > 0 && time && date) {
            setShowAddButton(true)
        } else {
            setShowAddButton(false)
        }
    }, [taskDetails, setShowAddButton])

    const addTaskHandler = () => {
        if (taskDetails.duration !== 0) {
            dispatch(addTask(taskDetails))
            setDurationError(false)
            toast.success('Task Added', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            setDurationError(true)
        }
    }

    return (
        <div className='todoscreen'>
            <ToastContainer />
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Add Task Name</span>
                    </div>
                }
            </div>
            <AddTimeAndDateButton
                setToggleCalendar={setToggleCalendar}
                setToggleTaskList={setToggleTaskList}
                taskDetails={taskDetails}
                setTaskError={setTaskError}
                taskInputRef={taskInputRef}
            />
            {taskDetails?.date && <Moment format="DD/MM/YYYY h:mm a">
                {parseInt(taskDetails?.id)}
            </Moment>}
            <CircularSlider
                taskDetails={taskDetails}
                disableDurationSlider={disableDurationSlider}
                setTaskDetails={setTaskDetails}
            />
            {
                durationError &&
                <div className='todoscreen_inputwrapper_svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Add Duration and Time</span>
                </div>
            }
            <button className='calendarscreen_actions_successbtn'
                onClick={addTaskHandler}
            >Add Task</button>

        </div >
    )
}

export default TodoScreen