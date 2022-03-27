import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './_Button.scss'


const MenuButton = ({ setToggleTaskList, setToggleCalendar }) => {
    const { taskList, success } = useSelector((state) => state.taskReducer)
    const [todaysActivityCount, setTodaysActivityCount] = useState(0)

    useEffect(() => {
        setTodaysActivityCount(taskList?.length)
    }, [taskList, todaysActivityCount])

    console.log(todaysActivityCount);
    const handleMenuButton = () => {
        setToggleTaskList(value => !value)
        setToggleCalendar(false)
    }
    return (
        <button className='button'
            onClick={handleMenuButton}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
            <span className="button_badge">{todaysActivityCount}</span>
        </button >
    )
}

export default MenuButton