import React from 'react'
import { CircularSlider, MenuButton } from '../../components'

import './_TodoScreen.scss'


const TodoScreen = () => {
    return (
        <div className='todoscreen'>
            <div className='todoscreen_header'>
                <h3>Todo</h3>
                <MenuButton />
            </div>
            <div className='todoscreen_inputwrapper'>
                <input type="text" placeholder='eg: developer' />
            </div>
            <CircularSlider />
        </div>
    )
}

export default TodoScreen