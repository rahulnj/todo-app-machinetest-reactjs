import React, { useEffect, useState } from 'react'
import './_Calendar.scss'
import Calendar from 'react-calendar';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars'
import 'react-calendar/dist/Calendar.css';
import { useSelector } from 'react-redux';
import BackButton from '../buttons/BackButton';


const Calender = ({ taskDetails, setTaskDetails, setToggleCalendar, setDisableDurationSlider, setTimeAndDateError, timeAndDateError }) => {
    const { taskList } = useSelector((state) => state.taskReducer)
    const [time, setTime] = useState();
    const [date, setDate] = useState(new Date())


    const handleDate = (selectedDate) => {
        setDate(selectedDate)
    }

    let id;

    const handleTime = (time) => {
        id = new Date(date.toString().slice(0, 15) + ' ' + time.value.toString().slice(16)).getTime().toString()
        setTime(time.value)
        setTaskDetails({ ...taskDetails, date: date.toString().slice(0, 15), time: time.value.toString().slice(16), id })
    }

    const addTimeAndDateHandler = () => {
        if (taskDetails.time === '' && taskDetails.date === '') {
            setTimeAndDateError(true)
        } else if (taskList?.some((task) => task?.id === taskDetails?.id)) {
            alert("already exists")
            setTaskDetails({ ...taskDetails, time: '', date: '' })
        } else if (parseInt(new Date().getTime()) > parseInt(taskDetails?.id)) {
            alert("less than")
            setTaskDetails({ ...taskDetails, time: '', date: '' })
        } else if (taskDetails.time && taskDetails.date) {
            setTimeAndDateError(false)
            setDisableDurationSlider(false)
            setToggleCalendar(false)
        }
    }

    let precedentTask = taskList?.reverse()?.find((task) => task?.id < taskDetails?.id)
    if (precedentTask) {
        let completionTimeOfPreviousTask = parseInt(precedentTask?.id) + parseInt((precedentTask?.duration * 1000) * 60)
        if (completionTimeOfPreviousTask > taskDetails?.id) {
            alert("can't add")
            // setTaskDetails({ ...taskDetails, time: '', date: '' })
        }
    }


    return (
        <div className='calendarscreen'>
            <div className='calendarscreen_header'>
                <BackButton
                    setToggleCalendar={setToggleCalendar}
                />
            </div>
            <div className='calendarscreen_calendar'>
                <Calendar
                    minDate={new Date()}
                    value={date}
                    onChange={handleDate}
                />
            </div>
            <div className='calendarscreen_timepicker'>
                <TimePickerComponent
                    placeholder='Pick a time'
                    value={time}
                    onChange={handleTime}
                />
            </div>
            <div className='calendarscreen_actions'>
                <button className='calendarscreen_actions_successbtn'
                    onClick={addTimeAndDateHandler}
                >Set Date and Time</button>
                <button className='calendarscreen_actions_closebtn'>X</button>
            </div>
            {
                timeAndDateError && <div className='todoscreen_inputwrapper_svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Add Time and Date</span>
                </div>
            }
        </div>
    )
}

export default Calender