import React, { useState } from 'react'
import './_Calendar.scss'
import Calendar from 'react-calendar';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars'
import 'react-calendar/dist/Calendar.css';



const Calender = ({ taskDetails, setTaskDetails, calenderScreenRef }) => {
    const [time, setTime] = useState();
    const [date, setDate] = useState(new Date())

    const handleTime = (time) => {
        setTime(time.value)
    }

    const handleDate = (date) => {
        setDate(date)
    }

    const handleDateAndTime = () => {
        setTaskDetails({ ...taskDetails, time, date })
    }

    console.log(taskDetails);
    return (
        <div className='calendarscreen'
            ref={calenderScreenRef}
        >
            <div className='calendarscreen_timepicker'>
                <TimePickerComponent
                    placeholder='Pick a time'
                    value={time}
                    onChange={handleTime}
                />
            </div>
            <div className='calendarscreen_calendar'>
                <Calendar
                    minDate={new Date()}
                    value={date}
                    onChange={handleDate}
                />
            </div>
            <div className='calendarscreen_actions'>
                <button className='calendarscreen_actions_successbtn'
                    onClick={handleDateAndTime}
                >Set Date and Time</button>
                <button className='calendarscreen_actions_closebtn'>X</button>
            </div>
        </div>
    )
}

export default Calender