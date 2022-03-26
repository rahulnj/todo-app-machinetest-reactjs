import React from 'react'
import './_Button.scss'


const MenuButton = ({ setToggleTaskList, setToggleCalendar }) => {
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
            <span className="button_badge">2</span>
        </button >
    )
}

export default MenuButton