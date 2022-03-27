import React from 'react'

import './_TaskList.scss'
import {
    TimeButton,
    TaskActionButtons
} from '../../components'
import { useSelector } from 'react-redux'

const TaskList = () => {

    const { taskList, success } = useSelector((state) => state.taskReducer)
    console.log({ taskList });
    return (
        <div className='tasklist'>
            <div className='tasklist_wrapper'>
                <div className='tasklist_todaysactivity'>
                    <div className='tasklist_todaysactivity'>
                        <h4>Todays Activity</h4>
                    </div>
                    {taskList?.map((task) => (
                        <div className='tasklist_todaysactivity_single'
                            key={task?.id}>
                            <ul>
                                <li>
                                    <details className='userinfo_details'>
                                        <summary className='userinfo_summary'>
                                            {
                                                task?.isCompleted && <div className='complete' />
                                            }
                                            {
                                                task?.isExeeded && <div className='exeeded' />
                                            }
                                            {
                                                task?.isPending && <div className='pending' />
                                            }
                                            {task.task}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </summary>
                                        <div className="detailscontent">
                                            <p> {task?.task}</p>
                                            <div className="detailscontent_time">
                                                <TimeButton />
                                                <p>{task?.timer} mins</p>
                                            </div>
                                            <TaskActionButtons id={task?.id} />
                                        </div>
                                    </details>
                                </li>
                                <hr />
                            </ul>
                        </div>
                    ))
                    }
                </div>
                <div className='tasklist_pendingactivity'>
                    <h4>Tasks</h4>

                </div>
            </div>
        </div >
    )
}

export default TaskList