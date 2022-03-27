import React from 'react'
import Moment from 'react-moment'
import './_TaskList.scss'
import {
    TimeButton,
} from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import BackButton from '../buttons/BackButton'
import { deleteTask, completeTask } from '../../state/actions/index'
const TaskList = ({ setToggleTaskList, setToggleCalendar }) => {
    const dispatch = useDispatch()
    const { taskList } = useSelector((state) => state.taskReducer)
    return (
        <div className='tasklist'>
            <div className='tasklist_header'>
                <BackButton
                    setToggleCalendar={setToggleCalendar}
                    setToggleTaskList={setToggleTaskList}
                />
            </div>
            <div className='tasklist_wrapper'>
                <div className='tasklist_todaysactivity'>
                    <div className='tasklist_todaysactivity'>
                        <h4>Todays Activity</h4>
                    </div>
                    {taskList?.map((task) => {
                        if (new Date(parseInt(task?.id)).toDateString() === new Date().toDateString()) {
                            return (
                                <div className='tasklist_todaysactivity_single'
                                    key={task?.id}>
                                    <ul>
                                        <li>
                                            <details className='userinfo_details'>
                                                <summary className='userinfo_summary'>
                                                    {
                                                        task?.isComplete && <div className='complete' />
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
                                                    <Moment format="DD/MM/YYYY h:mm a">
                                                        {parseInt(task?.id)}
                                                    </Moment>
                                                    <div className="detailscontent_time">
                                                        <TimeButton />
                                                        <p>{task?.duration} mins</p>
                                                    </div>
                                                    <div className='taskaction'>
                                                        <button className='taskaction_finished'
                                                            onClick={() => dispatch(completeTask(task?.id))}>
                                                            {(!task?.isComplete) ?
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 taskaction_svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                                </svg> :
                                                                'Task Completed'
                                                            }
                                                            {
                                                                (task?.isExeeded && !task?.isComplete) && <span>Task Expired</span>
                                                            }
                                                        </button>

                                                        <button className='taskaction_delete'
                                                            onClick={() => dispatch(deleteTask(task?.id))}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 taskaction_svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </details>
                                        </li>
                                        <hr />
                                    </ul>
                                </div>
                            )
                        }
                    })
                    }
                </div>
                <div className='tasklist_pendingactivity'>
                    <h4>Tasks</h4>
                    {taskList?.map((task) => {
                        if (new Date(parseInt(task?.id)).toDateString() !== new Date().toDateString()) {
                            return (
                                <div className='tasklist_todaysactivity_single'
                                    key={task?.id}>
                                    <ul>
                                        <li>
                                            <details className='userinfo_details'>
                                                <summary className='userinfo_summary'>
                                                    {
                                                        task?.isComplete && <div className='complete' />
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

                                                    <Moment format="DD/MM/YYYY h:mm a">
                                                        {parseInt(task?.id)}
                                                    </Moment>

                                                    <div className="detailscontent_time">
                                                        <TimeButton />
                                                        <p>{task?.duration} mins</p>
                                                    </div>
                                                    <div className='taskaction'>
                                                        {!task?.isComplete && <button className='taskaction_finished'
                                                            onClick={() => dispatch(completeTask(task?.id))}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 taskaction_svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        </button>
                                                        }
                                                        <button className='taskaction_delete'
                                                            onClick={() => dispatch(deleteTask(task?.id))}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 taskaction_svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </details>
                                        </li>
                                        <hr />
                                    </ul>
                                </div>
                            )
                        }
                    })
                    }
                </div>
            </div>
        </div >
    )
}

export default TaskList