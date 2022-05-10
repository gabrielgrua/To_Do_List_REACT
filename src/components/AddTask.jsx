import React, { useState } from 'react'
import './AddTask.css'
import Button from './Button'

function AddTask({handleTaskAddition}) {

    const [inputData, setInputData] = useState('')

    function handleInputChange(e) {
        setInputData(e.target.value)
    }

    function handleAddTaskClick() {
        handleTaskAddition(inputData)
        setInputData('')
    }

    return (
        <div className='add_task_container'>
            <input onChange={handleInputChange} className='add_task_input' value={inputData} type="text" />
            <div className="add_task_button_container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    )
}

export default AddTask