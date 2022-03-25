import React, { useState } from 'react'
import './_CalendarScreen.scss'
import Calendar from 'react-calendar';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars'
import 'react-calendar/dist/Calendar.css';



const CalenderScreen = ({ taskDetails, setTaskDetails }) => {
    const [time, setTime] = useState();
    const [date, setDate] = useState(new Date())

    const handleTime = (time) => {
        setTaskDetails({ ...taskDetails, time: time.value })
        setTime(time.value)
    }
    console.log(time);

    const handleDate = (date) => {
        setTaskDetails({ ...taskDetails, date })
        setDate(date)
    }
    console.log(taskDetails);
    return (
        <div className='calendar'>
            <div>
                <TimePickerComponent
                    placeholder='Pick a time'
                    value={time}
                    onChange={handleTime}
                />
            </div>
            <div>
                <Calendar
                    minDate={new Date()}
                    value={date}
                    onChange={handleDate}
                />
            </div>
        </div>
    )
}

export default CalenderScreen