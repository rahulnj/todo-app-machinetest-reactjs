import React, { useState } from 'react'

import './_CircularSlider.scss'
import { CircleSlider } from "react-circle-slider";

const CircularSlider = () => {

    const [time, setTime] = useState(0);



    const handleTimer = (value) => {
        setTime(value)
        console.log(value);
    }

    return (
        <div className='circularslider'>
            <CircleSlider
                circleColor="#e7eaf0"
                value={time}
                size={250}
                knobRadius={12}
                knobColor="#ff5722"
                progressWidth={5}
                circleWidth={5}
                progressColor="#ff5722"
                onChange={handleTimer}
                min={0}
                max={120}
            />
            <span className="circle_badge">{time} mins</span>
        </div>
    )
}

export default CircularSlider