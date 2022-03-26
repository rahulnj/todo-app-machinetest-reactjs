import React from 'react'

const TaskActionButtons = () => {
    return (
        <div className='taskaction'>
            <button className='taskaction_finished'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 taskaction_svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </button>
            <button className='taskaction_edit'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 taskaction_svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            </button>
            <button className='taskaction_delete'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 taskaction_svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
    )
}

export default TaskActionButtons