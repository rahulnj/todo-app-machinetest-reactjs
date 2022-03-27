


export const addTask = (taskDetails) => {
    let taskList = []
    if (localStorage.getItem("taskList")) {
        console.log("if");
        taskList = JSON.parse(localStorage.getItem("taskList"))
    }
    let id = new Date().getTime().toString()
    localStorage.setItem('taskList', JSON.stringify([...taskList, { ...taskDetails, id }]))
    return {
        type: "ADD_TASK_SUCCESS",
        payload: { ...taskDetails, id }

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