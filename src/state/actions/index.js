


export const addTask = (taskDetails) => {
    let taskList = []
    if (localStorage.getItem("taskList")) {
        taskList = JSON.parse(localStorage.getItem("taskList"))
    }



    let existingTask = taskList?.find((task) => task?.id === taskDetails?.id)
    if (existingTask) {
        alert("already")
        return {
            type: "ADD_TASK_FAILED"
        }
    }

    let orderedTaskList = [...taskList, taskDetails].sort((a, b) => {
        return parseInt(a?.id) - parseInt(b?.id)
    })

    console.log(orderedTaskList);

    localStorage.setItem('taskList', JSON.stringify(orderedTaskList))
    return {
        type: "ADD_TASK_SUCCESS",
        payload: taskDetails
    }
}

export const deleteTask = (id) => {
    let taskList = []
    if (localStorage.getItem("taskList")) {
        console.log("if");
        taskList = JSON.parse(localStorage.getItem("taskList"))
    }
    let updatedTaskList = taskList.filter((task) => (task?.id !== id))
    localStorage.setItem('taskList', JSON.stringify(updatedTaskList))
    return {
        type: "DELETE_TASK",
        payload: updatedTaskList
    }
}


