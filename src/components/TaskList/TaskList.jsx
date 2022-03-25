import React from 'react'
import './_TaskList.scss'

const TaskList = ({ taskListRef }) => {
    return (
        <div className='tasklist'
            ref={taskListRef}
        >

        </div>
    )
}

export default TaskList