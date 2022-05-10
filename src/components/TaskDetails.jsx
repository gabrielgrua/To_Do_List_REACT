import React from "react";
import { useHistory, useParams } from "react-router-dom";

import Button from "./Button";
import './TaskDetails.css'

function TaskDetails() {

    const params = useParams()
    const history = useHistory()

    function handleBackButtonClick() {
        history.goBack()
    }

    return (
        <>
            <div className="back_button_container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task_details_container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti amet neque perspiciatis est. Aliquam, corrupti.</p>
            </div>
        </>
    )
}

export default TaskDetails 