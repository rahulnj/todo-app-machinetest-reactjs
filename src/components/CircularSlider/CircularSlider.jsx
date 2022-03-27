import React, { useEffect, useState } from 'react'

import './_CircularSlider.scss'
import { CircleSlider } from "react-circle-slider";
import { useSelector } from 'react-redux';

const CircularSlider = ({ taskDetails, setTaskDetails, disableDurationSlider }) => {
    const { taskList } = useSelector((state) => state.taskReducer)
    const [duration, setDuration] = useState(0);

    const handleTimer = (value) => {
        setTaskDetails({ ...taskDetails, duration: value })
        setDuration(value)
    }



    useEffect(() => {
        setDuration(0)
    }, [taskList])

    return (
        <div className='circularslider'>
            <CircleSlider
                circleColor="#e7eaf0"
                value={taskDetails.duration}
                size={250}
                knobRadius={12}
                knobColor="#ff5722"
                progressWidth={5}
                circleWidth={5}
                progressColor="#ff5722"
                onChange={handleTimer}
                min={0}
                max={120}
                disabled={disableDurationSlider}
            />
            <span className="circle_badge">{duration} mins</span>
        </div>
    )
}

export default CircularSlider