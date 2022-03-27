import React from 'react'

const AddTimeAndDateButton = ({ setToggleCalendar, setToggleTaskList, setTaskError, taskDetails, taskInputRef }) => {

    const handleAddDateAndTimeButton = () => {
        if (taskDetails.task === '') {
            setTaskError(true)
            taskInputRef.current.focus()
        } else if (taskDetails.task) {
            setTaskError(false)
        }

        setToggleCalendar(true)
        setToggleTaskList(false)
    }

    return (
        <button className='button_withtext'
            onClick={handleAddDateAndTimeButton}
        >
            Add Time and Date
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        </button>
    )
}

export default AddTimeAndDateButton