import React, { useState } from 'react'
import './_Calendar.scss'
import Calendar from 'react-calendar';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars'
import 'react-calendar/dist/Calendar.css';


const Calender = ({ taskDetails, setTaskDetails, calenderScreenRef, setToggleCalendar, setDisableDurationSlider, setTimeAndDateError, timeAndDateError }) => {

    const [time, setTime] = useState();
    const [date, setDate] = useState(new Date())

    const handleTime = (time) => {
        setTime(time.value)
        console.log({ time: time.value });
        let id = new Date(time.value).getTime().toString()
        setTaskDetails({ ...taskDetails, id, time: time.value })
    }

    const handleDate = (date) => {
        console.log({ date });
        setDate(date)
        setTaskDetails({ ...taskDetails, date })
    }

    const addTimeAndDateHandler = () => {
        if (taskDetails.time === '' && taskDetails.date === '') {
            setTimeAndDateError(true)
        } else if (taskDetails.time && taskDetails.date) {
            setTimeAndDateError(false)
            setDisableDurationSlider(false)
            setToggleCalendar(false)
        }
    }

    console.log(taskDetails);
    return (
        <div className='calendarscreen'
            ref={calenderScreenRef}
        >

            <div className='calendarscreen_calendar'>
                <Calendar
                    minDate={new Date()}
                    value={date}
                    onChange={handleDate}
                />
            </div>
            <div className='calendarscreen_timepicker'>
                <TimePickerComponent
                    min={new Date()}
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