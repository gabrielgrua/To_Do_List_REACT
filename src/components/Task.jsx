import React from "react";
import {CgClose, CgInfo} from 'react-icons/cg'
import { useHistory } from "react-router-dom";

import './Task.css'

function Task({task, handleTaskClick, handleTaskDeletion}) {

    const history = useHistory()

    function handleTaskDetailsClick() {
        history.push(`/${task.title}`)
    }

    return (
        <div className="task_container" style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>
           
            <div className="task_title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className="buttons_container">
                <button onClick={() => handleTaskDeletion(task.id)} className="remove_task_button">
                    <CgClose />
                </button>
                <button className="see_task_details_button" onClick={handleTaskDetailsClick}>
                    <CgInfo />
                </button>
            </div>
        </div>
    )
}

export default Task