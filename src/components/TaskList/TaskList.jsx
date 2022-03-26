import React from 'react'

import './_TaskList.scss'
import {
    TimeButton,
    TaskActionButtons
} from '../../components'
const TaskList = () => {
    return (
        <div className='tasklist'>
            <div className='tasklist_wrapper'>
                <div className='tasklist_todaysactivity'>
                    <div className='tasklist_todaysactivity'>
                        <h4>Todays Activity</h4>
                    </div>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                        <div className='tasklist_todaysactivity_single'>
                            <ul>
                                <li>
                                    <details className='userinfo_details'>
                                        <summary className='userinfo_summary'>
                                            <div className='complete' />
                                            meeting
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </summary>
                                        <div className="detailscontent">
                                            <p>Task to be done</p>
                                            <div className="detailscontent_time">
                                                <TimeButton />
                                                <p>120 mins</p>
                                            </div>
                                            <TaskActionButtons />
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