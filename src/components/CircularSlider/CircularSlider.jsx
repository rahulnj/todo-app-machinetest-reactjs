import React, { useState } from 'react'

import './_CircularSlider.scss'
import { CircleSlider } from "react-circle-slider";

const CircularSlider = () => {

    const [time, setTime] = useState(0);



    const handleTime = (value) => {
        setTime(value)
        console.log(value);
    }

    return (
        <div>
            <CircleSlider
                value={time}
                size={250}
                knobRadius={12}
                knobColor="#ff5722"
                progressWidth={5}
                circleWidth={15}
                showTooltip={true}
                tooltipSize={32}
                tooltipColor="#fdfdfd"
                progressColor="#6AB6E1"
                onChange={handleTime}
                min={0}
                max={120}
                showPercentage={true}
            />
        </div>
    )
}

export default CircularSlider