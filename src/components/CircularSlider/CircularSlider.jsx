import React, { useEffect, useRef, useState } from 'react'

import './_CircularSlider.scss'
import { CircleSlider } from "react-circle-slider";
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MAX_DURATION_MILLISECONDS, MAX_DURATION_MINUTES } from '../../MinuteConversion';

const CircularSlider = ({
    taskDetails,
    setTaskDetails,
    disableDurationSlider,
    setDisableDurationSlider
}) => {

    const { taskList } = useSelector((state) => state.taskReducer)

    const [duration, setDuration] = useState(0);
    const [maxDuration, setMaxDuration] = useState(MAX_DURATION_MINUTES);

    const initialUpdate = useRef(true)
    const initialCheck = useRef(true)

    useEffect(() => {
        setDuration(0)
    }, [taskList])

    let subsequentTask;

    useEffect(() => {
        if (initialUpdate.current) {
            initialUpdate.current = false;
            return;
        }
        subsequentTask = taskList?.find((task) => task?.id > taskDetails?.id)
        if (subsequentTask) {
            let timeGap = parseInt(subsequentTask?.id) - parseInt(taskDetails?.id)
            if (timeGap < MAX_DURATION_MILLISECONDS) {
                setMaxDuration((timeGap / 1000) / 60)
            } else if (timeGap > MAX_DURATION_MILLISECONDS) {
                setMaxDuration(MAX_DURATION_MINUTES)
            }
        }
    }, [disableDurationSlider])

    const handleTimer = (value) => {
        if (value < maxDuration) {
            setDuration(value)
            setTaskDetails({ ...taskDetails, duration: value })
        } else if (initialCheck.current && value > maxDuration) {
            initialCheck.current = false
            toast.warn(`Max duration for this task is ${maxDuration - 1} mins`, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (value > maxDuration) {
            setDuration(maxDuration - 1)
        }
    }

    return (
        <div className='circularslider'>
            <ToastContainer />
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
                max={maxDuration}
                disabled={disableDurationSlider}
            />
            <span className="circle_badge">{duration} mins</span>
        </div>
    )
}

export default CircularSlider